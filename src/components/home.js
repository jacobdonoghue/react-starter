import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleState: 'i am a state variable',
    };
  }

  render() {
    return (
      <div>
        <div>Home page</div>
        <div>UserID from props: {this.props.userID}</div>
        <div>Example state: {this.state.exampleState}</div>
      </div>
    );
  }
}

export default Home;
