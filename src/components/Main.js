import React from 'react';
import profileAvatar from '../images/profile/profile__avatar.png';
import profileEditBtn from '../images/profile/profile__edit-button.svg';
import profileAddBtn from '../images/profile/profile__add-button.svg';
import {api} from '../utils/api';

function Main(props) {
  const [userName, setUserName] = React.useState('Жак-Ив Кусто');
  const [userDescription, setUserDescription] = React.useState('Исследователь океана');
  const [userAvatar, setUserAvatar] = React.useState(profileAvatar);

  function test() {
    api.getUserData()
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err);
    });
  }

  React.useEffect(() => {
    test()
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__aside">
          <div className="profile__avatar-holder">
            <img className="profile__avatar" src={userAvatar} alt={userName} />
            <button className="profile__avatar-button" type="button" onClick={props.onEditAvatar}>
              <img className="profile__edit-icon" src={profileEditBtn} alt="Обновить аватар" />
            </button>
          </div>
          <div className="profile__info">
            <div className="profile__info-heading">
              <h1 className="profile__title">{userName}</h1>
              <button className="profile__edit-button" type="button" onClick={props.onEditAvatar}>
                <img src={profileEditBtn} alt="Редактировать профиль" />
              </button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
          <img src={profileAddBtn} alt="Добавть фото" />
        </button>
      </section>

      <section className="elements"></section>
    </main>
  );
}

export default Main;