
import alt from '../alt';
import InboxMessageItemActions from '../actions/InboxMessageItemActions';

class InboxMessageItemStore {
  constructor() {
    this.messageItem = '';
    this.loading = false;
    this.bindActions(InboxMessageItemActions);
  }

  onUpdateMessageItem(messageItem) {
    this.loading = false;
    this.messageItem = messageItem;
  }

  onFetchMessageItem() {
    this.loading = true;
  }
}


// http://alt.js.org/docs/createStore/
// The name of the store comes from the class name but on production 
// due to heavy minification it is a good idea to provide your own name 
// to avoid collisions.
module.exports = alt.createStore(InboxMessageItemStore, 'InboxMessageItemStore');
