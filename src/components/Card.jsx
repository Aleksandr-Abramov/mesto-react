import React from "react";
import trashIcon from "../images/svg/Trash.svg";

function Card({ card, onCardClick }) {
  function hendelClick() {
    onCardClick(card);
  }
  return (
    <div className="gallery__item">
      <img
        className="gallery__img"
        src={`${card.link}`}
        alt={`${card.name}`}
        onClick={hendelClick}
      />
      <img className="gallery__trash" src={trashIcon} alt="удалить" />
      <div className="gallery__text-wrapper">
        <h2 className="gallery__text">{card.name}</h2>
        <div className="gallery__like-container">
          <button
            className="gallery__like"
            type="button"
            aria-label="поставить лайк"
          ></button>
          <span className="gallery__like-text"></span>
        </div>
      </div>
    </div>
  );
}
export default Card;
