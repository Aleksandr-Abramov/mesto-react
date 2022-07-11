import React from "react";
import trashIcon from "../images/svg/Trash.svg";

function Card({ item, onCardClick }) {

function hendelClick() {
    onCardClick(item)   
}
  return (
    <div className="gallery__item">
      <img className="gallery__img" src={`${item.link}`} alt={`${item.name}`} onClick={hendelClick} />
      <img className="gallery__trash" src={trashIcon} alt="удалить" />
      <div className="gallery__text-wrapper">
        <h2 className="gallery__text">{item.name}</h2>
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
