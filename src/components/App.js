import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

import api from "../utils/api";
import CurrentUserContext from '../contexts/CurrentUserContext';
import profileAvatar from '../images/profile/profile__avatar.png';

function App() {
  const [CurrentUser, setCurrentUser] = React.useState({
    id: null,
    name: 'Жак-Ив Кусто',
    about: 'Исследователь океана',
    avatar: profileAvatar
  });
  const [Cards, setCardList] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setCurrentUser({
          id: userData._id,
          name: userData.name,
          about: userData.about,
          avatar: userData.avatar
        });
        setCardList(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
  
  function handleUpdateUser(data) {
    api.setUserData(data)
      .then(res => {
        CurrentUser.name = res.name;
        CurrentUser.about = res.about;
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateAvatar(data) {
    api.setUserPic(data)
      .then(res => {
        CurrentUser.avatar = res.avatar;
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleAddPlaceSubmit(data) {
    api.addCard(data)
      .then(res => {
        setCardList([res, ...Cards]); 
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(item => item._id === CurrentUser.id);
    api.changeLikeCardStatus({
      id: card._id,
      isLiked: !isLiked
    })
      .then(res => {
        setCardList(state => state.map(item => item._id === card._id ? res : item));
      })
      .catch(err => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api.removeCard({
      id: card._id
    })
      .then(res => {
        setCardList(state => state.filter(item => item._id !== card._id));
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <CurrentUserContext.Provider value={CurrentUser}>
      <Header />
      <Main cards={Cards} onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
      <Footer />
      <ImagePopup card={SelectedCard} onClose={closeAllPopups} />
      <EditProfilePopup isOpen={IsEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
      <EditAvatarPopup isOpen={IsEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
      <AddPlacePopup isOpen={IsAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
      <PopupWithForm title="Вы уверены?" className="remove-card" formName="removeCard" btnCaption="Да" />
    </CurrentUserContext.Provider>
  );
}

export default App;
