import React, {useState} from 'react';
import Row from './Row'
import AddRowForm from './AddRowForm'

function App() {
  const [rows, setRows] = useState([
    {id: 1, name: "name 1", type: "main", color: "#f4f4f4"},
    {id: 2, name: "name 2", type: "side", color: "#f8f8f8"},
  ]);

  const handleAddRow = (rowData, clearForm) => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        ...rowData
      }
    ])
    clearForm();
  }

  return (
    <div className="container">
      <AddRowForm onSubmit={handleAddRow} />
      <table className="table">
        <thead>
          <tr className="table__row">
            <th className="table__cell">Name</th>
            <th className="table__cell">Type</th>
            <th className="table__cell">Color</th>
          </tr>
        </thead>
        <tbody>
        {
          rows.map(({id, name, type, color}) => (
            <Row
              key={id}
              name={name}
              type={type}
              color={color}
            />
          ))
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;
