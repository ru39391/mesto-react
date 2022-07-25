import React from 'react';
import modalClose from '../images/modal/modal__close.svg';

function PopupWithForm(props) {
  return (
    <div className={`modal modal_target_${props.className} ${props.isOpen ? 'modal_visible': ''}`}>
      <div className="modal__content">
        <button className="modal__close" type="button" onClick={props.onClose}>
          <img className="modal__close-icon" src={modalClose} alt="Закрыть всплывающее окно" />
        </button>
        <h2 className="modal__title">{props.title}</h2>

        <form className="form" name={props.formName} action="#">
          {props.children}
          <button className="form__button" type="submit">
            <span className="form__button-caption">{props.btnCaption}</span>
            <span className="form__button-loading"></span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;