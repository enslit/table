import React, {useState} from 'react';
import Table from './Table/Table'

function App() {
  const [rows, setRows] = useState([
    {id: 1, name: "name 1", type: "main", color: "#f4f4f4"},
    {id: 2, name: "name 2", type: "side", color: "#f8f8f8"},
  ]);

  const handleAddRow = (rowData, setAddNewMode) => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        ...rowData
      }
    ])
    setAddNewMode(false);
  }

  const handleEditRow = (rowData, setEditMode) => {
    setRows(rows.map(row => row.id !== rowData.id ? row : rowData))
    setEditMode(false);
  }

  const handleDeleteRow = (id) => {
    setRows(rows.filter(r => r.id !== id));
  }

  return (
    <div className="container">
      <Table
        rows={rows}
        handleAddRow={handleAddRow}
        handleEditRow={handleEditRow}
        handleDeleteRow={handleDeleteRow}
      />
    </div>
  );
}

export default App;
