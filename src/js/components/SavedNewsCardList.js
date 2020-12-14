export default class SavedNewsCardList {
    constructor(options, mainApi, savedNewsCard) {
        this.options = options;
        this.mainApi = mainApi;
        this.savedNewsCard = savedNewsCard;
        this.renderResults()
    }

    renderResults() {
        this.mainApi.getArticles()
        .then(res => {
            this.options.container.classList.add('cards__active');
            res.forEach(elem => { 
                this.options.elements.cardsContainer.appendChild(
                     this.savedNewsCard.create(
                       elem.keyword, 
                       elem.title, 
                       elem.text, 
                       elem.date, 
                       elem.source, 
                       elem.link, 
                       elem.image, 
                       elem._id)
              )})
        })
    }

    delete(card) {
        this.options.elements.cardsContainer.removeChild(card)
    }
}