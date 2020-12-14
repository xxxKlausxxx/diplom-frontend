export default class MainApi {
  constructor(mainApiUrl) {
    this.mainApiUrl = mainApiUrl;
    this.signup = this.signup.bind(this)
    this.signin = this.signin.bind(this)
  }

  signup(email, password, name) {
    return fetch(`${this.mainApiUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      })
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
      }
      else {
        return res.json()
        .then(json => {
          return Promise.reject(json.message)
        })
      }
    })
  }

  signin(email, password) {
    return fetch(`${this.mainApiUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password
      })
    })
    .then((res) => {
      if(res.ok) {
        return res.json()
        .then(json => {
          return json.token
        })
      }
      else {
        return res.json()
        .then(json => {
          return Promise.reject(json.message)
        })
      }
    })
  }

  getUserData(token) {
    return fetch(`${this.mainApiUrl}/users/me`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json()
          .then(json => {
            return json.data[0];
          });
        }
        return res.json()
        .then(json => {
          return Promise.reject(json.message)
        })
      })
  }

  getArticles() {
    return fetch(`${this.mainApiUrl}/articles`, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json()
        .then(json => {
          return json.data;
        });
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch(err => {
      alert('Что-то пошло не так ' + err);
    })
  }

  createArticle(keyword, title, text, date, source, link, image) {
    return fetch(`${this.mainApiUrl}/articles`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        keyword: keyword,
        title: title,
        text: text,
        date: date,
        source: source,
        image: image,
        link: link
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        alert('Что-то пошло не так ' + err);
      })
  }

  removeArticle(_id) {
    return fetch(`${this.mainApiUrl}/articles` + `/${_id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
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
      alert('Что-то пошло не так ' + err);
    });
  }
}