import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import Card from '../components/Card';
import { getExpenseList } from '../db/api';

const Wallet = () => {
  const [state, setState ] = useState({})
  useEffect(() => {
    getExpenseList().then((res) => {
      const expense = res.reduce((acc, curr) => acc + (+curr.amount), 0)
      setState({ ...state, expense })
    })
  }, []);
  console.log(state);
  return (
    <>
      <Box>
        <Card data={ state.expense}/>
      </Box>
    </>
  )
}

export default Wallet