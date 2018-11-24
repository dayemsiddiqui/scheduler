import React, { Component } from 'react';
import SignIn from './containers/auth/signin';
import SignUp from "./containers/auth/signup";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


class App extends Component {
  render() {
    return (
    <Router>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
      </Switch>
    </Router>
    );
  }
}

export default App;
