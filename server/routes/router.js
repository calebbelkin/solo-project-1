// router.post("/", (req, res) => {
//   const listItem = req.body.listItem;
//   console.log("Received listItem:", listItem);
//   res.sendStatus(200);
// });

const express = require("express");
const router = express.Router();

router.get("/itemAdded", (req, res) => {
  const data = [0, 1, 2];
  res.send(data);
});

module.exports = router;
