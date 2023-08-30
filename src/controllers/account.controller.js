import { generateAccountNumber } from "../utils/generate-account.util.js";

import path from "path"
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



const BANK_DATABASE_PATH = path.join(__dirname, '../database/bank-data.json');


export  const createAccount = async (req, res) => {
    try {
        const {account_holder_name, account_holder_dob, account_type, account_balance  } = req.body
        const account_number = generateAccountNumber()
        const newAccount = {
           account_holder_name,
           account_holder_dob,
           account_type,
           account_balance,
           account_number
        }
        
        const {account_dob, ...data} = newAccount
    
        res.status(201).json({data})
    }catch(error) {

        res.status(500).json({
            success: false,
            error: error.message
        })
    }
   
    
}

export  const getAccount = async (req, res) => {
    const account_number = parseInt(req.params.account_number);

    try {
        const accounts = []
        const data = accounts.find((account) => account.account_number === account_number)
        if(!data) {
            throw new Error("Account not found")
        }

        res.status(200).json({data})

    }catch(error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
   
}

export  const getAccounts = async(_req, res) => {
    try {
        const data = []

        if(!data) {
            throw new Error("No account crated yet")
        }

        res.status(200).json({data})
    }catch(error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}