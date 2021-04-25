import React from 'react';
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import Row from '../Row/Row'

function TableBody({rows, handleEdit, handleDelete, onDragEnd}) {
  const List = React.memo(({rows}) => {
    return rows.map((row, index) => (
      <Row
        key={row.id}
        index={index}
        row={row}
        onEditRow={handleEdit}
        onDeleteRow={handleDelete}
      />
    ));
  });

  if (rows.length === 0) {
    return (
      <tbody>
        <tr className="table__row">
          <td className="table__cell" colSpan={4}>
            Список пока пуст...
          </td>
        </tr>
      </tbody>
    )
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="list">
        {provided => (
          <tbody ref={provided.innerRef} {...provided.droppableProps}>
            <List rows={rows} />
            {provided.placeholder}
          </tbody>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TableBody;