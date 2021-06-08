import React, {useEffect, useState} from 'react';
import {resiliationActions} from "../../../../redux/actions/resiliationActions";
import {connect} from "react-redux";
import Moment from "react-moment";

const ResiliationDetails = (props) => {
  const [resiliation, setResiliation] = useState({});

  useEffect(()=>{
    props.getRsiliation(props.match.params.id);
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
              <div>
                <h6 className="main-content-label mb-1 font-weight-bold text-danger">Devis</h6>
                <p>Créé le <Moment format="DD/MM/YY">{resiliation.created_at}</Moment> à <Moment format="h:mm">{resiliation.created_at}</Moment></p>
              </div>
              {(props.resiliation && props.resiliation.user) && <table className="table table-striped">
                <tbody>
                  <tr>
                    <td>ResiliationID</td>
                    <td>
                      {props.resiliation.id}
                    </td>
                  </tr>
                  <tr>
                    <td>ContractID</td>
                    <td>{props.resiliation.user.contract.id}</td>
                  </tr>
                  <tr>
                    <td>Déménagement</td>
                    <td>{props.resiliation.moving_out}</td>
                  </tr>
                  <tr>
                    <td>Assureur</td>
                    <td>{props.resiliation.insurance_company_name}</td>
                  </tr>
                  <tr>
                    <td>Date souscription</td>
                    <td>
                      <Moment format="DD/MM/YY">
                        {props.resiliation.subscription_date}
                      </Moment>
                    </td>
                  </tr>
                  <tr>
                    <td>Prénom assuré</td>
                    <td>
                      {props.resiliation.user.first_name}
                    </td>
                  </tr>
                  <tr>
                    <td>Nom assuré</td>
                    <td>
                      {props.resiliation.user.last_name}
                    </td>
                  </tr>
                  <tr>
                    <td>Numéro contrat</td>
                    <td>
                      {props.resiliation.previous_contract}
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
    resiliation: state.resiliationReducer.resiliation,
  }
}

const mapDispatchToProps = d => ({
  getRsiliation: (id) => d(resiliationActions.getRsiliation(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResiliationDetails);
