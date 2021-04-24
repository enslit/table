import React, {useEffect, useState} from 'react';
import Row from './Row'
import RowForm from './RowForm'
import MaterialButton from './MaterialButton'

function App() {
  const [rows, setRows] = useState([
    {id: 1, name: "name 1", type: "main", color: "#f4f4f4"},
    {id: 2, name: "name 2", type: "side", color: "#f8f8f8"},
  ]);
  const [addNewMode, setAddNewMode] = useState(false);

  const handleAddRow = (rowData) => {
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

  useEffect(() => {
  }, [rows]);


  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr className="table__row">
            <td className="table__cell" colSpan={2}>
              {
                addNewMode
                  ? 'Добавить строку'
                  : <MaterialButton type="add" handleClick={() => setAddNewMode(true)} />
              }
            </td>
            <td className="table__cell" colSpan={2}>
              Filter
            </td>
          </tr>
          {
            addNewMode &&
            <tr className="table__row">
              <td className="table__cell" colSpan={4}>
                <RowForm onClose={() => setAddNewMode(false)} onSubmit={handleAddRow} />
              </td>
            </tr>
          }
          <tr className="table__row">
            <th className="table__cell">Name</th>
            <th className="table__cell">Type</th>
            <th className="table__cell">Color</th>
            <th className="table__cell">Actions</th>
          </tr>
        </thead>
        <tbody>
        {
          rows.map((row) => (
            <Row
              key={row.id}
              row={row}
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
