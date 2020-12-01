export default class MainApi {
  constructor(mainApiUrl, errorMessages) {
    this.mainApiUrl = mainApiUrl;
    this.errorMessages = errorMessages;
  }

  signup({ name, email, password }) {
    return fetch(`${this.mainApiUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name
      })
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      else {
        Promise.reject(`Ошибка: ${res.status}`);
      }
    })
  }

  signin({ email, password }) {
    return fetch(`${this.mainApiUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: ({
        email,
        password
      })
    })
    .then((res) => {
      if(res.ok) {
        return res.json
      }
      else {
        return Promise.reject(`Ошибка: ${res.status}`)
      }
    })
    .catch((err) => {
      console.log('Что-то пошло не так' + err)
    })
  }

  getUserData(token) {
    return fetch(`${this.mainApiUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      }
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.log('Что-то пошло не так. ' + err);
      })
    })
  }

  getArticles(user) {
    return fetch(`${this.mainApiUrl}/articles`, {
      maethod: 'GET',
      headers: {
        authorization: `Bearer ${user.getToken()}`,
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
      alert('Что-то пошло не так. ' + err);
    });
  }

  createArticle() {
    return fetch(`${this.mainApiUrl}/articles`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${user.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: {
        
      }
    })
  }

  removeArticle() {

  }
}