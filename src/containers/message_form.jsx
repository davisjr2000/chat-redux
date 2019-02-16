import React, { Component} from 'react';

class MessageForm extends Component {
  render(){
    return(
      <form className="channel-editor">
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
