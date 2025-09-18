import { userIdSchema } from "../schema/user.schema.js";

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

export{validate, validateUserID}