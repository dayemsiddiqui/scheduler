import React, { Component } from 'react'

class Navigation extends Component {
  render () {
    return (
      <div className='navbar'>
        <div className='container'>
          <div className='d-lg-flex justify-content-between align-items-center w-100'>
            <ul className='navbar-menu'>
              <li><a href='index.html'><em className='ikon ikon-dashboard' /> Dashboard</a></li>
              <li><a href='buy-token.html'><em className='ikon ikon-coins' /> Create Jobs</a></li>
              <li><a href='ico-distribution.html'><em className='ikon ikon-distribution' /> Settings</a></li>
            </ul>
            <ul className='navbar-btns'>
              <li><a href='kyc-application.html' className='btn btn-sm btn-outline btn-light'><span>Logout</span></a></li>
            </ul>
          </div>
        </div>
        {/* .container */}
      </div>
    )
  }
}

export default Navigation
