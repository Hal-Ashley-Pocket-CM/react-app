import React from 'react';
//In this file the goal is to get all clients and allow the user to select some or all of the clients to send this mass message to.
const MassMessage = props => {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              New message
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
            <form>
              <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label">
                  Recipient:
                </label>
                <input
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message-text" className="col-form-label">
                  Message:
                </label>
                <textarea className="form-control" id="message-text" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              className="btn btn-outline-success dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Send message
            </button>
            <div className="dropdown-menu" data-dismiss="modal">
              <a
                className="dropdown-item"
                href="#"
                onClick={props.handleSubmitNow}
              >
                Send Now
              </a>
              <a
                className="dropdown-item"
                href="#"
                onClick={props.handleSubmitLater}
              >
                Send Later
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MassMessage;
