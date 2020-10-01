import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import Nav from './components/nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: '',
    };
  }

  componentDidMount = () => {
    console.log('Component mounted');
    // initiateFirebase();
  }

  setID = (id) => {
    console.log('setting userID to', id);
    this.setState({ userID: id });
  }

  Feedback = (props) => {
    return <div> I think you&apos;re very special! </div>;
  };

  Home = (props) => {
    return (
      <div>
        <div> Welcome {this.state.userID}</div>
      </div>
    );
  };

  Payment = (props) => {
    return <div> Let&apos;s get this $$$$$$$$$ </div>;
  };

  FallBack = (props) => {
    return <div>URL Not Found</div>;
  };

  Schedule = (props) => {
    return <div>Schedule...</div>;
  };

  render() {
    console.log('user id:', this.state.userID);
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={this.Home} />
            <Route path="/feedback" component={this.Feedback} />
            <Route path="/payment" component={this.Payment} />
            <Route path="/schedule" component={this.Schedule} />
            <Route component={this.FallBack} />
          </Switch>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
