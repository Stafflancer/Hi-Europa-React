import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import DataTable from '../../../components/DataTable'
import {userActions} from "../../../../redux/actions/userActions";
import ReactPaginate from 'react-paginate';
import { ToastContainer, toast } from 'react-toastify';
import Moment from 'react-moment';
import 'react-toastify/dist/ReactToastify.css';

const User = ({users, pagination, getUsers, deleteUser}) => {
  let tableHeader = [
    {
      Header: 'UserID',
      accessor: 'id',
    },
    {
      Header: 'Titre',
      accessor: 'title',
    },
    {
      Header: 'Prénom',
      accessor: 'first_name',
    },
    {
      Header: 'Nom',
      accessor: 'last_name',
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: 'Téléphone',
      accessor: 'phone_number',
    },
    {
      Header: 'Téléphone fixe',
      accessor: 'landline_phone',
    },
    {
      Header: "Date d'anniversaire",
      accessor: 'birthday',
    },
    {
      Header: 'Code Postal',
      accessor: 'postal_code',
    },
    {
      Header: 'Adresse',
      accessor: 'address',
    },
    {
      Header: 'Ville',
      accessor: 'city',
    },
    {
      Header: 'DevisID',
      accessor: 'quotation.id',
    },
    {
      Header: 'ContratID',
      accessor: 'contract.id',
    },
    {
      Header: 'Pb. Prime',
      accessor: 'insurance_payed',
      Cell: ({ cell }) => (
        <span>
          {cell.row.original.insurance_payed ? "Oui": "Non"}
        </span>
      )
    },
    {
      Header: 'Infor Hi Europa',
      accessor: 'receive_info',
      Cell: ({ cell }) => (
        <span>
          {cell.row.original.receive_info ? "Oui": "Non"}
        </span>
      )
    },
    {
      Header: 'RésiliationID',
      accessor: 'resiliation.id',
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
          <NavLink to={'user/' + cell.row.original.id} className="btn btn-outline-primary"><i className="icon fa fa-eye"></i></NavLink>
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
        <div><h2 className="main-content-title tx-24 mg-b-5 text-white font-weight-bold">Utilisateurs</h2>
        </div>
      </div>
      <div className="row row-sm">
        <div className="col-lg-12">
          <div className="card custom-card">
            <div className="card-body">
              <div><h6 className="main-content-label mb-1 text-danger font-weight-bold">Utilisateurs</h6></div>
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
