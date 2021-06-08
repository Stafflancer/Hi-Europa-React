import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import DataTable from "../../../components/DataTable";
import { interventionActions } from "../../../../redux/actions/interventionActions";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Moment from "react-moment";

const Intervention = ({ interventions, pagination, getInterventions }) => {
  let tableHeader = [
    {
      Header: "InterventionID",
      accessor: "id",
    },
    {
      Header: "DevisID",
      accessor: "user.quotation.id",
    },
    {
      Header: "UserID",
      accessor: "user.id",
    },
    {
      Header: "Ville",
      accessor: "city",
    },
    {
      Header: "Code Postal",
      accessor: "user.postal_code",
    },
    {
      Header: "Adresse",
      accessor: "address",
    },
    {
      Header: "Comp. adresse",
      accessor: "comp_address",
    },
    {
      Header: "Présence",
      accessor: "attendance_person",
      Cell: ({ cell }) => {
        return (
          <span>{cell.row.original.attendance_person ? "Oui" : "Non"}</span>
        );
      },
    },
    {
      Header: "Autre Nom",
      accessor: "other_person_first_name",
    },
    {
      Header: "Autre Prénom",
      accessor: "other_person_last_name",
    },
    {
      Header: "Autre téléphone",
      accessor: "other_person_phone",
    },
    // {
    //   Header: "Info Hi Europa",
    //   accessor: "user.receive_info",
    //   Cell: ({ cell }) => {
    //     console.log("hi info : ", cell);
    //     return (
    //       <span>{cell.row.original.user.receive_info ? "Oui" : "Non"}</span>
    //     );
    //   },
    // },
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
            to={"intervention/" + cell.row.original.id}
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
    getInterventions({ page: 1 });
  }, []);

  const handlePageClick = (data) => {
    setPage(data.selected);
    getInterventions({ page: data.selected + 1, service: service });
  };

  const filterQuotation = (event) => {
    setService(event.target.value);
    setPage(0);
    getInterventions({ page: 1, service: event.target.value });
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5 text-white font-weight-bold">
            IMA
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
                  Intervention
                </h6>
              </div>
              <div className="row table-filter">
                <div className="col-lg-12 d-lg-flex justify-content-end"></div>
              </div>
              <div className="table-responsive">
                {interventions && interventions.length ? (
                  <DataTable header={tableHeader} data={interventions} />
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
    interventions: state.interventionReducer.interventions,
    pagination: state.interventionReducer.pagination,
  };
}

const mapDispatchToProps = (d) => ({
  getInterventions: (data) => d(interventionActions.getInterventions(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Intervention);
