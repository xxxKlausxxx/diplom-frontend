const header = document.querySelector('.header__articles');
const SAVED_HEADER_OPTIONS = {
    container: header,
    elements: {
        exitButton: header.querySelector('.header__button-autorization_articles'),
        mineButton: header.querySelector('.header__button-mine_articles'),
        exitImage: header.querySelector('.header__exit-image'),
        titleName: header.querySelector('.header__title_name'),
        quantityNumber: header.querySelector('.header__title_quantity'),

        keywordOne: header.querySelector('.header__keyword_one'),
        firstKeywordOne: header.querySelector('.first__keyword_one'),

        keywordsTwo: header.querySelector('.header__keywords_two'),
        firstKeywordTwo: header.querySelector('.first__keyword_two'),
        secondKeywordTwo: header.querySelector('.second__keyword_two'),

        keywordsThree: header.querySelector('.header__keywords_three'),
        firstKeywordThree: header.querySelector('.first__keyword_three'),
        secondKeywordThree: header.querySelector('.second__keyword_three'),
        thirdKeywordThree: header.querySelector('.third__keyword_three'),

        keywordsMore: header.querySelector('.header__keywords_more'),
        firstKeywordMore: header.querySelector('.first__keyword_more'),
        secondKeywordMore: header.querySelector('.second__keyword_more'),
        otherKeywords: header.querySelector('.other__keywords')
    }
}

export default SAVED_HEADER_OPTIONS