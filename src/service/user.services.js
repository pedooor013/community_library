import userRepository from '../repositories/user.repositories.js';

async function createUserSercie(newUser){
    const user = await userRepository.createUserRepository(newUser);
    return user;
}