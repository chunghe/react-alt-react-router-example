
import alt from '../alt';
import InboxMessagesActions from '../actions/InboxMessagesActions';

class InboxMessagesStore {
  constructor() {
    this.messages = [];
    this.loading = false;
    // Actions who have a onCamelCasedAction method or an actionName 
    // method available in the store will be bound. In this example 
    // InboxMessagesActions.updateMessages will be handled by onUpdateMessages. 
    // There is no difference between calling the action handler 
    // updateMessages or onUpdateMessages it's just a matter of aesthetic preference.
    this.bindActions(InboxMessagesActions);

    /*
    this.bindListeners({
      onUpdateMessages: InboxMessagesActions.updateMessages,
      onFetchMessages: InboxMessagesActions.fetchMessages,
      onGetMessagesFailed: InboxMessagesActions.getMessagesFailed
    });
    */
  }

  onUpdateMessages(messages) {
    this.loading = false;
    this.messages = messages;
  }

  onFetchMessages() {
    this.loading = true;
  }

  onGetMessagesFailed(error) {
    this.loading = false;
    this.error = error;
  }
}


// http://alt.js.org/docs/createStore/
// The name of the store comes from the class name but on production 
// due to heavy minification it is a good idea to provide your own name 
// to avoid collisions.
module.exports = alt.createStore(InboxMessagesStore, 'InboxMessagesStore');
