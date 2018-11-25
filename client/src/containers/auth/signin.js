import React, { Component } from 'react'
import AuthBase from "./../../components/auth/authbase"
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
            {/* <div class="input-item"><input type="password" placeholder="Repeat Password" class="input-bordered"></div> */}
            {/* <div class="input-item text-left"><input class="input-checkbox input-checkbox-md" id="term-condition" type="checkbox"><label for="term-condition">I agree to TokenWiz’s <a href="regular-page.html">Privacy Policy</a> &amp; <a href="regular-page.html"> Terms.</a></label></div> */}
            <button className="btn btn-primary btn-block">Sign In</button>
          </form>
          {/* <div class="sap-text"><span>Or Sign Up With</span></div>
              <ul class="row guttar-20px guttar-vr-20px">
                  <li class="col"><a href="#" class="btn btn-outline btn-dark btn-facebook btn-block"><em class="fab fa-facebook-f"></em><span>Facebook</span></a></li>
                  <li class="col"><a href="#" class="btn btn-outline btn-dark btn-google btn-block"><em class="fab fa-google"></em><span>Google</span></a></li>
              </ul>
              <div class="gaps-2x"></div>
              <div class="gaps-2x"></div> */}
          <div className="form-note">Dont have an account ? <Link to="/signup"> <strong>Sign up instead</strong></Link></div>
        </div>
      </AuthBase>
    );
  }
}

export default SignIn;
