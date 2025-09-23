import bookRepository from "../repositories/book.repositories.js";

async function createBookService(newBook, userId){
    const createdBook = await bookRepository.createBookRepository(
        newBook,
        userId
    );
    if(!createdBook) throw new Error("Error creating Book");
    return createdBook;
}

async function findAllBooksService(){
    const books = await bookRepository.findAllBooksRepository();
    return books;
}

export default {
    createBookService,
    findAllBooksService
}