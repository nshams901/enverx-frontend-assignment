import { Grid, Input, TextField } from '@mui/material'
import React, { useState } from 'react'
import MultiSelect from './MultiSelect';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import Fab from "@mui/core/Fab";

const options = [
    { title: 'Dinner'}, { title: 'Lunch'},{ title: 'Breakfast'},{ title: 'Shopping'},{ title: 'Entertainment'},
    { title: 'Movie'},{ title: 'Clothes'},{ title: 'Healtch & Medicine'},{ title: 'Accessory'},
]
const ExpenseForm = ( {formData, handleChange}) => {
   const { name, amount, label, date, description,  } = formData;

  return (

        <Grid mt={2} container width={ { xs: '300px', md: '500px'}} gap={3}>
            <Grid item xs={12} md={5}
            >
                <TextField
                    fullWidth
                    variant='outlined'
                    label='Name'
                    value={name}
                    name='name'
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} md={5}>
                <TextField
                    fullWidth
                    variant='outlined'
                    label='Amount'
                    value={amount}
                    name='amount'
                    onChange={handleChange}
                />
            </Grid>
            <Grid xs={12} md={5}>
                <TextField
                    fullWidth
                    name='date'
                    value={date}
                    inputProps={{ type: 'date'}}
                    onChange={handleChange}
                />
            </Grid>
            <Grid item xs={12} >
                <MultiSelect
                label={'Label'}
                width
                options={options}
                name='label'
                />
            </Grid>
            {/* <Grid item xs={12} >
                <input
                    type='file'
                    accept='image/*'
                    style={{ display: 'none'}}
                    id='contained-button-file'
                />
                Add photo
                <label htmlFor="contained-button-file">
                <AddPhotoAlternateIcon />
            </label>
            </Grid> */}
            <Grid item xs={12} width={'100%'}>
                <TextField
                    fullWidth
                    variant='outlined'
                    label='Description'
                    value={description}
                    onChange={handleChange}
                    multiline
                    rows={3}
                    name='decription'
                    
                />
            </Grid>
        </Grid>
  )
}

export default ExpenseForm