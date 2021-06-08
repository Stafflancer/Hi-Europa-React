import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import DataTable from '../../../components/DataTable'
import {adminActions} from "../../../../redux/actions/adminActions";
import ReactPaginate from 'react-paginate';
import { ToastContainer, toast } from 'react-toastify';
import Moment from 'react-moment';
import 'react-toastify/dist/ReactToastify.css';
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Admin = ({admins, pagination, getUsers, deleteUser}) => {
  let tableHeader = [
    {
      Header: 'AdminID',
      accessor: 'id',
    },
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Admin Role',
      accessor: 'admin_role.name',
    },
    {
      Header: 'Créé le',
      accessor: 'created_at',
      Cell: ({ cell }) => (
        <Moment format="DD/MM/YY">
          {cell.row.original.created_at}
        </Moment>
      )
    },
    {
      Header: "Actions",
      Cell: ({ cell }) => (
        <div>
          <NavLink to={'admin/' + cell.row.original.id} className="btn btn-outline-primary"><i className="fa fa-pen"></i></NavLink>
          <button onClick={() => removeUser(cell.row.original.id)} className="ml-3 btn btn-outline-danger">
            <i className="fa fa-trash"></i>
          </button>
        </div>

      )
    }
  ];

  const [page, setPage] = useState(1);
  const DeleteUSerSwal = withReactContent(Swal);

  useEffect(() => {
    getUsers({page: 1})
  }, []);

  const removeUser = (id) => {
    DeleteUSerSwal.fire({
      title: 'Are you want to Delete this Admin?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes'
    }).then( async () => {
      Promise.resolve(deleteUser({id: id})).then(function (response) {
        console.log(response);
        toast.success("User has been deleted successfully!");
        getUsers({page: page})
      }).catch(err => {
      })

    })

  };

  const handlePageClick = (data) => {
    setPage(data.selected + 1)
    getUsers({page: data.selected + 1})
  };

  return (
    <div>
      <div className="page-header">
        <div><h2 className="main-content-title tx-24 mg-b-5 text-white font-weight-bold">Admins</h2>

        </div>
      </div>
      <div className="row row-sm">
        <div className="col-lg-12">
          <div className="card custom-card">
            <div className="card-body">
              <div className='row'>
                <div className='col'>
                  <h6 className="main-content-label mb-1 text-danger font-weight-bold">Admins</h6>
                </div>
                <div className='col '>
                  <NavLink to={'admin/add'} className="btn btn-outline-primary float-right"><i className="fa fa-plus"></i> Add Admin</NavLink>
                </div>
              </div>
              <div className="table-responsive" >
                {(admins && admins.length) ? <DataTable header={tableHeader} data={admins}/> : ''}
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
    admins: state.adminReducer.admins,
    pagination: state.adminReducer.pagination
  }
}

const mapDispatchToProps = d => ({
  getUsers: (data) => d(adminActions.getUsers(data)),
  deleteUser: (data) => d(adminActions.deleteUser(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
