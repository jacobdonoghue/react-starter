import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';

import Nav from './nav';
import Home from './home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: 'iaMaNId',
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
        <Home userID={this.state.userID} />
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

export default App;
