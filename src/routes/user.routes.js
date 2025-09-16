import {Router} from 'express';
import userControllers from '../controller/user.controllers.js';                                                    
import {validate} from '../middlewares/validation.middlewares.js';
import { userSchema } from '../schema/user.schema.js';

const router = Router();

router.post('/users', validate(userSchema) , userControllers.createUserController);

export default router;