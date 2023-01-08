import express from "express";
import cors from "cors";

const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.listen(PORT);
const user = [];

app.post('/sign-up', (req, res) => {

    const dataUser = req.body
    user.push(dataUser)
    res.status(201).send("OK")

})

app.get('/sign-up', (req, res) => {

    res.send(user)

})


