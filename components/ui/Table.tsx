'use client';
import React from 'react';
import DataTable, { TableColumn } from 'react-data-table-component';
const paginationComponentOptions = {
  rowsPerPageText: 'Number of lines per page',
  rangeSeparatorText: '/',
  selectAllRowsItem: true,
  selectAllRowsItemText: 'All',
};
function Table({
  columns,
  data,
}: {
  columns: TableColumn<unknown>[] | any;
  data: unknown[];
}) {
  return (
    <DataTable
      highlightOnHover
      columns={columns}
      data={data}
      pagination
      paginationComponentOptions={paginationComponentOptions}
      customStyles={{
        rows: {
          style: {
            height: '60px',
          },
        },
        cells: {
          style: {
            height: '50px',
          },
        },
      }}
    />
  );
}

export default Table;
