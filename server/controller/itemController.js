const itemsController = {};

itemsController.addItem = (req, res, next) => {
  console.log(req.body);
  return next();
};

module.exports = itemsController;
