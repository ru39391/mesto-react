import React from 'react';
import modalClose from '../images/modal/modal__close.svg';

function ImagePopup() {
  return (
    <div className="modal modal_target_reveal-photo modal_bg_dark">
      <div className="modal__content modal__content_type_photo-holder">
        <button className="modal__close" type="button">
          <img className="modal__close-icon" src={modalClose} alt="Закрыть всплывающее окно" />
        </button>
        <img className="modal__photo" src="#" alt="" />
        <p className="modal__photo-caption"></p>
      </div>
    </div>
  );
}

export default ImagePopup;