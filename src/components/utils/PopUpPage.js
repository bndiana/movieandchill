import React, { Component } from "react";
import "./PopUpPage.css";

class PopUpPage extends Component {
  render() {
    return (
      <div className="pop-up">
        <div className="pop-up-content">{this.props.children}</div>
        <button onClick={this.props.onClose} className="close">
          X
        </button>
      </div>
    );
  }
}

export default PopUpPage;
