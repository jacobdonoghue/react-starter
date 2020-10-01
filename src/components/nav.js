import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <nav>
        <ul>
          <li><NavLink to="/" exact>Home</NavLink></li>
          <li><NavLink to="/feedback">Feedback</NavLink></li>
          <li><NavLink to="/payment">Payment</NavLink></li>
          <li><NavLink to="/schedule">Schedule</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Nav);
