const express = require("express");

const friendsRouter = express.Router();

const {
  postFriend,
  getFriends,
  getFriend,
} = require("../controllers/friends.controller");

friendsRouter.post("/", postFriend);
friendsRouter.get("/", getFriends);
friendsRouter.get("/:friendId", getFriend);

module.exports = {
  friendsRouter,
};
