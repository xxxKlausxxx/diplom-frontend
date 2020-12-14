// Импорт модулей

import './index.css';
import Popup from '../../js/components/Popup';
import POPUP_ENTRY_OPTIONS from '../../js/constans/popupEntryOptions';
import Header from '../../js/components/Header';
import HEADER_OPTIONS from '../../js/constans/headerOptions';
import POPUP_REG_OPTIONS from '../../js/constans/popupRegOptions';
import PopupEntry from '../../js/components/PopupEntry';
import PopupReg from '../../js/components/PopupReg';
import Validation from '../../js/utils/Validation';
import FormValidation from '../../js/components/FormValidation';
import MainApi from '../../js/api/MainApi';
import MAIN_API_URL from '../../js/constans/mainUrl';
import FormRegistration from '../../js/components/FormRegistration';
import POPUP_ACCESS_OPTIONS from '../../js/constans/popupAccessOptions';
import PopupAccess from '../../js/components/popupAccess';
import FormEntry from '../../js/components/FormEntry';
import {NEWS_API_URL} from '../../js/constans/newsUrl';
import {NEWS_API_KEY} from '../../js/constans/newsUrl';
import NewsApi from '../../js/api/NewsApi';
import NewsCard from '../../js/components/NewsCard';
import NewsCardList from '../../js/components/NewsCardList';
import CARDS_OPTIONS from '../../js/constans/cardsOptions';
import {preloader} from '../../js/constans/preloader';
import {notFound} from '../../js/constans/not-found';
import { SHOW_MORE } from '../../js/constans/showMore';

// Подключение классов
const mainApi = new MainApi(MAIN_API_URL);
const newsApi = new NewsApi(NEWS_API_URL, NEWS_API_KEY);
const popupEntry = new Popup(POPUP_ENTRY_OPTIONS);
const popupReg = new Popup(POPUP_REG_OPTIONS);
const popupAccess = new Popup(POPUP_ACCESS_OPTIONS);
const newsCard = new NewsCard(HEADER_OPTIONS, mainApi);
const newsCardList = new NewsCardList(CARDS_OPTIONS, preloader, notFound, newsCard, SHOW_MORE, HEADER_OPTIONS);
const header = new Header(HEADER_OPTIONS, popupEntry);
const validation = new Validation()
new PopupAccess(POPUP_ACCESS_OPTIONS, popupEntry);
new PopupEntry(POPUP_ENTRY_OPTIONS, popupReg);
new PopupReg(POPUP_REG_OPTIONS, popupEntry);
new FormValidation(new Validation, POPUP_REG_OPTIONS.elements.form);
new FormValidation(new Validation, POPUP_ENTRY_OPTIONS.elements.form);
new FormRegistration(POPUP_REG_OPTIONS.elements.form, popupReg, mainApi, popupAccess)
new FormEntry(POPUP_ENTRY_OPTIONS.elements.form, mainApi, popupEntry, header);



// Вызов классов

const body = document.querySelector('body');
body.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event)
})


HEADER_OPTIONS.elements.buttonSearch.addEventListener('click', () => {
    const keyword = HEADER_OPTIONS.elements.inputSearch.value
    if(HEADER_OPTIONS.elements.inputSearch.value === '') {
        HEADER_OPTIONS.elements.headerError.classList.remove('error-massage_hidden')
    }
    else {
    newsCardList.clearResults()
    newsCardList.renderLoader()
    newsCardList.removeError()
    newsApi.getNews(keyword)
    .then((res) => {   
        if(res.articles.length > 3) {
            SHOW_MORE.container.classList.add('show-more__active')
        }
        newsCardList.removeLoader()
        if(res.articles.length === 0) {
            header.renderError()
        }
        const count = 3;
            
        newsCardList.renderResults(res.articles, count)
    })
        
    .catch((err) => {
        newsCardList.clearResults()
        newsCardList.removeLoader()
        console.log(err)
    })
}
})



