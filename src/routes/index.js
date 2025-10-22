import {Router} from "express";
import userRouters from "./user.routes.js"
import booksRouters from "./book.routes.js"
import loansRouters from "./loan.routes.js"

const routers = Router();

routers.use("/users", userRouters); 
routers.use("/books", booksRouters); 
routers.use("/loans", loansRouters); 

export {routers};