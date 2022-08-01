import React from 'react';
import {access} from './constants';

class Api extends React.Component {
  constructor({baseUrl, headers}) {
    super();
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(result, resultAlert) {
    if (result.ok) {
      return result.json();
    }

    return Promise.reject(`${resultAlert}: ${result.status}`);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers
    })
      .then((res) => {return this._checkResponse(res, 'Ошибка при загрузке карточек')});
  }

  addCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(res => this._checkResponse(res, 'Ошибка при добавление новой карточки'));
  }

  removeCard(data) {
    return fetch(`${this._baseUrl}/cards/${data.id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(res => this._checkResponse(res, 'Ошибка при удалении карточки'));
  }

  changeLikeCardStatus(data) {
    const config = {
      method: data.isLiked ? 'PUT' : 'DELETE',
      alert: data.isLiked ? 'Ошибка при добавлении в избранное' : 'Ошибка при удалении из избранного',
    }
    return fetch(`${this._baseUrl}/cards/${data.id}/likes`, {
      method: config.method,
      headers: this._headers
    })
      .then(res => this._checkResponse(res, config.alert));
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then(res => this._checkResponse(res, 'Ошибка при получении данных пользователя'));
  }

  setUserData(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(res => this._checkResponse(res, 'Ошибка при обновлении данных пользователя'));
  }

  setUserPic(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(res => this._checkResponse(res, 'Ошибка при обновлении изображения пользователя'));
  }
}

const api = new Api({
  baseUrl: access.baseUrl,
  headers: {
    authorization: access.token,
    'Content-Type': 'application/json'
  }
});

export default api;