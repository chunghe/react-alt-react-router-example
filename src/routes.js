import React from 'react';
import { DefaultRoute, NotFoundRoute, Route } from 'react-router';

import App from './App';
import Inbox from './components/Inbox';
import Calendar from './components/Calendar';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import InboxMessageItem from './components/InboxMessageItem';
import InboxStats from './components/InboxStats';

let routes = (
  <Route name="app" path="/" handler={App}>  
    <DefaultRoute name="dashboard" handler={Dashboard} />
    <Route name="inbox"  handler={Inbox}>
      <Route name="message" path=":messageId" handler={InboxMessageItem} />
      <DefaultRoute handler={InboxStats} />
    </Route>
    <Route name="calendar" handler={Calendar} />
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

export default routes;
