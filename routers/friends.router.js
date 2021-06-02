const express = require("express");

const {
  postFriend,
  getFriend,
  getFriends,
} = require("../controllers/friends.controller");

const friendsRouter = express.Router();

/* friendsRouter.use((req, res, next) => {
  const start = Date.now();
  const { method, url, baseUrl } = req;
  next();
  const delta = Date.now() - start;
  console.log(`${method} ${baseUrl}${url} ${delta}ms`);
}); */

friendsRouter.post("/", postFriend);
friendsRouter.get("/", getFriends);
friendsRouter.get("/:friendId", getFriend);

module.exports = {
  friendsRouter,
};
