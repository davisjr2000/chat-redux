import React, { Component} from 'react';

class MessageForm extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="channel-editor">
        <input
          type="text"
          className="form-control"
          autoComplete="off"
        />
        <button type="submit">Send</button>
      </form>
      )
  }
}

export default MessageForm
