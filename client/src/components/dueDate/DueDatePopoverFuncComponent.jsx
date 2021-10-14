import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import Pikaday from "pikaday";
import moment from "moment";
import { updateCard } from "../../actions/CardActions";

const createPicker = () => {
  return new Pikaday({
    field: document.querySelector(".datepicker-select-date input"),
    bound: false,
    container: document.getElementById("calendar-widget"),
    firstDay: 1,
    yearRange: 10,
    defaultDate: moment().add(1, "day").toDate(),
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
    toString(date, format) {
      return moment(date).format(format);
    },
  });
};

const DueDatePopoverFunComponent = () => {
  const dispatch = useDispatch();

  const [date, setDate] = useState(moment().format("M/D/YYYY"));
  const [time, setTime] = useState(moment().format("hh:mm"));

  let defaultDate;
  const cardId = useParams().id;
  const card = useSelector((state) =>
    state.cards.find((c) => c._id === cardId)
  );

  useEffect(() => {
    const picker = createPicker();
    defaultDate = picker.toString();
    picker.show();
  }, [defaultDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(time);
    console.log(date);
    // const cardDate = moment(date)
    dispatch(updateCard({ ...card, dueDate: new Date(date) }, cardId));
  };

  return (
    <div className="popover due-date">
      <header>
        <span>Change due date</span>
        <a href="#" className="icon-sm icon-close"></a>
      </header>
      <div className="content">
        <form onSubmit={handleSubmit}>
          <div className="datepicker-select">
            <div className="datepicker-select-date">
              <label>
                Date
                <input
                  type="text"
                  placeholder="Enter date"
                  autoFocus
                  onBlur={(e) => {
                    console.log("date", e.target.value);
                    setDate(e.target.value);
                  }}
                />
              </label>
            </div>
            <div className="datepicker-select-time">
              <label>
                Time
                <input
                  type="time"
                  placeholder="Enter time"
                  defaultValue={time}
                  onBlur={(e) => {
                    console.log("here", e.target.value);
                    setTime(moment(e.target.value, "HH:mm").format("hh:mm A"));
                  }}
                />
              </label>
            </div>
            <div id="calendar-widget"></div>
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

export default DueDatePopoverFunComponent;
