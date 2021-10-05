const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Board = require("./board");
const Card = require("./card");

const ListSchema = new Schema({
  title: {
    type: String,
    required: [true, "The List title is required"],
  },
  boardId: {
    type: Schema.Types.ObjectId,
    ref: 'Board'
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  position: {
    type: Number,
  },
  cards: [
    { type: Schema.Types.ObjectId, ref: "Card" }
  ],
});

// BoardSchema.set("toJSON", {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString();
//     delete returnedObject._id;
//     delete returnedObject.__v;
//   },
// });

const List = mongoose.model("List", ListSchema);

module.exports = List;
