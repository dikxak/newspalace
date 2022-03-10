import { View } from './view.js';

class NewsCategoryView extends View {
  _containerElement = document.querySelector('.menu-app');

  categoryClickHandler(handler) {
    this._containerElement.addEventListener('click', function (e) {
      const targetElement = e.target.closest('.menu-link');

      if (!targetElement) return;

      handler(targetElement);
    });
  }
}

export default new NewsCategoryView();
