import bookController from "../controller/book.controller.js";
import { Router } from 'express';
import { authMiddleware } from "../middlewares/auth.middlewares.js";
import {
    validate,
    validateBookId} from "../middlewares/validation.middlewares.js";
import { bookSchema } from "../schema/book.schema.js";

const router = Router(); 

router.get("/", bookController.findAllBooksController);

router.use(authMiddleware);

router.post("/",
    validate(bookSchema), 
    bookController.createBookController);

    router.get("/search",
        bookController.searchBookController);

    router.get("/:id",
    validateBookId, 
    bookController.findBookByIdController);

    router.patch("/:id",
    validateBookId, 
    bookController.updateBookController);

    router.delete("/:id",
    validateBookId, 
    bookController.deleteBookController);






export default router;