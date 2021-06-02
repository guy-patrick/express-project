const { friends } = require("../models/friends.model");

function getFriends(req, res) {
  res.json(friends);
}

function getFriend(req, res) {
  const { friendId } = req.params;
  const friend = friends[+friendId];
  if (friend) {
    res.json(friend);
  } else {
    res.status(404).json({
      error: "Friend doesn't exist",
    });
  }
}

function postFriend(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Missing friend name",
    });
  }
  const newFriend = {
    id: friends.length,
    name: req.body.name,
  };
  friends.push(newFriend);

  res.json(newFriend);
}

module.exports = {
  getFriend,
  getFriends,
  postFriend,
};
