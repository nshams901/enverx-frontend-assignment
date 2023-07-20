import { doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

// Add a new document in collection "expense"
export const addExpense = async (data) => {
    console.log(data, '>>>>>>>>>>>>>>>>>');
    const resp = await setDoc(doc(db, "expense", "XqxBXInGEgN0M8e17QBV"), data)
    return resp;
}