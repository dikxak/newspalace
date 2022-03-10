const API_KEY = 'b9796ac0a2404b8d8407e5972c861857';
const TIMEOUT_SEC = 10;
const RESULTS_PER_PAGE = 10;
const SEARCH_HEADING = 'stories';
const SEARCH_ICON = 'icon-earth';

// KEY-1 => 357dffae768847649c703b90457b302a
// KEY-2 => b9796ac0a2404b8d8407e5972c861857

// fetching news data for domains (e.g. cnn.com, bbc.com, techcrunch.com)
const URL_DOMAIN = function (query) {
  return `https://newsapi.org/v2/everything?domains=${query}.com&language=en&sortBy=publishedAt&pageSize=100&apiKey=${API_KEY}`;
};

// fetching news data for queries (e.g. elon musk, bitcoin, cryptocurrency)
const URL_QUERY = function (query) {
  return `https://newsapi.org/v2/everything?q=${query}&language=en&sortBy=publishedAt&pageSize=100&apiKey=${API_KEY}`;
};

// fetching news data for category (e.g. sports, entertainment, business)
const URL_CATEGORY = function (category) {
  return `https://newsapi.org/v2/top-headlines?category=${category}&language=en&sortBy=publishedAt&pageSize=100&apiKey=${API_KEY}
  `;
};

const URL_TOP_HEADLINES = function () {
  return `https://newsapi.org/v2/everything?domains=bbc.com,thenextweb.com,cnn.com,nytimes.com,timesofindia.com,forbes.com,spacex.com,nasa.com,techcrunc.com,indiatimes.com&language=en&sortBy=publishedAt&pageSize=100&apiKey=${API_KEY}`;
};

export {
  TIMEOUT_SEC,
  URL_DOMAIN,
  URL_QUERY,
  RESULTS_PER_PAGE,
  URL_CATEGORY,
  URL_TOP_HEADLINES,
  SEARCH_HEADING,
  SEARCH_ICON,
};
