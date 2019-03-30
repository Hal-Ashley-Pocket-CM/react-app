import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarModal = props => {
  return (
    <div
      className="modal fade"
      id="calendarModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="calendarModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Select a Date & Time for sending
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={() => props.handleSubmit}>
              {/* <label>Send Message: </label> */}
              <DatePicker
                openToDate={new Date()}
                selected={props.startDate}
                onChange={e => props.handleDateChange(props.startDate)} //this is not working need to understand why and how to fix it
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
                name="sendDate"
              />

              <div className="form-group">
                <button type="submit" className="btn btn-success">
                  Schedule Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
