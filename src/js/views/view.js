// TimeAgo npm package to format time in "time ago format"
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
TimeAgo.addDefaultLocale(en);

import loadingSpinner from 'url:../../img/loading_spinner.svg';
import icons from '../../img/icons.svg';
import loadingSpinnerSmallIcon from 'url:../../img/loading_spinner_small.svg';

import { SEARCH_HEADING, SEARCH_ICON } from '../config';

export class View {
  _parentElement = document.querySelector('.main-container');

  _containerClassName1 = 'news-container';
  _containerClassName2 = 'news-results-container';

  _newsContainer = '';
  _loadingSpinner = '';
  _additionalElement = '';

  _errorMessage = 'Oops! Something went wrong, please try again...';
  _errorIconName = 'icon-alert-circle';

  /**
   * Renders generated markup to the corresponding view
   * @param {array} data - Articles from the news API stored in array
   * @param {string} headingTitle - Title for the heading in rendered page
   * @param {string} headingIconName - Icon name for the page heading
   * @returns {string} - HTML markup 
   * */
  render(
    data,
    headingTitle = SEARCH_HEADING,
    headingIconName = SEARCH_ICON
  ) {
    const markup = `
        <div class="${this._containerClassName1}">
            <h2 class="secondary-heading">
                <svg>
                    <use href="${icons}#${headingIconName}"></use>
                </svg>
                ${headingTitle}
            </h2>
            <div class="${this._containerClassName2}">
              ${this._createMarkup(data)}
            </div>
            ${this._additionalElement}
        </div>
      `;

    this._clearContainer();
    this._renderLoadingSpinnerResults();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);

    //Created after markup is generated
    // Need to append the results after scrolling to bottom
    this._newsContainer = document.querySelector('.news-container');

    // Need to load it at the bottom before loading other news results
    this._loadingSpinner = document.querySelector('.loading-spinner-small');

    // Needed the markup for update()
    return markup;
  }

  // Function to load spinner while loading data from API
  renderSpinner() {
    const markup = `
    <div class="loading-spinner">
        <svg>
            <use href="${loadingSpinner}#loading-spinner"></use>
        </svg>
    </div>
  `;

    this._clearContainer();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError() {
    const markup = `
        <p class="search-message">
            <svg>
                <use href="${icons}#${this._errorIconName}"></use>
            </svg>
            ${this._errorMessage}
        </p>
    `;

    this._clearContainer();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  /**
   * Appends the news results after scroll event to the bottom of the page
   * @param {array} data | Articles from the API according to page number
   */
  appendNewsResults(data) {
    this._newsContainer.insertAdjacentHTML(
      'beforeend',
      this._createMarkup(data)
    );
  }

  newsResultsScrollHandler(handler) {
    window.addEventListener('scroll', () => {
      handler(this._loadingSpinner);
    });
  }

  // Function to handle bookmark btn on news results view
  bookmarkClickHandler(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const targetElement = e.target.closest('.btn--save');
      if (!targetElement) return;
      handler(targetElement);
    });
  }

  // Share click handler
  shareClickHandler(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const targetElement = e.target.closest('.btn--share');
      if (!targetElement) return;
      handler(targetElement);
    });
  }

  /**
   * Updates the view when news is bookmarked 
   * @param {array} data - Articles from the news API stored in array
   * @param {string} title - Title for the heading in rendered page
   * @param {string} iconName - Icon name for the page heading
   * */
  update(data, title, iconName) {
    title = title === '' ? SEARCH_HEADING : title;
    iconName = iconName === '' ? SEARCH_ICON : iconName;

    const newMarkup = this.render(data, title, iconName);

    // Creating virtual element in the memory
    const newDom = document.createRange().createContextualFragment(newMarkup);

    // Selecting all the elements from the selected DOM
    const newElements = Array.from(newDom.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    // Code to compare the new element with existing one to update the area/element where required
    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];

      // Update changed ATTRIBUTES
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => {
          curEl.setAttribute(attr.name, attr.value);
        });
      }
    });
  }

  pageLoadHandler(handler) {
    window.addEventListener('load', function () {
      handler();
    });
  }

  // Function to load small loading spinner after scroll(event) to bottom.
  _renderLoadingSpinnerResults() {
    const loadingSpinnerMarkup = `
    <svg class="loading-spinner-small">
      <use href="${loadingSpinnerSmallIcon}#loading-spinner"></use>
    </svg>
    `;
    this._parentElement.insertAdjacentHTML('beforeend', loadingSpinnerMarkup);
  }

  _clearContainer() {
    this._parentElement.innerHTML = '';
  }

  // Utility function to check if description from data is valid
  _checkDescription(description) {
    return (description && description.includes('/a>')) ||
      (description && description.includes('h2')) ||
      (description && description.includes('img')) ||
      (description && description.includes('/span>'))
      ? ''
      : description;
  }

  /**
   * Creates the markup for news results (is called by render() method)
   * @param {array} data - Articles news data from API 
   * @returns {string} - HTML Markup
   */
  _createMarkup = data => {
    const timeAgo = new TimeAgo('en-US');

    return `${data
      .map(article => {
        return `
        <div class="news">
            <div class="news-content">
              <h2 class="news-title">
                <a href="${article.url}"
                  target = "_blank">${!article.title ? '' : article.title}
                </a>
              </h2>

              <div class="news-info">
                <span class="news-source">
                  ${article.source.name}
                </span>
                <span class="news-time">${timeAgo.format(
          new Date(article.publishedAt)
        )}
                </span>
              </div>

                <p class="news-description">
                    ${article.description}
                </p>

                <div class="news-menu">
                  <button class="btn btn--news btn--save">
                    <svg>
                      <use href="
                        ${icons}#${article.bookmarked ? 'icon-bookmark' : 'icon-bookmark-outline'
          }">
                      </use>
                    </svg>
                  </button>
      
                  <button class="btn btn--news btn--share">
                    <svg>
                      <use href="${icons}#icon-share-social"></use>
                    </svg>
                  </button>
                </div>
            </div>
            <div>
            <img
              src="${article.urlToImage}"
              alt="${article.title}" class="news-img" />
            </div>
        </div>
    `;
      })
      .join('')}`;
  };
}

export default new View();
