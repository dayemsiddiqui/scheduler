import React from 'react';

const JobComponent = () => (
  <div className="page-content">
    <div className="container">
      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="token-transaction card card-full-height">
            <div className="card-innr">
              <div className="card-head has-aside">
                <h4 className="card-title">My Jobs</h4>
                <div className="card-opt">
                  <a href="transactions.html" className="link ucap">
                          Create New
                    {' '}
                    <em className="fas fa-angle-right ml-2" />
                  </a>

                </div>
              </div>
              <table className="table tnx-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Endpoint</th>
                    <th className="d-none d-sm-table-cell tnx-date">Next Ping</th>
                    <th>Status</th>
                    <th>Actions</th>
                    <th className="tnx-type">
                      <div className="tnx-type-text" />
                    </th>
                  </tr>
                  {/* tr */}
                </thead>
                {/* thead */}
                <tbody>
                  <tr>
                    <td>KiboMessage</td>
                    <td>http://app.kibopush.com/api/webhook/engage</td>
                    <td className="d-none d-sm-table-cell tnx-date"><span className="sub sub-s2">2018-08-24 10:20 PM</span></td>
                    <td>Active</td>
                    <td className="tnx-type"><span className="tnx-type-md badge badge-outline badge-success badge-md">Details</span></td>
                  </tr>
                  {/* tr */}
                  <tr>
                    <td>KiboMessage</td>
                    <td>http://app.kibopush.com/api/webhook/engage</td>
                    <td className="d-none d-sm-table-cell tnx-date"><span className="sub sub-s2">2018-08-24 10:20 PM</span></td>
                    <td>Active</td>
                    <td className="tnx-type"><span className="tnx-type-md badge badge-outline badge-success badge-md">Details</span></td>
                  </tr>
                  {/* tr */}
                  <tr>
                    <td>KiboMessage</td>
                    <td>http://app.kibopush.com/api/webhook/engage</td>
                    <td className="d-none d-sm-table-cell tnx-date"><span className="sub sub-s2">2018-08-24 10:20 PM</span></td>
                    <td>Active</td>
                    <td className="tnx-type"><span className="tnx-type-md badge badge-outline badge-success badge-md">Details</span></td>
                  </tr>
                  {/* tr */}
                  <tr>
                    <td>KiboMessage</td>
                    <td>http://app.kibopush.com/api/webhook/engage</td>
                    <td className="d-none d-sm-table-cell tnx-date"><span className="sub sub-s2">2018-08-24 10:20 PM</span></td>
                    <td>Active</td>
                    <td className="tnx-type"><span className="tnx-type-md badge badge-outline badge-success badge-md">Details</span></td>
                  </tr>
                  {/* tr */}
                </tbody>
                {/* tbody */}
              </table>
              {/* .table */}
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* .container */}
  </div>
);

export default JobComponent;
