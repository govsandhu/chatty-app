import React, { Component } from 'react';
import Message from './Message.jsx'

class MessageList extends Component {
  render() {
    return (
      <main className="messages">
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
      </main>
    );
  }
}

export default MessageList;