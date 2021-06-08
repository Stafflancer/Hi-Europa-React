import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import DataTable from '../../../components/DataTable'
import {resiliationActions} from "../../../../redux/actions/resiliationActions";
import ReactPaginate from 'react-paginate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Moment from "react-moment";
import {NavLink} from "react-router-dom";

const Resiliation = ({resiliations, pagination, getContracts}) => {

  let tableHeader = [
    {
      Header: 'ResiliationID',
      accessor: 'id',
    },
    {
      Header: 'ContractID',
      accessor: 'user.contract.id',
    },
    {
      Header: 'Déménagement',
      accessor: 'moving_out',
    },
    {
      Header: 'Assureur',
      accessor: 'insurance_company_name',
    },
    {
      Header: 'Date souscription',
      accessor: 'subscription_date',
      Cell: ({ cell }) => (
        <Moment format="DD/MM/YY">
          {cell.row.original.subscription_date}
        </Moment>
      )
    },
    {
      Header: 'Prénom assuré',
      accessor: 'user.first_name',
    },
    {
      Header: 'Nom assuré',
      accessor: 'user.last_name',
    },
    {
      Header: 'Numéro contrat',
      accessor: 'previous_contract',
    },
    {
      Header: "Actions",
      Cell: ({ cell }) => (
        <div>
          <NavLink to={'resiliation/' + cell.row.original.id} className="btn btn-outline-primary">
            <i className="icon fa fa-eye"></i>
          </NavLink>
        </div>

      )
    }
  ];

  const [page, setPage] = useState(1);

  useEffect(() => {
    getContracts({page: 1})
  }, []);

  const handlePageClick = (data) => {
    setPage(data.selected + 1)
    getContracts({page: data.selected + 1})
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
              <div><h6 className="main-content-label mb-1 font-weight-bold text-danger">Resiliation</h6></div>
              <div className="table-responsive" >
                {(resiliations && resiliations.length) ? <DataTable header={tableHeader} data={resiliations}/> : ''}
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
    resiliations: state.resiliationReducer.resiliations,
    pagination: state.resiliationReducer.pagination
  }
}

const mapDispatchToProps = d => ({
  getContracts: (data) => d(resiliationActions.getRsiliations(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Resiliation);
