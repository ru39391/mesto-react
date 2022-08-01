import React from 'react';
import modalClose from '../images/modal/modal__close.svg';

function PopupWithForm({className, formName, title, btnCaption, children, isOpen, onClose, onSubmit}) {
  return (
    <div className={`modal modal_target_${className} ${isOpen && 'modal_visible'}`}>
      <div className="modal__content">
        <button className="modal__close" type="button" onClick={onClose}>
          <img className="modal__close-icon" src={modalClose} alt="Закрыть всплывающее окно" />
        </button>
        <h2 className="modal__title">{title}</h2>

        <form className="form" name={formName} onSubmit={onSubmit} action="#">
          {children}
          <button className="form__button" type="submit">
            <span className="form__button-caption">{btnCaption}</span>
            <span className="form__button-loading"></span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;