import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import wallet from '../assets/wallet-pic.png'

export default function Cards() {
  return (
    <Card sx={{ maxWidth: 345 , backgroundImage: 'linear-gradient(to right, #ff512f, #f09819);'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="280"
        image={wallet}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" textAlign={'center'} component="div">
          Balance <Button color='success' variant='contained'>$ 320</Button>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}