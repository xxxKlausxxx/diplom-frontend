import {dateConverterForm} from '../utils/dateConverter'

export default class NewsCard {
  constructor(header, mainApi) {
    this.header = header;
    this.mainApi = mainApi;
    this.create = this.create.bind(this)
  }

  create(keyword, title, text, date, source, link, image, _id) {

    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-id', `${_id}`)

    const cardImage = document.createElement('div');
    cardImage.classList.add('card__image');
    cardImage.setAttribute('style', 'background-image');
    cardImage.style.backgroundImage = `url(${image})`;

    const cardAuthTitle = document.createElement('div');
    cardAuthTitle.classList.add('card__auth-title');    
    cardAuthTitle.textContent = 'Войдите, чтобы сохранять статьи';

    const cardSave = document.createElement('form');
    cardSave.classList.add('card__save');

    const cardButtonSave = document.createElement('button');
    cardButtonSave.classList.add('card__button_save');
    cardButtonSave.classList.add('card__button_active');

    const cardButtonDelete = document.createElement('button');
    cardButtonDelete.classList.add('card__button_delete');

    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card__container');

    const cardDate = document.createElement('p');
    cardDate.classList.add('card__date');
    cardDate.textContent = dateConverterForm(new Date(date));

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
    cardImage.appendChild(cardAuthTitle);
    cardImage.appendChild(cardSave);
    cardSave.appendChild(cardButtonSave);
    cardSave.appendChild(cardButtonDelete);
    cardContainer.appendChild(cardDate);
    cardContainer.appendChild(cardTitle);
    cardContainer.appendChild(cardText);
    cardContainer.appendChild(cardSite);

    const getKeyword = keyword;
    const getTitle = title;
    const getText = text;
    const getDate = date;
    const getSource = source;
    const getLink = link;
    const getImage = image;
    const getId = _id;

    this.setEventListeners(cardButtonSave, cardButtonDelete, getKeyword, getTitle, getText, getDate, getSource, getLink, getImage, getId)
    this.renderAuthTitle(cardAuthTitle, cardButtonSave);
    this.cardElem = card;

    return this.cardElem; 
  }

  renderIcon(iconSave, iconDelete) {
    iconSave.classList.remove('card__button_active')
    iconDelete.classList.add('card__button_active')
  }

  removeIcon(iconSave, iconDelete) {
    iconSave.classList.add('card__button_active')
    iconDelete.classList.remove('card__button_active')
  }

  cardSave(buttonSave, buttonDelete, keyword, title, text, date, source, link, image, id) {
    this.mainApi.createArticle(keyword, title, text, date, source, link, image, id)
    .then(res => {
      this.renderIcon(buttonSave, buttonDelete)
    })
    .catch(err => {
      console.log(err)
    })
  }

  cardRemove(link, buttonSave, buttonDelete) {
    this.mainApi.getArticles()
    .then(res => {
    const element = res.find((article) => {
      if(article.link === link)
       return true;
     });
    this.mainApi.removeArticle(element._id)
    .then(res => {
      this.removeIcon(buttonSave, buttonDelete)
      
    });
  })
  }

  renderAuthTitle(title, icon) {
      if(this.header.elements.headerLogout.classList.contains('header__list_active')) {
        icon.addEventListener('mouseover', () => {
          title.classList.add('card__auth-title_active')
        });
        icon.addEventListener('mouseout', () => {
          title.classList.remove('card__auth-title_active')
        });
       }
       else {
        title.textContent = 'Добавить в избранное'
        icon.addEventListener('mouseover', () => {
          title.classList.add('card__auth-title_active')
        });
        icon.addEventListener('mouseout', () => {
          title.classList.remove('card__auth-title_active')
        });
       }
  }

  setEventListeners(buttonSave, buttonDelete, keyword, title, text, date, source, link, image, id) {
    if(this.header.elements.headerLogin.classList.contains('header__list_active')) {
        buttonSave.addEventListener('click', () => {this.cardSave(buttonSave, buttonDelete, keyword, title, text, date, source, link, image, id);
          buttonDelete.addEventListener('click', () => {this.cardRemove(link, buttonSave, buttonDelete)})
    })    
  }
  }

}