import { View } from './view.js';

class NewsShareView extends View {
  _parentElement = document.querySelector('.share-popup-container');
  _btnOpenModal = document.querySelector('.main-container');
  _overlay = document.querySelector('.overlay');
  _btnClose = document.querySelector('.close');

  _shareURL = '';
  _shareText = '';

  constructor() {
    super();
    this._showModalHandler();
    this._closeModalHandler();
    this._socialShareHandler();
  }

  _openModal(e) {
    const targetElement = e.target.closest('.btn--share');
    if (!targetElement) return;

    this._toggleModal();

    // Getting the news URL
    this._shareURL = `${targetElement
      .closest('.news-content')
      .querySelector('.news-title')
      .querySelector('a')
      .getAttribute('href')}`;

    // Getting the news Heading
    this._shareText = `text=${targetElement
      .closest('.news-content')
      .querySelector('.news-title')
      .textContent.trim()}`;
  }

  _closeModal(e) {
    if (e.key === 'Escape') this._toggleModal();
  }

  _toggleModal() {
    this._parentElement.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  _showModalHandler() {
    this._btnOpenModal.addEventListener('click', this._openModal.bind(this));
  }

  _closeModalHandler() {
    this._overlay.addEventListener('click', this._toggleModal.bind(this));
    this._btnClose.addEventListener('click', this._toggleModal.bind(this));
    window.addEventListener('keydown', this._closeModal.bind(this));
  }

  _socialShare(e) {
    let createURL = '';

    const targetElement = e.target.closest('.social-icon');
    if (!targetElement) return;

    if (targetElement.classList.contains('twitter')) {
      createURL = `https://twitter.com/intent/tweet?url=${this._shareURL}&${this._shareText}`;
      targetElement.setAttribute('href', createURL);
    }

    if (targetElement.classList.contains('whatsapp')) {
      createURL = `https://wa.me/?url=${this._shareURL}&${this._shareText}`;
      targetElement.setAttribute('href', createURL);
    }

    if (targetElement.classList.contains('telegram')) {
      createURL = `https://t.me/share/url?url=${this._shareURL}&${this._shareText}`;
      targetElement.setAttribute('href', createURL);
    }

    if (targetElement.classList.contains('copy')) {
      navigator.clipboard.writeText(this._shareURL);
      alert('Link copied 😊');
    }
  }

  _socialShareHandler() {
    this._parentElement.addEventListener('click', this._socialShare.bind(this));
  }
}

export default new NewsShareView();
