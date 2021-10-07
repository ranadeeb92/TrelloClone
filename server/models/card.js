const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Board = require("./board");
const List = require("./list");
const Comment = require("./comment");
const Action = require("./action");

const CardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "The Card title is required"],
    },
    description: {
      type: String,
    },
    labels: [{ type: String }],
    listId: {
      type: Schema.Types.ObjectId,
      ref: "List",
    },
    position: {
      type: Number,
    },
    archived: {
      type: Boolean,
      default: false,
    },
    dueDate: {
      type: Date,
      default: null,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    boardId: {
      type: Schema.Types.ObjectId,
      ref: "Board",
    },
    comments: [
      {
        type: Schema.Types.ObjectId, ref: "Comment"
      }
    ],
    actions: [
      {
        type: Schema.Types.ObjectId, ref: "Action"
      }
    ],
    commentsCount: {
      type: Number,
    },
  },
  { timestamps: true }
);

// CardSchema.set("toJSON", {
//   transform: (document, returnedObject) => {
//     returnedObject.id = returnedObject._id.toString();
//     delete returnedObject._id;
//     delete returnedObject.__v;
//   },
// });
const Card = mongoose.model("Card", CardSchema);

module.exports = Card;

