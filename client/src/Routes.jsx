import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './containers/auth/signin';
import SignUp from './containers/auth/signup';
import CreateJob from './containers/jobs/createjob';
import Jobs from './containers/jobs/jobs';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/create-job" component={CreateJob} />
      <Route exact path="/jobs" component={Jobs} />
    </Switch>
  </Router>
);

export default Routes;
