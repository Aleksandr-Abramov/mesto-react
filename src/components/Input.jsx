import React from "react";

function Input({ id, InputClass, name, minlength, maxlength, placeholder, spanText, type }) {
  return (
    <>
      <input
        type={type}
        id={id}
        className={InputClass}
        // value="1"
        minLength={minlength}
        maxLength={maxlength}
        placeholder={placeholder}
        name={name}
        required
      />
      <span className={`${id}-error popup__input-error`}>{spanText}</span>
    </>
  );
}
export default Input;
