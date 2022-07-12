import React from "react";
import { useState } from "react";
import api from "../utils/Api.js";
import Card from "./Card.jsx";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setuserDescription] = useState("");
  const [userAvatar, setuserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api
      .getInfoUser()
      .then((res) => {
        setUserName(res.name);
        setuserDescription(res.about);
        setuserAvatar(res.avatar);
      })
      .catch((err) =>
        console.log(`Ошибка при получении данных пользователя:${err}`)
      );

    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) =>
        console.log(`Ошибка при получении данных карточек:${err}`)
      );
  }, []);

  return (
    <main className="main">
      <section className="profile page__profile">
        <div className="profile__image-container" onClick={onEditAvatar}>
          <img className="profile__image" src={userAvatar} alt="Жак-Ив Кусто" />
        </div>

        <div className="profile__text-wrapper">
          <h1 className="profile__title">{userName}</h1>
          <p className="profile__sub-title">{userDescription}</p>
          <button
            className="profile__edit-btn"
            onClick={onEditProfile}
            type="button"
            aria-label="редактировать профиль"
          ></button>
        </div>

        <button
          className="profile__btn"
          onClick={onAddPlace}
          type="button"
        ></button>
      </section>
      <section
        className="gallery page__gallery"
        aria-label="Галерея фотографий"
      >
        {cards.map(function (item) {
          return <Card card={item} key={item._id} onCardClick={onCardClick} />;
        })}
      </section>
    </main>
  );
}

export default Main;
