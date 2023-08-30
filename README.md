# flutterwave-assessment
Flutterwave Bank API Assessment

## Description

- A bank account management API for:

1. Creating Bank Account
2. Resolve Bank Account
3. Fetch all Bank Accounts
## Prerequisites

- NodeJS (18.x)
- Express: Nodejs library 
- joi: package for data validation
- cors: package for cross origin resource sharing
- jsonfile: package for reading and writing to JSON file
- nodemon: for watching for changes of file for development purpose

## Getting Started

1. Clone the repository:

2.   Change directory to flutterwave_assessment:
```bash
    $ cd flutterwave_assessment 
```
3. Install Packages 
```bash
    $ npm i
```
4. Spin up server 
```bash
    $ npm run dev
```

## API Endpoints

1. Create Account:
    
    - live url: https://flutterwave-bank-api.onrender.com/api/account/create
    - development url: http://localhost:3000/api/account/create 

    1. Request Body Example:

    - account_holder_name: "example"
    - account_holder_dob: "2023-08-04"
    - account_type": "savings"
    - account_balance": 20

2. Get Account A single Account Details: 

    - live url: https://flutterwave-bank-api.onrender.com/api/account/:account_number
    - development url: http://localhost:3000/api/account/:account_number

    1. Parameter Example:

    - account_number": 1111111111

3. Get All Account Details: 

    - live url: https://flutterwave-bank-api.onrender.com/api/accounts 
    - development url: http://localhost:3000/api/accounts/


