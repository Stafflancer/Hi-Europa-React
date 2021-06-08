import React, {useEffect, useState} from 'react';
import {userActions} from "../../../../redux/actions";
import {connect} from "react-redux";
import Moment from "react-moment";

const UsersDetails = (props) => {
  const [isEdit, setIsEdit] = useState(false);
  const [user, setUser] = useState({});

  useEffect(()=>{
      Promise.resolve(props.editUser({id: props.match.params.id})).then(function (response) {
        setUser(response.data)
      }).catch(err => {
      })
  },[])

  // const handleChange = (e) => {
  //   let formData = form ;
  //   let newFormInput = {};
  //   const name =  e.target.name;
  //   const value =  e.target.value;
  //   newFormInput[name] = value;
  //   setForm({...formData, ...newFormInput});
  // };
  //
  // const userAddOrUpdate = async (e) => {
  //   e.preventDefault();
  //   const formData = form;
  //   if(formData) {
  //     if(isEdit){
  //       await Promise.resolve(props.updateUser(formData)).then(res => {
  //         if(res){
  //           props.history.push('/user');
  //         }
  //       })
  //     }else{
  //       await Promise.resolve(props.createUser(formData)).then((res) => {
  //         if(res){
  //           props.history.push('/user');
  //         }
  //       })
  //     }
  //   }
  // }

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
              <div>
                <h6 className="main-content-label mb-1 font-weight-bold text-danger">Informations personnelles</h6>
                <p>Créé le <Moment format="DD/MM/YY">{user.created_at}</Moment> à 23h59</p>
              </div>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>UserID  </td>
                    <td>{user.id}</td>
                  </tr>
                  <tr>
                    <td>Titre</td>
                    <td>{user.title}</td>
                  </tr>
                  <tr>
                    <td>Nom</td>
                    <td>{user.first_name}</td>
                  </tr>
                  <tr>
                    <td>Prénom  </td>
                    <td>{user.last_name}</td>
                  </tr>
                  <tr>
                    <td>Email    </td>
                    <td>{user.email}</td>
                  </tr>
                  <tr>
                    <td>Téléphone    </td>
                    <td>{user.phone_number}</td>
                  </tr>
                  <tr>
                    <td>Télépehone fixe</td>
                    <td>{user.phone_number}</td>
                  </tr>
                  <tr>
                    <td>Date d’anniversaire</td>
                    <td>{user.birthday}</td>
                  </tr>
                  <tr>
                    <td>Code Postal</td>
                    <td>{user.postal_code}</td>
                  </tr>
                  <tr>
                    <td>Adresse  </td>
                    <td>{user.address}</td>
                  </tr>
                  <tr>
                    <td>Ville  </td>
                    <td>{user.city}</td>
                  </tr>
                  <tr>
                    <td>DevisID  </td>
                    <td>{user.quotation ? user.quotation.id : ""}</td>
                  </tr>
                  <tr>
                    <td>ContratID  </td>
                    <td>{user.contract ? user.contract.id : ""}</td>
                  </tr>
                  <tr>
                    <td>Pb. Prime  </td>
                    <td>{user.insurance_payed ? "Oui": "Non"}</td>
                  </tr>
                  <tr>
                    <td>RésiliationID  </td>
                    <td>--</td>
                  </tr>
                  <tr>
                    <td>Info Hi Europa</td>
                    <td>{user.receive_info}</td>
                  </tr>
                </tbody>
              </table>
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

export default connect(mapStateToProps, mapDispatchToProps)(UsersDetails);
