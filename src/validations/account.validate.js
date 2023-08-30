import Joi from "joi";

//validate account details
const createAccountSchema = Joi.object({
    account_holder_name: Joi.string().required(),
    account_holder_dob: Joi.date().iso().max('now').required(),
    account_type: Joi.string().valid('savings', 'current').required(),
    account_balance: Joi.number().min(0).required()
});

export const validateAccountDetails = (req, res, next) => {
    const { error } = createAccountSchema.validate(req.body);
    if (error) {
        return res.status(400).json({
            success: false,
            error: error.details[0].message
        });
    }
    next();
};

//validate account number to be 10 digits
const getAccountschema = Joi.string().pattern(/^\d{10}$/).required();

export const validateAccountNumber = (req, res, next) => {
    
    const { error } = getAccountschema.validate(req.params.account_number);
    if (error) {
        return res.status(400).json({
            success: false,
            error: "Invalid account number"
        });
    }
    next();
};
