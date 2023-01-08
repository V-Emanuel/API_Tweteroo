import express from "express";
import cors from "cors";

const PORT = 5000;
const app = express();
app.use(cors());
app.use(express.json());
app.listen(PORT);
const user = [];
const tweets = [];
let avatarUser = {
  avatar: "",
};

app.post('/sign-up', (req, res) => {
    const dataUser = req.body
    user.push(dataUser)
    avatarUser.avatar = dataUser.avatar;
    res.status(201).send("OK")
})
app.post('/tweets', (req, res) => {
    const dataTweet = req.body
    const authorization = user.find(item => item === req.body.username)
    if (!authorization) {
        res.send("UNAUTHORIZED")
    }
    tweets.push({ ...avatarUser, ...dataTweet});
    res.status(201).send("OK")
})
app.get('/tweets', (req, res) => {
  const max = 10;
  console.log(tweets)
  if(tweets.length > max){
    const newTweets = tweets.slice(0, max);
    res.send(newTweets)
  }else{
    res.send(tweets)
  }
})


