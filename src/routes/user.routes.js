import {Router} from 'express';
import userControllers from '../controller/user.controllers.js';                                                    

const router = Router();

router.post('/users', userControllers.createUserController);

export default router;