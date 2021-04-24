import React, {useState} from 'react'

function Row({name, type, color}) {
  const [currentColor, setCurrentColor] = useState(color);

  return (
    <tr className="table__row">
      <td className="table__cell">{name}</td>
      <td className="table__cell">{type}</td>
      <td className="table__cell">
        <div className="color-picker">
          <button
            className="color-picker__button"
            style={{backgroundColor: currentColor}}
            aria-label="Выбрать цвет"
            type="button"
          >
            {currentColor}
          </button>
        </div>
      </td>
    </tr>
  )
}

export default Row;