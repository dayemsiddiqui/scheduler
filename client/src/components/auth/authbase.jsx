import React from 'react';

const AuthBase = ({ children }) => (
  <div className="page-ath-wrap">
    <div className="page-ath-content">
      <div className="page-ath-header"><a href="./" className="page-ath-logo"><h1 style={{ fontSize: 50 }}>SimpliCron</h1></a></div>

      { children }

      <div className="page-ath-footer">
        <ul className="footer-links">
          <li><a href="regular-page.html">Privacy Policy</a></li>
          <li><a href="regular-page.html">Terms</a></li>
          <li>© 2018 SimpliCron.</li>
        </ul>
      </div>
    </div>
    <div className="page-ath-gfx">
      <div className="w-100 d-flex justify-content-center">
        <div className="col-md-8 col-xl-5"><img src="images/ath-gfx.png" alt="sideImage" /></div>
      </div>
    </div>
  </div>
);

export default AuthBase;
