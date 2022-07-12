import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Main from "./Main.jsx";
import PopupWithForm from "./PopupWithForm.jsx";
import Input from "./Input.jsx";
import { useState } from "react";
import ImagePopup from "./ImagePopup.jsx";


function App() {
  const [isEditProfilePopupOpen, setProfileOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlaceOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);




  function closeAllPopups() {
    setProfileOpen(false);
    setAddPlaceOpen(false);
    setEditAvatarOpen(false);
    setSelectedCard(false);
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
    if (selectedCard === false) {
      setSelectedCard(card);
    }
  }


  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        title="Редактировать профиль"
        name="profile"
        btnText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        closePopup={closeAllPopups}
      >
        <Input
          id="popup__name-profile"
          InputClass="popup__input popup__input_name_js"
          type="text"
          name="name"
          minlength="2"
          maxlength="40"
          placeholder="Имя"
          spanText="поле необходимо заполнить"
        />
        <Input
          id="popup__profession"
          InputClass="popup__input popup__input_profession_js"
          type="text"
          name="about"
          minlength="2"
          maxlength="200"
          placeholder="Профессия"
          spanText="поле необходимо заполнить"
        />
      </PopupWithForm>
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

      <PopupWithForm
        title="Обновить аватар"
        name="avatar-popup"
        modClassForm="popup__form_height"
        btnText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        closePopup={closeAllPopups}
      >
        <Input
          id="popup__link-avatar"
          InputClass="popup__input popup__input_link_js"
          type="url"
          name="link"
          placeholder="Ссылка на картинку"
          spanText="поле необходимо заполнить"
        />
      </PopupWithForm>
      <PopupWithForm
        title="Вы уверены?"
        name="popup_delete"
        modClassForm="popup__form_height"
        btnText="Да"
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  );
}

export default App;
