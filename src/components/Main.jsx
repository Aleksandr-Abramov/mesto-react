import React from "react";
import Card from "./Card.jsx";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import api from "../utils/Api.js";
import { useState } from "react"; 

function Main({
  onEditProfile,
  onAddPlace,
  onEditAvatar,
  onCardClick,
}) {

  const userData = React.useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === userData._id);

    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
  });
  }

  React.useEffect(() => {
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
          <img
            className="profile__image"
            src={userData.avatar}
            alt="Жак-Ив Кусто"
          />
        </div>

        <div className="profile__text-wrapper">
          <h1 className="profile__title">{userData.name}</h1>
          <p className="profile__sub-title">{userData.about}</p>
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
          return (
            <Card
              card={item}
              key={item._id}
              userData={userData}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
            />
          );
        })}
      </section>
    </main>
  );
}

export default Main;
