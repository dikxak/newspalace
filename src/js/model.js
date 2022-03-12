import {
  URL_DOMAIN,
  URL_QUERY,
  RESULTS_PER_PAGE,
  URL_CATEGORY,
  URL_TOP_HEADLINES,
} from './config.js';
import { getJSONData } from './general.js';

// Stores all required data
const appData = {
  newsResults: [],
  search: {
    queries: [],
    pageNum: 0,
  },
  category: {
    title: '',
    iconName: '',
  },
  bookmarks: [],
};

/**
 * Loads news article data from newsapi's API
 * @param {string} query - Query from the user's search 
 * @param {string} category - News category name from the corresponding anchor
 * @param {string} icon - Corresponding heading icon for the category
 */
const loadNewsResults = async function (query, category = '', icon = '') {
  appData.category.title = category;
  appData.category.iconName = icon;

  // Initial promise value
  let newsData = '';

  // Initializing pageNum for slicing array after user inputs query.
  appData.search.pageNum = 0;

  // Getting data from the API (either query or domain)
  // First check for domain input (cnn.com,bbc.com,techcrunch.com etc.)
  // Then if not available, send it as a query (e.g. elon musk, russia, ukraine etc.)
  try {
    newsData = await getJSONData(URL_DOMAIN(query));

    if (newsData.articles.length !== 0) {
      appData.newsResults = newsData.articles;
    } else {
      newsData = await getJSONData(URL_QUERY(query));
      appData.newsResults = newsData.articles;
    }

    setLocalStorage();
  } catch (err) {
    throw err;
  }
};

const saveHistory = function (query, title = '', iconName = '') {
  appData.category.title = title;
  appData.category.iconName = iconName;

  // Save unique history (!duplicate)
  if (appData.search.queries.length > 0) {
    if (appData.search.queries.some(el => el === query)) return;
    appData.search.queries.push(query);
  } else {
    appData.search.queries.push(query);
  }
};

// Loading results according to category
const loadCategoryResults = async function (category, icon) {
  appData.category.title = category;
  appData.category.iconName = icon;

  let newsData = '';

  // Initializing pageNum for slicing array after user inputs query.
  appData.search.pageNum = 0;

  try {
    if (category === 'top stories') {
      newsData = await getJSONData(URL_TOP_HEADLINES());
      appData.search.pageNum = 0;
    } else {
      newsData = await getJSONData(URL_CATEGORY(category));
    }

    appData.newsResults = newsData.articles;

    setLocalStorage();
  } catch (err) {
    throw err;
  }
};

// Check if any of the loaded results is bookmarked
const checkIsBookmarked = function () {
  if (appData.bookmarks.length > 0) {
    appData.bookmarks.forEach(el => {
      appData.newsResults.forEach(elm => {
        if (!elm.title) return;

        if (el.title.trim() === elm.title.trim()) {
          elm.bookmarked = true;
          return;
        }
      });
    });
  }
};

const getSearchResultsData = function (page = appData.search.pageNum) {
  // Initialize the start as well as end index
  const startIndex = RESULTS_PER_PAGE * page;
  const endIndex = RESULTS_PER_PAGE * (page + 1);

  checkIsBookmarked();

  // Increase page number to display other results per scroll to bottom
  page++;
  appData.search.pageNum = page;

  // Return array with 10-10 values from different index ranges.
  return appData.newsResults.slice(startIndex, endIndex);
};

const getSearchResultsDataBookmark = function () {
  const startIndex = 0;

  const endIndex = RESULTS_PER_PAGE * appData.search.pageNum;

  checkIsBookmarked();

  return appData.newsResults.slice(startIndex, endIndex);
};

const clearSearchQueries = function () {
  appData.search.queries = [];
  setLocalStorage();
};

const deleteBookmark = function (bookmarkedArticle) {
  bookmarkedArticle.bookmarked = false;
  const index = appData.bookmarks.findIndex(
    el => el.title.trim() === bookmarkedArticle.title.trim()
  );
  appData.bookmarks.splice(index, 1);
};

const addBookmark = function (bookmarkedArticle) {
  bookmarkedArticle.bookmarked = true;
  appData.bookmarks.push(bookmarkedArticle);
};

// Function to handle bookmark from news results page
const handleBookmark = function (id) {
  // Get which article(news) is bookmarked
  const bookmarkedArticle = appData.newsResults.find(elem => {
    return elem.title.trim() === id;
  });

  // Check if it is already bookmarked
  const isBookmarked = bookmarkedArticle.bookmarked || 0; // short-circuiting

  // If already bookmarked, unbookmark else bookmark
  if (isBookmarked) {
    deleteBookmark(bookmarkedArticle);
  } else {
    addBookmark(bookmarkedArticle);
  }

  setLocalStorage();
};

// Handle the bookmark from saved news page (i.e. already bookmarked items)
const handleBookmarked = function (id) {
  const bookmarkedArticle = appData.bookmarks.find(elem => {
    return elem.title.trim() === id;
  });

  deleteBookmark(bookmarkedArticle);

  setLocalStorage();
};

const setLocalStorage = function () {
  localStorage.setItem('bookmark', JSON.stringify(appData.bookmarks));
  localStorage.setItem('history', JSON.stringify(appData.search.queries));
};

const init = function () {
  const bookmarks = localStorage.getItem('bookmark');
  const histories = localStorage.getItem('history');

  if (!bookmarks || !histories) return;

  appData.bookmarks = JSON.parse(bookmarks);
  appData.search.queries = JSON.parse(histories);
};

init();

export {
  appData,
  loadNewsResults,
  saveHistory,
  getSearchResultsData,
  loadCategoryResults,
  clearSearchQueries,
  handleBookmark,
  getSearchResultsDataBookmark,
  handleBookmarked,
};
