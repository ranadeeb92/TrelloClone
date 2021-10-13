import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchCard } from "../../actions/CardActions";
import ActivityContainer from "../../activity/ActivityContainer";
import CardDescription from "./CardDescription";
import CardTitle from "./CardTitle";
import ArchivedBanner from "./ArchivedBanner";
import LabelsContainer from "../label/LabelsContainer";
import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import AddComment from "../../comments/AddComment";

const Card = () => {
  const history = useHistory();
  const id = useParams().id;
  const dispatch = useDispatch();
  const card = useSelector((state) => {
    return state.cards.find((card) => card._id === id);
  });

  useEffect(() => {
    dispatch(fetchCard(id));
  }, [dispatch, id]);

  if (!card) {
    return null;
  }

  return (
    <div id="modal-container">
      <div className="screen" onClick={() => history.push(`/boards/${card.boardId}`)} />
      <div id="modal">
        <i className="x-icon icon close-modal"
          onClick={() => history.push(`/boards/${card.boardId}`)}
        />
        {card.archived ? <ArchivedBanner /> : null}
        <header>
          <i className="card-icon icon .close-modal"></i>
          <CardTitle card={card} />
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
              <CardDescription card={card} />
            </li>
            <AddComment />
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
            {card.archived ? <DeleteButton /> : <ArchiveButton card={card} />}
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
