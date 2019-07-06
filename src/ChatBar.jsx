import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props);

    this.getMessageContent = this.getMessageContent.bind(this);
    this.changeUserName = this.changeUserName.bind(this);
  }

  // Check if a username is Annoymous.
  checkCurrentUser() {
    if (this.props.currentUser !== 'Anonymous') {
      return (
        <input
          className="chatbar-username"
          defaultValue={this.props.currentUser}
          onBlur={this.changeUserName}
        />
      );
    } else {
      return (
        <input
          className="chatbar-username"
          placeholder="(Optional) Set username & hit TAB"
          onBlur={this.changeUserName}
        />
      );
    }
  }

  //Once the user leaves the username field, the username state is updated
  changeUserName(event) {
    let userNameInput;
    let userChangeObj = {};

    if (this.props.currentUser === 'Anonymous' && event.target.value === '') {
      return;
    } else if (this.props.currentUser === event.target.value) {
      return;
    } else if (event.target.value === '') {
      userNameInput = 'Anonymous';
    } else {
      userNameInput = event.target.value;
    }
    userChangeObj = {
      type: 'postNotification',
      currentUser: userNameInput,
      content: `${
        this.props.currentUser
      } has changed their name to ${userNameInput}`
    };

    this.props.updateUserName(userChangeObj);
  }

  //If enter key is pressed within message field, creates an object with the new state and passes it to the app.
  getMessageContent(event) {
    const validateURL = new RegExp('(https:?//)?(www.)?.+.(png|jpe?g|gif)');

    if (event.key === 'Enter') {
      if (event.target.value === '') {
        return;
      } else if (validateURL.test(event.target.value)) {
        const imageMessageObj = {
          type: 'postImage',
          content: event.target.value,
          username: this.props.currentUser
        };
        this.props.newMessage(imageMessageObj);
        event.target.value = '';
      } else {
        const newMessageObj = {
          type: 'postMessage',
          content: event.target.value,
          username: this.props.currentUser
        };
        this.props.newMessage(newMessageObj);
        event.target.value = '';
      }
    }
  }

  render() {
    return (
      <footer className="chatbar">
        {this.checkCurrentUser()}
        <input
          className="chatbar-message"
          placeholder="Drop a message or an image URL here & hit ENTER!"
          onKeyPress={this.getMessageContent}
        />
      </footer>
    );
  }
}

export default ChatBar;
