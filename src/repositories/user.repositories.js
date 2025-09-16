import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS users(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    avatar TEXT
    )
    `)

function createUserRepository(newUser){
    return new Promise((res, rej) =>{
        const {username, email, password, avatar} = newUser;
        db.run(
            `
                INSERT INTO users (username, email, password, avatar)
                VALUES(?, ?, ?, ?)
            `,
            [username, email, password, avatar],
            (err) =>{
            if(err){
                rej(err);
            }else{
                res({id: this.lastID, ...newUser}); 
            }
        }
        )
    })
}

async function findUserByEmailRepository(email){
    return new Promise((res, rej) =>{
        db.get(`
                SELECT id, username, email, avatar 
                FROM users
                WHERE email = ?
            `, [email], 
            (err, row) =>{
                if(err){
                    rej(err);
                }else{
                    res(row);
                }
            })
    })
}
    async function findUserByIdRepository(id){
    return new Promise((res, rej) =>{
        db.get(`
                SELECT id, username, email, avatar 
                FROM users
                WHERE id = ?
            `, [id], 
            (err, row) =>{
                if(err){
                    rej(err);
                }else{
                    res(row);
                }
            })
    })
}

function findAllUserRepository(){
    return new Promise((res, rej) =>{
        db.all(`
                SELECT id, username, email, avatar FROM users
            `, [],  
            (err, rows) =>{
                if(err){
                    rej(err);
                }else{
                    res(rows);
                }
            });
    })
}

async function updateUserRepository(id, user){
    return new Promise((res, rej) =>{
        const {username, email, password, avatar} = user;
        db.run(`
                UPDATE users SET 
                    username = ?,
                    email = ?,
                    password = ?,
                    avatar = ?
                WHERE id = ?
            `, [username, email, password, avatar, id], 
            (err) =>{                      
                if(err){
                    rej(err);
                }else{
                    res({ id, ...user });
                }
            })
    })
}




export default{
    createUserRepository,
    findUserByEmailRepository,
    findUserByIdRepository,
    findAllUserRepository,
    updateUserRepository
}
