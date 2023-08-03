import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import DataTable from 'react-data-table-component';
import { MdOutlineClear } from 'react-icons/md';

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <div className='flex flex-row h-8 bg-transparent !important '>
    <input
      id='search'
      type='text'
      placeholder='Search By Name'
      value={filterText}
      onChange={onFilter}
      className='p-2 text-right rounded outline-none'
    />
  </div>
);

const DataTableComponent = ({ columns, dataSource }) => {
  const [filterText, setFilterText] = useState('');
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

  const subHeaderComponentMemo = useMemo(() => {
    return (
      <FilterComponent
        onFilter={e => setFilterText(e.target.value)}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      columns={columns}
      data={dataSource}
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      selectableRows={false}
      persistTableHead
      noDataComponent
      customStyles={{
        headCells: {
          style: {
            justifyContent: 'center',
          },
        },
        cells: {
          style: {
            justifyContent: 'center',
          },
        },
      }}
    />
  );
};

export default DataTableComponent;
