import React from 'react';
import modalClose from '../images/modal/modal__close.svg';

function ImagePopup({card, onClose}) {
  return (
    <div className={`modal modal_target_reveal-photo modal_bg_dark ${card && 'modal_visible'}`}>
      <div className="modal__content modal__content_type_photo-holder">
        <button className="modal__close" type="button" onClick={onClose}>
          <img className="modal__close-icon" src={modalClose} alt="Закрыть всплывающее окно" />
        </button>
        <img className="modal__photo" src={card && card.link} alt={card && card.name} />
        <p className="modal__photo-caption">{card && card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;