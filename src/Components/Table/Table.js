import React, {useState} from 'react';
import MaterialButton from '../MaterialButton/MaterialButton'
import Form from '../Form/Form'
import Row from './Row/Row'
import './table.scss';

function Table({rows, handleAddRow, handleEditRow, handleDeleteRow}) {
  const [addNewMode, setAddNewMode] = useState(false);

  return (
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
            <Form onClose={() => setAddNewMode(false)} onSubmit={handleAddRow} />
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
  );
}

export default Table;