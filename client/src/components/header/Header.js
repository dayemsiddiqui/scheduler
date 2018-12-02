import React, { Component } from 'react'
import Navigation from './Navigation'

class Header extends Component {
  render () {
    return (
      <div className='topbar-wrap'>
        <div className='topbar is-sticky'>
          <div className='container'>
            <div className='d-flex justify-content-between align-items-center'>
              <a className='topbar-logo' href='./'><h1 style={{ color: 'white', fontSize: 25 }}>SimpliCron</h1></a>
              <ul className='topbar-nav'>
                <li className='topbar-nav-item relative'><span className='user-welcome d-none d-lg-inline-block'>Welcome! Stefan Harary</span><a className='toggle-tigger user-thumb' href='#'><em className='ti ti-user' /></a>
                  <div className='toggle-class dropdown-content dropdown-content-right dropdown-arrow-right user-dropdown'>
                    <ul className='user-links'>
                      <li><a href='profile.html'><i className='ti ti-id-badge' />My Profile</a></li>
                      <li><a href='#'><i className='ti ti-infinite' />Referral</a></li>
                      <li><a href='#'><i className='ti ti-eye' />Activity</a></li>
                    </ul>
                    <ul className='user-links bg-light'>
                      <li><a href='sign-in.html'><i className='ti ti-power-off' />Logout</a></li>
                    </ul>
                  </div>
                </li>
                {/* .topbar-nav-item */}
              </ul>
              {/* .topbar-nav */}
            </div>
          </div>
          {/* .container */}
        </div>
        <Navigation />
      </div>
    )
  }
}

export default Header
