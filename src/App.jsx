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
    }
    this.sendMessage = this.sendMessage.bind(this);
    this.updateUserName = this.updateUserName.bind(this);
  }

  sendMessage(message) {
    const newMessage = {
      type: 'message',
      username: this.state.currentUser,
      content: message.content
    };
    this.state.webSocket.send(JSON.stringify(newMessage));
  }

  updateUserName(input) {
    this.setState({currentUser: input})
    
  }



  componentDidMount() {
    const webSocket = new WebSocket('ws://localhost:3001')
    webSocket.onopen = function () {
      console.log('Connected to server')
    }
    this.setState({webSocket})

    webSocket.onmessage = (event) => {
      const receiveMessage = JSON.parse(event.data)
      const messages = this.state.messages.concat(receiveMessage) 
      this.setState({messages: messages})
    }  

    

    // console.log('componentDidMount <App />');
    // setTimeout(() => {
    //   console.log('Simulating incoming message');
    //   // Add a new message to the list of messages in the data store
    //   const newMessage = {id: 3, username: 'Michelle', content: 'Hello there!'};
    //   const messages = this.state.messages.concat(newMessage)
    //   // Update the state of the app component.
    //   // Calling setState will trigger a call to render() in App and all child components.
    //   this.setState({messages: messages})
    // }, 3000);
  }

  // addNewMessage (message) {
  //   const messages = this.state.messages.concat(message) 
  //   this.setState({messages: messages})
  // }

  

  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">
            Chatty
          </a>
        </nav>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser} newMessage={this.sendMessage} updateUserName={ this.updateUserName } />
      </div>
    );
  }
}
export default App;
