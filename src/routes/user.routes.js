import {Router} from 'express';
import userControllers from '../controller/user.controllers.js';                                                    
import {validate, validateUserID} from '../middlewares/validation.middlewares.js';
import { userSchema } from '../schema/user.schema.js';
import { authMiddleware } from '../middlewares/auth.middlewares.js';

const router = Router();

router.post('/', validate(userSchema) , userControllers.createUserController);

router.post('/login', userControllers.loginUserController)

router.use(authMiddleware);

router.get("/", userControllers.findAllUserController);

router.get("/:id", validateUserID, userControllers.findUserByIdController);

router.patch("/:id", validateUserID ,userControllers.updateUserController);

router.delete("/:id", validateUserID ,userControllers.deleteUserController)

export default router;  