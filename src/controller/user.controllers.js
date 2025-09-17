    import userService from "../service/user.services.js";

    async function createUserController(req, res) {
    const newUser = req.body;

    try {
        const user = await userService.createUserService(newUser);
        res.status(201).json({ user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    }

    async function findAllUserController(req, res) {
    try {
        const users = await userService.findAllUserService();
        res.json({ users });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    }

    async function findUserByIdController(req, res) {
    const { id } = req.params;

    try {
        const user = await userService.findUserByIdService(id);
        res.json({ user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    }

    async function updateUserController(req, res) {
    const { id } = req.params;
    const newUser = req.body;

    try {
        const user = await userService.updateUserService(newUser, id);
        res.json({ user });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    }

    async function deleteUserController(req, res) {
    const { id } = req.params;

    try {
        const message = await userService.deleteUserService(id);
        res.json({ message });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    }

    export default {
    createUserController,
    findAllUserController,
    findUserByIdController,
    updateUserController,
    deleteUserController
    };
