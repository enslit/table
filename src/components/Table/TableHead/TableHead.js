import React, {useState} from 'react';
import MaterialButton from '../../MaterialButton/MaterialButton'
import Form from '../../Form/Form'
import Search from '../../Search/Search'

function TableHead({handleAddNewRow, handleSearchInput, searchValue}) {
  const [addNewMode, setAddNewMode] = useState(false);

  const handleSubmitAddNewRow = (formData) => {
    handleAddNewRow(formData, setAddNewMode)
  }

  return (
    <thead>
      <tr className="table__row">
        <td className="table__cell" colSpan={2}>
          {
            addNewMode
              ? 'Добавить строку'
              : <MaterialButton type="add" handleClick={() => setAddNewMode(true)} />
          }
        </td>
        <td className="table__cell table__cell_type_search" colSpan={2}>
          <Search value={searchValue} onSearch={handleSearchInput} />
        </td>
      </tr>
      {
        addNewMode &&
        <tr className="table__row">
          <td className="table__cell" colSpan={4}>
            <Form onClose={() => setAddNewMode(false)} onSubmit={handleSubmitAddNewRow} />
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
  );
}

export default TableHead;