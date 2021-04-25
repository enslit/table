import React, {useEffect, useState} from 'react';
import TableHead from './TableHead/TableHead'
import './table.scss';
import TableBody from './TableBody/TableBody'

function Table({rows, handleAddRow, handleEditRow, handleDeleteRow, onDragEnd}) {
  const [searchValue, setSearchValue] = useState('');
  const [filteredRows, setFilteredRows] = useState(rows);

  useEffect(() => {
    if (searchValue) {
      setFilteredRows([
        ...rows.filter(r => {
          const name = r.name.toLowerCase();
          const regExp = new RegExp(searchValue.toLowerCase(), 'g');
          return name.match(regExp);
        })
      ]);
    } else {
      setFilteredRows([...rows]);
    }
  }, [searchValue, rows]);


  return (
    <table className="table">
      <TableHead
        searchValue={searchValue}
        handleAddNewRow={handleAddRow}
        handleSearchInput={setSearchValue}
      />
      <TableBody
        rows={filteredRows}
        handleEdit={handleEditRow}
        handleDelete={handleDeleteRow}
        onDragEnd={onDragEnd}
      />
    </table>
  );
}

export default Table;