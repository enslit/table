import React from 'react';
import Table from './Table/Table'
import useLocalStorage from '../hooks/useLocalStorage'

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function App() {
  const [rows, setRows] = useLocalStorage('rows', []);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const reorderedRows = reorder(
      rows,
      result.source.index,
      result.destination.index
    );

    setRows(reorderedRows);
  }

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
        onDragEnd={onDragEnd}
        handleAddRow={handleAddRow}
        handleEditRow={handleEditRow}
        handleDeleteRow={handleDeleteRow}
      />
    </div>
  );
}

export default App;
