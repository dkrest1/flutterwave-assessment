import { Router } from "express";
import * as bankController from "../controllers/account.controller.js";
import { validateAccountDetails, validateAccountNumber } from "../validations/account.validate.js";

const router = new Router()

router.post("/account/create", validateAccountDetails,  bankController.createAccount);
router.get("/account/:account_number", validateAccountNumber, bankController.getAccount);
router.get("/accounts", bankController.getAccounts);

export default router