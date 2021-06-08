import React, {useEffect, useState} from 'react';
import {contractActions} from "../../../../redux/actions/contractActions";
import {connect} from "react-redux";
import Moment from "react-moment";

const ContractDetails = (props) => {
  const [contract, setContract] = useState({});

  useEffect(()=>{
    console.log(props.match.params.id);
    Promise.resolve(props.getContract({id: props.match.params.id})).then(function (response) {
        setContract(response.data)
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
                <h6 className="main-content-label mb-1 font-weight-bold text-danger">Contract</h6>
                <p>Créé le <Moment format="DD/MM/YY">{contract.created_at}</Moment> à 23h59</p>
              </div>
              {(contract && contract.user) && <table className="table table-striped">
                <tbody>
                <tr>
                  <td>ContractID    </td>
                  <td>{contract.id}</td>
                </tr>
                <tr>
                  <td>DevisID    </td>
                  <td>{contract.user.quotation ? contract.user.quotation.id : ""}</td>
                </tr>
                <tr>
                  <td>Code Postal    </td>
                  <td>{contract.user.postal_code}</td>
                </tr>
                <tr>
                  <td>Address    </td>
                  <td>{contract.additional_address}</td>
                </tr>
                <tr>
                  <td>Comp. Adress    </td>
                  <td>{contract.exact_address}</td>
                </tr>
                <tr>
                  <td>City    </td>
                  <td>{contract.city}</td>
                </tr>
                <tr>
                  <td>Nom    </td>
                  <td>{contract.user.first_name}</td>
                </tr>
                <tr>
                  <td>Prénom    </td>
                  <td>{contract.user.last_name}</td>
                </tr>
                <tr>
                  <td>Date de naissance    </td>
                  <td>{contract.user.birthday}</td>
                </tr>
                <tr>
                  <td>Téléphone    </td>
                  <td>{contract.user.phone_number}</td>
                </tr>
                <tr>
                  <td>Téléphone fixe    </td>
                  <td>{contract.user.landline_phone}</td>
                </tr>
                <tr>
                  <td>ResidentID    </td>
                  <td>{contract.id}</td>
                </tr>
                <tr>
                  <td>Date entrée    </td>
                  <td>{contract.contract_start_date}</td>
                </tr>
                <tr>
                  <td>Date fin</td>
                  <td>{contract.contract_expiration_date}</td>
                </tr>
                <tr>
                  <td>Prix / mois    </td>
                  <td>{contract.user.quotation ? contract.user.quotation.cost_month : "0"}</td>
                </tr>
                <tr>
                  <td>Prélèvement    </td>
                  <td>{contract.duration_contract}</td>
                </tr>
                <tr>
                  <td>PDF    </td>
                  <td>
                    {contract.pdf_link && <a href={contract.pdf_link}>{contract.pdf_link}</a>}
                  </td>
                </tr>
                <tr>
                  <td>Créé le    </td>
                  <td>
                    <Moment format="DD/MM/YY">
                      {contract.created_at}
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
    quotation: state.quotationReducer.quotation,
  }
}

const mapDispatchToProps = d => ({
  getContract: (id) => d(contractActions.getContract(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContractDetails);
