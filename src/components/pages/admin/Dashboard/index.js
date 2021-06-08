import React from 'react';
import {connect} from "react-redux";
import defaultAvatar from "../../../../assets/img/users/default.png";
import workerImg from "../../../../assets/img/pngs/work3.png";

const Dashboard = () => {
  return (
    <div>
      <div className="page-header">
        <div><h2 className="main-content-title tx-24 mg-b-5">Dashboard</h2>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
          </div>
        </div>
      </div>
      <div className="row row-sm">
        <div className="col-sm-12 col-lg-12">
          <div className="card custom-card card-dashboard-calendar pb-0"><label
            className="main-content-label mb-2 pt-1"><b className="text-danger">MRH</b> - Nouveaux utilisateurs</label>
            <table className="table table-hover m-b-0 transcations mt-2">
              <thead>
              <tr>
                <th scope="col">UserID</th>
                <th scope="col">Prénom</th>
                <th scope="col">Nom</th>
                <th scope="col">Email</th>
                <th scope="col">Téléphone</th>
                <th scope="col">Code Postale</th>
                <th scope="col">Adresse</th>
                <th scope="col">VIlle</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">----</p></div>
                </td>
                <td>
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">----</p></div>
                </td>
                <td>
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">----</p></div>
                </td>
                <td>
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">----</p></div>
                </td>
                <td>
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">----</p></div>
                </td>
                <td>
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">----</p></div>
                </td>
                <td>
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">----</p></div>
                </td>
                <td>
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">----</p></div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
      </div>
        <div className="col-sm-12 col-lg-12">
          <div className="card custom-card card-dashboard-calendar pb-0"><label
            className="main-content-label mb-2 pt-1"><b className="text-danger">MRH</b> - Nouveaux devis</label>
            <table className="table table-hover m-b-0 transcations mt-2">
              <thead>
                <tr>
                  <th scope="col">DevisID</th>
                  <th scope="col">UserID</th>
                  <th scope="col">Postal Code</th>
                  <th scope="col">Type Logement</th>
                  <th scope="col">Type prospect</th>
                  <th scope="col">Type Résidence</th>
                  <th scope="col">Etage</th>
                  <th scope="col">Surface</th>
                  <th scope="col">Pièces</th>
                </tr>
              </thead>
              <tbody>
              <tr>
                <td>
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">----</p></div>
                </td>
                <td>
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">----</p></div>
                </td>
                <td>
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">----</p></div>
                </td>
                <td>
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">----</p></div>
                </td>
                <td>
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">----</p></div>
                </td>
                <td>
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">----</p></div>
                </td>
                <td>
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">----</p></div>
                </td>
                <td>
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">----</p></div>
                </td>
                <td>
                  <div className="d-inline-block"><p className="mb-0 tx-11 text-muted">----</p></div>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
      </div>
    </div>
  </div>
)
};

export default connect(null, null)(Dashboard);

