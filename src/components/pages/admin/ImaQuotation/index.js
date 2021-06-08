import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import DataTable from "../../../components/DataTable";
import { imaQuotationActions } from "../../../../redux/actions/imaQuotationActions";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Moment from "react-moment";

const ImaQuotation = ({ quotations, pagination, getQuotations }) => {
  console.log("quotations : ", quotations);
  let tableHeader = [
    {
      Header: "DevisID",
      accessor: "id",
    },
    {
      Header: "Code Postal",
      accessor: "user.postal_code",
    },
    {
      Header: "Problématiques",
      accessor: "problem_type",
    },
    {
      Header: "Précision 1",
      accessor: "precision_one",
    },
    {
      Header: "Précision 2",
      accessor: "precision_two",
    },
    {
      Header: "Précision 3",
      accessor: "precision_tree",
    },
    {
      Header: "Diagnostic",
      accessor: "diagnostic",
    },
    {
      Header: "Jour intervention",
      accessor: "intervention_date",
      Cell: ({ cell }) => (
        <Moment format="DD/MM/YY">{cell.row.original.intervention_date}</Moment>
      ),
    },
    {
      Header: "Heure intervention",
      accessor: "start_time",
      Cell: ({ cell }) => (
        <Moment format="HH:mm">{cell.row.original.start_time}</Moment>
      ),
    },
    {
      Header: "Tarif",
      accessor: "cost",
    },
    {
      Header: "UserID",
      accessor: "user.id",
    },
    {
      Header: "Actions",
      Cell: ({ cell }) => (
        <div>
          <NavLink
            to={"ima-quotation/" + cell.row.original.id}
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
    getQuotations({ page: 1 });
  }, []);

  const handlePageClick = (data) => {
    setPage(data.selected);
    getQuotations({ page: data.selected + 1, service: service });
  };

  const filterQuotation = (event) => {
    setService(event.target.value);
    setPage(0);
    getQuotations({ page: 1, service: event.target.value });
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
                  Devis
                </h6>
              </div>
              <div className="row table-filter">
                <div className="col-lg-12 d-lg-flex justify-content-end"></div>
              </div>
              <div className="table-responsive">
                {quotations && quotations.length ? (
                  <DataTable header={tableHeader} data={quotations} />
                ) : (
                  ""
                )}
              </div>
              <div className="d-flex justify-content-end">
                {pagination && quotations.length && (
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
                )}
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
    quotations: state.imaQuotationReducer.quotations,
    pagination: state.imaQuotationReducer.pagination,
  };
}

const mapDispatchToProps = (d) => ({
  getQuotations: (data) => d(imaQuotationActions.getQuotations(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImaQuotation);
