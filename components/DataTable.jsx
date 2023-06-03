import { useRouter } from "next/router";
import React, { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { MdOutlineClear } from "react-icons/md";

import dynamic from "next/dynamic";

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <div className="flex flex-row h-8 bg-transparent !important ">
    <input
      id="search"
      type="text"
      placeholder="Filter By Name"
      value={filterText}
      onChange={onFilter}
      className="p-2 rounded outline-none"
    />
    <button onClick={onClear} className="bg-[#800020] p-2 text-white h-full">
      <MdOutlineClear />
    </button>
  </div>
);

const DataTableComponent = ({ columns, dataSource }) => {
  const router = useRouter();

  const handleRowClicked = (row) => {
    // Navigate to the details page with the clicked row's ID as a query parameter
    router.push(`/user/${row.id}`);
  };

  const [filterText, setFilterText] = useState("");
  const [data, setData] = useState(dataSource);
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = data.filter(
    (item) =>
      item.patientName &&
      item.patientName.toLowerCase().includes(filterText.toLowerCase())
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      columns={columns}
      data={filteredItems}
      pagination
      paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
      subHeader
      subHeaderComponent={subHeaderComponentMemo}
      selectableRows={false}
      persistTableHead
      noDataComponent
      // onRowClicked={handleRowClicked}

      customStyles={{
        headCells: {
          style: {
            justifyContent: "center",
          },
        },
        cells: {
          style: {
            justifyContent: "center",
          },
        },
      }}
    />
  );
};

export default DataTableComponent;
