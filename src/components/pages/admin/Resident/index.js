import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import DataTable from '../../../components/DataTable'
import {residentActions} from "../../../../redux/actions/residentActions";
import ReactPaginate from 'react-paginate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Moment from "react-moment";
import {NavLink} from "react-router-dom";

const Resident = ({residents, pagination, getResidents}) => {

  let tableHeader = [
    {
      Header: 'ResidentID',
      accessor: 'id',
    },
    {
      Header: 'ContractID',
      accessor: 'contract.id',
    },
    {
      Header: 'Titre',
      accessor: 'title',
    },
    {
      Header: 'Nom',
      accessor: 'last_name',
    },
    {
      Header: 'Prénom',
      accessor: 'first_name',
    },
    {
      Header: 'Date d`anniversaire',
      accessor: 'birthday',
    },
    {
      Header: 'Statut',
      accessor: 'status',
    },
    {
      Header: "Actions",
      Cell: ({ cell }) => (
        <div>
          <NavLink to={'resident/' + cell.row.original.id} className="btn btn-outline-primary">
            <i className="icon fa fa-eye"></i>
          </NavLink>
        </div>

      )
    }

  ];

  const [page, setPage] = useState(1);

  useEffect(() => {
    getResidents({page: 1})
  }, []);

  const handlePageClick = (data) => {
    setPage(data.selected + 1)
    getResidents({page: data.selected + 1})
  };

  return (
    <div>
      <div className="page-header">
        <div><h2 className="main-content-title tx-24 mg-b-5 text-white font-weight-bold">MRH</h2>
        </div>
        <div className="d-flex">
          <div className="justify-content-center">
          </div>
        </div>
      </div>
      <div className="row row-sm">
        <div className="col-lg-12">
          <div className="card custom-card">
            <div className="card-body">
              <div><h6 className="main-content-label mb-1 font-weight-bold text-danger">Residents</h6></div>
              <div className="table-responsive" >
                {(residents && residents.length) ? <DataTable header={tableHeader} data={residents}/> : ''}
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
    residents: state.residentReducer.residents,
    pagination: state.residentReducer.pagination
  }
}

const mapDispatchToProps = d => ({
  getResidents: (data) => d(residentActions.getResidents(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Resident);
