import React, {useEffect, useState} from 'react';
import {imaUserActions} from "../../../../redux/actions";
import {connect} from "react-redux";
import Moment from "react-moment";

const ImaUsersDetails = ({match, getUser, user}) => {

  useEffect(()=>{
    getUser({id: match.params.id})
  },[])

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5 font-weight-bold text-white">MRH</h2>
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
                    <td>Type prospect</td>
                    <td>{user.prospect_type}</td>
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
    user: state.imaUserReducer.user,
  }
}

const mapDispatchToProps = d => ({
  getUser: (id) => d(imaUserActions.getUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImaUsersDetails);
