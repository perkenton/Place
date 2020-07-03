'use strict';

(function() {
  const placesList = document.querySelector('.places-list');

  const formProfile = document.forms.profile;
  const profileNameInput = formProfile.elements.profileName;
  const profileAboutInput = formProfile.elements.profileAbout;
  const userName = document.querySelector('.user-info__name');
  const userJob = document.querySelector('.user-info__job');

  const formAddNewCard = document.forms.new;

  const formValidator = new FormValidator();

  new FormValidator(formAddNewCard).addListener();
  new FormValidator(formProfile).addListener();

  const userInfo = new UserInfo({profileNameInput, profileAboutInput, userName, userJob});
  const popup = new Popup();


  // открытие попапа с картинкой
  const popupImage = document.querySelector('.popup_image');
  const openPopupImage = (link) => new PopupImage().open(popupImage, link);


  // отрисовка карточек при загрузке
  function createCard(placeName, placeLink) {
    return new Card({placeName, placeLink, openPopupImage}).create();
  }

  const cardList = new CardList(placesList, initialCards, createCard);
  cardList.render();


  // открытие попапа добавления карточки
  document.querySelector('.user-info__button').addEventListener('click', () => {
    const popupNewCard = document.querySelector('.popup_new-card');

    formValidator.resetErrors(popupNewCard);
    formValidator.setSubmitButtonState(formAddNewCard.querySelector('.button'), false);
    popup.open(popupNewCard);

    formAddNewCard.elements.name.value = '';
    formAddNewCard.elements.link.value = '';
  });


  // открытие попапа редактирования профиля
  document.querySelector('.user-info__edit-button').addEventListener('click', () => {
    const popupProfile = document.querySelector('.popup_profile');

    formValidator.resetErrors(popupProfile);
    formValidator.setSubmitButtonState(formProfile.querySelector('.button'), true);
    popup.open(popupProfile);

    profileNameInput.value = document.querySelector('.user-info__name').textContent;
    profileAboutInput.value = document.querySelector('.user-info__job').textContent;
  });


  // редактирование профиля
  formProfile.addEventListener('submit', (event) => {
    event.preventDefault();

    userInfo.setUserInfo(profileNameInput.value, profileAboutInput.value);

    popup.close();
  });


  // добавление новой карточки
  formAddNewCard.addEventListener('submit', (event) => {
    event.preventDefault();

    const placeName = event.target.elements.name;
    const placeLink = event.target.elements.link;

    cardList.addCard(placeName.value, placeLink.value);

    formAddNewCard.reset();
    popup.close();
  });


})();

