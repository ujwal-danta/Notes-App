import { Button, Container, TextField,  Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/system';


// const useStyles = makeStyles({
//     field: {
//         marginTop: 20,
//         marginBottom: 20,
//     }
// })

const TextFields = styled(TextField)({
   marginTop: 20,
   marginBottom: 20,
  });


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

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log("Button Clicked")
    }

    // const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Typography variant="h4" color="textSecondary" component="h1" gutterBottom >
                    Make a Note
                </Typography>

                <form noValidate onSubmit={(e)=>handleSubmit()}>
                    <TextFields  color='secondary' label="Title" fullWidth variant="outlined" />
                    <TextFields  color='secondary' label="Details" multiline rows={4} fullWidth variant="outlined" />
                    <Button  variant="contained" color="secondary" endIcon={<ArrowForwardIosIcon />}>Create</Button>
                </form>



            </Container>
        </ThemeProvider>
    )
}
export default Notes
