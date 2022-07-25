import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {
  const [IsEditProfilePopupOpen, setEditProfilePopupActive] = React.useState(false);
  function handleEditProfileClick() {
    setEditProfilePopupActive(true);
  };

  const [IsEditAvatarPopupOpen, setEditAvatarPopupActive] = React.useState(false);
  function handleEditAvatarClick() {
    setEditAvatarPopupActive(true);
  };

  const [IsAddPlacePopupOpen, setAddPlacePopupActive] = React.useState(false);
  function handleAddPlaceClick() {
    setAddPlacePopupActive(true);
  };

  const [SelectedCard, setSelectedCard] = React.useState(null);
  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditProfilePopupActive(false);
    setEditAvatarPopupActive(false);
    setAddPlacePopupActive(false);
    setSelectedCard(null);
  }

  return (
    <>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} />
      <Footer />
      <ImagePopup card={SelectedCard} onClose={closeAllPopups} />
      <PopupWithForm title="Редактировать профиль" className="edit-profile" formName="editProfile" btnCaption="Сохранить" isOpen={IsEditProfilePopupOpen} onClose={closeAllPopups}>
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
      <PopupWithForm title="Обновить аватар" className="update-userpic" formName="updateUserpic" btnCaption="Сохранить" isOpen={IsEditAvatarPopupOpen} onClose={closeAllPopups}>
        <fieldset className="form__body">
          <div className="form__field-holder">
            <input className="form__field" name="link" type="url" placeholder="Ссылка на картинку" required />
            <div className="form__error link-error"></div>
          </div>
        </fieldset>
      </PopupWithForm>
      <PopupWithForm title="Новое место" className="add-card" formName="addCard" btnCaption="Создать" isOpen={IsAddPlacePopupOpen} onClose={closeAllPopups}>
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
