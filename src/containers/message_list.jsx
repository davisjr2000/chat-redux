import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from '../components/message'
import MessageForm from './message_form'
import { bindActionCreators } from 'redux';
import { fetchMessages } from '../actions';

class MessageList extends Component {
  componentWillMount() {
    this.fetchMessages("182");
  }

  fetchMessages = () => {
    this.props.fetchMessages("paris");
  }
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchMessages }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageList);
