import React from 'react';
import { Link, RouteHandler } from 'react-router';

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

export default App;
