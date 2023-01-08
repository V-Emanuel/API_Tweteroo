import express from "express";
import cors from "cors";

const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.listen(PORT);
const user = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
    const dataUser = req.body
    user.push(dataUser)
    res.status(201).send("OK")
})
app.post('/tweets', (req, res) => {
    const dataTweet = req.body
    const authorization = user.find(item => item === req.body.username)
    if (!authorization) {
        res.send("UNAUTHORIZED")
    }
    tweets.push(dataTweet)
    res.status(201).send("OK")
})
app.get('/tweets', (req, res) => {
  res.send(user)
})


