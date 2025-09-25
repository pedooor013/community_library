import db from "../config/database.js";

db.run(`
        CREATE TABLE IF NOT EXISTS books(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            author TEXT NOT NULL,
            userId INTEGER,
            FOREIGN KEY (userId) REFERENCES users(id)
        )    
    `);

    function createBookRepository(newBook, userId){
        return new Promise((res, rej) =>{
            const {title, author} = newBook;
            db.run(
                `INSERT INTO books (title, author, userId) VALUES (?, ?, ?)`,
                [title, author, userId],
                function(err){
                    if(err){
                        rej(err);
                    }else{
                        res({id: this.lastID, ...newBook});
                    }
                }
            )
        })
    }

    function findAllBooksRepository(){
        return new Promise((res, rej) =>{
            db.all(`SELECT * FROM books`, [], (err, rows) =>{
                if(err){
                    rej(err);
                }else{
                    res(rows)
                }
            });
        });
    }

    function findBookByIdRepository(bookId){
        return new Promise((res, rej) =>{
            db.get(`SELECT * FROM books WHERE id = ?`, [bookId], (err, row)=>{
                if(err){
                    rej(err);
                }else{
                    res(row);
                }
            })
        })
    }

    function updateBookRepository(updatedBook, bookId){
        return new Promise((res, rej) =>{
            const fields = ['title', 'author', 'userId'];

            let query = 'UPDATE books SET ';                                                        
            const values = [];

            fields.forEach(field =>{
                if(updatedBook[field] !== undefined){
                    query += ` ${field} = ?,`;
                    values.push(updatedBook[field]) 
                }   
            })

            query = query.slice(0, -1);

            query += " WHERE id = ?";
            console.log(query)
            values.push(bookId);

            db.run(query, values , function (err){
                if(err){
                    rej(err);
                }else{
                    res({id: bookId, ...updatedBook})
                }
            })
        })
    }

    function deleteBookRepository(bookId){
        return new Promise((res, rej) =>{
            db.run(`DELETE FROM books WHERE id = ?`, [bookId], function(err){
                if(err){
                    rej(err);
                }else{
                    res({message: "Book deleted successfully", bookId})
                }
            })
        })
    }

    export default {
        createBookRepository,
        findAllBooksRepository,
        findBookByIdRepository,
        updateBookRepository,
        deleteBookRepository
        

    }