const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");

const MONGO_URI =
  "mongodb+srv://Calebbelkin:C2GnS26%408mHGw%21u@cluster0.ua8ltt9.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    // sets the name of the DB that our collections are part of
    dbName: "cluster0",
  })
  .then(() => console.log("Connected to Mongo DB."))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const dbListSchema = new Schema({
  listItem: {
    type: String,
  },
});

// Create a Mongoose model for the big object
const dbList = mongoose.model("dbList", dbListSchema);

module.exports = {
  dbList,
};
