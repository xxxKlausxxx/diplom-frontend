export default class NewsCardList {
  constructor(options, preloader, notFound, newsCard, showMoreOptions, header, c) {
    this.options = options;
    this.preloader = preloader;
    this.notFound = notFound;
    this.newsCard = newsCard;
    this.count = 3;
    this.cards = null;
    this.showMoreOptions = showMoreOptions;
    this.header = header;
    this.renderResults = this.renderResults.bind(this)
    this._showMore = this._showMore.bind(this)

    this.setEventListeners()
  }

  renderResults(cards, count) {
    this.options.elements.cardsContainer.innerHTML = "";
    this.count = count;
    this.cards = cards;
    const keyword = this.header.elements.inputSearch.value;
    console.log(cards)
    
    this.options.container.classList.add('cards__active')

    cards.filter((card, index) => index < count).forEach(elem => { 
      this.options.elements.cardsContainer.appendChild(
           this.newsCard.create(
             keyword, 
             elem.title, 
             elem.description, 
             elem.publishedAt, 
             elem.source.name, 
             elem.url, 
             elem.urlToImage, 
             elem.source.id)
    )})
  }
  
  clearResults() {
    if(this.options.container.classList.contains('cards__active')) {
      this.options.container.classList.remove('cards__active');
      this.options.elements.cardsContainer.innerHTML = "";
      this.showMoreOptions.container.classList.remove('show-more__active');
    }
  }

  renderLoader() {
    this.preloader.classList.add('preloader__active')
  }

  removeLoader() {
    this.preloader.classList.remove('preloader__active')
  }

  renderError() {
    this.notFound.classList.add('not-found__active')
  }

  removeError() {
    this.notFound.classList.remove('not-found__active')
  }

  _showMore() {
    this.count += 3;
  
    if(this.count < this.cards.length) {
      this.showMoreOptions.container.classList.add('show-more__active')
    }
    else {  
      this.showMoreOptions.container.classList.remove('show-more__active');
    }
    this.renderResults(this.cards, this.count)
    }
  
  setEventListeners() {
    this.showMoreOptions.button.addEventListener('click', this._showMore)
  }
}