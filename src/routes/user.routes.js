import {Router} from 'express';
import userControllers from '../controller/user.controllers.js';                                                    
import {validate, validateUserID} from '../middlewares/validation.middlewares.js';
import { userSchema } from '../schema/user.schema.js';
import { authMiddleware } from '../middlewares/auth.middlewares.js';

const router = Router();

router.post('/users', validate(userSchema) , userControllers.createUserController);

router.post('/users/login', userControllers.loginUserController)

router.use(authMiddleware);

router.get("/users", userControllers.findAllUserController);

router.get("/users/:id", validateUserID, userControllers.findUserByIdController);

router.patch("/users/:id", validateUserID ,userControllers.updateUserController);

router.delete("/users/:id", validateUserID ,userControllers.deleteUserController)

export default router;  