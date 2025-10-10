import { userIdSchema } from "../schema/user.schema.js";
import { bookIdSchema } from "../schema/book.schema.js";
import { loanIdSchema } from "../schema/loan.schema.js";

const validate = (schema) => (req, res, next) => {
    try{
        schema.parse(req.body);
        next();
    }catch(error){
        res.status(400).json({ message: error.message});
    }
}

const validateUserID = (req, res, next) =>{
    try{
        const userId = +req.params.id;
        userIdSchema.parse({userId: userId});
        next();
    }catch(error){
        res.status(400).json({message: error.message});
    }
}


const validateBookId  = (req, res, next) =>{
    try{
        bookIdSchema.parse({bookId: +req.params.id});
        next();
    }catch(error){
        res.status(400).json({message: error.message});
}
}

const validateLoanId = (req, res, next) =>{
    try{
        loanIdSchema.parse({ loanId: +req.params.id });
        next();
    }catch(err){
        res.status(400).json({error: err.errors})
    }
}

export{validate, validateUserID, validateBookId, validateLoanId }