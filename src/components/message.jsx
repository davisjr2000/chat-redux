import React, { Component} from 'react';

class Message extends Component {
  render(){
    return(
      <div>
        <h2>{this.props.content}</h2><h5>-{this.props.author}</h5>
      </div>
      )
  }
}

export default Message
