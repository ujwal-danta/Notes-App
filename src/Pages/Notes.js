import { Button, Container, TextField, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';





const TextFields = styled(TextField)({
    marginTop: 20,
    marginBottom: 20,
    display:  "block",
});

const Btn = styled(Button)({
    marginTop: 20,
    marginBottom: 20,
    maxWidth: '20%'
})

const Div = styled('div')({
display: "flex",
flexDirection: "column"
})


const Notes = () => {
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)



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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Button Clicked");
        setTitleError(false);
        setDetailsError(false);
        if (!title) setTitleError(true);
        if (!details) setDetailsError(true);
    }

    // const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Typography variant="h4" color="textSecondary" component="h1" gutterBottom >
                    Make a Note
                </Typography>

                <form noValidate onSubmit={(e) => handleSubmit(e)}>
                    <TextFields error={titleError} color='secondary' label="Title" fullWidth variant="outlined" onChange={(e) => setTitle(e.target.value)} />
                    <TextFields error={detailsError} color='secondary' label="Details" multiline rows={4} fullWidth variant="outlined" onChange={(e) => setDetails(e.target.value)} />
                 <Div>
                 <FormControl>
                    <RadioGroup >
                        <FormControlLabel  value="money" control={<Radio color="secondary" />} label="Money" />
                        <FormControlLabel value="todo" control={<Radio color="secondary" />} label="Todo" />
                        <FormControlLabel value="remainder" control={<Radio color="secondary"/>} label="Remainder" />
                        <FormControlLabel value="work" control={<Radio color="secondary"/>} label="Work"/>
                    </RadioGroup>
                 </FormControl>
                    <Btn type="submit" variant="contained" color="secondary" endIcon={<ArrowForwardIosIcon />}>Create</Btn>
                    </Div>
                </form>



            </Container>
        </ThemeProvider>
    )
}
export default Notes
