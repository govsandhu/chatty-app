import React, { Component } from 'react';

class Message extends Component {
  // may be relevant once we begin changing the state 
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <div className="message">
          <span className="message-username">
            { this.props.userName }
          </span>
          <span className="message-content">
            { this.props.content }
          </span>
        </div>
        <div className="message system">
        </div>
      </div>
    );
  }
}

export default Message;
