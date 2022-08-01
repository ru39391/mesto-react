import React from 'react';
import RemoveBtn from './RemoveBtn';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card({card, link, name, likesCounter, onCardClick, onCardLike, onCardDelete}) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwner = card.owner._id === currentUser.id;
  const isLiked = card.likes.some(item => item._id === currentUser.id);

  function handleClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  return (
    <article className="photo-wrap">
      <div className="photo-wrap__photo-holder" onClick={handleClick}>
        <img className="photo-wrap__picture" src={link} alt={name} />
      </div>
      <div className="photo-wrap__info">
        <h2 className="photo-wrap__title">{name}</h2>
        <div className="photo-wrap__likes">
          <button className={`photo-wrap__like-button ${isLiked ? 'photo-wrap__like-button_active': ''}`} type="button" onClick={handleLikeClick}></button>
          <div className="photo-wrap__likes-counter">{likesCounter}</div>
        </div>
      </div>
      {isOwner && <RemoveBtn card={card} onCardDelete={onCardDelete} /> }
    </article>
  );
}

export default Card;
