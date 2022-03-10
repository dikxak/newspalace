import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
TimeAgo.addLocale(en);

import icons from '../../img/icons.svg';

import { View } from './view.js';

class BookmarksView extends View {
  _targetElement = document.querySelector('[data-title="saved searches"]');

  _containerClassName1 = 'saved-searches-container';
  _containerClassName2 = 'saved-search';

  _errorMessage = 'Save news to get started...';
  _errorIconName = 'icon-newspaper';

  bookmarkClickHandler(handler) {
    this._targetElement.addEventListener('click', function (e) {
      const targetElement = e.target.closest('.menu-link');

      if (!targetElement) return;

      handler(targetElement);
    });
  }

  _createMarkup = data => {
    const timeAgo = new TimeAgo('en-US');

    return `${data
      .map(bookmark => {
        return `<div class="news">
              <div class="news-content">
                <h2 class="news-title">
                  <a href="${bookmark.url}" target="_blank"
                    >${bookmark.title}</a
                  >
                </h2>

                <div class="news-info">
                  <span class="news-source">${bookmark.source.name}</span>
                  <span class="news-time">${timeAgo.format(
                    new Date(bookmark.publishedAt)
                  )}</span>
                </div>

                <div class="news-menu">
                  <button class="btn btn--news btn--save">
                    <svg class="menu-icon">
                      <use href="${icons}#icon-bookmark"></use>
                    </svg>
                  </button>

                  <button class="btn btn--news btn--share">
                    <svg class="menu-icon">
                    <use href="${icons}#icon-share-social"></use>
                </svg>
                  </button>
                </div>
              </div>
              <img
              src="${bookmark.urlToImage}"
              alt="${bookmark.title}" class="saved-news-img">
            </div>
    `;
      })
      .join('')}`;
  };
}

export default new BookmarksView();
