import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
  const currentUser = React.useContext(CurrentUserContext);
  const [Name, setName] = React.useState('');
  const [Description, setDescription] = React.useState('');

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeDesc(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser({
      name: Name,
      about: Description,
    });
  } 

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]); 

  return (
    <PopupWithForm title="Редактировать профиль" className="edit-profile" formName="editProfile" btnCaption="Сохранить" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <fieldset className="form__body">
        <div className="form__field-holder">
          <input className="form__field" name="name" minLength="2" maxLength="40" type="text" placeholder="Имя" value={Name || ''} onChange={handleChangeName} required />
          <div className="form__error name-error"></div>
        </div>
        <div className="form__field-holder">
          <input className="form__field" name="about" minLength="2" maxLength="200" type="text" placeholder="О себе" value={Description || ''} onChange={handleChangeDesc} required />
          <div className="form__error about-error"></div>
        </div>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditProfilePopup;