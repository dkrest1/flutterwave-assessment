# flutterwave-assessment
Flutterwave Bank API Assessment

## Description

- A bank account management API for:

1. Creating Bank Account
2. Resolve Bank Account
3. Fetch all Bank Accounts
## Prerequisites

- NodeJS (18.x)
- Express framework
- joi package for data validation
- cors package for cross origin resource sharing

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

1. Create Account: http://localhost:3000/api/account/create

    1. Request Body Example:

    - account_holder_name: "example"
    - account_holder_dob: "12/08/2023"
    - account_type": "savings"
    - account_balance": 20

2. Get Account A single Account Details: http://localhost:3000/api/account/:account_number

    1. Parameter Example:

    - account_number": 1111111111

2. Get All Account Details: http://localhost:3000/api/accounts/


