import { Drawer, Paper, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import EventNoteIcon from '@mui/icons-material/EventNote';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@mui/styles';

const drawerWidth = 180

const useStyles = makeStyles({
  active: {
    backgroundColor: "#f4f4f4"
  }
});

const Page = styled("div")({
  background: '#f9f9f9',
  width: '100%',
})

const Root = styled("div")({
  display: 'flex',
})

const LeftDrawer = styled(Drawer)({
  width: drawerWidth,
})

const Spaper = styled(Paper)({
  width: drawerWidth,
  textAlign: "center",
  padding: 5,
  boxShadow: "none"
})



export default function Layout({ children }) {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();
  console.log(location);

  return (
    <Root>
      <LeftDrawer
        variant="permanent"
        anchor="left"
      >
        <Spaper>
          <Typography variant="h5" color="text.secondary">
            Keep Notes
          </Typography>
        </Spaper>

        <List>
          <ListItem disablePadding className={location.pathname === "/" ? classes.active : null}>
            <ListItemButton onClick={()=>history.push("/")} >
              <ListItemIcon >
              <EventNoteIcon color="primary"/>
              </ListItemIcon>
              <ListItemText primary="Notes"  />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding className={location.pathname === "/create" ? classes.active : null} >
            <ListItemButton onClick={()=>history.push("/create")}>
              <ListItemIcon>
              <NoteAddIcon color="secondary"/>
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItemButton>
          </ListItem>
        </List>
        
      </LeftDrawer>

      {/* main content */}
      <Page>
        { children }
      </Page>
    </Root>
  )
}