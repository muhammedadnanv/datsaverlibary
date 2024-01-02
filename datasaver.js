// dataSaver.js

(function (window) {
  // Check if the library is already loaded
  if (window.dataSaver) {
    return;
  }

  // Create the dataSaver object
  var dataSaver = {};

  // Local storage key for storing cached data
  var CACHE_KEY = 'dataSaverCache';

  // Function to save data to the cache
  dataSaver.saveToCache = function (key, data) {
    var cache = JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
    cache[key] = data;
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  };

  // Function to retrieve data from the cache
  dataSaver.getFromCache = function (key) {
    var cache = JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
    return cache[key];
  };

  // Function to clear the entire cache
  dataSaver.clearCache = function () {
    localStorage.removeItem(CACHE_KEY);
  };

  // Expose the dataSaver object to the global scope
  window.dataSaver = dataSaver;
})(window);
