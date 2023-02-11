import React from "react";

const DataTable = () => {
  const tableStyles = {
    table: {
      width: "100%",
      borderCollapse: "collapse",
      border: "1px solid grey",
      backgroundColor: "#ffffff",
    },
    tr: {
      borderBottom: "1px solid grey",
    },
    th: {
      width: "25%",
      textAlign: "left",
      borderRight: "1px solid grey",
      borderBottom: "1px solid grey",
      padding: "8px",
    },
    td: {
      width: "25%",
      textAlign: "left",
      padding: "8px",
    },
  };
  return (
    <div>
      <table style={tableStyles.table}>
        <thead>
          <tr>
            <th scope="col" style={tableStyles.th}>
              Recorded Date
            </th>
            <th scope="col" style={tableStyles.th}>
              Patient Name
            </th>
            <th scope="col" style={tableStyles.th}>
              Intervention Id
            </th>
            <th scope="col" style={tableStyles.th}>
              Pharmaceutical Care
            </th>
            <th scope="col" style={tableStyles.th}>
              Interventions
            </th>
            <th scope="col" style={tableStyles.th}>
              Company
            </th>
          </tr>
        </thead>
        <tbody>
          <tr style={tableStyles.tr}>
            <td align="center" style={tableStyles.td}>
              <input type="checkbox" name="" id="" />
              2023-02-06
            </td>
            <td align="center" style={tableStyles.td}>
              Joel Edem Amenuvor
            </td>
            <td align="center" style={tableStyles.td}>
              1
            </td>
            <td align="center" style={tableStyles.td}>
              Ineffective medicine
            </td>
            <td align="center" style={tableStyles.td}>
              Switch Dosage form
            </td>
            <td align="center" style={tableStyles.td}>
              Trober
            </td>
          </tr>
          <tr style={tableStyles.tr}>
            <td align="center" style={tableStyles.td}>
              <input type="checkbox" name="" id="" />
              2023-02-06
            </td>
            <td align="center" style={tableStyles.td}>
              Joel Edem Amenuvor
            </td>
            <td align="center" style={tableStyles.td}>
              1
            </td>
            <td align="center" style={tableStyles.td}>
              Ineffective medicine
            </td>
            <td align="center" style={tableStyles.td}>
              Switch Dosage form
            </td>
            <td align="center" style={tableStyles.td}>
              Trober
            </td>
          </tr>
          <tr style={tableStyles.tr}>
            <td align="center" style={tableStyles.td}>
              <input type="checkbox" name="" id="" />
              2023-02-06
            </td>
            <td align="center" style={tableStyles.td}>
              Joel Edem Amenuvor
            </td>
            <td align="center" style={tableStyles.td}>
              1
            </td>
            <td align="center" style={tableStyles.td}>
              Ineffective medicine
            </td>
            <td align="center" style={tableStyles.td}>
              Switch Dosage form
            </td>
            <td align="center" style={tableStyles.td}>
              Trober
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
