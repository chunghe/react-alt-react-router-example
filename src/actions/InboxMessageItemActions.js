

import alt from '../alt';
import InboxApi from '../utils/InboxApi';

class InboxMessageItemActions {
  updateMessageItem(messageItem) {
    this.dispatch(messageItem);
  }

  // Inside those actions you can use `this.dispatch` to dispatch 
  // your payload through the Dispatcher and onto the stores.
  fetchMessageItem(id) {
    //  we dispatch an event here so we can have "loading" state.
    this.dispatch();

    InboxApi.getMessageItem(id)
      .then((messageItem) => {
        this.actions.updateMessageItem(messageItem);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}


export default alt.createActions(InboxMessageItemActions);
