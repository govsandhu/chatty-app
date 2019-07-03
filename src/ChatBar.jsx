import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props)

    this.getMessageContent = this.getMessageContent.bind(this);
  }

checkCurrentUser () {
  if(this.props.currentUser) {
    return (
      <input className="chatbar-username" defaultValue={this.props.currentUser.name} />
    )
  } else {
    return (
      <input className="chatbar-username" placeholder="Your Name (Optional)" />
    )
  }
}

generateRandomID () {
  return Math.random().toString(36).substr(2, 6);
}

getMessageContent (event) {
  if (event.key === 'Enter') {
    const newMessageObj = {
      id: this.generateRandomID(),
      content: event.target.value,
      username: this.props.currentUser.name
    }
    this.props.newMessage(newMessageObj)
    event.target.value = '';
  }
} 


  render() {
    return (
        <footer className="chatbar">
        {this.checkCurrentUser()}
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={ this.getMessageContent } />
        </footer>
    )
  }
}

export default ChatBar;