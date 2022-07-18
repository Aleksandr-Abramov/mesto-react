import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import Input from "./Input.jsx";
import React, { useState } from "react";
import ImagePopup from "./ImagePopup.jsx";
import api from "../utils/Api.js";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import { CardContext } from "../contexts/CardContext.js";
import EditProfilePopup from "./EditProfilePopup.jsx";
import EditAvatarPopup from "./EditAvatarPopup.jsx";


function App() {
  const [isEditProfilePopupOpen, setProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlaceOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarOpen] = useState({link: ""});
  const [selectedCard, setSelectedCard] = useState({ name: "", link: "" });

  const [currentUser, setCurrentUser] = useState({name: '', about: ''});
  const [cards, setCards] = useState([]);

  React.useEffect(() => {
    api
      .getInfoUser()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) =>
        console.log(`Ошибка при получении данных пользователя:${err}`)
      );   
  }, []);

  function closeAllPopups() {
    setProfileOpen(false);
    setAddPlaceOpen(false);
    setEditAvatarOpen(false);
    setSelectedCard({ name: "", link: "" });
  }

  function handleEditProfileClick() {
    if (isEditProfilePopupOpen === false) {
      setProfileOpen(true);
    }
  }
  function handleEditAvatarClick() {
    if (isEditAvatarPopupOpen === false) {
      setEditAvatarOpen(true);
    }
  }
  function handleAddPlaceClick() {
    if (isAddPlacePopupOpen === false) {
      setAddPlaceOpen(true);
    }
  }

  function handleCardClick(card) {
    if (selectedCard) {
      setSelectedCard(card);
    }
  }
  function handleUpdateUser({name, about}) {
    api
      .changeInfoUser({name, about})
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) =>
        console.log(`Ошибка при получении данных пользователя:${err}`)
      );   
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <CardContext.Provider value={cards}>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
            setCards={setCards}
          />
          <Footer />
          <EditProfilePopup isOpen={isEditProfilePopupOpen} closePopup={closeAllPopups} onUpdateUser={handleUpdateUser} />
          <PopupWithForm
            title="Новое место"
            name="add-image"
            btnText="Создать"
            isOpen={isAddPlacePopupOpen}
            closePopup={closeAllPopups}
          >
            <Input
              id="popup__name-image"
              InputClass="popup__input popup__input_name_js"
              type="text"
              name="name"
              placeholder="Название"
              minlength="2"
              maxlength="30"
              spanText="поле необходимо заполнить"
            />
            <Input
              id="popup__link-image"
              InputClass="popup__input popup__input_link_js"
              type="url"
              name="link"
              placeholder="Ссылка на картинку"
              spanText="поле необходимо заполнить"
            />
          </PopupWithForm>
          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
          
          <PopupWithForm
            title="Вы уверены?"
            name="popup_delete"
            modClassForm="popup__form_height"
            btnText="Да"
          />
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </CardContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
