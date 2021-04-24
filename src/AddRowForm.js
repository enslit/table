import React, {useState} from 'react';

function AddRowForm({onSubmit}) {
  const defaultColor = '#ffffff';
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState(defaultColor);

  const handleChangeName = (evt) => {
    setName(evt.target.value);
  }

  const handleChangeType = (evt) => {
    setType(evt.target.value);
  }

  const handleChangeColor = (evt) => {
    setColor(evt.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({name, type, color}, resetForm);
  }

  const resetForm = () => {
    setName('');
    setType('');
    setColor(defaultColor);
  }

  return (
    <form noValidate className="form" onSubmit={handleSubmit}>
      <div className="form__fields">
        <div className="form__field">
          <label htmlFor="name" className="form__label">Name</label>
          <input type="text" id="name" className="form__input" value={name} onChange={handleChangeName} name="name"/>
        </div>
        <div className="form__field">
          <label htmlFor="type" className="form__label">Type</label>
          <input type="text" id="type" className="form__input" value={type} onChange={handleChangeType} name="type"/>
        </div>
        <div className="form__field">
          <label htmlFor="color" className="form__label">Color</label>
          <input type="color" id="color" className="form__input" value={color} onChange={handleChangeColor} name="color"/>
        </div>
      </div>
      <div className="form__buttons">
        <button type="submit" className="form__button form__button_type_submit">
          <span className="material-icons">add</span>
        </button>
        <button type="reset" className="form__button form__button_type_reset">
          <span className="material-icons">clear</span>
        </button>
      </div>
    </form>
  );
}

export default AddRowForm;