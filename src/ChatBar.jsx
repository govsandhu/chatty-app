import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props)

    this.getMessageContent = this.getMessageContent.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
  }

// Check if a username is Annoymous. If not, set username input to Your Name (Optional)
checkCurrentUser () {
  if(this.props.currentUser !== 'Anonymous') {
    return (
      <input className="chatbar-username" defaultValue={this.props.currentUser} onBlur={ this.changeUserName } />
    )
  } else {
    return (
      <input className="chatbar-username" placeholder="Your Name (Optional)" onKeyPress={ this.changeUserName } />
    )
  }
}

//Once the enter key is pressed within the username field, the username state is updated
changeUserName(event) {
  let userNameInput;
  if (event.target.value === '') {
    userNameInput = 'Anonymous'; 
  } else {
    userNameInput = event.target.value; 
  }
  this.props.updateUserName(userNameInput)
}

//If enter key is pressed within message field, creates an object with the new state and passes it to the app. 
getMessageContent (event) {
  if (event.key === 'Enter') {
    const newMessageObj = {
      content: event.target.value,
      username: this.props.currentUser
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