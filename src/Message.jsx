import React, { Component } from 'react';

class Message extends Component {
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

      case 'incomingImage':
        message = (
          <div>
            <div className="message">
              <span className="message-username">{this.props.userName}</span>
            </div>
            <div className="image">
              <img className="message-image" src={this.props.content} />
            </div>
          </div>
        );
    }
    return message;
  }

  render() {
    return <div>{this.displayMessageByType()}</div>;
  }
}

export default Message;
