import jwt from 'jsonwebtoken';

function generateJWT(id){
    return jwt.sign({id},
        '8357f2a98201b006b5c803e73cbb84f1c9eb25a7ad2a3a5bbcee194e0ad4a6e0', 
        {expiresIn: 86400});
}


export { generateJWT };  