import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function User_ProfileCard() {
  return (
    <Card sx={{ minWidth:300,maxWidth: 345,padding:'2%',boxShadow:'0px 10px 10px var(--cream)'}}>
        <Box component="div" style={{display:'flex',justifyContent:'center'}}>
      <CardMedia
        sx={{ height:"30vh" ,width:"14vw",borderRadius:100}}
        image="https://images.unsplash.com/photo-1630178836733-3d61d8974258?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D"
        title="green iguana"
      />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" style={{textAlign:'center'}}component="div">
          Ranjana Tomar
        </Typography>
        <Typography variant="body2" style={{textAlign:'center'}}color="text.secondary">
         Rajanatomar@987@gmail.com
        </Typography>
      </CardContent>
      <Box style={{display:'flex',justifyContent:'center'}}>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Review</Button>
      </CardActions>
      </Box>
    </Card>
  );
}