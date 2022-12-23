/* memoize-exercise-1

 Task 1: Write a function, times10, that takes an argument, n, and multiples n times 10 a simple multiplication fn
*/

const times10 = (n) => (n*10);

//console.log('times10 returns:', times10(9));

// Task 2: Use an object to cache the results of your times10 function. 


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

// Task 3: Clean up your global scope by moving your cache inside your function.

// Use a closure to return a function that you can call later.
const memoizedClosure = () => {
    let cache = {};
      return (n) => {
          if (n in cache) {
              //console.log('Fetching from cache:', n);
              return cache[n];
          }
          else {
              //console.log('Calculating result');
              let result = times10(n);
              cache[n] = result;
              return result;
          }
      };
  };
  
  // returned function from memoizedAdd
  const memoClosureTimes10 = memoizedClosure();
  console.log('Task 3 calculated value:', memoClosureTimes10(9));	// calculated
  console.log('Task 3 cached value:', memoClosureTimes10(10));	// cached
  
// Task 4: Make your memo function generic and accept the times10 function as a callback rather than defining the n * 10 logic inside the if/else or pulling it in from the global scope.

const memoize = (cb) => {
    let cache = {};
      return (n, ...args) => { 
          if (n in cache) {
              //console.log('Fetching from cache:', n);
              return cache[n];
          }
          else {
              //console.log('Calculating result');
              let result = cb(n, ...args); 
              cache[n] = result;
              return result;
          }
      };
  };
  
  // returned function from memoizedAdd
  const memoizedTimes10 = memoize(times10);
  console.log('Task 4 calculated value:', memoizedTimes10(9));	// calculated
  console.log('Task 4 cached value:', memoizedTimes10(9));	// cached
  
  