const express = require("express");

const { friendsRouter } = require("./routers/friends.router");
const { messagesRouter } = require("./routers/messages.router");

const app = express();
const port = 3000;

app.use(express.json());

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
