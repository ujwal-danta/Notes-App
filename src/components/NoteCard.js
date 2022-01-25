import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { DeleteOutlined } from '@mui/icons-material';
import { IconButton, Typography } from '@mui/material';

const NoteCard = ({data,handleDelete}) => {
  return <Card>
      <CardHeader title={data.title}
        subheader={data.category}
          action={
          <IconButton onClick={()=>handleDelete(data.id)}>
              <DeleteOutlined />
          </IconButton>
        }>
      </CardHeader>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data.details}
        </Typography>
      </CardContent>
  </Card>;
};

export default NoteCard
