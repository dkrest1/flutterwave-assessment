import { generateAccountNumber } from "../utils/generate-account.util.js";
import jsonfile from "jsonfile"
import path from "node:path";

//path to json file for saving account details
const ACCOUNT_DATABASE_FILE = path.join(process.cwd(), "/src/database/account-data.json")

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
        
        //get accounts and add new account details
        const data = await jsonfile.readFile(ACCOUNT_DATABASE_FILE);
        
        data.push(newAccount)
        //save data to file
        await jsonfile.writeFile(ACCOUNT_DATABASE_FILE, data, {spaces: 2})

        const {account_dob, ...other_details} = newAccount

        res.status(201).json({
            success: true,
            response: other_details
        })
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
        //get saved accounts
        const data = await jsonfile.readFile(ACCOUNT_DATABASE_FILE);

        const result = data.find((account) => account.account_number === account_number)

        if(!result) {
            throw new Error("Account not found")
        }

        res.status(200).json({
            sucess: true,
            response: result
        })

    }catch(error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
   
}

export  const getAccounts = async(_req, res) => {
    try {
        //get saved accounts
        const data = await jsonfile.readFile(ACCOUNT_DATABASE_FILE);

        if(!data) {
            throw new Error("No account crated yet")
        }

        res.status(200).json({
            success: true,
            response: data
        })
    }catch(error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }
}