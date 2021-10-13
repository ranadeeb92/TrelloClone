import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { createComment } from "../actions/CommentActions";

const AddComment = () => {
  const dispatch = useDispatch();
  const cardId = useParams().id;
  const [comment, setComment] = useState("");

  const handleAddComment = (e) => {
    e.preventDefault();
    dispatch(createComment(comment, cardId, () => {
      setComment("")
    }));
  }

  return (
    <li className="comment-section">
      <h2 className="comment-icon icon">Add Comment</h2>
      <div>
        <div className="member-container">
          <div className="card-member">TP</div>
        </div>
        <div className="comment">
          <label>
            <textarea
              required=""
              rows="1"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <div>
              <a className="light-button card-icon sm-icon"></a>
              <a className="light-button smiley-icon sm-icon"></a>
              <a className="light-button email-icon sm-icon"></a>
              <a className="light-button attachment-icon sm-icon"></a>
            </div>
            <div>
              <input
                type="submit"
                className={`button ${comment.length > 0 ? null : "not-implemented"}`}
                value="Save"
                onClick={handleAddComment}
              />
            </div>
          </label>
        </div>
      </div>
    </li>
  );
};

export default AddComment;