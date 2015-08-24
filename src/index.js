import React from 'react';
import Router, { DefaultRoute, NotFoundRoute, Link, Route, RouteHandler } from 'react-router';
import Inbox from './components/Inbox';
import Calendar from './components/Calendar';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import InboxMessageItem from './components/InboxMessageItem';
import InboxStats from './components/InboxStats';


class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="dashboard">Dashboard</Link></li>
              <li><Link to="inbox">Inbox</Link></li>
              <li><Link to="calendar">Calendar</Link></li>
            </ul>
          </nav>
        </header>
        <RouteHandler/>
      </div>
    );
  }
}

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

Router.run(routes, (Handler) =>
    React.render(<Handler />, document.body));
