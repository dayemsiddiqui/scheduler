import React, { Component, Fragment } from 'react'
import Header from './../../components/header/Header'
class CreateJob extends Component {
  render () {
    return (
      <Fragment>
        <Header />
        <div className='page-content'>
          <div className='container'>
            <div className='row'>
              <div className='main-content col-lg-12'>
                <div className='d-lg-none'><a href='#' data-toggle='modal' data-target='#add-wallet' className='btn btn-danger btn-xl btn-between w-100 mgb-1-5x'>Add your wallet address before buy <em className='ti ti-arrow-right' /></a>
                  <div className='gaps-1x mgb-0-5x d-lg-none d-none d-sm-block' />
                </div>
                <div className='content-area card'>
                  <div className='card-innr'>
                    <div className='card-head'><span className='card-sub-title text-primary font-mid'>Step 1</span>
                      <h4 className='card-title'>Job Title</h4>
                    </div>
                    <div className='card-text'>
                      <p>Write the title of your job</p>
                    </div>
                    <div className='input-item input-with-label'>
                      <input className='input-bordered' type='text' id='full-name' name='full-name' defaultValue='3 * * * 5' />
                    </div>
                    <div className='card-head'><span className='card-sub-title text-primary font-mid'>Step 2</span>
                      <h4 className='card-title'>Job Description</h4>
                    </div>
                    <div className='card-text'>
                      <p>Give your job a meaningful description</p>
                    </div>
                    <div className='input-item input-with-label'>
                      <textarea className='input-bordered input-textarea' placeholder='Placeholder Text' spellCheck='true' style={{ zIndex: 'auto', position: 'relative', lineHeight: 20, fontSize: '13.5px', transition: 'none 0s ease 0s', background: 'none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)' }} defaultValue={''} />
                    </div>
                    <div className='card-head'><span className='card-sub-title text-primary font-mid'>Step 3</span>
                      <h4 className='card-title'>Enter URL endpoint</h4>
                    </div>
                    <div className='card-text'>
                      <p>Give your job a meaningful description</p>
                    </div>
                    <div className='input-item input-with-label'>
                      <input className='input-bordered' type='text' id='full-name' name='full-name' placeholder='http://yourwebsite.com/target/endpoint' />
                    </div>
                    <div className='card-head'><span className='card-sub-title text-primary font-mid'>Step 4</span>
                      <h4 className='card-title'>Choose HTTP Request Method</h4></div>
                    <div className='card-text'>
                      <p>You can pick any one of the four mehtods i.e GET, POST, PUT, DELETE.</p>
                    </div>
                    <div className='token-currency-choose'>
                      <div className='row guttar-15px'>
                        <div className='col-6'>
                          <div className='pay-option'>
                            <input className='pay-option-check' type='radio' id='payeth' name='payOption' defaultChecked />
                            <label className='pay-option-label' htmlFor='payeth'><span className='pay-title'><span className='pay-cur'>GET</span></span></label>
                          </div>
                        </div>
                        <div className='col-6'>
                          <div className='pay-option'>
                            <input className='pay-option-check' type='radio' id='paylte' name='payOption' />
                            <label className='pay-option-label' htmlFor='payeth'><span className='pay-title'><span className='pay-cur'>POST</span></span></label>
                          </div>
                        </div>
                        <div className='col-6'>
                          <div className='pay-option'>
                            <input className='pay-option-check' type='radio' id='paybtc' name='payOption' />
                            <label className='pay-option-label' htmlFor='payeth'><span className='pay-title'><span className='pay-cur'>PUT</span></span></label>
                          </div>
                        </div>
                        <div className='col-6'>
                          <div className='pay-option'>
                            <input className='pay-option-check' type='radio' id='payusd' name='payOption' />
                            <label className='pay-option-label' htmlFor='payeth'><span className='pay-title'><span className='pay-cur'>DELETE</span></span></label>
                          </div>
                        </div>
                      </div>
                      {/* .row */}
                      <div className='row'>
                        <div className='input-item input-with-label' style={{ width: '100%' }}>
                          <label>Request payload for POST</label>
                          <textarea className='input-bordered input-textarea' placeholder='Placeholder Text' spellCheck='true' style={{ zIndex: 'auto', position: 'relative', lineHeight: 20, fontSize: '13.5px', transition: 'none 0s ease 0s', background: 'none 0% 0% / auto repeat scroll padding-box border-box rgb(255, 255, 255)' }} defaultValue={''} />
                        </div>
                      </div>
                    </div>
                    <div className='card-head'><span className='card-sub-title text-primary font-mid'>Step 5</span>
                      <h4 className='card-title'>CRON Expression</h4>
                    </div>
                    <div className='card-text'>
                      <p>Enter the cron expression for your job.</p>
                    </div>
                    <div className='input-item input-with-label'>
                      <input className='input-bordered' type='text' id='full-name' name='full-name' defaultValue='3 * * * 5' />
                    </div>
                    <div className='token-overview-wrap'>
                      <div className='token-overview'>
                        <div className='row'>
                          <div className='col-md-4 col-sm-6'>
                            <div className='token-bonus token-bonus-sale'><span className='token-overview-title'>+ 20% Sale Bonus</span><span className='token-overview-value bonus-on-sale'>15,000.00</span></div>
                          </div>
                          <div className='col-md-4 col-sm-6'>
                            <div className='token-bonus token-bonus-amount'><span className='token-overview-title'>+ 30% Amount Bonus</span><span className='token-overview-value bonus-on-amount'>5,000.00</span></div>
                          </div>
                          <div className='col-md-4'>
                            <div className='token-total'><span className='token-overview-title font-bold'>Total TWZ</span><span className='token-overview-value token-total-amount text-primary'>1,823,500.84</span></div>
                          </div>
                        </div>
                      </div>
                      <div className='note note-plane note-danger note-sm pdt-1x pl-0'>
                        <p>Your Contribution will be calculated based on exchange rate at the moment your transaction is confirm.</p>
                      </div>
                    </div>
                    <div className='pay-buttons'>
                      <div className='pay-button'><a href='#' data-toggle='modal' data-target='#pay-online' className='btn btn-primary btn-between w-100'>Schedule Job <em className='ti ti-arrow-right' /></a></div>
                    </div>
                    <div className='pay-notes'>
                      <div className='note note-plane note-light note-md font-italic'><em className='fas fa-info-circle' />
                        <p>Please note that, URL endpoint that do not respond with a success status of 200 will be automatically disabled after 1 week. </p>
                      </div>
                    </div>
                  </div>
                  {/* .card-innr */}
                </div>
                {/* .content-area */}
              </div>
            </div>
            {/* .container */}
          </div>
          {/* .container */}
        </div>
      </Fragment>
    )
  }
}

export default CreateJob
