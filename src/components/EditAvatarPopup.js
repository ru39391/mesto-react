import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
  const currentUser = React.useContext(CurrentUserContext);
  const avatarRef = React.useRef();

  function handleChangeAvatar(e) {
    avatarRef.value = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();  
    onUpdateAvatar({
      avatar: avatarRef.value,
    });
  }
  
  React.useEffect(() => {
    avatarRef.value = currentUser.avatar;
  }, [currentUser]); 

  return (
    <PopupWithForm title="Обновить аватар" className="update-userpic" formName="updateUserpic" btnCaption="Сохранить" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <fieldset className="form__body">
        <div className="form__field-holder">
          <input className="form__field" name="avatar" type="url" placeholder="Ссылка на картинку" ref={avatarRef} onChange={handleChangeAvatar} required />
          <div className="form__error avatar-error"></div>
        </div>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;