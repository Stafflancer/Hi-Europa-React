import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import DataTable from "../../../components/DataTable";
import { imaUserActions } from "../../../../redux/actions/imaUserActions";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import Moment from "react-moment";
import "react-toastify/dist/ReactToastify.css";

const ImaUser = ({ users, pagination, getUsers, deleteUser }) => {
  let tableHeader = [
    {
      Header: "UserID",
      accessor: "id",
    },
    {
      Header: "Titre",
      accessor: "title",
    },
    {
      Header: "Type prospect",
      accessor: "prospect_type",
    },
    {
      Header: "Nom",
      accessor: "last_name",
    },
    {
      Header: "Prénom",
      accessor: "first_name",
    },

    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Téléphone",
      accessor: "phone_number",
    },
    {
      Header: "AccountId",
      accessor: "account_id",
    },
    {
      Header: "Actions",
      Cell: ({ cell }) => (
        <div>
          <NavLink
            to={"ima-user/" + cell.row.original.id}
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
    Promise.resolve(getUsers({ page: 1 })).then(function (response) {});
  }, []);

  const removeUser = (id) => {
    getUsers({ page: page });
    deleteUser({ id });
    toast.success("User has been deleted successfully!");
  };

  const handlePageClick = (data) => {
    setPage(data.selected + 1);
    getUsers({ page: data.selected + 1 });
  };

  return (
    <div>
      <div className="page-header">
        <div>
          <h2 className="main-content-title tx-24 mg-b-5 text-white font-weight-bold">
            IMA
          </h2>
        </div>
      </div>
      <div className="row row-sm">
        <div className="col-lg-12">
          <div className="card custom-card">
            <div className="card-body">
              <div>
                <h6 className="main-content-label mb-1 text-danger font-weight-bold">
                  Utilisateurs
                </h6>
              </div>
              <div className="table-responsive">
                {users && users.length ? (
                  <DataTable header={tableHeader} data={users} />
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
    users: state.imaUserReducer.users,
    pagination: state.imaUserReducer.pagination,
  };
}

const mapDispatchToProps = (d) => ({
  getUsers: (data) => d(imaUserActions.getUsers(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImaUser);
