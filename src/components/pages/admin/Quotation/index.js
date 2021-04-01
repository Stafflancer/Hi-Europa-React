import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import DataTable from '../../../components/DataTable'
import {quotationActions} from "../../../../redux/actions/quotationActions";
import ReactPaginate from 'react-paginate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quotation = ({quotations, pagination, getQuotations}) => {
  let tableHeader = [
    {
      Header: 'User first name',
      accessor: 'service.user.first_name',
    },
    {
      Header: 'User Last Name',
      accessor: 'service.user.last_name',
    },
    {
      Header: 'User Email',
      accessor: 'service.user.email',
    },
    {
      Header: 'Service name',
      accessor: 'service_name',
    },
    {
      Header: 'Name',
      accessor: 'name',
    }
  ];

  const [page, setPage] = useState(0);
  const [service, setService] = useState('');

  useEffect(() => {
    getQuotations({page: 1})
  }, []);

  const handlePageClick = (data) => {
    setPage(data.selected)
    getQuotations({page: data.selected + 1, service: service})
  };

  const filterQuotation = (event) => {
    setService(event.target.value)
    setPage(0)
    getQuotations({page: 1, service: event.target.value})
  };

  return (
    <div>
      <div className="page-header">
        <div><h2 className="main-content-title tx-24 mg-b-5">Quotations Page</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li aria-current="page" className="breadcrumb-item active">Quotations Page</li>
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
              <div><h6 className="main-content-label mb-1">Quotations List</h6></div>
              <div className="row table-filter">
                <div className="col-lg-12 d-lg-flex justify-content-end">
                  <div className="d-flex mt-4 mt-lg-0">
                    <div className="filter-group ml-3"><label>Services: </label>
                      <select onChange={filterQuotation} className="form-control">
                        <option value="all">All</option>
                        <option value="wakam">Wakam</option>
                        <option value="ima">Ima</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="table-responsive" >
                {(quotations && quotations.length) ? <DataTable header={tableHeader} data={quotations}/> : ''}
              </div>
              <div className='d-flex justify-content-end'>
                <ReactPaginate
                  forcePage={page}
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
    quotations: state.quotationReducer.quotations,
    pagination: state.quotationReducer.pagination
  }
}

const mapDispatchToProps = d => ({
  getQuotations: (data) => d(quotationActions.getQuotations(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Quotation);
