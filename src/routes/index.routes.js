import { Router } from "express"
import usersRouter from "./user.routes.js";
import booksRouter from "./book.routes.js";
import loansRouter from "./loan.routes.js";

const router = Router();

router.use("/users", usersRouter);
router.use("/books", booksRouter);
router.use("/loans", loansRouter);

export default router;