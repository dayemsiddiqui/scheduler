import React, { Component } from 'react'
import AuthBase from "../../components/auth/authbase"
import { Link } from 'react-router-dom'

class SignIn extends Component {
  render() {
    return (
      <AuthBase>
        <div className="page-ath-form">
          <h2 className="page-ath-heading">Sign In <small>Login To Your Account</small></h2>
          <form action="#">
            <div className="input-item"><input type="text" placeholder="Email" className="input-bordered" /></div>
            <div className="input-item"><input type="password" placeholder="Password" className="input-bordered" /></div>
            <button className="btn btn-primary btn-block">Sign In</button>
          </form>

          <div className="form-note">Dont have an account ? <Link to="/signup"> <strong>Sign up instead</strong></Link></div>
        </div>
      </AuthBase>
    );
  }
}

export default SignIn;
