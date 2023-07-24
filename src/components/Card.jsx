import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import wallet from '../assets/wallet-pic.png'
import { TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ListItemIcon from '@mui/material/ListItemIcon';
import { addBalance } from '../db/api';

export default function Cards({ expense, balance }) {
  const [state, setState] = React.useState({})
  const { balanceInput, amount  } = state

  const handleBalance = () => {
    setState({ ...state, balanceInput: true })
  }
  const handleAmount = (e) => {
    const { value } = e.target
    setState({ ...state, amount: +value })
  }

  const handleAddBalance = () => {
    setState({ ...state, balanceInput: false})
    const payload = {
      id: '1',
      balance: amount + (+balance)
    }
    addBalance(payload)
  }
  return (
    <Card sx={{ maxWidth: 345, backgroundImage: 'linear-gradient(to right, #ff512f, #f09819);' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="280"
        image={wallet}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" textAlign={'center'} component="div">
          Balance <br />
          {
            balanceInput ?
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '1rem'}} >
                <TextField
                  type='number'
                  value={ amount}
                  onChange={handleAmount}
                  inputProps={{
                    style: { padding: '3px' }
                  }}
                  sx={{ width: 'fit-content', padding: '5px' }}
                />
                <ListItemIcon >
                  <AddCircleIcon onClick= { handleAddBalance }
                   style={{ cursor: 'pointer'}} />
                </ListItemIcon>

              </div>
              :
              <Button onClick={handleBalance} color='success' variant='contained'>$ {balance}</Button>
          }
        </Typography>
        <Typography variant="body2" color="text.secondary">

        </Typography>
      </CardContent>
      <CardActions>

      </CardActions>
    </Card>
  );
}