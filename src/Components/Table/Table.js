import React from 'react';
import TableHead from './TableHead/TableHead'
import './table.scss';
import TableBody from './TableBody/TableBody'

function Table({rows, handleAddRow, handleEditRow, handleDeleteRow, onDragEnd}) {
  return (
    <table className="table">
      <TableHead handleAddNewRow={handleAddRow} />
      <TableBody
        rows={rows}
        handleEdit={handleEditRow}
        handleDelete={handleDeleteRow}
        onDragEnd={onDragEnd}
      />
    </table>
  );
}

export default Table;