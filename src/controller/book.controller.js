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


export default {
    createBookController,
    findAllBooksController

}