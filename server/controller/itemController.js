const models = require("../models/groceryListModels");

const itemsController = {};

itemsController.addItem = (req, res, next) => {
  const { listItem } = req.body;
  console.log(req.body);

  models.dbList
    .create({
      listItem,
    })
    .then((data) => {
      console.log(data);
      res.status(201).json({ message: "Item added successfully" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    });
};

module.exports = itemsController;
