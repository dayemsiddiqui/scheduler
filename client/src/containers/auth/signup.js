import React, { Component } from 'react';
import AuthBase from "./../../components/auth/authbase"
import { Link } from 'react-router-dom'
class SignUp extends Component {
  render() {
    return (
      <AuthBase>
         <div className="page-ath-form">
            <h2 className="page-ath-heading">Sign up <small>Create New Account</small></h2>
            <form action="#">
              <div className="input-item"><input type="text" placeholder="Your Email" className="input-bordered" /></div>
              <div className="input-item"><input type="password" placeholder="Password" className="input-bordered" /></div>
              <div className="input-item"><input type="password" placeholder="Repeat Password" className="input-bordered" /></div>
              <button className="btn btn-primary btn-block">Create Account</button>
            </form>
            <div className="form-note">Already have an account ? <Link to="/"> <strong>Sign in instead</strong></Link></div>
          </div>
    </AuthBase>
    );
  }
}

export default SignUp;
