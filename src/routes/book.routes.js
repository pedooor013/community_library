import bookController from "../controller/book.controller.js";
import { Router } from 'express';
import { authMiddleware } from "../middlewares/auth.middlewares.js";
import {validate} from "../middlewares/validation.middlewares.js";
import { bookSchema } from "../schema/book.schema.js";

const router = Router(); 


router.post("/books",
    validate(bookSchema), 
    authMiddleware,
    bookController.createBookController);

router.get("/books", bookController.findAllBooksController);


export default router;