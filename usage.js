// Example usage

// Save data to cache
dataSaver.saveToCache('userProfile', { name: 'John Doe', age: 25 });

// Retrieve data from cache
var userProfile = dataSaver.getFromCache('userProfile');
console.log(userProfile); // { name: 'John Doe', age: 25 }

// Clear the entire cache
dataSaver.clearCache();
