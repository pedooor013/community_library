import {Router} from 'express';
import userControllers from '../controller/user.controllers.js';                                                    
import {validate} from '../middlewares/validation.middlewares.js';
import { userSchema } from '../schema/user.schema.js';

const router = Router();

router.post('/users', validate(userSchema) , userControllers.createUserController);

router.get("/users", userControllers.findAllUserController);

router.get("/users/:id", userControllers.findUserByIdController);

router.put("/users/:id", validate(userSchema) ,userControllers.updateUserController);


export default router;