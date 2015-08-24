
import alt from '../alt';
import InboxActions from '../actions/InboxActions';

class InboxMessagesStore {
  constructor() {
    this.messages = [];
    // Actions who have a onCamelCasedAction method or an actionName 
    // method available in the store will be bound. In this example 
    // InboxActions.updateMessages will be handled by onUpdateMessages. 
    // There is no difference between calling the action handler 
    // updateMessages or onUpdateMessages it's just a matter of aesthetic preference.
    this.bindActions(InboxActions);

    /*
    this.bindListeners({
      onUpdateMessages: InboxActions.updateMessages,
      onFetchMessages: InboxActions.fetchMessages,
      onGetMessagesFailed: InboxActions.getMessagesFailed
    });
    */
  }

  onUpdateMessages(messages) {
    this.messages = messages;
  }

  // reset the array while we're fetching new messages so React can
  // be smart and render a spinner for us since the data is empty.
  onFetchMessages() {
    this.messages = [];
  }

  onGetMessagesFailed(error) {
    this.error = error;
  }
}


// http://alt.js.org/docs/createStore/
// The name of the store comes from the class name but on production 
// due to heavy minification it is a good idea to provide your own name 
// to avoid collisions.
module.exports = alt.createStore(InboxMessagesStore, 'InboxMessagesStore');
