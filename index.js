import express from 'express'
import userRouters from './src/routes/user.routes.js'

const app = express();

app.use(express.json()); //habilita que o express trabalhe com JSON
app.use(userRouters); 

app.listen(3000, () => {
    console.log(`Server is running in port 3000`);
});