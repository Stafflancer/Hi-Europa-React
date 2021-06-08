import React, {useEffect, useState} from 'react';
import {quotationActions} from "../../../../redux/actions/quotationActions";
import {connect} from "react-redux";
import Moment from "react-moment";

const QuotationDetails = (props) => {
  const [quotation, setQuotation] = useState({});

  useEffect(()=>{
      Promise.resolve(props.getQuotation({id: props.match.params.id})).then(function (response) {
        setQuotation(response.data)
      }).catch(err => {
      })
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
                <p>Créé le <Moment format="DD/MM/YY">{quotation.created_at}</Moment> à 23h59</p>
              </div>
              {(quotation && quotation.user) && <table className="table table-striped">
                <tbody>
                <tr>
                  <td>DevisID    </td>
                  <td>{quotation.id}</td>
                </tr>
                <tr>
                  <td>UserID  </td>
                  <td>{quotation.user.id}</td>
                </tr>
                <tr>
                  <td>Nom</td>
                  <td>{quotation.user ? quotation.user.first_name : ""}</td>
                </tr>
                <tr>
                  <td>Prénom  </td>
                  <td>{quotation.user ? quotation.user.last_name : ""}</td>
                </tr>
                <tr>
                  <td>Code Postal</td>
                  <td>{quotation.user ? quotation.user.postal_code : ""}</td>
                </tr>
                <tr>
                  <td>Type Logement  </td>
                  <td>{quotation.type_accommodation}</td>
                </tr>
                <tr>
                  <td>Type prospect</td>
                  <td>{quotation.prospect_type}</td>
                </tr>
                <tr>
                  <td>Type Résidence</td>
                  <td>{quotation.type_residence}</td>
                </tr>
                <tr>
                  <td>Etages  </td>
                  <td>{quotation.apartment_floor}</td>
                </tr>
                <tr>
                  <td>Surface (m2)</td>
                  <td>{quotation.apartment_surface}</td>
                </tr>
                <tr>
                  <td>Pièces    </td>
                  <td>{quotation.room}</td>
                </tr>
                <tr>
                  <td>Assuré  </td>
                  <td>{quotation.insured ? "Oui": "Non"}</td>
                </tr>
                <tr>
                  <td>Résiliation  </td>
                  <td>{quotation.termination ? "Oui": "Non"}</td>
                </tr>
                <tr>
                  <td>Franchise (€)</td>
                  <td>{quotation.franchise}</td>
                </tr>
                <tr>
                  <td>Capital mobilier (€)</td>
                  <td>{quotation.furniture_capital}</td>
                </tr>
                <tr>
                  <td>Valeur à neuf</td>
                  <td>{quotation.furniture_two_years_old ? "Oui": "Non"}}</td>
                </tr>
                <tr>
                  <td>Objets valeur 400 (€)</td>
                  <td>{quotation.total_value_furniture_400}</td>
                </tr>
                <tr>
                  <td>Objets valeur 1800 (€)</td>
                  <td>{quotation.total_value_furniture_1800}</td>
                </tr>
                <tr>
                  <td>Obj. valeur. est. (€)</td>
                  <td>{quotation.estimated_coverage}</td>
                </tr>
                <tr>
                  <td>Bris / San / Elec</td>
                  <td>{quotation.option_glass ? "Oui": "Non"}</td>
                </tr>
                <tr>
                  <td>Vol Vandalisme</td>
                  <td>  {quotation.option_thief ? "Oui": "Non"}</td>
                </tr>
                <tr>
                  <td>Aff. nomades co</td>
                  <td>
                    {quotation.option_mobile ? "Oui": "Non"}
                  </td>
                </tr>
                <tr>
                  <td>Ass. scolaire</td>
                  <td>
                    {quotation.school_insurance ? "Oui": "Non"}
                  </td>
                </tr>
                <tr>
                  <td>Dépendences  </td>
                  <td>
                    {quotation.dependencies ? "Oui": "Non"}
                  </td>
                </tr>
                <tr>
                  <td>Prix / mois (€)</td>
                  <td>
                    {quotation.cost_month}
                  </td>
                </tr>
                <tr>
                  <td>PDF</td>
                  <td>--</td>
                </tr>
                <tr>
                  <td>Info Hi Europa</td>
                  <td>
                    {quotation.receive_info ? "Oui": "Non"}
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
    quotation: state.quotationReducer.quotation,
  }
}

const mapDispatchToProps = d => ({
  getQuotation: (id) => d(quotationActions.getQuotation(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(QuotationDetails);
