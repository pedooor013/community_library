    import userService from "../service/user.services.js";
    import {authService} from "../service/auth.service.js"

    async function createUserController(req, res) {
    const newUser = req.body;

    try {
        const token = await userService.createUserService(newUser);
        res.status(201).json({ token  });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
    }

    async function loginUserController(req, res) {
    const {email, password} = req.body;

    try {
        const token = await authService.loginService(email, password);
        res.status(201).json({ token  });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
    }

    async function findAllUserController(req, res) {
    try {
        const users = await userService.findAllUserService();
        res.json({ users });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
    }

    async function findUserByIdController(req, res) {
    const { id } = req.params;

    try {
        const user = await userService.findUserByIdService(id);
        res.json({ user });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
    }

    async function updateUserController(req, res) {
    const { id } = req.params;
    const newUser = req.body;

    try {
        const user = await userService.updateUserService(newUser, id);
        res.json({ user });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
    }

    async function deleteUserController(req, res) {
    const { id } = req.params;

    try {
        const message = await userService.deleteUserService(id);
        res.json({ message });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
    }

    export default {
    createUserController,
    findAllUserController,
    findUserByIdController,
    updateUserController,
    deleteUserController,
    loginUserController                                                                                                                                                                             
    };
