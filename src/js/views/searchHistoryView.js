import { View } from './view.js';

class SearchHistoryView extends View {
  _targetElement = document.querySelector('[data-title="history"]');

  _containerClassName1 = 'search-history-container';
  _containerClassName2 = 'search-history';

  // Element for "Clear All" button
  _additionalElement =
    '<button data-title="history" data-icon-name = "icon-time" class="btn btn-clear">Clear All</button>';

  _errorMessage = 'No search history found.';
  _errorIconName = 'icon-sad-face';

  searchHistoryClickHandler(handler) {
    this._targetElement.addEventListener('click', function (e) {
      const targetElement = e.target.closest('.menu-link');
      handler(targetElement);
    });
  }

  clearSearchHistoryClickHandler(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const targetElement = e.target.closest('.btn-clear');
      if (!targetElement) return;
      handler(targetElement);
    });
  }

  _createMarkup = data => {
    return `${data
      .map(search => {
        return `
            <p class="search-history-title">${search}</p>
        `;
      })
      .join('')}`;
  };
}

export default new SearchHistoryView();
