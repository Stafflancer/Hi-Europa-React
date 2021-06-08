import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DataTable from "../../../components/DataTable";
import { contractActions } from "../../../../redux/actions/contractActions";
import ReactPaginate from "react-paginate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Moment from "react-moment";
import { NavLink } from "react-router-dom";

const Contract = ({ contracts, pagination, getContracts }) => {
  let tableHeader = [
    {
      Header: "ContractID",
      accessor: "id",
    },
    {
      Header: "UserID",
      Cell: ({ cell }) => (
        <div>
          <NavLink
            to={"contract/" + cell.row.original.user.id}
            className="link"
          >
            {cell.row.original.user.id}
          </NavLink>
        </div>
      ),
    },
    {
      Header: "DevisID",
      accessor: "user.quotation.id",
      Cell: ({ cell }) => (
        <div>
          <NavLink
            to={
              "quotation/" +
              (cell.row.original.user.quotation
                ? cell.row.original.user.quotation.id
                : "")
            }
            className="link"
          >
            {cell.row.original.user.quotation
              ? cell.row.original.user.quotation.id
              : ""}
          </NavLink>
        </div>
      ),
    },
    {
      Header: "Code Postal",
      accessor: "user.postal_code",
    },
    {
      Header: "Adresse",
      accessor: "additional_address",
    },
    {
      Header: "Comp. Adresse",
      accessor: "exact_address",
    },
    {
      Header: "Ville",
      accessor: "city",
    },
    {
      Header: "Dependance Code Postal",
      accessor: "dependance_postal_code",
    },
    {
      Header: "Dependance Adresse",
      accessor: "dependance_adresse",
    },
    {
      Header: "Dependance  Comp. Adresse",
      accessor: "dependance_comp_adresse",
    },
    {
      Header: "Dependance Ville",
      accessor: "dependance_city",
    },
    {
      Header: "Titre",
      accessor: "insurer_name",
    },
    {
      Header: "Nom",
      accessor: "user.first_name",
    },
    {
      Header: "Prénom",
      accessor: "user.last_name",
    },
    {
      Header: "Date de naissance",
      accessor: "user.birthday",
    },
    {
      Header: "Téléphone",
      accessor: "user.phone_number",
    },
    {
      Header: "Téléphone fixe",
      accessor: "user.landline_phone",
    },
    {
      Header: "ResidentID",
      Cell: ({ cell }) => (
        <div>
          {cell.row.original.residents &&
            cell.row.original.residents.map((item, index) => (
              <p className="mb-1" key={index}>
                <NavLink to={"resident/" + item.id}>
                  {item.first_name + " " + item.last_name}
                </NavLink>
              </p>
            ))}
        </div>
      ),
    },
    {
      Header: "Date entrée",
      accessor: "contract_start_date",
    },
    {
      Header: "Date fin",
      accessor: "contract_expiration_date",
    },
    {
      Header: "Prix / mois",
      accessor: "user.quotation.cost_month",
    },
    {
      Header: "Prélèvement",
      accessor: "duration_contract",
    },
    {
      Header: "PDF",
      accessor: "pdf_link",
      Cell: ({ cell }) => (
        <div>
          <a target="_blank" href={cell.row.original.pdf_link}>
            {cell.row.original.pdf}
          </a>
        </div>
      ),
    },
    {
      Header: "Créé le",
      accessor: "created_at",
      Cell: ({ cell }) => (
        <Moment format="DD/MM/YY">{cell.row.original.created_at}</Moment>
      ),
    },
    {
      Header: "Actions",
      Cell: ({ cell }) => (
        <div>
          <NavLink
            to={"contract/" + cell.row.original.id}
            className="btn btn-outline-primary"
          >
            <i className="icon fa fa-eye"></i>
          </NavLink>
        </div>
      ),
    },
  ];

  const [page, setPage] = useState(0);
  const [service, setService] = useState("");

  useEffect(() => {
    getContracts({ page: 1 });
  }, []);

  const handlePageClick = (data) => {
    setPage(data.selected);
    getContracts({ page: data.selected + 1, service: service });
  };

  const filterContract = (event) => {
    setService(event.target.value);
    setPage(0);
    getContracts({ page: 1, service: event.target.value });
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5 text-white font-weight-bold">
            MRH
          </h2>
        </div>
        <div className="d-flex">
          <div className="justify-content-center"></div>
        </div>
      </div>
      <div className="row row-sm">
        <div className="col-lg-12">
          <div className="card custom-card">
            <div className="card-body">
              <div>
                <h6 className="main-content-label mb-1 text-danger font-weight-bold">
                  Contracts
                </h6>
              </div>
              <div className="row table-filter">
                <div className="col-lg-12 d-lg-flex justify-content-end">
                  <div className="d-flex mt-4 mt-lg-0">
                    <div className="filter-group ml-3">
                      <label>Services: </label>
                      <select
                        onChange={filterContract}
                        className="form-control"
                      >
                        <option value="all">All</option>
                        <option value="wakam">Wakam</option>
                        <option value="ima">Ima</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                {contracts && contracts.length ? (
                  <DataTable header={tableHeader} data={contracts} />
                ) : (
                  ""
                )}
              </div>
              <div className="d-flex justify-content-end">
                <ReactPaginate
                  forcePage={page}
                  previousLabel={"<<"}
                  nextLabel={">>"}
                  breakLabel={"..."}
                  pageCount={pagination.count_pages}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={"pagination"}
                  pageLinkClassName="page-link"
                  nextLinkClassName="page-link"
                  previousClassName="page-link"
                  pageClassName="page-item"
                  breakLinkClassName="page-link"
                  activeClassName="active"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    contracts: state.contractReducer.contracts,
    pagination: state.contractReducer.pagination,
  };
}

const mapDispatchToProps = (d) => ({
  getContracts: (data) => d(contractActions.getContracts(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contract);
