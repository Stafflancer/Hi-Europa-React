import React, {useEffect, useState} from 'react';
import {prospectActions} from "../../../../redux/actions/prospectActions";
import {connect} from "react-redux";
import Moment from "react-moment";

const ProspectDetails = ({prospect, match, getProspect}) => {

  useEffect(()=>{
    getProspect(match.params.id);
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
              {prospect && <div>
                <h6 className="main-content-label mb-1 font-weight-bold text-danger">Prospect</h6>
                <p>Créé le <Moment format="DD/MM/YY">{prospect.created_at}</Moment> à <Moment format="h:mm">{prospect.created_at}</Moment></p>
              </div>}

              {(prospect && prospect.contract && prospect.contract.user) && <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>ProspectID</td>
                    <td>
                      {prospect.id}
                    </td>
                  </tr>
                  <tr>
                    <td>Postal code</td>
                    <td>
                      {prospect.contract.user.postal_code}
                    </td>
                  </tr>
                  <tr>
                    <td>Email</td>
                    <td>
                      {prospect.contract.user.email}
                    </td>
                  </tr>
                  <tr>
                    <td>Type logement</td>
                    <td>
                      {prospect.residency_type}
                    </td>
                  </tr>
                  <tr>
                    <td>Type Prospect</td>
                    <td>
                      {prospect.prospect_type}
                    </td>
                  </tr>
                  <tr>
                    <td>Type résidence</td>
                    <td>
                      {prospect.residence_type}
                    </td>
                  </tr>
                  <tr>
                    <td>Etage</td>
                    <td>
                      {prospect.floor}
                    </td>
                  </tr>
                  <tr>
                    <td>Surface</td>
                    <td>
                      {prospect.surface}
                    </td>
                  </tr>
                  <tr>
                    <td>Pièces</td>
                    <td>
                      {prospect.number_rooms}
                    </td>
                  </tr>
                  <tr>
                    <td>Assuré</td>
                    <td>
                      {prospect.got_insurance ? "Oui": "Non"}
                    </td>
                  </tr>
                  <tr>
                    <td>Historique</td>
                    <td>
                      {prospect.live_there_time}
                    </td>
                  </tr>
                  <tr>
                    <td>Durée</td>
                    <td>
                      {prospect.insured_time}
                    </td>
                  </tr>
                  <tr>
                    <td>Info Hi Europa</td>
                    <td>
                      {prospect.receive_info ? "Oui": "Non"}
                    </td>
                  </tr>
                  <tr>
                    <td>Créé le</td>
                    <td>
                      <Moment format="DD/MM/YY">
                        {prospect.created_at}
                      </Moment>
                    </td>
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
    prospect: state.prospectReducer.prospect,
  }
}

const mapDispatchToProps = d => ({
  getProspect: (id) => d(prospectActions.getProspect(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProspectDetails);
