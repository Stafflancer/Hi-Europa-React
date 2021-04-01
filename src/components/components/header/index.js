import React from 'react'
import { connect } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';
import defaultAvatar from "../../../assets/img/users/default.png";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { authActions } from "../../../redux/actions";
import { Link } from "react-router-dom";

const Header = ({ user, logout }) => {
  const SignOutSwal = withReactContent(Swal);

  const confirmSignOut = () => {
    SignOutSwal.fire({
      title: 'Are you want to sign out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then( async () => {
      logout()
    })
  }

  return (
    <div className="main-header side-header sticky sticky-pin">
      <div className="container-fluid">
        <div className="main-header-left">
        </div>
        <div className="main-header-center">
          <div className="responsive-logo">
            <a href=""><img src="" className="mobile-logo" alt="logo"/></a>
            <a href=""><img src="" className="mobile-logo-dark" alt="logo"/></a>
          </div>
          <div className="input-group">
          </div>
        </div>
        <div className="main-header-right">
          <div className="dropdown header-search">
            <a className="nav-link icon header-search">
              <i className="fe fe-search header-icons"></i>
            </a>
            <div className="dropdown-menu">
              <div className="main-form-search p-2">
                <div className="input-group">
                  <div className="input-group-btn search-panel">
                    <select className="form-control select2-no-search">
                      <option label="All categories">
                      </option>
                      <option value="IT Projects">
                        IT Projects
                      </option>
                      <option value="Business Case">
                        Business Case
                      </option>
                      <option value="Microsoft Project">
                        Microsoft Project
                      </option>
                      <option value="Risk Management">
                        Risk Management
                      </option>
                      <option value="Team Building">
                        Team Building
                      </option>
                    </select>
                  </div>
                  <input type="search" className="form-control" placeholder="Search for anything..."/>
                    <button className="btn search-btn">
                      <i className="fe fe-search"></i>
                    </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown d-md-flex">
          </div>
          <div className="dropdown main-header-notification">

            <div className="dropdown-menu">
              <div className="header-navheading">
                <p className="main-notification-text">You have 1 unread notification<span
                  className="badge badge-pill badge-primary ml-3">View all</span></p>
              </div>
              <div className="main-notification-list">
                <div className="media new">
                  <div className="main-img-user online"></div>
                  <div className="media-body">
                    <p>Congratulate <strong>Olivia James</strong> for New template start</p><span>Oct 15 12:32pm</span>
                  </div>
                </div>
                <div className="media">
                  <div className="main-img-user"></div>
                  <div className="media-body">
                    <p><strong>Joshua Gray</strong> New Message Received</p><span>Oct 13 02:56am</span>
                  </div>
                </div>
                <div className="media">
                  <div className="main-img-user online">

                  </div>
                  <div className="media-body">
                    <p><strong>Elizabeth Lewis</strong> added new schedule realease</p><span>Oct 12 10:40pm</span>
                  </div>
                </div>
              </div>
              <div className="dropdown-footer">
                <a href="#">View All Notifications</a>
              </div>
            </div>
          </div>
          <div className="main-header-notification">
          </div>
          <Dropdown>
            <Dropdown.Toggle className="bg-white border-0 p-0" id="dropdown-basic">
              <span className="main-img-user">
                <img alt="avatar" src={defaultAvatar}/>
              </span>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item eventKey="3" href="/admin/my-profile">
                <i class="fe fe-user"></i> My Profile
              </Dropdown.Item>
              <Dropdown.Item eventKey="1"><span  onClick={confirmSignOut}> <i  class="fe fe-power"></i> Sign Out</span></Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>

)
}

function mapStateToProps(state) {
  const { user } = state.adminReducer;
  return { user };
}

const mapDispatchToProps = d => ({
  logout: () => d(authActions.logout()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);
