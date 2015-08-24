
import React from 'react';
import {Link} from 'react-router';
import AltContainer from 'alt/AltContainer';
import InboxMessagesActions from '../actions/InboxMessagesActions';
import InboxMessagesStore from '../stores/InboxMessagesStore';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = InboxMessagesStore.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }

  componentDidMount() {
    InboxMessagesStore.listen(this.handleStoreChange);
    InboxMessagesActions.fetchMessages();
  }

  handleStoreChange(state) {
    console.log('handleStoreChange', state);
    this.setState(state);
  }

  render() {
    console.log('render InboxMessages, state:', JSON.stringify(this.state), ', props: ', this.props );
    if (this.state.error) {
      return (
        <div>error: {this.state.error}</div>
      )
    }

    if (this.loading) {
      return (
        <div>Loading ...</div>    
      )
    }

    return (
      <div id="messages">
        {this.state.messages.map((message, index) => {
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

export default Messages;
