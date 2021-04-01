import React, {useEffect, useState} from 'react';
import {userActions} from "../../../../redux/actions";
import {connect} from "react-redux";

const UsersAdd = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [form, setForm] = useState({});

  useEffect(()=>{
    if(props.match.params.id === 'add'){
      setIsEdit(false)
    }else{
      setIsEdit(true)
      Promise.resolve(props.editUser({id: props.match.params.id})).then(function (response) {
        setForm(response.data)
      }).catch(err => {

      })
    }
  },[])

  const handleChange = (e) => {
    let formData = form ;
    let newFormInput = {};
    const name =  e.target.name;
    const value =  e.target.value;
    newFormInput[name] = value;
    setForm({...formData, ...newFormInput});
  };

  const userAddOrUpdate = async (e) => {
    e.preventDefault();
    const formData = form;
    if(formData) {
      if(isEdit){
        await Promise.resolve(props.updateUser(formData)).then(res => {
          if(res){
            props.history.push('/user');
          }
        })
      }else{
        await Promise.resolve(props.createUser(formData)).then((res) => {
          if(res){
            props.history.push('/user');
          }
        })
      }
    }
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5">{isEdit ? 'Edit User' : 'Add User'}</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item active" aria-current="page">{isEdit ? 'Edit User' : 'Add User'}</li>
          </ol>
        </div>
        <div className="d-flex">
        </div>
      </div>
      <div className="row row-sm justify-content-center">
        <div className="col-xl-6 col-lg-8 col-md-12">
          <div className="card custom-card">
            <div className="card-body">
              <div>
                <h6 className="main-content-label mb-1">User</h6>
              </div>
              <form action="" onSubmit={userAddOrUpdate}>
                <div className="form-group text-left">
                  <label htmlFor='first_name' className="form-label">First Name</label>
                  <input
                    id="first_name"
                    type="text"
                    name="first_name"
                    className="form-control fs-16"
                    placeholder="Enter your First Name"
                    onChange={handleChange}
                    value={form.first_name}
                    required
                  />
                </div>
                <div  className="form-group text-left">
                  <label htmlFor='last_name' className="form-label">Last Name</label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    className="form-control fs-16"
                    placeholder="Enter your Last Name"
                    onChange={handleChange}
                    value={form.last_name}
                    required
                  />
                </div>
                <div  className="form-group text-left">
                  <label htmlFor='email' className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control fs-16"
                    placeholder="Enter your Email"
                    onChange={handleChange}
                    value={form.email}
                    required
                  />
                </div>
                <div  className="form-group text-left">
                  <label htmlFor='phone_number' className="form-label">Phone Number</label>
                  <input
                    type="text"
                    id="phone_number"
                    name="phone_number"
                    className="form-control fs-16"
                    placeholder="Enter your Phone Number"
                    onChange={handleChange}
                    value={form.phone_number}
                    required
                  />
                </div>
                <div  className="form-group text-left">
                  <label htmlFor='password' className="form-label">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control fs-16"
                    placeholder="Enter your Password"
                    onChange={handleChange}
                  />
                </div>
                <div  className="form-group text-left">
                  <label htmlFor='password_confirmation' className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    id="password_confirmation"
                    name="password_confirmation"
                    className="form-control fs-16"
                    placeholder="Enter your Confirm Password"
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn ripple btn-main-primary btn-block">Submit</button>
                </div>
                <div className="text-danger text-center">{props.getUserFailure}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    user: state.userReducer.user,
    getUserFailure: state.userReducer.getUserFailure,
  }
}

const mapDispatchToProps = d => ({
  editUser: (id) => d(userActions.editUser(id)),
  updateUser: (data) => d(userActions.updateUser(data)),
  createUser: (data) => d(userActions.createUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersAdd);
