import { Box, Button, ListItemIcon, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Modal from '../components/common/Modal'
import ExpenseForm from '../components/add expense/ExpenseForm'
import DataTable from '../components/DataTable'
import { addExpense, deleteExpense, getExpenseList, updateExpense } from '../db/api'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

export const headerData = [
  { text: 'Name' }, { text: 'Amount' }, { text: 'Date' }, { text: 'Label' }, { text: 'Action' }
]

const Dashboard = () => {
  const [state, setState] = useState({});
  const [formData, setFormData] = useState({})
  const { showModal, getList, expenseList, expense, deleteModal } = state;

  const handleModal = () => {
    setFormData({})
    setState({ ...state, showModal: !showModal })
  };

  useEffect(() => {
    getExpenseList().then((res) => {
      const expense = res.reduce((acc, curr) => acc + (+curr.amount), 0)
      setState({ ...state, expenseList: res, expense })
    })
  }, [getList]);

  const actionClick = (action, value) => {
    if (action === 'edit') {
      setState({ ...state, showModal: true });
      setFormData(value)
    } else if(action === 'delete') {
      setState({ ...state, deleteModal: true });
      setFormData(value)
    }
  }
console.log(deleteModal);
  const handleSave = async () => {
    const { name, amount, label = "", date, description = "", id } = formData;
    if(!amount){
      return alert('Please enter amount')
    }
    const payload = { name, amount, label, date, description, }
    if (id) {
      await updateExpense({...payload, id})
    } else {
      await addExpense({ ...payload, id: String(new Date().getTime()) });
    }

    setState({ ...state, getList: !getList, showModal: false })

  }

  const handleDelete = async () => {
    const resp = await deleteExpense(formData);
    setState({...state, deleteModal: false, getList: !getList})
  }

  const handleDownload = () => {
    let strData = JSON.stringify(expenseList);
    sessionStorage.setItem('reportData', strData)
    const win = window.open("/report-print", "_blank", "height=800,width=1000");
  }


  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  return (
    <>
      <Typography variant='h4'>Hi, Nehal</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant='h6'>Total expenses</Typography>
        <Typography > ( in this month )</Typography>:
        <Typography pl={1}> $ {expense} </Typography>
        <Button style={{ marginLeft: '10px' }} onClick={handleModal} variant='contained'>Add an Expense</Button>
      </Box>

      <Box sx={{ marginY: '1rem', textAlign: 'center' }}>
        <Typography sx={{ color: 'red' }} variant='subtitle1' margin={2}>Your recent expenses</Typography>
        <DataTable headerData={headerData} rows={expenseList} actionClick={actionClick} />

      </Box>
      <Typography>Total Expense: {expense}</Typography>
      <Typography sx={{ display: 'flex', alignItems: 'center', gap: '5px'}}>Download report:
      <ListItemIcon style={{ cursor: 'pointer', textAlign: 'center', margin: '3px'}} onClick={ handleDownload }>    
            <DownloadForOfflineIcon/>
      </ListItemIcon> 
      </Typography>
      {
        deleteModal &&
        <Modal open={deleteModal} handleClose={ () => setState({ ...state, deleteModal: false})}
         rightBtn={'Yes'} modalTitle={'Do you want to delete this record?'} handleSave={handleDelete}>
        </Modal>
      }
      <Modal handleSave={handleSave}
        modalTitle={'Add your expense'} open={showModal} handleClose={handleModal}>
        <ExpenseForm formData={formData} handleChange={handleChange} />
      </Modal>
    </>
  )
}

export default Dashboard