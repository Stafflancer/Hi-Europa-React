import React from 'react';

const NotFound = () => {
  return (
    <div>
      <div className="page main-signin-wrapper construction">
        <div className="container ">
          <div className="construction1 text-center details text-white">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <h1 className="tx-140 mb-0">404</h1></div>
              <div className="col-lg-12"><h1>Oops.The Page you are looking for doesn't exit..</h1>
                <h6 className="tx-15 mt-3 mb-4 text-white-50">
                  You may have mistyped the address or the page may have moved.
                  Try searching below.
                </h6>
                <a className="btn ripple btn-success text-center" href="/">Back to Home</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};


export default NotFound;

