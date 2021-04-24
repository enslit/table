import React, {useState} from 'react'
import {SketchPicker} from 'react-color'

function Row({name, type, color}) {
  const [currentColor, setCurrentColor] = useState(color);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const onChangeColor = (color) => {
    setCurrentColor(color.hex);
  }

  const handleChangeColorClick = () => {
    setShowColorPicker(!showColorPicker);
  }

  const handleChangeColorClose = () => {
    setShowColorPicker(false);
  }

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
            onClick={handleChangeColorClick}
          >
            {currentColor}
          </button>
        </div>
        {
          showColorPicker &&
          <div className="color-picker__popover">
            <div className="color-picker__cover" onClick={handleChangeColorClose} />
            <SketchPicker
              color={currentColor}
              onChangeComplete={onChangeColor}
            />
          </div>
        }
      </td>
    </tr>
  )
}

export default Row;