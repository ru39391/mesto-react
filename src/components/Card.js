import React from 'react';
import removeBtn from '../images/photo-wrap/photo-wrap__remove-button.svg';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="photo-wrap">
      <div className="photo-wrap__photo-holder" onClick={handleClick}>
        <img className="photo-wrap__picture" src={props.link} alt={props.name} />
      </div>
      <div className="photo-wrap__info">
        <h2 className="photo-wrap__title">{props.name}</h2>
        <div className="photo-wrap__likes">
          <button className="photo-wrap__like-button" type="button"></button>
          <div className="photo-wrap__likes-counter">{props.likesCounter}</div>
        </div>
      </div>
      <button className="photo-wrap__remove-button" type="button">
        <img
          className="photo-wrap__remove-icon"
          src={removeBtn}
          alt="Удалить"
        />
      </button>
    </article>
  );
}

export default Card;
