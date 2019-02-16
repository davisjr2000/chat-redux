import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/message'
import MessageForm from './message_form'

class MessageList extends Component {
  renderList() {
    return this.props.messages.map((message) => {
      return (
        <Message author={message.author} content={message.content}/>
        );
    });
  };

  render() {
    return (
      <div className="channel-container">
        <div className="channel-title">
          <span>Baiano</span>
        </div>
        <div className="channel-content">
          {this.renderList()}
        </div>
        <MessageForm/>
      </div>
      );
  }
};


function mapStateToProps(state) {
   return {
    messages: state.messages
   };
}

export default connect(mapStateToProps)(MessageList)
