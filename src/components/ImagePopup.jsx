import { type } from "@testing-library/user-event/dist/type";
import React from "react";

function ImagePopup(props) {
  console.log(props.card);
  return (
    <div className={`popup popup_bg ${props.card ? "popup_opened": ""}`}>
      <div className="popup__container">
    
        {/* <img className="popup__img" src={props.card._id} alt="" /> */}
        {/* <h2 className="popup__name">{props.card.name}</h2> */}
        <button
          className="popup__close popup__close-image"
          type="button"
          aria-label="закрыть popup" onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}
export default ImagePopup;
// src={`${props.card.link}`}