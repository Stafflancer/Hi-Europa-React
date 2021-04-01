import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import DataTable from "../../../components/DataTable";
import ReactPaginate from "react-paginate";
import {imaActions} from "../../../../redux/actions/imaActions";
import {wakamActions} from "../../../../redux/actions";

const ImaService = ({getIma,imaServiceData,pagination}) => {
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
      Header: 'Billing Address',
      accessor: 'billing_address.address',
    },
    {
      Header: 'Intervention Address',
      accessor: 'intervention_address.address',
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
    // {
    //   Header: "Actions",
    //   accessor: "id",
    //   Cell: ({ cell }) => (
    //     <div>
    //       <button type="button" className="btn btn-outline-danger mr-3"><i className="icon ti-trash"></i></button>
    //       <NavLink to={'/ima' + 1} className="btn btn-outline-primary"><i className="icon ti-pencil-alt"></i></NavLink>
    //     </div>
    //
    //   )
    // }

  ];
  const [page, setPage] = useState(1);
  useEffect(() => {
    Promise.resolve(getIma({page: 1})).then(function (response) {
    })
  }, []);

  // const removeIma = (id) => {
  //   getIma({page: page})
  //   deleteIma({id})
  //   toast.success("Ima has been deleted successfully!");
  // };

  const handlePageClick = (data) => {
    setPage(data.selected + 1)
    getIma({page: data.selected + 1})
  };

  return (
    <div>
      <div className="page-header">
        <div><h2 className="main-content-title tx-24 mg-b-5">Ima Service </h2>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li aria-current="page" className="breadcrumb-item active">Ima Service</li>
          </ol>
        </div>
        <div className="d-flex">
        </div>
      </div>
      <div className="row row-sm">
        <div className="col-lg-12">
          <div className="card custom-card">
            <div className="card-body">
              <div><h6 className="main-content-label mb-1">Ima Service </h6></div>
              <div className="table-responsive" >
                {(imaServiceData && imaServiceData.length) ? <DataTable header={tableHeader} data={imaServiceData}/> : ''}
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
    imaServiceData: state.imaReducer.imaServiceData,
    pagination: state.imaReducer.pagination
  }
}

const mapDispatchToProps = d => ({
  getIma: (data) => d(imaActions.getIma(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(ImaService);

