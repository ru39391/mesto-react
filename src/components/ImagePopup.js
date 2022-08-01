import React from 'react';
import modalClose from '../images/modal/modal__close.svg';

function ImagePopup({card, onClose}) {
  const modal = {
    classActive: card ? 'modal_visible': '',
    link: card ? card.link : '',
    name: card ? card.name : '',
  };
  return (
    <div className={`modal modal_target_reveal-photo modal_bg_dark ${modal.classActive}`}>
      <div className="modal__content modal__content_type_photo-holder">
        <button className="modal__close" type="button" onClick={onClose}>
          <img className="modal__close-icon" src={modalClose} alt="Закрыть всплывающее окно" />
        </button>
        <img className="modal__photo" src={modal.link} alt={modal.name} />
        <p className="modal__photo-caption">{modal.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;