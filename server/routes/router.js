// router.post("/", (req, res) => {
//   const listItem = req.body.listItem;
//   console.log("Received listItem:", listItem);
//   res.sendStatus(200);
// });

const express = require("express");
const router = express.Router();
const itemsController = require("../controller/itemController");

// router.get("/", (req, res) => {
//   const data = [1, 2, 3, 4];
//   res.send(data);
// });

router.post("/", itemsController.addItem, (req, res) => {
  res.sendStatus(200); // Sending a success status
});

module.exports = router;
