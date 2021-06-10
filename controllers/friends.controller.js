const { friends } = require("../models/friends.model");

function postFriend(req, res) {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      error: "Bad request",
    });
  }

  const newFriend = {
    id: friends.length,
    name,
  };
  friends.push(newFriend);

  res.status(200).json(newFriend);
}

function getFriends(req, res) {
  res.status(200).json(friends);
}

function getFriend(req, res) {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];

  if (!friend) {
    return res.status(404).json({
      error: "404 Not Found",
    });
  }

  res.status(200).json(friend);
}

module.exports = {
  postFriend,
  getFriends,
  getFriend,
};
