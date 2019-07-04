import React, { Component } from 'react';

class Message extends Component {
  // may be relevant once we begin changing the state
  // constructor(props) {
  //   super(props);
  // }
  displayMessageByType() {
    let message;

    switch (this.props.type) {
      case 'incomingNotification':
        message = <div className="message system">{this.props.content}</div>;
        break;

      case 'incomingMessage':
        message = (
          <div className="message">
            <span className="message-username">{this.props.userName}</span>
            <span className="message-content">{this.props.content}</span>
          </div>
        );
        break;
    }
    return message;
  }

  render() {
    return <div>{this.displayMessageByType()}</div>;
  }
}

export default Message;
