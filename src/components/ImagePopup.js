import React from 'react';
import modalClose from '../images/modal/modal__close.svg';

function ImagePopup(props) {
  const modal = {
    classActive: props.card ? 'modal_visible': '',
    link: props.card ? props.card.link : '',
    name: props.card ? props.card.name : '',
  };
  return (
    <div className={`modal modal_target_reveal-photo modal_bg_dark ${modal.classActive}`}>
      <div className="modal__content modal__content_type_photo-holder">
        <button className="modal__close" type="button" onClick={props.onClose}>
          <img className="modal__close-icon" src={modalClose} alt="Закрыть всплывающее окно" />
        </button>
        <img className="modal__photo" src={modal.link} alt={modal.name} />
        <p className="modal__photo-caption">{modal.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;