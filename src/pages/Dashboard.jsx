import { Box, Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import Modal from '../components/common/Modal'
import ExpenseForm from '../components/add expense/ExpenseForm'
import DataTable from '../components/DataTable'
import { addExpense } from '../db/api'

const headerData = [
  { text: 'Name' }, { text: 'Amount' }, { text: 'Date' }, { text: 'Label' }, { text: 'Action' }
]
const rowsData = [
  { name: 'Dinner', 'amount': 536, date: '22/05/2022', label: 'dinner' },
  { name: 'Clothes', 'amount': 1536, date: '20/03/2022', label: 'shopping' },
  { name: 'Dinner', 'amount': 536, date: '22/05/2022', label: 'dinner' },
]
const Dashboard = () => {
  const [state, setState] = useState({});
  const [ formData, setFormData] = useState({})
  const { showModal } = state

  const handleModal = () => setState({ ...state, showModal: !showModal });
  const actionClick = (action) => {
    if (action === 'edit') {
      setState({ ...state, showModal: true })
    } else {

    }
  }

  const handleSave = () => {
    const { name, amount, label, date, description} = formData
    const payload = {
      name, amount, label, date, description
    }
    addExpense(formData)
  }
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData({...formData, [name]: value })
  }
  return (
    <>
      <Typography variant='h4'>Hi, Nehal</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant='h6'>Total expenses</Typography>
        <Typography > ( in this month )</Typography>:
        <Typography>12,050 /-</Typography>
        <Button style={{ marginLeft: '10px' }} onClick={handleModal} variant='contained'>Add an Expense</Button>
      </Box>

      <Box sx={{ marginY: '1rem', textAlign: 'center' }}>
        <Typography sx={{ color: 'red' }} variant='subtitle1' margin={2}>Your recent expenses</Typography>
        <DataTable headerData={headerData} rows={rowsData} actionClick={actionClick} />

      </Box>
      <Typography>Total: </Typography>


      <Modal handleSave={handleSave}
      modalTitle={'Add your expense'} open={showModal} handleClose={handleModal}>
        <ExpenseForm formData={ formData} handleChange={ handleChange} />
      </Modal>
    </>
  )
}

export default Dashboard