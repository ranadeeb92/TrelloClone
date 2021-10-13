const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Card = require("./card");

const CommentSchema = new Schema({
  text: {
    type: String
  },
  cardId: {
    type: Schema.Types.ObjectId,
    ref: "Card",
  },
}, { timestamps: true });

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;

