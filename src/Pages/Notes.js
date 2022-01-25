import { Container, Grid, Paper } from '@mui/material';
import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard';


const Create = () => {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8000/notes")
        .then(res=>res.json())
        .then(data=>setData(data));
        },[])

        const handleDelete = (id) => {
        fetch("http://localhost:8000/notes/"+id,{
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            }})
            .then(res=>{
            const newData = data.filter(data=> data.id != id);
            setData(newData);
            })
            .catch(err=>{
                console.log(err);
            })
        }

    return (
        <Container>
            <Grid container spacing={2}>
            {data.map(data => {
                    return(
                        <Grid item xs={12} md={6} lg={4} key={data.id}>
                            <NoteCard handleDelete={handleDelete} data={data}/>
                        </Grid>
                    )
                })}
            </Grid>
               
        </Container>
    )
}

export default Create
