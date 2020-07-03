'use strict';

class PopupImage extends Popup {
  constructor() {
    super();
  }

  open = (popupName, link) => {
    popupName.classList.add('popup_is-opened');
    const popupImage = document.querySelector('.popup_image');
    popupImage.querySelector('.popup__image').setAttribute('src', link);
    this.addListeners(popupName);
  }
}