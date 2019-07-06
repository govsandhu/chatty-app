import React, { Component } from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: 'smooth' });
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const messages = this.props.messages.map(message => {
      return (
        <Message
          key={message.id}
          userName={message.username}
          content={message.content}
          type={message.type}
          color={message.color}
        />
      );
    });
    return (
      <main className="messages">
        {messages}
        <div
          ref={element => {
            this.messagesEnd = element;
          }}
        />
      </main>
    );
  }
}

export default MessageList;
