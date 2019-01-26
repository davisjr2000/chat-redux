import React from 'react';
import Message from '../components/message'

const MessageList = (props) => {
  renderList() {
    return this.props.messages.map((message) => {
      return (
        <Message/>
        );
    });
  };

  render() {
    return (
      <ul className="message-list">
        {this.renderList()}
      </ul>
      );
  }
};

export default MessageList
