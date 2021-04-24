import React, {useState} from 'react';
import {SketchPicker} from 'react-color'

function RowForm({onSubmit, onClose, initialData}) {
  const defaultColor = '#ffffff';
  const [name, setName] = useState(initialData?.name || '');
  const [type, setType] = useState(initialData?.type || '');
  const [color, setColor] = useState(initialData?.color || defaultColor);
  const [showColorPicker, setShowColorPicker] = useState(false);

  const handleChangeColorClick = () => {
    setShowColorPicker(!showColorPicker);
  }

  const handleChangeColorClose = () => {
    setShowColorPicker(false);
  }


  const handleChangeName = (evt) => {
    setName(evt.target.value);
  }

  const handleChangeType = (evt) => {
    setType(evt.target.value);
  }

  const handleChangeColor = (value) => {
    setColor(value.hex);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({name, type, color});
  }

  return (
    <form noValidate className="form" onSubmit={handleSubmit}>
      <div className="form__fields">
        <div className="form__field">
          <label htmlFor="name" className="form__label">Name</label>
          <input
            type="text"
            id="name"
            className="form__input"
            value={name}
            onChange={handleChangeName}
            name="name"
            required
            minLength={2}
          />
        </div>
        <div className="form__field">
          <label htmlFor="type" className="form__label">Type</label>
          <select name="type" id="type" className="form__input" value={type} onChange={handleChangeType}>
            <option value="main">Main</option>
            <option value="side">Side</option>
            <option value="content">Content</option>
          </select>
        </div>
        <div className="form__field">
          <span className="form__label">Color</span>
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
                onChangeComplete={handleChangeColor}
              />
            </div>
          }
        </div>
      </div>
      <div className="form__buttons">
        <button type="submit" className="form__button form__button_type_submit">
          <span className="material-icons">done</span>
        </button>
        <button type="button" className="form__button form__button_type_reset" onClick={onClose}>
          <span className="material-icons">clear</span>
        </button>
      </div>
    </form>
  );
}

export default RowForm;