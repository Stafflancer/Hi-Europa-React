import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTable } from "react-table";

function Table({ columns, data }) {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });
  return (
    <table
      {...getTableProps()}
      className="table b-table table-striped table-hover"
    >
      <thead>
        {headerGroups.map((headerGroup, index) => (
          <tr {...headerGroup.getHeaderGroupProps()} key={index}>
            {headerGroup.headers.map((column, i) => (
              <th {...column.getHeaderProps()} key={i}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} key={i}>
              {row.cells.map((cell, _i) => {
                return (
                  <td {...cell.getCellProps()} key={_i}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function DataTable({ header, data }) {
  const columns = React.useMemo(() => header, []);

  return (
    <div>
      <Table columns={columns} data={data} />
    </div>
  );
}

export default DataTable;
