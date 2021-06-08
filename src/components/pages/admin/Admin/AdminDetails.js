import React, {useEffect, useState} from 'react';
import {adminActions} from "../../../../redux/actions";
import {connect} from "react-redux";
import Moment from "react-moment";

const AdminDetails = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({});
  const [form, setForm] = useState({});

  useEffect(()=>{
     if (props.match.params.id !== 'add') {
      setIsEdit(true)
      Promise.resolve(props.getUser({id: props.match.params.id})).then(function (response) {
        setForm(response.data.data)
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
      console.log(isEdit);
      if(isEdit){
        console.log(5555);
        await Promise.resolve(props.updateUser({data: formData, id: props.match.params.id})).then(res => {
          props.history.push('/admin/admin');

        })
      }else{
        await Promise.resolve(props.createUser(formData)).then((res) => {
          props.history.push('/admin/admin');
        })
      }
    }
  }

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5 font-weight-bold text-white">MRH</h2>
        </div>
        <div className="d-flex">


        </div>
      </div>
      <div className="row row-sm justify-content-center">
        <div className="col-xl-6 col-lg-8 col-md-12">
          <div className="card custom-card">
            <div className="card-body">
              <form action="" onSubmit={userAddOrUpdate}>
                <div  className="form-group text-left">
                  <label htmlFor='last_name' className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control fs-16"
                    placeholder="Enter Name"
                    onChange={handleChange}
                    value={form.name}
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
                    placeholder="Enter Email"
                    onChange={handleChange}
                    value={form.email}
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
                    placeholder="Enter Password"
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
                    placeholder="Enter Confirm Password"
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
    user: state.adminReducer.user,
  }
}

const mapDispatchToProps = d => ({
  getUser: (id) => d(adminActions.getUser(id)),
  updateUser: (data) => d(adminActions.updateUser(data)),
  createUser: (data) => d(adminActions.createUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminDetails);
