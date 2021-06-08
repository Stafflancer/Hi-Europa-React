import React, {useEffect, useState} from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from "react-redux";
import DataTable from '../../../components/DataTable'
import {quotationActions} from "../../../../redux/actions/quotationActions";
import ReactPaginate from 'react-paginate';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Moment from "react-moment";

const Quotation = ({quotations, pagination, getQuotations}) => {
  let tableHeader = [
    {
      Header: 'DevisID',
      accessor: 'id',
    },
    {
      Header: 'UserID',
      accessor: 'user.id',
    },
    {
      Header: 'Postal Code',
      accessor: 'postal_code',
    },
    {
      Header: 'Type Logement',
      accessor: 'type_accommodation',
    },
    {
      Header: 'Type prospect',
      accessor: 'prospect_type',
    },
    {
      Header: 'Type Résidence',
      accessor: 'type_residence',
    },
    {
      Header: 'Etage',
      accessor: 'apartment_floor',
    },
    {
      Header: 'Surface',
      accessor: 'apartment_surface',
    },
    {
      Header: 'Pièces',
      accessor: 'room',
    },
    {
      Header: 'Assuré',
      accessor: 'insured',
      Cell: ({ cell }) => (
        <span>
          {cell.row.original.insured ? "Oui": "Non"}
        </span>
      )
    },
    {
      Header: 'Résiliation',
      accessor: 'termination',
      Cell: ({ cell }) => (
        <span>
          {cell.row.original.termination ? "Oui": "Non"}
        </span>
      )
    },
    {
      Header: 'Franchise (€)',
      accessor: 'franchise',
    },
    {
      Header: 'Capital mobilier (€)',
      accessor: 'furniture_capital',
    },
    {
      Header: 'Valeur à neuf (€) ',
      accessor: 'furniture_two_years_old',
      Cell: ({ cell }) => (
        <span>
          {cell.row.original.furniture_two_years_old ? "Oui": "Non"}
        </span>
      )
    },
    {
      Header: 'Obj. valeur 400 (€)',
      accessor: 'total_value_furniture_400',
    },
    {
      Header: 'Obj. valeur 1800 (€)',
      accessor: 'total_value_furniture_1800',
    },
    {
      Header: 'Obj. valeur est. (€)',
      accessor: 'estimated_coverage',
    },
    {
      Header: 'Bris / San / Elec',
      accessor: 'option_glass',
      Cell: ({ cell }) => (
        <span>
          {cell.row.original.option_glass ? "Oui": "Non"}
        </span>
      )
    },
    {
      Header: 'Vol Vandalisme',
      accessor: 'option_thief',
      Cell: ({ cell }) => (
        <span>
          {cell.row.original.option_thief ? "Oui": "Non"}
        </span>
      )
    },
    {
      Header: 'Aff. nomades co ',
      accessor: 'option_mobile',
      Cell: ({ cell }) => (
        <span>
          {cell.row.original.option_mobile ? "Oui": "Non"}
        </span>
      )
    },
    {
      Header: 'Protect. Juridique',
      accessor: 'protect_legal',
      Cell: ({ cell }) => (
        <span>
          {cell.row.original.protect_legal ? "Oui": "Non"}
        </span>
      )
    },
    {
      Header: 'Ass. scolaire. Juridique',
      accessor: 'school_insurance',
      Cell: ({ cell }) => (
        <span>
          {cell.row.original.school_insurance ? "Oui": "Non"}
        </span>
      )
    },
    {
      Header: 'Dépendences',
      accessor: 'dependencies',
      Cell: ({ cell }) => (
        <span>
          {cell.row.original.dependencies ? "Oui": "Non"}
        </span>
      )
    },
    {
      Header: 'Prix / mois (€)',
      accessor: 'cost_month',
    },
    {
      Header: 'PDF',
      accessor: '',
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
          <NavLink to={'quotation/' + cell.row.original.id} className="btn btn-outline-primary"><i className="icon fa fa-eye"></i></NavLink>
        </div>

      )
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
        <div>
          <h2 className="main-content-title tx-24 mg-b-5 text-white font-weight-bold">MRH</h2>
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
              <div><h6 className="main-content-label mb-1 text-danger font-weight-bold">Devis</h6></div>
              <div className="row table-filter">
                <div className="col-lg-12 d-lg-flex justify-content-end">
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
