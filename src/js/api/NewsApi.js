import {dateTo} from '../utils/dateConverter'
import {dateFrom} from '../utils/dateConverter'

export default class NewsApi {
  constructor(newsApi, apiKey) {
    this.newsApi = newsApi;
    this.apiKey = apiKey
    this.getNews = this.getNews.bind(this)
  }

  getNews(keyword) {
    const url = `${this.newsApi}` + `q=${keyword}&` + `from=${dateFrom}&` + `to=${dateTo}&` + `lenguage=ru&` + `sortBy=popularity&` + `pageSize=100&` + `apiKey=${this.apiKey}`;

    return fetch(url, {
      mathod: 'GET',
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
        console.log('Что-то пошло не так. ' + err);
    })
  }
}