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
            function (err) {
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
        const fields = ['username', 'email', 'password', 'avatar'];

        let query = "UPDATE users SET";
        const values = []

        fields.forEach((field)=>{
            if(user[field] != undefined){
                query += ` ${field} = ?,`;
                values.push(user[field])
            }
        });

        query = query.slice(0, -1);

        query += " WHERE id = ?";

        
        values.push(id)

        db.run(query, values, (err) =>{
            if(err){
                rej(err);
            }else{
                res({...user, id});
            }
        })

    })
}

async function deleteUserRepository(id){
    return new Promise((res,rej) =>{
        db.run(`
                DELETE FROM users
                WHERE id = ?
            `, [id], (err) =>{
                if(err){
                    rej(err);
                }else{
                    res({message: "User deleted succesfully", id});
                }
            })
    })
}




export default{
    createUserRepository,
    findUserByEmailRepository,
    findUserByIdRepository,
    findAllUserRepository,
    updateUserRepository,
    deleteUserRepository
}
