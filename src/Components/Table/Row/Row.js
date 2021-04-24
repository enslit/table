import React, {useState} from 'react'
import Form from '../../Form/Form'

function Row({row, onDeleteRow, onEditRow}) {
  const [editMode, setEditMode] = useState(false);
  const {id, name, type, color} = row;

  const handleEditClick = () => {
    setEditMode(true);
  }

  const handleCloseForm = () => {
    setEditMode(false);
  }

  const handleSubmit = (data) => {
    onEditRow({...data, id}, setEditMode);
  }

  const handleDeleteClick = () => {
    onDeleteRow(id);
  }

  if (editMode) {
    return (
      <tr className="table__row">
        <td colSpan={4}>
          <Form
            onSubmit={handleSubmit}
            onClose={handleCloseForm}
            initialData={{name, type, color}}
          />
        </td>
      </tr>
    )
  }

  return (
    <tr className="table__row">
      <td className="table__cell">{name}</td>
      <td className="table__cell">{type}</td>
      <td className="table__cell" style={{backgroundColor: color}}>{color}</td>
      <td className="table__cell table__cell_type_actions">
        <button type="button" className="button button_type_edit" onClick={handleEditClick}>
          <span className="material-icons">edit</span>
        </button>
        <button type="button" className="button button_type_delete" onClick={handleDeleteClick}>
          <span className="material-icons">delete</span>
        </button>
      </td>
    </tr>
  )
}

export default Row;