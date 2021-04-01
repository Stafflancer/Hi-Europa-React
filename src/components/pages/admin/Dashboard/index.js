import React from 'react';
import {connect} from "react-redux";
import defaultAvatar from "../../../../assets/img/users/default.png";
import workerImg from "../../../../assets/img/pngs/work3.png";

const Dashboard = () => {
  return (
    <div>
      <div className="page-header">
        <div><h2 className="main-content-title tx-24 mg-b-5">Welcome To Hi Europa
          Admin</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li aria-current="page" className="breadcrumb-item active">Project Dashboard</li>
          </ol>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
          </div>
        </div>
      </div>
      <div className="row row-sm">
        <div className="col-sm-12 col-lg-12 col-xl-8">
          <div className="row row-sm  mt-lg-4">
            <div className="col-sm-12 col-lg-12 col-xl-12">
              <div className="card bg-primary custom-card card-box">
                <div className="card-body p-0">
                  <div className="d-md-flex align-items-center">
                    <div className="ml-md-4">
                      <div className="p-4 p-md-0"><h4 className="d-flex  mb-3"><span
                        className="font-weight-bold text-white ">Hi Europa</span></h4><p
                        className="tx-white-7 mb-1">Hi Europa admin panel</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-sm">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="card custom-card">
                <div className="card-body">
                  <div className="card-item">
                    <div className="card-item-icon card-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                          d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z"
                          opacity=".3"></path>
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path>
                      </svg>
                    </div>
                    <div className="card-item-title mb-2"><label
                      className="main-content-label tx-13 font-weight-bold mb-1">Total User</label><span
                      className="d-block tx-12 mb-0 text-muted">Total Users in Language to go</span></div>
                    <div className="card-item-body">
                      <div className="card-item-stat"><h4 className="font-weight-bold">52</h4></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="card custom-card">
                <div className="card-body">
                  <div className="card-item">
                    <div className="card-item-icon card-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M0 0h24v24H0V0z" fill="none"></path>
                        <path
                          d="M12 4c-4.41 0-8 3.59-8 8 0 1.82.62 3.49 1.64 4.83 1.43-1.74 4.9-2.33 6.36-2.33s4.93.59 6.36 2.33C19.38 15.49 20 13.82 20 12c0-4.41-3.59-8-8-8zm0 9c-1.94 0-3.5-1.56-3.5-3.5S10.06 6 12 6s3.5 1.56 3.5 3.5S13.94 13 12 13z"
                          opacity=".3"></path>
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path>
                      </svg>
                    </div>
                    <div className="card-item-title mb-2">
                      <div className="d-flex justify-content-between"><label
                        className="main-content-label tx-13 font-weight-bold mb-1">New Users</label>
                      </div>
                      <span className="d-block tx-12 mb-0 text-muted">Users joined this day</span></div>
                    <div className="card-item-body">
                      <div className="card-item-stat"><h4 className="font-weight-bold">0</h4></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-sm">
          </div>
        </div>
        <div className="col-sm-12 col-lg-12 col-xl-4 mt-xl-4">
          <div className="card custom-card card-dashboard-calendar pb-0"><label
            className="main-content-label mb-2 pt-1">New Users</label><span className="d-block tx-12 mb-2 text-muted">New last 6 users.</span>
            <table className="table table-hover m-b-0 transcations mt-2">
              <tbody>
              <tr>
                <td className="wd-5p">
                  <div className="main-img-user avatar-md">
                  </div>
                </td>
                <td>
                  <div className="d-flex align-middle ml-3">
                    <div className="d-inline-block"><h6 className="mb-1">aa</h6><p
                      className="mb-0 tx-13 text-muted">aaaa@mail.ru</p></div>
                  </div>
                </td>
                <td className="text-right">
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">February 22nd 2021</p></div>
                </td>
              </tr>
              <tr>
                <td className="wd-5p">
                  <div className="main-img-user avatar-md">
                  </div>
                </td>
                <td>
                  <div className="d-flex align-middle ml-3">
                    <div className="d-inline-block"><h6 className="mb-1">Test</h6><p
                      className="mb-0 tx-13 text-muted">Test@Test.ru</p></div>
                  </div>
                </td>
                <td className="text-right">
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">February 22nd 2021</p></div>
                </td>
              </tr>
              <tr>
                <td className="wd-5p">
                  <div className="main-img-user avatar-md"></div>
                </td>
                <td>
                  <div className="d-flex align-middle ml-3">
                    <div className="d-inline-block"><h6 className="mb-1">Dr. Willy Schmitt</h6><p
                      className="mb-0 tx-13 text-muted">evalyn.mante@example.org</p></div>
                  </div>
                </td>
                <td className="text-right">
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">February 21st 2021</p></div>
                </td>
              </tr>
              <tr>
                <td className="wd-5p">
                  <div className="main-img-user avatar-md"></div>
                </td>
                <td>
                  <div className="d-flex align-middle ml-3">
                    <div className="d-inline-block"><h6 className="mb-1">Mr. Zackery Baumbach</h6><p
                      className="mb-0 tx-13 text-muted">annabel39@example.net</p></div>
                  </div>
                </td>
                <td className="text-right">
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">February 21st 2021</p></div>
                </td>
              </tr>
              <tr>
                <td className="wd-5p">
                  <div className="main-img-user avatar-md">
                  </div>
                </td>
                <td>
                  <div className="d-flex align-middle ml-3">
                    <div className="d-inline-block"><h6 className="mb-1">Jacklyn Koss</h6><p
                      className="mb-0 tx-13 text-muted">xcummerata@example.com</p></div>
                  </div>
                </td>
                <td className="text-right">
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">February 21st 2021</p></div>
                </td>
              </tr>
              <tr>
                <td className="wd-5p">
                  <div className="main-img-user avatar-md">
                  </div>
                </td>
                <td>
                  <div className="d-flex align-middle ml-3">
                    <div className="d-inline-block"><h6 className="mb-1">Maeve Dach</h6><p
                      className="mb-0 tx-13 text-muted">tstreich@example.org</p></div>
                  </div>
                </td>
                <td className="text-right">
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">February 21st 2021</p></div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
      </div>
    </div>
  </div>
)
};

export default connect(null, null)(Dashboard);

