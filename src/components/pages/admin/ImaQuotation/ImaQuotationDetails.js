import React, { useEffect, useState } from "react";
import { imaQuotationActions } from "../../../../redux/actions/imaQuotationActions";
import { connect } from "react-redux";
import Moment from "react-moment";

const ImaQuotationDetails = ({ quotation, getQuotation, match }) => {
  useEffect(() => {
    getQuotation({ id: match.params.id });
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
                  Devis
                </h6>
                {quotation && (
                  <p>
                    Créé le{" "}
                    <Moment format="DD/MM/YY">{quotation.created_at}</Moment> à
                    23h59
                  </p>
                )}
              </div>
              {quotation && quotation.user && (
                <table className="table table-striped">
                  <tbody>
                    <tr>
                      <td>DevisID</td>
                      <td>{quotation.id}</td>
                    </tr>
                    <tr>
                      <td>Code Postal</td>
                      <td>
                        {quotation.user ? quotation.user.postal_code : ""}
                      </td>
                    </tr>
                    <tr>
                      <td>Problématiques</td>
                      <td>{quotation.problem_type}</td>
                    </tr>
                    <tr>
                      <td>Précision 1</td>
                      <td>{quotation.precision_one}</td>
                    </tr>
                    <tr>
                      <td>Précision 2</td>
                      <td>{quotation.precision_two}</td>
                    </tr>
                    <tr>
                      <td>Précision 3</td>
                      <td>{quotation.precision_tree}</td>
                    </tr>
                    <tr>
                      <td>Jour intervention</td>
                      <td>
                        <Moment format="DD/MM/YY">
                          {quotation.intervention_date}
                        </Moment>
                      </td>
                    </tr>
                    <tr>
                      <td>Heure intervention</td>
                      <td>
                        <Moment format="HH:mm">{quotation.start_time}</Moment>
                      </td>
                    </tr>
                    <tr>
                      <td>Tarif</td>
                      <td>{quotation.cost}</td>
                    </tr>
                    <tr>
                      <td>UserID</td>
                      <td>{quotation.user.id}</td>
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
  quotation: state.imaQuotationReducer.quotation,
});

const mapDispatchToProps = (d) => ({
  getQuotation: (id) => d(imaQuotationActions.getQuotation(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImaQuotationDetails);
