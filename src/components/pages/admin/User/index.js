import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import DataTable from '../../../components/DataTable'
import {userActions} from "../../../../redux/actions/userActions";
import ReactPaginate from 'react-paginate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const User = ({users, pagination, getUsers, deleteUser}) => {
  let tableHeader = [
    {
      Header: 'Service Name',
      accessor: 'service_name',
    },
    {
      Header: 'First Name',
      accessor: 'first_name',
    },
    {
      Header: 'Last Name',
      accessor: 'last_name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Phone Number',
      accessor: 'phone_number',
    },
    {
      Header: 'Registered',
      accessor: 'created_at',
    },
    {
      Header: "Actions",
      accessor: "id",
      Cell: ({ cell }) => (
        <div>
          <button type="button" className="btn btn-outline-danger mr-3" onClick={() => removeUser(cell.row.original.id)}><i className="icon fa fa-trash-o"></i></button>
          <NavLink to={'user/' + cell.row.original.id} className="btn btn-outline-primary"><i className="icon fa fa-pencil"></i></NavLink>
        </div>

      )
    }

  ];
  const [page, setPage] = useState(1);
  useEffect(() => {
    Promise.resolve(getUsers({page: 1})).then(function (response) {
    })
  }, []);

  const removeUser = (id) => {
    getUsers({page: page})
    deleteUser({id})
    toast.success("User has been deleted successfully!");
  };

  const handlePageClick = (data) => {
    setPage(data.selected + 1)
    getUsers({page: data.selected + 1})
  };

  return (
    <div>
      <div className="page-header">
        <div><h2 className="main-content-title tx-24 mg-b-5">Users Page</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li aria-current="page" className="breadcrumb-item active">Users Page</li>
          </ol>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
            <NavLink to="/user/add" className="btn btn-primary my-2 btn-icon-text" type="button">
              <i className="fe fe-plus-square mr-2"></i> Add User
            </NavLink>
          </div>
        </div>
      </div>
      <div className="row row-sm">
        <div className="col-lg-12">
          <div className="card custom-card">
            <div className="card-body">
              <div><h6 className="main-content-label mb-1">Users List</h6></div>
              <div className="table-responsive" >
                {(users && users.length) ? <DataTable header={tableHeader} data={users}/> : ''}
              </div>
              <div className='d-flex justify-content-end'>
                <ReactPaginate
                  previousLabel={'<<'}
                  nextLabel={'>>'}
                  breakLabel={'...'}
                  pageCount={pagination.count_pages}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageClick}
                  containerClassName={'pagination'}
                  pageLinkClassName='page-link'
                  nextLinkClassName='page-link'
                  previousClassName='page-link'
                  pageClassName='page-item'
                  breakLinkClassName='page-link'
                  activeClassName='active'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
};

function mapStateToProps(state) {
  return {
    users: state.userReducer.users,
    pagination: state.userReducer.pagination
  }
}

const mapDispatchToProps = d => ({
  getUsers: (data) => d(userActions.getUsers(data)),
  deleteUser: (id) => d(userActions.deleteUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
