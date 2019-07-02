import React, { Component } from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props)
  }

checkCurrentUser () {
  if(this.props.currentUser) {
    return (
      <input className="chatbar-username" defaultValue={this.props.currentUser.name} />
    )
    // this.props.currentUser.name
  } else {
    return (
      <input className="chatbar-username" placeholder="Annoymous" />
    )
    // 'Annoymous'
  }
}
  // return the tag you want
  render() {
    return (
        <footer className="chatbar">
        {this.checkCurrentUser()}
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
        </footer>
    )
  }
}

export default ChatBar;