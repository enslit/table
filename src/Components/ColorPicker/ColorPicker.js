import React, {useState} from 'react';
import {SketchPicker} from 'react-color'

function ColorPicker({color, onChangeColor}) {
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleChangeColorClick = () => {
    setShowColorPicker(!showColorPicker);
  }

  const handleChangeColorClose = () => {
    setShowColorPicker(false);
  }

  return (
    <>
      <div className="color-picker">
        <button
          className="color-picker__button"
          style={{backgroundColor: color}}
          aria-label="Выбрать цвет"
          type="button"
          onClick={handleChangeColorClick}
        >
          {color}
        </button>
      </div>
      {
        showColorPicker &&
        <div className="color-picker__popover">
          <div className="color-picker__cover" onClick={handleChangeColorClose} />
          <SketchPicker
            color={color}
            onChangeComplete={onChangeColor}
          />
        </div>
      }
    </>
  );
}

export default ColorPicker;