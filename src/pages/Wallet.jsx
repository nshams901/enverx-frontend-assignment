import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { getBalance, getExpenseList } from '../db/api';

const Wallet = () => {
  const [state, setState ] = useState({})
  useEffect(() => {
    getBalance((balance) => {
      setState({...state, balance })
    })
  }, []);

  return (
    <>
      <Box>
        <Card expense={ state.expense} balance= {state.balance || 0}/>
      </Box>
    </>
  )
}

export default Wallet