export default class SavedNewsCard {
    constructor(mainApi, cardsListOptions) {
        this.mainApi = mainApi;
        this.cardsListOptions = cardsListOptions;
    }

    create(keyword, title, text, date, source, link, image, _id) {

        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id', `${_id}`)

        const cardImage = document.createElement('div');
        // cardImage.classList.add('card__image');
        cardImage.classList.add('card__image-articles');
        cardImage.setAttribute('style', 'background-image');
        cardImage.style.backgroundImage = `url(${image})`;

        const cardKeyword = document.createElement('div');
        cardKeyword.classList.add('card__auth-title');
        cardKeyword.classList.add('card__auth-tittle_keyword');
        cardKeyword.textContent = `${keyword}`;

        const cardImageContainer = document.createElement('div')
        cardImageContainer.classList.add('card__image-container');

        const cardAuthTitle = document.createElement('div');
        cardAuthTitle.classList.add('card__auth-title');
        cardAuthTitle.classList.add('card__auth-title_delete');
        cardAuthTitle.textContent = 'Убрать из сохранённых';

        const cardButtonDelete = document.createElement('button');
        cardButtonDelete.classList.add('card__delete');

        const cardContainer = document.createElement('div');
        cardContainer.classList.add('card__container');

        const cardDate = document.createElement('p');
        cardDate.classList.add('card__date');
        cardDate.textContent = date;

        const cardTitle = document.createElement('h3');
        cardTitle.classList.add('card__title');
        cardTitle.textContent = title;

        const cardText = document.createElement('a');
        cardText.classList.add('card__text');
        cardText.setAttribute('href', `${link}`);
        cardText.setAttribute('target', '_blank');
        cardText.textContent = text;

        const cardSite = document.createElement('p');
        cardSite.classList.add('card__site');
        cardSite.textContent = source;

        card.appendChild(cardImage);
        card.appendChild(cardContainer);
        cardImage.appendChild(cardKeyword);
        cardImage.appendChild(cardImageContainer);
        cardImageContainer.appendChild(cardAuthTitle);
        cardImageContainer.appendChild(cardButtonDelete);
        cardContainer.appendChild(cardDate);
        cardContainer.appendChild(cardTitle);
        cardContainer.appendChild(cardText);
        cardContainer.appendChild(cardSite);

        const cardId = _id;
        this.cardElem = card;

        this.renderAuthTitle(cardAuthTitle, cardButtonDelete)
        this.setEventListeners(this.cardElem, cardButtonDelete, cardId)

        return this.cardElem
    }

    renderAuthTitle(title, icon) {
          icon.addEventListener('mouseover', () => {
            title.classList.add('card__auth-title_active')
          });
          icon.addEventListener('mouseout', () => {
            title.classList.remove('card__auth-title_active')
          });
    }

    cardDelete(card, _id) {
        this.mainApi.removeArticle(_id)
        .then(res => {
            this.cardsListOptions.elements.cardsContainer.removeChild(card)
        })
    }

    setEventListeners(card, button, _id) {
        button.addEventListener('click', () => {this.cardDelete(card, _id)})
    }
}