(function(){
  const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
      name: 'Нургуш',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
    },
    {
      name: 'Тулиновка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
    },
    {
      name: 'Остров Желтухина',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
    },
    {
      name: 'Владивосток',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
     }
  ];
  const placesList = document.querySelector('.places-list'); //обратился к контейнеру карточек
  const popup = document.querySelector('.popup');
  const popupEdit = document.querySelector('.popup-edit');
  const popupAdd = document.querySelector('.popup-add');
  const popupPic = document.querySelector('.popup-pic');
  const popupContent = document.querySelector('.popup-pic__content');const buttonEdit  = document.querySelector('.user-info__button-small');
  const popupButtonAdd  = document.querySelector('.user-info__button');
  const formAdd = document.querySelector('form[name = "addCard"]')
  const formEdit = document.querySelector('form[name = "edit"]')
  const formEditButton = document.querySelector('form[name = "edit"] > button');
  const formAddButton = document.querySelector('form[name = "addCard"] > button')
  const inputName = document.querySelector('.popup__input_name');
  const inputJob = document.querySelector('.popup__input_job');
  const errorName = document.querySelector('.popup__input_name ~ span');
  const errorJob = document.querySelector('.popup__input_job ~ span');

  const ERROR_MESSAGES = {
    valueMissing: 'Это обязательное поле',
    tooShort: 'Должно быть от 2 до 30 символов',
    typeMismatch: 'Здесь должная быть ссылка'
  }
  const cardd = new Card();
  const cardList = new CardList(placesList, initialCards, cardd);

  const formValidation = new FormValidation(popupEdit, ERROR_MESSAGES);
  const formValidationPopupCard = new FormValidation(popupAdd, ERROR_MESSAGES);

  const popupEditProfile = new Popup(popupEdit);
  const popupAddCard = new Popup(popupAdd);
  const popupOpenPic = new Popup(popupPic);

  const userInfo = new UserInfo(popupEdit);

  buttonEdit.addEventListener('click', () => {
    popupEditProfile.open();

    userInfo.setUserInfo();
    formValidation.checkInputValidity(inputName, errorName);
    formValidation.checkInputValidity(inputJob, errorJob);

    formValidation.setSubmitButtonState(formEdit, formEditButton);

  });
  popupButtonAdd.addEventListener('click', () => popupAddCard.open());
  formAddButton.addEventListener('click', function () { //событие добавления карточки
    popup.classList.remove('popup_is-opened');

    cardList.addCard(formAdd.name.value, formAdd.link.value);
    formValidation.setSubmitButtonState(formAdd, formAddButton);
  });

  placesList.addEventListener('click', (event) => { //фукция открытия картинки в попап окне
    const element = event.target.getAttribute('style'); // получил адрес атрибута style

    if (event.target.classList.contains('place-card__image')) {
      popupOpenPic.open();
      popupContent.classList.add('popup-pic__img');
      popupContent.setAttribute('style', element);
    }
  });

  document.querySelector('.popup__close-pic').addEventListener('click', function (event) {  //событие закрытия картинки
    document.querySelector('.popup-pic').classList.remove('popup_is-opened');
  });
  cardList.render();
})();