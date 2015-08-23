
import React from 'react';
import {RouteHandler} from 'react-router';
import Messages from './messages';

class Inbox extends React.Component {

  render() {
    return (
      <div>
        <h3>Inbox component</h3>
        <Messages />
        <RouteHandler />
      </div>
    )
  }
}

export default Inbox;
