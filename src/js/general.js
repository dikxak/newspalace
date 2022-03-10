import { TIMEOUT_SEC } from './config';

// Function to remove active class from menu links
const removeActiveLinkClass = function () {
  const menuLinks = Array.from(document.querySelectorAll('.menu-link'));

  menuLinks.forEach(link => {
    link.classList.remove('menu-link--active');
  });

  window.location.hash = '';
};

// Function to add active class in menu link
const addActiveLinkClass = function () {
  window.addEventListener('hashchange', function () {
    const id = window.location.hash;
    const menuLinks = Array.from(document.querySelectorAll('.menu-link'));

    // Remove active class from all menu links
    menuLinks.forEach(link => {
      link.classList.remove('menu-link--active');
    });

    // Add active class to the one which had same hash as the window's hash
    menuLinks.forEach(link => {
      if (link.getAttribute('href') === id)
        link.classList.add('menu-link--active');
    });
  });
};

// If API request took more than defined time, it will return message.
const requestTimeout = function (sec) {
  return new Promise((_, reject) => {
    setTimeout(function () {
      reject(new Error(`Requets took too long! Timeout after ${sec} seconds.`));
    }, sec * 1000);
  });
};

// For simulating the infinite scroll effect.
const simulateLoading = function (sec) {
  return new Promise((resolve, _) => {
    setTimeout(resolve, sec * 1000);
  });
};

// Function to handle API request and get data.
const getJSONData = async function (url) {
  try {
    const res = await Promise.race([fetch(url), requestTimeout(TIMEOUT_SEC)]);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} ${res.status}`);

    return data;
  } catch (err) {
    throw err;
  }
};

// Function to get latitude and longitute for local news load.
const getLatLng = async function () {
  let coords = [];
  try {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (obj) {
          coords = [obj.coords.latitude, obj.coords.longitude];
        },
        function () {
          alert('Could not get your location :(');
        }
      );
      const countryData = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${coords[0]}&longitude=${coords[1]}&localityLanguage=en`
      );
      const country = await countryData.json();

      return country.countryName;
    }
  } catch (err) {
    throw err;
  }
};

export {
  getJSONData,
  simulateLoading,
  addActiveLinkClass,
  removeActiveLinkClass,
  getLatLng,
};
