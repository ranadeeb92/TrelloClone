import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import { updateCard } from "../../actions/CardActions";
import ActivityContainer from "./ActivityContainer";

import LabelsContainer from "./LabelsContainer";

const Card = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const id = useParams().id;
  const card = useSelector((state) =>
    state.cards.find((card) => card._id === id)
  );

  const [title, setTitle] = useState(card.title);

  const handleUpdateCard = () => {
    const updatedCard = { ...card, title }
    dispatch(updateCard(updatedCard, id));
  }

  return (
    <div id="modal-container">
      <div
        className="screen"
        onClick={() => history.push(`/boards/${card.boardId}`)}
      ></div>
      <div id="modal">
        <i
          className="x-icon icon close-modal"
          onClick={() => history.push(`/boards/${card.boardId}`)}
        ></i>
        <header>
          <i className="card-icon icon .close-modal"></i>
          <textarea className="list-title" style={{ height: "45px" }} onChange={(e) => setTitle(e.target.value)} onBlur={handleUpdateCard}>
            {title}
          </textarea>
          <p>
            in list <a className="link">Stuff to try (this is a list)</a>
            <i className="sub-icon sm-icon"></i>
          </p>
        </header>
        <section className="modal-main">
          <ul className="modal-outer-list">
            <li className="details-section">
              <ul className="modal-details-list">
                <LabelsContainer labels={card.labels} />
                <li className="due-date-section">
                  <h3>Due Date</h3>
                  <div id="dueDateDisplay" className="overdue completed">
                    <input
                      id="dueDateCheckbox"
                      type="checkbox"
                      className="checkbox"
                      checked=""
                    />
                    {card.dueDate}
                    <span>(past due)</span>
                  </div>
                </li>
              </ul>
              <form className="description">
                <p>Description</p>
                <span id="description-edit" className="link">
                  Edit
                </span>
                <p className="textarea-overlay">{card.description}</p>
                <p id="description-edit-options" className="hidden">
                  You have unsaved edits on this field.{" "}
                  <span className="link">View edits</span> -{" "}
                  <span className="link">Discard</span>
                </p>
              </form>
            </li>
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
                    ></textarea>
                    <div>
                      <a className="light-button card-icon sm-icon"></a>
                      <a className="light-button smiley-icon sm-icon"></a>
                      <a className="light-button email-icon sm-icon"></a>
                      <a className="light-button attachment-icon sm-icon"></a>
                    </div>
                    <div>
                      <input
                        type="submit"
                        className="button not-implemented"
                        value="Save"
                      />
                    </div>
                  </label>
                </div>
              </div>
            </li>
            <ActivityContainer />
          </ul>
        </section>
        <aside className="modal-buttons">
          <h2>Add</h2>
          <ul>
            <li className="member-button">
              <i className="person-icon sm-icon"></i>Members
            </li>
            <li className="label-button">
              <i className="label-icon sm-icon"></i>Labels
            </li>
            <li className="checklist-button">
              <i className="checklist-icon sm-icon"></i>Checklist
            </li>
            <li className="date-button not-implemented">
              <i className="clock-icon sm-icon"></i>Due Date
            </li>
            <li className="attachment-button not-implemented">
              <i className="attachment-icon sm-icon"></i>Attachment
            </li>
          </ul>
          <h2>Actions</h2>
          <ul>
            <li className="move-button">
              <i className="forward-icon sm-icon"></i>Move
            </li>
            <li className="copy-button">
              <i className="card-icon sm-icon"></i>Copy
            </li>
            <li className="subscribe-button">
              <i className="sub-icon sm-icon"></i>Subscribe
              <i className="check-icon sm-icon"></i>
            </li>
            <hr />
            <li className="archive-button">
              <i className="file-icon sm-icon "></i>Archive
            </li>
          </ul>
          <ul className="light-list">
            <li className="not-implemented">Share and more...</li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Card;
