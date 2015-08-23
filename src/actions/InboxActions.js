

import alt from '../alt';
import InboxApi from '../utils/InboxApi';

class InboxActions {
  updateMessages(messages) {
    this.dispatch(messages);
  }

  // Inside those actions you can use `this.dispatch` to dispatch 
  // your payload through the Dispatcher and onto the stores.
  fetchMessages() {
    //  we dispatch an event here so we can have "loading" state.
    this.dispatch();

    InboxApi.getMessages()
      .then((messages) => {
        this.actions.updateMessages(messages);
      })
      .catch((error) => {
        this.actions.getMessagesFailed(error);
      });
  }

  getMessagesFailed(error) {
    this.dispatch(error);
  }
}


export default alt.createActions(InboxActions);
