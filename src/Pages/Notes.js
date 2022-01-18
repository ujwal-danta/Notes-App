import { Button, Container, TextField, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Notes = () => {

    const theme = createTheme({
        palette: {
            primary: {
                main: "#fefefe"
            },
        },
        typography: {
            fontFamily: `'Quicksand', sans-serif;`,
            fontWeightLight: 500,
            fontWeightRegular: 600,
            fontWeightMedium: 600,
            fontWeightBold: 700,
        }
    })
    return (
        <ThemeProvider theme={theme}>
            <Container>
            <Typography variant="h4" color="textSecondary" component="h1" gutterBottom >
                Make a Note
            </Typography>

        <form noValidate>
        <TextField color='secondary'  label="Title" fullWidth variant="outlined" />
        <TextField color='secondary'  label="Title"  multiline rows={4} fullWidth variant="outlined" />
        <Button variant="contained" color="secondary" endIcon={<ArrowForwardIosIcon />}>Create</Button>
        </form>



            </Container>
        </ThemeProvider>
    )
}
export default Notes
