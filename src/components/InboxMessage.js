
import React from 'react';

class InboxMessage extends React.Component {

  render() {
    return (
      <div id="message-content">
        <p>displaying content of message id: {this.props.params.messageId}</p>
      </div>
    )
  }
}

export default InboxMessage;
