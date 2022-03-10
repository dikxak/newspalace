import { View } from './view.js';

class TopHeadlinesView extends View {
  _targetElement = document.querySelector('[data-category="top stories"]');

  topHeadlinesClickHandler(handler) {
    this._targetElement.addEventListener('click', function (e) {
      const targetElement = e.target.closest('.menu-link');

      if (!targetElement) return;

      handler(targetElement);
    });
  }
}

export default new TopHeadlinesView();
