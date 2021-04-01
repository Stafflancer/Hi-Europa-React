import React, {useState, useEffect} from 'react';
import defaultAvatar from "../../../../assets/img/users/default.png";
import {adminActions} from "../../../../redux/actions";
import {connect} from "react-redux";
import Modal from 'react-bootstrap/Modal'
import { ToastContainer, toast } from 'react-toastify';

const MyProfile = ({user, updatingUser, getUser, updateUser}) => {
  const [form, setForm] = useState({});
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);

  const handleCloseChangePasswordModal = () => setShowChangePasswordModal(false);
  const handleChangePasswordModal = (e) => {
    e.preventDefault();
    setShowChangePasswordModal(true)
  };

  useEffect(() => {
    Promise.resolve(getUser()).then(function (response) {
        setForm(response.data)
      })
  }, []);

  const handleChange = (e) => {
    let formData = form ;
    let newFormInput = {};
    const name =  e.target.name;
    const value =  e.target.value;
    newFormInput[name] = value;
    setForm({...formData, ...newFormInput});
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = form;
    if(formData) {
      Promise.resolve(updateUser(formData)).then(function (response) {
        toast.success('Successfully updated!', {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: false,
        });
      })
    }
  }

  return (
    <div>
      <div className="page-header">
        <div><h2 className="main-content-title tx-24 mg-b-5">Profile</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item active" aria-current="page">Profile</li>
          </ol>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
          </div>
        </div>
      </div>
      <div className="row square">
        <div className="col-lg-12 col-md-12">
          <div className="card custom-card">
            <div className="card-body">
              <div className="panel profile-cover py-5">
                <div className="profile-cover__img">
                <img src={defaultAvatar} alt="img"/><h3 className="h3">{user.name}</h3></div>
                <div className="btn-profile">
                  <h4>My Profile</h4>
                </div>
                <div className="profile-cover__action bg-img"></div>
                <div className="profile-cover__info">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row row-sm">
        <div className="col-lg-12 col-md-12">
          <div className="card custom-card main-content-body-profile">
            <div className="card-body border" data-select2-id="12">
              <div className="main-content-body tab-pane p-4 border-top-0 active" id="settings">
                <div className="card-body border" data-select2-id="12">
                  <form className="form-horizontal" data-select2-id="11" onSubmit={formSubmit}>
                    <div className="mb-4 main-content-label">Account</div>
                    <div className="form-group ">
                      <div className="row row-sm">
                        <div className="col-md-3"><label className="form-label">User Name</label></div>
                        <div className="col-md-9">
                          <input
                            required
                            type="text"
                            className="form-control"
                            placeholder="User Name"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group ">
                      <div className="row row-sm">
                        <div className="col-md-3"><label className="form-label">Email</label></div>
                        <div className="col-md-9">
                          <input
                            required
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    {/*<div className="mb-4 main-content-label">Secuirity Settings</div>*/}
                    {/*<div className="form-group ">*/}
                    {/*  <div className="row row-sm">*/}
                    {/*    <div className="col-md-3"><label className="form-label">Password</label></div>*/}
                    {/*    <div className="col-md-9"><a className="" href="#" onClick={e => handleChangePasswordModal(e)}>Change Password</a></div>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                    <div className="form-group ">
                      <div className="row row-sm">
                        <div className="col-md-3"></div>
                        <div className="col-md-9">
                          <button disabled={updatingUser} type="submit" className="btn btn-primary my-2 btn-icon-text">
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={showChangePasswordModal}
        onHide={handleCloseChangePasswordModal}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Change Password
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <p className="mg-b-10">Password</p>
              <input type="text" className="form-control" name="example-text-input" placeholder="Password"/>
            </div>
            <div className="form-group">
              <p className="mg-b-10">Confirm Password</p>
              <input type="text" className="form-control" name="example-text-input" placeholder="Confirm Password"/>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <ToastContainer/>
    </div>
)};

function mapStateToProps(state) {
  const { user, updatingUser } = state.adminReducer;
  return { user, updatingUser };
}

const mapDispatchToProps = d => ({
  getUser: () => d(adminActions.getUser()),
  updateUser: (data) => d(adminActions.updateUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);

