export default class NewsCard {
  constructor(card) {
    this.card = card;
  }

  create({ keyword, title, text, date, source, link, image, _id }) {

    const dateFinal = this.dateConvert(date);

    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-id', `${_id}`)

    const cardLink = document.createElement('a');
    cardLink.classList.add('card__link');
    cardLink.setAttribute('href', `${link}`);
    cardLink.setAttribute('target', '_blank');

    const cardImage = document.createElement('div');
    cardImage.classList.add('card__image');
    cardImage.style.backgroundImage = url(`${image}`);

    const cardAuthTitle = document.createElement('div');
    cardAuthTitle.classList.add('card__auth-title');
    cardAuthTitle.textContent = 'Войдите, чтобы сохранять статьи';

    const cardSave = document.createElement('form');
    cardSave.classList.add('card__save');

    const cardButton = document.createElement('button');
    cardButton.classList.add('card__button');

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card__container');

    const cardDate = document.createElement('p');
    cardDate.classList.add('card__date');
    cardDate.textContent = dateFinal;

    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('card__title');
    cardTitle.textContent = title;

    const cardText = document.createElement('p');
    cardText.classList.add('card__text');
    cardText.textContent = text;

    const cardSite = document.createElement('p');
    cardSite.classList.add('card__site');
    cardSite.textContent = source;

    card.appendChild(cardImage);
    card.appendChild(cardContainer);
  }

  renderIcon(icon) {

  }
}