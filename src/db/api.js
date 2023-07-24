import { app } from "../config/firebase";
import { getDatabase, onValue, ref, remove, set, update } from "firebase/database";

const database = getDatabase(app);

export const addExpense = async (data) => {
    const db = getDatabase();
    const resp = await set(ref(db, 'expense/' + data.id), data);
    return resp;
}

export const updateExpense = async (data) => {
    const db = getDatabase();
    const resp = await update( ref(db, 'expense/'+ data.id), data);
    return resp;
}

export const deleteExpense = async(data) => {
    const db = getDatabase();
    const resp = await remove( ref(db, 'expense/' + data.id), null);
    return resp
}


export const getExpenseList = async () => {

    const resp = await fetch('https://expense-tracker-3177f-default-rtdb.asia-southeast1.firebasedatabase.app/expense.json?print=pretty',
        {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }
    );
    let data = await resp.json()
    data = Object.values(data);

    return data
}


export const addBalance = async (data) => {
    const db = getDatabase();
    const resp = await set(ref(db, 'balance/' + data.id), data);
    return resp;
}

export const getBalance = async (cb) => {
    const db = getDatabase();
    
    const balanceRef= ref(db, 'balance/1' )
    const resp = await onValue(balanceRef, (snapshot) => {
        const data = snapshot.val()
        cb(data.balance)
        return data
    } )
}