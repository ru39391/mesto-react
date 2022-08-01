import React from "react";
import Card from "./Card";
import CurrentUserContext from '../contexts/CurrentUserContext';
import profileEditBtnIcon from "../images/profile/profile__edit-button.svg";
import profileAddBtnIcon from "../images/profile/profile__add-button.svg";

function Main({cards, onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__aside">
          <div className="profile__avatar-holder">
            <img className="profile__avatar" src={currentUser.avatar} alt={currentUser.name} />
            <button
              className="profile__avatar-button"
              type="button"
              onClick={onEditAvatar}
            >
              <img
                className="profile__edit-icon"
                src={profileEditBtnIcon}
                alt="Обновить аватар"
              />
            </button>
          </div>
          <div className="profile__info">
            <div className="profile__info-heading">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={onEditProfile}
              >
                <img src={profileEditBtnIcon} alt="Редактировать профиль" />
              </button>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={onAddPlace}
        >
          <img src={profileAddBtnIcon} alt="Добавть фото" />
        </button>
      </section>

      <section className="elements">
        {cards.map((cardsItem) => (
          <Card
            card={cardsItem}
            key={cardsItem._id}
            link={cardsItem.link}
            name={cardsItem.name}
            likesCounter={cardsItem.likes.length}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
