import express from 'express'
import userRouters from './src/routes/user.routes.js'

const app = express();

const port = process.env.PORT

app.use(express.json()); //habilita que o express trabalhe com JSON
app.use(userRouters); 

app.listen(port, () => {
    console.log(`Server is running in port ${port}`);
});