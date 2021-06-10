function getMessages(req, res) {
  res.status(200).json({
    message: "All messages got !",
  });
}

function postMessage(req, res) {
  res.status(200).json({
    message: "Message posted",
  });
}

module.exports = {
  getMessages,
  postMessage,
};
