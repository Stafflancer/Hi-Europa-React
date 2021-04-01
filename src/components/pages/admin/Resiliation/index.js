import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import DataTable from '../../../components/DataTable'
import {resiliationActions} from "../../../../redux/actions/resiliationActions";
import ReactPaginate from 'react-paginate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Resiliation = ({resiliations, pagination, getContracts}) => {

  let tableHeader = [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'User first name',
      accessor: 'wakam_service.user.first_name',
    },
    {
      Header: 'User Last Name',
      accessor: 'wakam_service.user.last_name',
    },
    {
      Header: 'User Email',
      accessor: 'wakam_service.user.email',
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
        <div><h2 className="main-content-title tx-24 mg-b-5">Resiliation Page</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li aria-current="page" className="breadcrumb-item active">Resiliation Page</li>
          </ol>
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
              <div><h6 className="main-content-label mb-1">Resiliation List</h6></div>
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
