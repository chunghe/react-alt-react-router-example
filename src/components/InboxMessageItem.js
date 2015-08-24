
import React from 'react';
import InboxMessageItemActions from '../actions/InboxMessageItemActions';
import InboxMessageItemStore from '../stores/InboxMessageItemStore';

class InboxMessage extends React.Component {

  constructor(props) {
    super(props);
    this.state = InboxMessageItemStore.getState();
    this.handleStoreChange = this.handleStoreChange.bind(this);
  }
  
  // when /inbox changes /inbox/1, this component will mount for the first time
  componentWillMount() {
    InboxMessageItemActions.fetchMessageItem(this.props.params.messageId);
  }

  // If you have dynamic segments in your URL, a transition from /users/123 to /users/456 does not call getInitialState, componentWillMount, componentWillUnmount or componentDidMount. If you are using those lifecycle hooks to fetch data and set state, you will also need to implement componentWillReceiveProps on your handler and its stateful children, just like any other component whose props are changing.
  componentWillReceiveProps(nextProps) {
    if (this.props.params.messageId !== nextProps.params.messageId) {
      InboxMessageItemActions.fetchMessageItem(nextProps.params.messageId);
    }
  }

  componentDidMount() {
    InboxMessageItemStore.listen(this.handleStoreChange);
  }

  componentWillUnmount() {
    InboxMessageItemStore.unlisten(this.handleStoreChange);
  }

  handleStoreChange(state) {
    this.setState(state);
  }

  render() {
    console.log('render InboxMessageItem, state:', JSON.stringify(this.state), ', props: ', this.props );
    if (this.state.loading) {
      return (
        <div id="message-content"><p>Loading ...</p></div>
      )
    }
    let {from, content, full, time} = this.state.messageItem;
    return (
      <div id="message-content">
        <p><b>from:</b>{from}</p>
        <p><b>content:</b>{full}</p>
        <p><b>time:</b>{time}</p>
      </div>
    )
  }
}

export default InboxMessage;
