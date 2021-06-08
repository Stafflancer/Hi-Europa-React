import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import DataTable from "../../../components/DataTable";
import { prospectActions } from "../../../../redux/actions/prospectActions";
import ReactPaginate from "react-paginate";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Moment from "react-moment";
import { NavLink } from "react-router-dom";

const Prospect = ({ prospects, pagination, getProspects }) => {
  let tableHeader = [
    {
      Header: "ProspectID",
      accessor: "id",
    },
    {
      Header: "Postal code",
      accessor: "contract.user.postal_code",
    },
    {
      Header: "Email",
      accessor: "contract.user.email",
    },
    {
      Header: "Type logement",
      accessor: "residency_type",
    },
    {
      Header: "Type Prospect",
      accessor: "prospect_type",
    },
    {
      Header: "Type résidence",
      accessor: "residence_type",
    },
    {
      Header: "Etage",
      accessor: "floor",
    },
    {
      Header: "Surface",
      accessor: "surface",
    },
    {
      Header: "Pièces",
      accessor: "number_rooms",
    },
    {
      Header: "Assuré",
      accessor: "got_insurance",
      Cell: ({ cell }) => (
        <span>{cell.row.original.got_insurance ? "Oui" : "Non"}</span>
      ),
    },
    {
      Header: "Historique",
      accessor: "live_there_time",
    },
    {
      Header: "Durée",
      accessor: "insured_time",
    },
    // {
    //   Header: "Info Hi Europa",
    //   accessor: "contract.user.receive_info",
    //   Cell: ({ cell }) => {
    //     console.log("cell : ", cell.row.original); // no nontact
    //     return (
    //       <span>
    //         {cell.row.original.contract.user.receive_info ? "Oui" : "Non"}
    //       </span>
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
            to={"prospect/" + cell.row.original.id}
            className="btn btn-outline-primary"
          >
            <i className="icon fa fa-eye"></i>
          </NavLink>
        </div>
      ),
    },
  ];

  const [page, setPage] = useState(1);

  useEffect(() => {
    getProspects({ page: 1 });
  }, []);

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
    getProspects({ page: data.selected + 1 });
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
                <h6 className="main-content-label mb-1 font-weight-bold text-danger">
                  Prospect
                </h6>
              </div>
              <div className="table-responsive">
                {prospects && prospects.length ? (
                  <DataTable header={tableHeader} data={prospects} />
                ) : (
                  ""
                )}
              </div>
              <div className="d-flex justify-content-end">
                <ReactPaginate
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
    prospects: state.prospectReducer.prospects,
    pagination: state.prospectReducer.pagination,
  };
}

const mapDispatchToProps = (d) => ({
  getProspects: (data) => d(prospectActions.getProspects(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Prospect);
