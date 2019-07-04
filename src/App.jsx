import React, { Component } from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // optional. if currentUser is not defined, it means the user is Anonymous
      currentUser: 'Anonymous',
      messages: [],
      webSocket: null
    };
    this.sendMessage = this.sendMessage.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
  }

  // Sending new message to the server
  sendMessage(message) {
    this.state.webSocket.send(JSON.stringify(message));
  }

  updateUserName(input) {
    this.setState({ currentUser: input.currentUser });
    this.state.webSocket.send(JSON.stringify(input));
  }

  componentDidMount() {
    const webSocket = new WebSocket('ws://localhost:3001');
    webSocket.onopen = function() {
      console.log('Connected to server');
    };
    this.setState({ webSocket });

    webSocket.onmessage = event => {
      const receiveMessage = JSON.parse(event.data);

      if (receiveMessage.connectedUsers) {
        this.setState(receiveMessage);
      }
      const messages = this.state.messages.concat(receiveMessage);
      this.setState({ messages: messages });
    };
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">
            Chatty
          </a>
          <p>Connected Users: {this.state.connectedUsers}</p>
        </nav>
        <MessageList messages={this.state.messages} />
        <ChatBar
          currentUser={this.state.currentUser}
          newMessage={this.sendMessage}
          updateUserName={this.updateUserName}
        />
      </div>
    );
  }
}
export default App;
