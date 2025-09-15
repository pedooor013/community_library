import userRepository from '../repositories/user.repositories.js';

async function createUserService(newUser){
    const foundUser = await userRepository.findUserByEmailRepository(newUser.email);
    if(foundUser) throw new Error("User already exists!");
    const user = await userRepository.createUserRepository(newUser);
    return user;
}

export default {
    createUserService
}