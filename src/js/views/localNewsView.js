import { View } from './view.js';

class LocalNewsView extends View {
  _targetElement = document.querySelector('.nav-btn--local-news');

  localNewsClickHandler(handler) {
    this._targetElement.addEventListener('click', function (e) {
      const targetElement = e.target.closest('.nav-btn--local-news');

      if (!targetElement) return;

      handler(targetElement);
    });
  }
}

export default new LocalNewsView();
