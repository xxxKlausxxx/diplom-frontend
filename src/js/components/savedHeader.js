export default class SavedHeader {
    constructor(options, mainApi) {
        this.options = options;
        this.mainApi = mainApi;
        this.exitButtonName();
        this.titleName();
        this.quantityArticles();
        this._getKeywordsData();
        this.setEventListeners();
    }

    exitButtonName() {
        this.options.elements.exitButton.textContent = localStorage.getItem('name');
        this.options.elements.exitButton.appendChild(this.options.elements.exitImage);
    }

    exitPage() {
        localStorage.removeItem('token');
        localStorage.removeItem('name');
        window.location.href = "./index.html";
    }

    quantityArticles() {
        this.mainApi.getArticles()
        .then(res => {
            this.options.elements.quantityNumber.textContent = res.length
        })
    }

    titleName() {
        this.options.elements.titleName.textContent = localStorage.getItem('name')
    }

    _getKeywordsData() {
        this.mainApi.getArticles()
        .then(res => {
        const result = {};
        res.forEach((elem) => {
          !result[elem.keyword]
            ?  result[elem.keyword] = 1
            :  result[elem.keyword] += 1;
        });

        const tags = Object.entries(result).sort((a, b) =>
          b[1] - a[1]).map((str) => str[0]);
        
        if (tags.length === 1) {
            this.options.elements.keywordOne.classList.add('header__keywords_active');
            this.options.elements.firstKeywordOne.textContent = tags[0];
        }
        
        if (tags.length === 2) {
            this.options.elements.keywordsTwo.classList.add('header__keywords_active');
            this.options.elements.firstKeywordTwo.textContent = tags[0];
            this.options.elements.secondKeywordTwo.textContent = tags[1];
        }

        if (tags.length === 3) {
            this.options.elements.keywordsThree.classList.add('header__keywords_active');
            this.options.elements.firstKeywordThree.textContent = tags[0];
            this.options.elements.secondKeywordThree.textContent = tags[1];
            this.options.elements.thirdKeywordThree.textContent = tags[2];
        }
        if (tags.length > 3) {
            this.options.elements.keywordsMore.classList.add('header__keywords_active');
            this.options.elements.firstKeywordMore.textContent = tags[0];
            this.options.elements.secondKeywordMore.textContent = tags[1];
            this.options.elements.otherKeywords.textContent = tags.length - 2;
        }
          
        })
    }



    setEventListeners() {
        this.options.elements.exitButton.addEventListener('click', () => {this.exitPage()});
    }
}