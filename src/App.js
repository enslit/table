import React, {useEffect, useState} from 'react';
import Row from './Row'

function App() {
  const [rows, setRows] = useState([
    {id: 1, name: "name 1", type: "main", color: "#f4f4f4"},
    {id: 2, name: "name 2", type: "side", color: "#f8f8f8"},
  ]);

  const handleAddRow = (rowData, setEditMode) => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        ...rowData
      }
    ])
    setEditMode(false);
  }

  const handleEditRow = (rowData, setEditMode) => {
    setRows(rows.map(row => row.id !== rowData.id ? row : rowData))
    setEditMode(false);
  }

  const handleDeleteRow = (id) => {
    setRows(rows.filter(r => r.id !== id));
  }

  useEffect(() => {
  }, [rows]);


  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr className="table__row">
            <th className="table__cell">Name</th>
            <th className="table__cell">Type</th>
            <th className="table__cell">Color</th>
            <th className="table__cell">Actions</th>
          </tr>
        </thead>
        <tbody>
        {
          rows.map(({id, name, type, color}) => (
            <Row
              key={id}
              id={id}
              name={name}
              type={type}
              color={color}
              onAddRow={handleAddRow}
              onEditRow={handleEditRow}
              onDeleteRow={handleDeleteRow}
            />
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;
