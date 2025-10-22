import { ca } from "zod/locales";
import bookService  from "../service/book.service.js";

async function createBookController(req, res){
    const newBook = req.body;
    const userId = req.userId;
    
    try{
        const createdBook = await bookService.createBookService(newBook, userId);
        res.status(201).send(createdBook);
    }catch(err){
        res.status(400).send(err.message);
    }                                                           
}

async function findAllBooksController(req, res){
    try{
        const books = await bookService.findAllBooksService();
        res.send(books);
    }catch(err){
        res.status(404).send(err.message);
    }
}

async function findBookByIdController(req, res){
    const bookId = req.params.id;
    try{
        const book = await bookService.findBookByIdService(bookId);
        return res.send(book);
    }catch(err){
        return res.status(404).send(err.message);
    }
}

async function updateBookController(req, res){
    const updatedBook = req.body;
    console.log(updatedBook);
    const bookId = req.params.id;
    const userId = req.userId;

    try{
        const response = await bookService.updateBookService(
            updatedBook,
            bookId,
            userId
        );
        return res.send(response);
    }catch(err){
        res.status(400).send(err.message);
    }   
}

async function deleteBookController(req, res){
    try{
        const bookId = req.params.id;
        const userId = req.userId;
        const response = await bookService.deleteBookService(bookId, userId);
        return res.send(response);
    }catch(err){
        res.status(400).send(err.message);
    }
}

async function searchBookController(req, res) {
    try{
        const { search } = req.query;
        const books = await bookService.searchBookService(search);
        res.send(books);
    }catch(err){
        res.status(400).send(err.message);
    }
}


export default {
    createBookController,
    findAllBooksController,
    findBookByIdController,
    updateBookController,
    deleteBookController,
    searchBookController
}