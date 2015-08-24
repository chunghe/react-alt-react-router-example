
import React from 'react';
import {Link} from 'react-router';
import AltContainer from 'alt/AltContainer';
import InboxActions from '../actions/InboxActions';
import InboxMessagesStore from '../stores/InboxMessagesStore';

class Messages extends React.Component {
  componentDidMount() {
    InboxActions.fetchMessages();
  }

  render() {
    console.log('render', this.props);
    if (this.props.error) {
      return (
        <div>error: {this.props.error}</div>
      )
    }

    if (!this.props.messages.length) {
      return (
        <div>Loading ...</div>    
      )
    }

    return (
      <div id="messages">
        {this.props.messages.map((message, index) => {

          return (
            <Link key={index} className="message" to="message" params={{messageId: message.id}}>
              <span className="from">{message.from}</span>
              <span className="content">{message.content}</span>
              <span className="content">{message.time}</span>
            </Link>
          )

                                                
        })}
      
      </div>
    )
  }
}

class MessagesContainer extends React.Component {
  render() {
    return(
      <AltContainer store={InboxMessagesStore}>    
        <Messages />
      </AltContainer>
    )
  }
}

export default MessagesContainer;
