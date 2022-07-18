import React from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";

function EditAvatarPopup({isOpen, onClose}) {

    const inputRef = React.useRef();
    function handleSubmit(e) {
        e.preventDefault();
        console.log(inputRef.current.id);
    }
  return (
    <PopupWithForm 
      title="Обновить аватар"
      name="avatar-popup"
      modClassForm="popup__form_height"
      btnText="Сохранить"
      isOpen={isOpen}
      closePopup={onClose}
      onSubmit={handleSubmit}
    >
      <Input
        id="popup__link-avatar"
        InputClass="popup__input popup__input_link_js"
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        spanText="поле необходимо заполнить"
        ref={inputRef}
        
      />
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
