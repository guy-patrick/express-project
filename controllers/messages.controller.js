const path = require("path");

function getMessages(req, res) {
  const picturePath = path.join(__dirname, "..", "public", "picture.jpg");
  res.sendFile(picturePath);
}

function postMessage(req, res) {
  console.log("Updating messages");
}

module.exports = {
  getMessages,
  postMessage,
};
