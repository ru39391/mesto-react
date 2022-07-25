import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupActive] = React.useState(0);
  function handleEditProfileClick() {
    setEditProfilePopupActive(1);
  };
  const editProfilePopupActiveClass = `${isEditProfilePopupOpen ? 'modal_visible': ''}`;

  const [isEditAvatarPopupOpen, setEditAvatarPopupActive] = React.useState(0);
  function handleEditAvatarClick() {
    setEditAvatarPopupActive(1);
  };
  const editAvatarPopupActiveClass = `${isEditAvatarPopupOpen ? 'modal_visible': ''}`;

  const [isAddPlacePopupOpen, setAddPlacePopupActive] = React.useState(0);
  function handleAddPlaceClick() {
    setAddPlacePopupActive(1);
  };
  const addPlacePopupActiveClass = `${isAddPlacePopupOpen ? 'modal_visible': ''}`;

  function closeAllPopups() {
    setEditProfilePopupActive(0);
    setEditAvatarPopupActive(0);
    setAddPlacePopupActive(0);
  }

  return (
    <>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} />
      <Footer />
      <ImagePopup />
      <PopupWithForm title="Редактировать профиль" className="edit-profile" formName="editProfile" btnCaption="Сохранить" isOpen={editProfilePopupActiveClass} onClose={closeAllPopups}>
        <fieldset className="form__body">
          <div className="form__field-holder">
            <input className="form__field" name="name" minLength="2" maxLength="40" type="text" placeholder="Имя" required />
            <div className="form__error name-error"></div>
          </div>
          <div className="form__field-holder">
            <input className="form__field" name="about" minLength="2" maxLength="200" type="text" placeholder="О себе" required />
            <div className="form__error about-error"></div>
          </div>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm title="Обновить аватар" className="update-userpic" formName="updateUserpic" btnCaption="Сохранить" isOpen={editAvatarPopupActiveClass} onClose={closeAllPopups}>
        <fieldset className="form__body">
          <div className="form__field-holder">
            <input className="form__field" name="link" type="url" placeholder="Ссылка на картинку" required />
            <div className="form__error link-error"></div>
          </div>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm title="Новое место" className="add-card" formName="addCard" btnCaption="Создать" isOpen={addPlacePopupActiveClass} onClose={closeAllPopups}>
        <fieldset className="form__body">
          <div className="form__field-holder">
            <input className="form__field" name="name" minLength="2" maxLength="30" type="text" placeholder="Название" required />
              <div className="form__error name-error"></div>
          </div>
          <div className="form__field-holder">
            <input className="form__field" name="link" type="url" placeholder="Ссылка на картинку" required />
              <div className="form__error link-error"></div>
          </div>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm title="Вы уверены?" className="remove-card" formName="removeCard" btnCaption="Да" />
    </>
  );
}

export default App;
