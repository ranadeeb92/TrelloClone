const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Card = require("./card");

const ActionSchema = new Schema({
  description: { type: String },
  cardId: {
    type: Schema.Types.ObjectId,
    ref: "Card",
  },
}, { timestamps: true });

const Action = mongoose.model("action", ActionSchema);

module.exports = Action;

