import React from 'react';
import removeBtnIcon from '../images/photo-wrap/photo-wrap__remove-button.svg';

function RemoveBtn({card, onCardDelete}) {
  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <button className="photo-wrap__remove-button" type="button" onClick={handleDeleteClick}>
      <img
        className="photo-wrap__remove-icon"
        src={removeBtnIcon}
        alt="Удалить"
      />
    </button>
  );
}

export default RemoveBtn;
