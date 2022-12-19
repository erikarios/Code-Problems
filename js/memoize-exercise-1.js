/* memoize-exercise-1

// Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn
*/

const times10 = (n) => (n*10);

//console.log('times10 returns:', times10(9));

/* 
// Task 2: Use an object to cache the results of your times10 function. 
*/

const cache = {};

const memoTimes10 = (n) => {
  if (n in cache) {
			console.log('Fetching from cache:', n);
			return cache[n];
		} else {
			console.log('Calculating result');
			let result = times10(n); //90
			cache[n] = result; 
			return result;
		}
};

/*Test Cases
console.log('Task 2 calculated value:', memoTimes10(9));	// calculated
console.log('Task 2 cached value:', memoTimes10(9));	// cached
*/

// Create a function that checks if the value for n has been calculated before.
// If the value for n has not been calculated, calculate and then save the result in the cache object.