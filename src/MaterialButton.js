import React from 'react';

function MaterialButton({handleClick, type}) {
  return (
    <button type="button" className={`button button_type_${type}`} onClick={handleClick}>
      <span className="material-icons">{type}</span>
    </button>
  );
}

export default MaterialButton;