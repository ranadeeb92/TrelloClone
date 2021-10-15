import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Pikaday from "pikaday";
import moment from "moment";
import { useCallback } from "react";
import { updateCard } from "../../actions/CardActions";


const DueDatePopover = (props) => {
  const dispatch = useDispatch();
  const cardId = useParams().id;
  const dateInput = useRef(null);
  const calendar = useRef(null);
  const card = useSelector((state) =>
    state.cards.find((c) => c._id === cardId)
  );

  const getDateTime = (date, time) => {
    time = moment(time, ["h:mm A"]).format("HH:mm");
    let dateTime = date + " " + time;

    return new Date(dateTime);
  }

  const handleUpdateDueDate = (e, remove = false) => {
    e.preventDefault();
    let date = e.target.querySelector(".datepicker-select-date input").value;
    let time = e.target.querySelector(".datepicker-select-time input").value;

    let dueDate = remove ? null : getDateTime(date, time)

    dispatch(updateCard({ ...card, dueDate }, cardId, () => {
      props.setShowPopover(false);
    }))
  }

  const defaultMoment = useCallback(() => {
    if (props.dueDate) {
      return moment(props.dueDate);
    } else {
      const time = moment().add(1, "day");
      time.set({
        hour: 12,
        minute: 0,
        second: 0,
      });
      return time;
    }
  }, [props.dueDate]);

  const defaultDate = useCallback(() => {
    defaultMoment().toDate();
  }, [defaultMoment]);

  useEffect(() => {

    const picker = new Pikaday({
      field: dateInput.current,
      bound: false,
      container: calendar.current,
      firstDay: 1,
      yearRange: 10,
      defaultDate: defaultDate(),
      setDefaultDate: true,
      format: "M/D/YYYY",
      i18n: {
        previousMonth: "Prev",
        nextMonth: "Next",
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        weekdays: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        weekdaysShort: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      },
      keyboardInput: false,
      toString(date, format) {
        return moment(date).format(format);
      },
    });
    picker.show();
  }, [defaultDate]);

  return (
    <div className="popover due-date">
      <header>
        <span>Change due date</span>
        <a href="#" className="icon-sm icon-close" onClick={() => props.setShowPopover(false)}></a>
      </header>
      <div className="content">
        <form onSubmit={handleUpdateDueDate} onReset={(e) => handleUpdateDueDate(e, true)}>
          <div className="datepicker-select">
            <div className="datepicker-select-date">
              <label>
                Date
                <input
                  type="text"
                  placeholder="Enter date"
                  autoFocus={true}
                  ref={dateInput}
                  defaultValue={defaultMoment().format("M/D/YYYY")}
                />
              </label>
            </div>
            <div className="datepicker-select-time">
              <label>
                Time
                <input
                  type="text"
                  placeholder="Enter time"
                  defaultValue={defaultMoment().format("h:mm A")}
                />
              </label>
            </div>
            <div id="calendar-widget" ref={calendar}></div>
          </div>
          <button className="button" type="submit">
            Save
          </button>
          <button className="button red-button" type="reset">
            Remove
          </button>
        </form>
      </div>
    </div>
  );
};
export default DueDatePopover;
