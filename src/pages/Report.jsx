import React, { useEffect, useState } from 'react'
import { headerData } from './Dashboard'
import { getExpenseList } from '../db/api';
import DataTable from '../components/DataTable';

const Report = () => {

    const [state, setState] = useState({});
    const { expenseList} = state
    useEffect(() => {
        getExpenseList().then((res) => {
          const expense = res.reduce((acc, curr) => acc + (+curr.amount), 0)
          setTimeout(() => window.print(), 800);
          setState({ ...state, expenseList: res, expense })
        })
      }, []);
  return (
    <DataTable headerData={headerData} rows={expenseList} print  />
    
  )
}

export default Report