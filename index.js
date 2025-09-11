import express from 'express'

const app = express();

app.use(express.json()); //habilita que o express trabalhe com JSON
const users = [];

app.post("/users", (req, res) => {
    const body = req.body;
    users.push(body);
    res.status(201).send("User successfully created");
});

app.get("/users", (req, res) => {
    res.send({message: "This is users:", users});
})


app.listen(3000, () => {
    console.log(`Server is running in port 3000`);
});