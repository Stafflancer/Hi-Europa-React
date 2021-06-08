import React, {useEffect, useState} from 'react';
import {residentActions} from "../../../../redux/actions/residentActions";
import {connect} from "react-redux";
import Moment from "react-moment";

const ResidentDetails = ({getResident, resident, match}) => {

  useEffect(()=>{
    getResident(match.params.id);
  },[])

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
              {resident && <div>
                <h6 className="main-content-label mb-1 font-weight-bold text-danger">Resident</h6>
                <p>Créé le <Moment format="DD/MM/YY">{resident.created_at}</Moment> à <Moment format="h:mm">{resident.created_at}</Moment></p>
              </div>}
              {resident && <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>ResidentID</td>
                    <td>
                      {resident.id}
                    </td>
                  </tr>
                  <tr>
                    <td>ContractID</td>
                    <td>{resident.contract ? resident.contract.id : ''}</td>
                  </tr>
                  <tr>
                    <td>ContractID</td>
                    <td>{resident.contract ? resident.contract.id : ''}</td>
                  </tr>
                  <tr>
                    <td>Titre</td>
                    <td>{resident.title}</td>
                  </tr>
                  <tr>
                    <td>Nom</td>
                    <td>{resident.last_name}</td>
                  </tr>
                  <tr>
                    <td>Prénom</td>
                    <td>{resident.first_name}</td>
                  </tr>
                  <tr>
                    <td>Date d`anniversaire</td>
                    <td>{resident.birthday}</td>
                  </tr>
                  <tr>
                    <td>Statut</td>
                    <td>{resident.status}</td>
                  </tr>

                </tbody>
              </table>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    resident: state.residentReducer.resident,
  }
}

const mapDispatchToProps = d => ({
  getResident: (id) => d(residentActions.getResident(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResidentDetails);
