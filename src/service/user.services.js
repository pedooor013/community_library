import userRepository from '../repositories/user.repositories.js';
import bcrypt from 'bcrypt';


async function createUserService(newUser){
    const findUser = await userRepository.findUserByEmailRepository(newUser.email);
    if(findUser) throw new Error("User already exists!");
    
    const passHash = await bcrypt.hash(newUser.password, 10);
    const user = await userRepository.createUserRepository({...newUser,
        password: passHash,
    });
    if(!user) throw new Error("Error creating user!");

    return user;
}

async function findAllUserService(){
    const users = await userRepository.findAllUserRepository();
    return users;
}

async function findUserByIdService(id){
    const user = await  userRepository.findUserByIdRepository(id);
    if(!user) throw new Error("User not found");    
    return user;                                                
}


export default {
    createUserService,
    findAllUserService
}