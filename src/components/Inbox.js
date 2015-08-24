
import React from 'react';
import {RouteHandler} from 'react-router';
import InboxMessages from './InboxMessages';

class Inbox extends React.Component {

  render() {
    return (
      <div>
        <h3>Inbox component</h3>
        <InboxMessages />
        <RouteHandler />
      </div>
    )
  }
}

export default Inbox;
