import React, { useEffect, useState } from 'react'
import { headerData } from './Dashboard'
import { getExpenseList } from '../db/api';
import DataTable from '../components/DataTable';

const Report = () => {

    const [state, setState] = useState({});
    const { expenseList} = state
    useEffect(() => {
        // getExpenseList().then((res) => {
        //   const expense = res.reduce((acc, curr) => acc + (+curr.amount), 0)
        // })
        const data = JSON.parse(sessionStorage.getItem("reportData"))
        setState({ ...state, expenseList: data })
        setTimeout(() => window.print(), 800);
      }, []);
  return (
    <DataTable headerData={headerData} rows={expenseList} print  />
    
  )
}

export default Report