import React, { useState } from 'react';
import logo from "../../../../assets/img/brand/logo.png";
import {connect} from "react-redux";
import { authActions } from "../../../../redux/actions/authActions";
import loginLogo from "../../../../assets/img/svgs/user.svg";
import { useHistory } from "react-router-dom";

const SignIn = (props) => {
  let history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(!showPassword);
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    let formData = form ;
    let newFormInput = {};
    const name =  e.target.name;
    const value =  e.target.value;
    newFormInput[name] = value;
    setForm({...formData, ...newFormInput});
  };

  const loginSubmit = async (e) => {
    e.preventDefault();
    const formData = form;
    if(formData) {
      await props.login(formData);
    }
  }

  return (
    <div className="row signpages text-center">
      <div className="col-md-12">
        <div className="card">
          <div className="row row-sm">
            <div className="col-lg-6 col-xl-5 d-none d-lg-block text-center bg-primary details">
              <div className="mt-5 pt-4 p-2 pos-absolute">
                <div className="clearfix"></div>
                <img src={loginLogo} className="ht-100 mb-0" alt="login"/>
                <h5 className="mt-4 text-white">Sign in Your Account</h5>
                <span className="tx-white-6 tx-13 mb-5 mt-xl-0">Sign up to create, discover and connect with the global community</span>
              </div>
            </div>
            <div className="col-lg-6 col-xl-7 col-xs-12 col-sm-12 login_form ">
              <div className="container-fluid">
                <div className="row row-sm">
                  <div className="card-body mt-2 mb-2">
                    <form action="" onSubmit={loginSubmit}>
                      <img src={logo} className=" d-lg-none header-brand-img text-left float-left mb-4" alt="logo"/>
                      <h5 className="text-left mb-2 mt-0">Sign in to Your Account</h5>
                      <p className="mb-4 text-muted tx-13 ml-0 text-left">Sign in to create, discover and connect with the global community</p>
                      <div className="form-group text-left">
                        <label htmlFor='email'>Email</label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          className="form-control fs-16"
                          placeholder="Enter your email"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div  className="form-group text-left">
                        <label htmlFor='password'>Password</label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="form-control fs-16"
                          placeholder="Enter your password"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <button type="submit" className="btn ripple btn-main-primary btn-block" disabled={props.loggingIn}>Sign In</button>
                      <small className="text-danger">{props.failure}</small>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

function mapStateToProps(state) {
  const { loggingIn, loggedIn, failure } = state.authReducer;
  return { loggingIn, loggedIn, failure };
}

const mapDispatchToProps = d => ({
  login: (data) => d(authActions.login(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

