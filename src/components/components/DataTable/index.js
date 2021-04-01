import React, {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useTable } from 'react-table'

function Table({ columns, data }) {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  })
  return (

    <table {...getTableProps()} className='table b-table table-striped table-hover'>
      <thead>
      {headerGroups.map(headerGroup => (
        <tr {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th {...column.getHeaderProps()}>
              {column.render('Header')}
            </th>
          ))}
        </tr>
      ))}
      </thead>
      <tbody>
      {rows.map((row, i) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()}>
            {row.cells.map(cell => {
              return (
                <td {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </td>
              )
            })}
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

function DataTable({header, data}) {
  const columns = React.useMemo(
    () => header,
    []
  )


  return (
    <div>
      <Table columns={columns} data={data}/>
    </div>
  )
}

export default DataTable
