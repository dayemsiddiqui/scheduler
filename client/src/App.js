import React, { Component } from 'react'
import SignIn from './containers/auth/signin'
import SignUp from './containers/auth/signup'
import CreateJob from './containers/jobs/createjob'
import Jobs from './containers/jobs/jobs'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/create-job' component={CreateJob} />
          <Route exact path='/jobs' component={Jobs} />
        </Switch>
      </Router>
    )
  }
}

export default App
