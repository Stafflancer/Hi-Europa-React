import React, { useEffect, useState } from "react";
import { interventionActions } from "../../../../redux/actions/interventionActions";
import { connect } from "react-redux";
import Moment from "react-moment";

const InterventionDetails = ({ getIntervention, intervention, match }) => {
  useEffect(() => {
    getIntervention({ id: match.params.id });
    console.log("intervention : ", intervention);
  }, []);

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5 font-weight-bold text-white">
            MRH
          </h2>
        </div>
        <div className="d-flex"></div>
      </div>
      <div className="row row-sm justify-content-center">
        <div className="col-xl-6 col-lg-8 col-md-12">
          <div className="card custom-card">
            <div className="card-body">
              <div>
                <h6 className="main-content-label mb-1 font-weight-bold text-danger">
                  Intervention
                </h6>
                <p>
                  Créé le{" "}
                  {intervention && (
                    <Moment format="DD/MM/YY">{intervention.created_at}</Moment>
                  )}{" "}
                  à 23h59
                </p>
              </div>
              {intervention && (
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>InterventionID</td>
                      <td>{intervention.id}</td>
                    </tr>
                    <tr>
                      <td>DevisID</td>
                      <td>
                        {intervention.user && intervention.user.quotation
                          ? intervention.user.quotation.id
                          : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>UserID</td>
                      <td>{intervention.user ? intervention.user.id : ""}</td>
                    </tr>
                    <tr>
                      <td>Code Postal</td>
                      <td>
                        {intervention.user ? intervention.user.postal_code : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>Adresse</td>
                      <td>{intervention.address}</td>
                    </tr>
                    <tr>
                      <td>Comp. adresse</td>
                      <td>{intervention.comp_address}</td>
                    </tr>
                    <tr>
                      <td>Ville</td>
                      <td>{intervention.city}</td>
                    </tr>
                    <tr>
                      <td>Présence</td>
                      <td>{intervention.insured ? "Oui" : "Non"}</td>
                    </tr>
                    <tr>
                      <td>Autre Nom</td>
                      <td>{intervention.other_person_first_name}</td>
                    </tr>
                    <tr>
                      <td>Autre Prénom</td>
                      <td>{intervention.other_person_last_name}</td>
                    </tr>
                    <tr>
                      <td>Autre téléphone</td>
                      <td>{intervention.other_person_phone}</td>
                    </tr>
                    <tr>
                      <td>Info Hi Europa</td>
                      <td>
                        {intervention.user
                          ? intervention.user.receive_info
                            ? "Oui"
                            : "Non"
                          : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>Créé le</td>
                      <td>{intervention.created_at}</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  intervention: state.interventionReducer.intervention,
});

const mapDispatchToProps = (d) => ({
  getIntervention: (id) => d(interventionActions.getIntervention(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InterventionDetails);
