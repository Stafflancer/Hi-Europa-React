import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import DataTable from "../../../components/DataTable";
import ReactPaginate from "react-paginate";
import {wakamActions} from "../../../../redux/actions/wakamActions";

const WakamService = ({getWakam,wakamServiceData,pagination}) => {
  let tableHeader = [
    {
      Header: 'Owner First Name',
      accessor: 'owner.first_name',
    },
    {
      Header: 'Owner Last Name',
      accessor: 'owner.last_name',
    },
    {
      Header: 'Name',
      accessor: 'personal_info.name',
    },
    {
      Header: 'Email',
      accessor: 'personal_info.email',
    },
    {
      Header: 'Phone Number',
      accessor: 'personal_info.phone_number',
    },
    {
      Header: 'Insurance',
      accessor: 'insurance',
    },
    {
      Header: 'Contract ID',
      accessor: 'contract.stored_id',
    },
    {
      Header: 'Contract Number',
      accessor: 'contract.number',
    },
    {
      Header: 'Quotation',
      accessor: 'quotation',
    },
  ];
  const [page, setPage] = useState(1);
  useEffect(() => {
    Promise.resolve(getWakam({page: 1})).then(function (response) {
    })
  }, []);

  const handlePageClick = (data) => {
    setPage(data.selected + 1)
    getWakam({page: data.selected + 1})
  };

  return (
    <div>
      <div className="page-header">
        <div><h2 className="main-content-title tx-24 mg-b-5">Wakam Service</h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li aria-current="page" className="breadcrumb-item active">Wakam Service</li>
          </ol>
        </div>
        <div className="d-flex">
        </div>
      </div>
      <div className="row row-sm">
        <div className="col-lg-12">
          <div className="card custom-card">
            <div className="card-body">
              <div>
                <h6 className="main-content-label mb-1">Wakam Service </h6>
              </div>
              <div className="table-responsive" >
                {(wakamServiceData && wakamServiceData.length) ? <DataTable header={tableHeader} data={wakamServiceData}/> : ''}
              </div>
              <div className='d-flex justify-content-end'>
                <ReactPaginate
                  previousLabel={'<<'}
                  nextLabel={'>>'}
                  breakLabel={'...'}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  pageCount={pagination.count_pages}
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
    </div>
  )};

function mapStateToProps(state) {
  return {
    wakamServiceData: state.wakamReducer.wakamServiceData,
    pagination: state.wakamReducer.pagination
  }
}

const mapDispatchToProps = d => ({
  getWakam: (data) => d(wakamActions.getWakam(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(WakamService);

