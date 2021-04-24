import React, {useState} from 'react';
import MaterialButton from '../MaterialButton/MaterialButton'
import Form from '../Form/Form'
import Row from './Row/Row'
import './table.scss';
import {DragDropContext, Droppable} from 'react-beautiful-dnd'

function Table({rows, handleAddRow, handleEditRow, handleDeleteRow, onDragEnd}) {
  const [addNewMode, setAddNewMode] = useState(false);

  const handleAddNewRow = (formData) => {
    handleAddRow(formData, setAddNewMode);
  }

  const List = React.memo(({rows}) => {
    return rows.map((row, index) => (
      <Row
        key={row.id}
        index={index}
        row={row}
        onEditRow={handleEditRow}
        onDeleteRow={handleDeleteRow}
      />
    ));
  });

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
              <Form onClose={() => setAddNewMode(false)} onSubmit={handleAddNewRow} />
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
      {
        rows.length === 0
          ? <tbody>
              <tr className="table__row">
                <td className="table__cell" colSpan={4}>
                  Список пока пуст...
                </td>
              </tr>
            </tbody>
          : <DragDropContext onDragEnd={onDragEnd}>
              <Droppable droppableId="list">
                {provided => (
                  <tbody ref={provided.innerRef} {...provided.droppableProps}>
                  <List rows={rows} />
                  {provided.placeholder}
                  </tbody>
                )}
              </Droppable>
            </DragDropContext>
      }
    </table>
  );
}

export default Table;