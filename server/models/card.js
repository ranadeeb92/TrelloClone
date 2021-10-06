const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Board = require("./board");
const List = require("./list");

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
    },
    dueDate: {
      type: Date,
    },
    completed: {
      type: Boolean,
    },
    boardId: {
      type: Schema.Types.ObjectId,
      ref: "Board",
    },
    // comments: [
    //   {
    //     type: String,
    //     // type: Schema.Types.ObjectId, ref: "Comment"
    //   }
    // ],
    // actions: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     // type: Schema.Types.ObjectId, ref: "Action"
    //   }
    // // ],
    // commentsCount: {
    //   type: Number,
    // },
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

// {
//   "_id": 9,
//     "title": "My new card",
//       "description": "",
//         "labels": [],
//           "listId": 13,
//             "position": 65535.0,
//               "archived": false,
//                 "createdAt": "2020-10-08T17:54:55.285Z",
//                   "updatedAt": "2020-10-08T17:54:55.285Z",
//                     "dueDate": null,
//                       "completed": false,
//                         "CardId": 1,
//                           "comments": [],
//                             "actions": []
//   "commentsCount": 0
// }
