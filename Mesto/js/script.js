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
const placeCard = document.querySelector('.place-card'); // сама карточка
const openPopupButton = document.querySelector('.button'); //кнопка открытия формы 
const closePopupButton = document.querySelector('.popup__close'); // кнопка закрытия формы
const addCardButton = document.querySelector('.popup__button'); //кнопка добавления карточки
const likeButton = document.querySelector('.place-card__like-icon'); // кнопка лайка
const deleteButton = document.querySelector('.place-card__delete-icon'); // кнопка удаления карточки

function createCard({name, link}) { //функция добавления карточки
    const placeCard = document.createElement('div');
    const imageEl = document.createElement('div');
    const deleteBtnEl = document.createElement('button');
    const descriptionEl = document.createElement('div');
    const nameEl = document.createElement('h3');
    const likeBtnEl = document.createElement('button');

    placeCard.classList.add('place-card');
    imageEl.classList.add('place-card__image');
    deleteBtnEl.classList.add('place-card__delete-icon');
    descriptionEl.classList.add('place-card__description');
    nameEl.classList.add('place-card__name');
    likeBtnEl.classList.add('place-card__like-icon');

    imageEl.style.backgroundImage = 'url(' + link + ')';
    nameEl.textContent = name;
    
    placeCard.appendChild(imageEl);
    placeCard.appendChild(descriptionEl);
    imageEl.appendChild(deleteBtnEl);
    descriptionEl.appendChild(nameEl);
    descriptionEl.appendChild(likeBtnEl);
    placesList.appendChild(placeCard);
}

initialCards.forEach(createCard);

function addCard() { //реализована функция добавления карточки через форму отправки.
    event.preventDefault();  
  
    const form = document.forms.new;
    const name = form.elements.name.value;
    const link = form.elements.link.value;

    createCard({name, link});
    form.reset();
}

openPopupButton.addEventListener('click', function () { //кнопка открытия формы
  const popup = document.querySelector('.popup');
  popup.classList.add('popup_is-opened');   
});

closePopupButton.addEventListener('click', function () { //кнопка закрытия формы
  const close = document.querySelector('.popup');
  close.classList.remove('popup_is-opened');
});

addCardButton.addEventListener('click', function () { //кнопка добавления карточки, которая находится в форме.
  addCard();
  const close = document.querySelector('.popup');
  close.classList.remove('popup_is-opened');

});

placesList.addEventListener('click', function (event) {
  if (event.target.classList.contains('place-card__like-icon')) {
      event.target.classList.toggle('place-card__like-icon_liked');
  }
  if (event.target.classList.contains('place-card__delete-icon')) {
    const delt = event.target.closest('.place-card');
    delt.remove();
  }
});
