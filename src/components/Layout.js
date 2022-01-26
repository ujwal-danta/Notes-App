import { Drawer, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { styled } from '@mui/system';
import React from 'react';

export default function Layout({children}) {
 const drawerWidth = 240;

 const LayoutDiv = styled("div")({
     background: "#f9f9f9",
     width: "100%"
 })

 const LeftDrawer = styled(Drawer)({
     width: {drawerWidth},
 })

  return <div>
 <LeftDrawer
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography variant="h5" color="text.secondary">
            Ninja Notes
          </Typography>
        </div>

        {/* links/list section */}
        
      </LeftDrawer>

 <LayoutDiv>
 {children}
 </LayoutDiv>
  </div>;
}
