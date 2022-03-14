// For Transpiling & Polyfilling
import 'regenerator-runtime/runtime';
import 'core-js/stable';

import {
  simulateLoading,
  addActiveLinkClass,
  removeActiveLinkClass,
  getLatLng,
} from './general.js';
import { RESULTS_PER_PAGE } from './config.js';

import * as model from '../js/model.js';

import newsShareView from './views/newsShareView.js'; // Needed for news sharing(only constructor is used)
import newsSearchView from './views/newsSearchView.js';
import newsCategoryView from './views/newsCategoryView.js';
import topHeadlinesView from './views/topHeadlinesView.js';
import searchHistoryView from './views/searchHistoryView';
import localNewsView from './views/localNewsView';
import bookmarksView from './views/bookmarksView.js';
import view from './views/view.js';

const controlNewsResults = async function () {
  removeActiveLinkClass();

  // render-spinner before results arrive
  view.renderSpinner();

  try {
    const query = newsSearchView.getQuery();

    if (!query) return view.renderError();

    model.saveHistory(query);

    // await until the data is loaded.
    await model.loadNewsResults(query);

    // render the data to the view
    view.render(model.getSearchResultsData());
  } catch (err) {
    view.renderError();
  }
};

const controlSearchHistory = async function (element) {
  searchHistoryView.renderSpinner();
  await simulateLoading(0.25);

  if (element && !model.appData.search.queries.length) {
    searchHistoryView.renderError();
  }

  if (element && model.appData.search.queries.length) {
    searchHistoryView.render(
      model.appData.search.queries,
      element.dataset.title,
      element.dataset.iconName
    );
  }
};

const controlClearHistory = function (element) {
  model.clearSearchQueries();
  searchHistoryView.update(
    model.appData.search.queries,
    element.dataset.title,
    element.dataset.iconName
  );
};

let controlNewsScroll = async function (element) {
  if (!element) return;

  if (model.appData.search.initialPageNum >= RESULTS_PER_PAGE) return;

  let { scrollHeight } = document.body;

  if (window.innerHeight >= scrollHeight) return;

  if (window.innerHeight + window.scrollY >= scrollHeight - 2) {
    // Display loading spinner for 0.5 second
    element.classList.add('page-load');
    await simulateLoading(0.5);

    // Render other results
    view.appendNewsResults(model.getSearchResultsData());

    // Hide the spinner
    element.classList.remove('page-load');
  }
};

const controlCategoryResults = async function (targetElement) {
  try {
    view.renderSpinner();

    await model.loadCategoryResults(
      targetElement.dataset.category,
      targetElement.dataset.iconName
    );

    view.render(
      model.getSearchResultsData(),
      model.appData.category.title,
      model.appData.category.iconName
    );
  } catch (err) {
    view.renderError();
  }
};

const controlLocalNewsResults = async function (targetElement) {
  // render-spinner before results arrive
  view.renderSpinner();

  const country = await getLatLng();

  removeActiveLinkClass();

  try {
    if (!country) return;

    // "await" until the data is loaded.
    await model.loadNewsResults(
      country,
      targetElement.dataset.title,
      targetElement.dataset.icon
    );

    // "render" the data to the view
    view.render(
      model.getSearchResultsData(),
      targetElement.dataset.title,
      targetElement.dataset.icon
    );
  } catch (err) {
    view.renderError();
  }
};

const controlBtnBookmark = function (element) {
  const id = element
    .closest('.news-content')
    .querySelector('.news-title')
    .textContent.trim();

  // Handling bookmark(save) button from saved news view / results view
  if (element.closest('.saved-searches-container')) {
    model.handleBookmarked(id);

    // Updating saved search view
    bookmarksView.update(
      model.appData.bookmarks,
      'saved searches',
      'icon-search'
    );
  } else {
    model.handleBookmark(id);

    const data = model.getSearchResultsDataBookmark();

    // Updating news results view (view === resultsView)
    view.update(
      data,
      model.appData.category.title,
      model.appData.category.iconName
    );
  }
};

// Function to handle saved-search button
const controlBookmarks = async function (element) {
  bookmarksView.renderSpinner();

  await simulateLoading(0.25);

  if (model.appData.bookmarks.length) {
    bookmarksView.render(
      model.appData.bookmarks,
      element.dataset.title,
      element.dataset.iconName
    );
  } else {
    bookmarksView.renderError();
  }
};

const controlPageLoad = function () {
  window.location.hash = '';
};

const initController = function () {
  addActiveLinkClass();
  view.newsResultsScrollHandler(controlNewsScroll);
  view.bookmarkClickHandler(controlBtnBookmark);
  view.pageLoadHandler(controlPageLoad);
  newsSearchView.submitHandler(controlNewsResults);
  newsCategoryView.categoryClickHandler(controlCategoryResults);
  topHeadlinesView.topHeadlinesClickHandler(controlCategoryResults);
  searchHistoryView.searchHistoryClickHandler(controlSearchHistory);
  searchHistoryView.clearSearchHistoryClickHandler(controlClearHistory);
  localNewsView.localNewsClickHandler(controlLocalNewsResults);
  bookmarksView.bookmarkClickHandler(controlBookmarks);
};

initController();
