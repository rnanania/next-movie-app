import React, { Component } from "react";

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.closeButton = null;
  }

  closeModal() {
    this.closeButton.click();
  }

  render() {
    const { children } = this.props;
    return (
      <div className="modal" id="movieModal" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create a Movie</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                ref={e => (this.closeButton = e)}
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
                    Save changes
                  </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
