const express = require("express");
const app = express();
const port = 3000;

const { friendsRouter } = require("./routers/friends.router");
const { messagesRouter } = require("./routers/messages.router");

app.use((req, res, next) => {
  const { method, url } = req;
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${method} ${url} ${delta}ms`);
});
app.use(express.json());

app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
