import React from "react";
import Card from "./Card";
import profileAvatar from "../images/profile/profile__avatar.png";
import profileEditBtn from "../images/profile/profile__edit-button.svg";
import profileAddBtn from "../images/profile/profile__add-button.svg";
import { api } from "../utils/api";

function Main(props) {
  const [UserName, setUserName] = React.useState("Жак-Ив Кусто");
  const [UserDescription, setUserDescription] = React.useState("Исследователь океана");
  const [UserAvatar, setUserAvatar] = React.useState(profileAvatar);
  const [Cards, setCardList] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCardList(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__aside">
          <div className="profile__avatar-holder">
            <img className="profile__avatar" src={UserAvatar} alt={UserName} />
            <button
              className="profile__avatar-button"
              type="button"
              onClick={props.onEditAvatar}
            >
              <img
                className="profile__edit-icon"
                src={profileEditBtn}
                alt="Обновить аватар"
              />
            </button>
          </div>
          <div className="profile__info">
            <div className="profile__info-heading">
              <h1 className="profile__title">{UserName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                onClick={props.onEditProfile}
              >
                <img src={profileEditBtn} alt="Редактировать профиль" />
              </button>
            </div>
            <p className="profile__subtitle">{UserDescription}</p>
          </div>
        </div>
        <button
          className="profile__add-button"
          type="button"
          onClick={props.onAddPlace}
        >
          <img src={profileAddBtn} alt="Добавть фото" />
        </button>
      </section>

      <section className="elements">
        {Cards.map((cardsItem) => (
          <Card
            card={cardsItem}
            key={cardsItem._id}
            link={cardsItem.link}
            name={cardsItem.name}
            likesCounter={cardsItem.likes.length}
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
