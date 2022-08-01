import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({isOpen, onClose, onAddPlace}) {
  const refs = {
    name: React.useRef(),
    link: React.useRef()
  };

  function handleChangeValue(e) {
    refs[e.target.name] = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();  
    onAddPlace({
      name: refs.name,
      link: refs.link
    });
  }
  
  React.useEffect(() => {
    Object.keys(refs).forEach(refsItem => {
      refs[refsItem].current.value = '';
    });
  }, [isOpen]); 

  return (
    <PopupWithForm title="Новое место" className="add-card" formName="addCard" btnCaption="Создать" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <fieldset className="form__body">
        <div className="form__field-holder">
          <input className="form__field" name="name" minLength="2" maxLength="30" type="text" placeholder="Название" ref={refs.name} onChange={handleChangeValue} required />
          <div className="form__error name-error"></div>
        </div>
        <div className="form__field-holder">
          <input className="form__field" name="link" type="url" placeholder="Ссылка на картинку" ref={refs.link} onChange={handleChangeValue} required />
          <div className="form__error link-error"></div>
        </div>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;