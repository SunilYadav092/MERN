// ======================================
// JavaScript Asynchronous Programming Exercises
// ======================================

// EXERCISE 1: setTimeout and setInterval
console.log("=== EXERCISE 1: setTimeout & setInterval ===");

// TODO: Use timers for delayed and repeated execution
// SOLUTION:

// setTimeout - execute once after delay
const timeoutId = setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

// Clear timeout if needed
// clearTimeout(timeoutId);

// setInterval - repeat execution
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Interval: ${count} seconds elapsed`);
    
    if (count >= 3) {
        clearInterval(intervalId);
        console.log("Interval stopped");
    }
}, 1000);

// -----------------------------------

// EXERCISE 2: Basic Promises
console.log("\n=== EXERCISE 2: Creating Promises ===");

// TODO: Create and use promises
// SOLUTION:

// Create a promise
const myPromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    
    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject("Promise rejected!");
        }
    }, 1500);
});

// Consume promise
myPromise
    .then(result => {
        console.log("✓ Success:", result);
    })
    .catch(error => {
        console.log("✗ Error:", error);
    })
    .finally(() => {
        console.log("✓ Finally: Cleanup done");
    });

// -----------------------------------

// EXERCISE 3: Promise Chain
console.log("\n=== EXERCISE 3: Promise Chaining ===");

// TODO: Chain multiple async operations
// SOLUTION:

function step1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Step 1 completed");
            resolve(10);
        }, 500);
    });
}

function step2(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Step 2 completed with value: ${value}`);
            resolve(value * 2);
        }, 500);
    });
}

function step3(value) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Step 3 completed with value: ${value}`);
            resolve(value + 5);
        }, 500);
    });
}

// Chain promises
step1()
    .then(result => step2(result))
    .then(result => step3(result))
    .then(result => {
        console.log(`Final result: ${result}`);
    })
    .catch(error => {
        console.log(`Error: ${error}`);
    });

// -----------------------------------

// EXERCISE 4: Promise.all
console.log("\n=== EXERCISE 4: Promise.all ===");

// TODO: Wait for multiple promises to complete
// SOLUTION:

const promise1 = new Promise(resolve => {
    setTimeout(() => resolve("Promise 1"), 1000);
});

const promise2 = new Promise(resolve => {
    setTimeout(() => resolve("Promise 2"), 1500);
});

const promise3 = new Promise(resolve => {
    setTimeout(() => resolve("Promise 3"), 2000);
});

console.log("Starting Promise.all (waits for slowest)...");

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log("All promises resolved:", results);
    })
    .catch(error => {
        console.log("One promise rejected:", error);
    });

// -----------------------------------

// EXERCISE 5: Promise.race
console.log("\n=== EXERCISE 5: Promise.race ===");

// TODO: Wait for first promise to complete
// SOLUTION:

const racePromise1 = new Promise(resolve => {
    setTimeout(() => resolve("Promise 1 won!"), 3000);
});

const racePromise2 = new Promise(resolve => {
    setTimeout(() => resolve("Promise 2 won!"), 1000);
});

const racePromise3 = new Promise(resolve => {
    setTimeout(() => resolve("Promise 3 won!"), 2000);
});

console.log("\nStarting Promise.race (takes fastest)...");

Promise.race([racePromise1, racePromise2, racePromise3])
    .then(result => {
        console.log("First to complete:", result);
    });

// -----------------------------------

// EXERCISE 6: Async/Await Basic
console.log("\n=== EXERCISE 6: Async/Await Basics ===");

// TODO: Write asynchronous code that looks synchronous
// SOLUTION:

// Async function always returns a promise
async function basicAsync() {
    console.log("Async function started");
    
    // await pauses execution until promise settles
    const result = await new Promise(resolve => {
        setTimeout(() => resolve("Data loaded"), 1000);
    });
    
    console.log("Result:", result);
    return `Processed: ${result}`;
}

// Call async function
basicAsync().then(finalResult => {
    console.log("Final:", finalResult);
});

// -----------------------------------

// EXERCISE 7: Error Handling in Async/Await
console.log("\n=== EXERCISE 7: Error Handling with Try/Catch ===");

// TODO: Handle errors in async functions
// SOLUTION:

async function fetchUserData(userId) {
    try {
        console.log(`Fetching user ${userId}...`);
        
        // Simulate fetch
        const user = await new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userId > 0) {
                    resolve({id: userId, name: "John Doe"});
                } else {
                    reject(new Error("Invalid user ID"));
                }
            }, 1000);
        });
        
        console.log("User data:", user);
        return user;
        
    } catch (error) {
        console.error("✗ Caught error:", error.message);
        return null;
        
    } finally {
        console.log("✓ Cleanup complete");
    }
}

// Test with valid ID
fetchUserData(1);

// Test with invalid ID
setTimeout(() => {
    fetchUserData(-1);
}, 2500);

// -----------------------------------

// EXERCISE 8: Multiple Awaits
console.log("\n=== EXERCISE 8: Multiple Awaits ===");

// TODO: Handle multiple async operations in sequence
// SOLUTION:

async function multipleAwaits() {
    try {
        // Fetch user
        const user = await new Promise(resolve => {
            setTimeout(() => resolve({id: 1, name: "Alice"}), 800);
        });
        console.log("User fetched:", user.name);
        
        // Fetch user's posts
        const posts = await new Promise(resolve => {
            setTimeout(() => resolve([{id: 1, title: "Post 1"}]), 600);
        });
        console.log("Posts fetched:", posts.length, "post(s)");
        
        // Fetch comments
        const comments = await new Promise(resolve => {
            setTimeout(() => resolve([{id: 1, text: "Comment"}]), 400);
        });
        console.log("Comments fetched:", comments.length);
        
        return {user, posts, comments};
        
    } catch (error) {
        console.error("Error:", error.message);
    }
}

multipleAwaits().then(data => {
    console.log("All data loaded successfully");
});

// -----------------------------------

// EXERCISE 9: Parallel Awaits
console.log("\n=== EXERCISE 9: Parallel Requests (Faster) ===");

// TODO: Execute multiple async operations in parallel
// SOLUTION:

async function parallelRequests() {
    try {
        // Sequential (slower - total ~2400ms)
        console.log("Sequential approach:");
        const start1 = Date.now();
        
        const data1 = await new Promise(r => setTimeout(() => r("Data 1"), 800));
        const data2 = await new Promise(r => setTimeout(() => r("Data 2"), 800));
        const data3 = await new Promise(r => setTimeout(() => r("Data 3"), 800));
        
        console.log(`Took ${Date.now() - start1}ms`);
        
        // Parallel (faster - total ~800ms)
        console.log("\nParallel approach:");
        const start2 = Date.now();
        
        const [par1, par2, par3] = await Promise.all([
            new Promise(r => setTimeout(() => r("Data 1"), 800)),
            new Promise(r => setTimeout(() => r("Data 2"), 800)),
            new Promise(r => setTimeout(() => r("Data 3"), 800))
        ]);
        
        console.log(`Took ${Date.now() - start2}ms`);
        
    } catch (error) {
        console.error("Error:", error);
    }
}

// parallelRequests();  // Uncomment to run

// -----------------------------------

// EXERCISE 10: Fetch API
console.log("\n=== EXERCISE 10: Fetch API ===");

// TODO: Fetch data from an API
// SOLUTION:

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
        
        // Check if request succeeded
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        // Parse JSON
        const user = await response.json();
        
        console.log("Fetched user:");
        console.log(`  Name: ${user.name}`);
        console.log(`  Email: ${user.email}`);
        console.log(`  Phone: ${user.phone}`);
        
        return user;
        
    } catch (error) {
        console.error("Fetch error:", error.message);
    }
}

// Uncomment to run (requires browser environment)
// fetchData();

// -----------------------------------

// EXERCISE 11: Timeout Promise Wrapper
console.log("\n=== EXERCISE 11: Promise with Timeout ===");

// TODO: Add timeout to promises
// SOLUTION:

function withTimeout(promise, timeoutMs) {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Operation timed out')), timeoutMs);
    });
    
    return Promise.race([promise, timeoutPromise]);
}

async function operationWithTimeout() {
    try {
        const slowPromise = new Promise(resolve => {
            setTimeout(() => resolve("Success!"), 3000);  // 3 seconds
        });
        
        const result = await withTimeout(slowPromise, 1000);  // 1 second timeout
        console.log(result);
        
    } catch (error) {
        console.error("Operation failed:", error.message);
    }
}

// operationWithTimeout();  // Uncomment to test

// -----------------------------------

// EXERCISE 12: Retry Logic
console.log("\n=== EXERCISE 12: Retry with Exponential Backoff ===");

// TODO: Retry failed operations with increasing delays
// SOLUTION:

async function retryWithBackoff(fn, maxRetries = 3, initialDelay = 1000) {
    let delay = initialDelay;
    
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
            console.log(`Attempt ${attempt}/${maxRetries}`);
            return await fn();
            
        } catch (error) {
            if (attempt === maxRetries) {
                throw error;  // All retries exhausted
            }
            
            console.log(`Failed: ${error.message}. Retrying in ${delay}ms...`);
            await new Promise(resolve => setTimeout(resolve, delay));
            delay *= 2;  // Exponential backoff
        }
    }
}

// Simulate failing operation
async function unreliableOperation() {
    const random = Math.random();
    if (random > 0.3) {
        throw new Error("Operation failed");
    }
    return "Success!";
}

// Test retry logic
async function testRetry() {
    try {
        const result = await retryWithBackoff(unreliableOperation, 3, 500);
        console.log("Result:", result);
    } catch (error) {
        console.error("All retries failed:", error.message);
    }
}

// testRetry();  // Uncomment to test

// -----------------------------------

// EXERCISE 13: Debounce and Throttle
console.log("\n=== EXERCISE 13: Debounce & Throttle ===");

// TODO: Control function execution frequency
// SOLUTION:

// Debounce - execute after delay stops
function debounce(fn, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}

// Throttle - execute at most once per interval
function throttle(fn, interval) {
    let lastRun = 0;
    
    return function(...args) {
        const now = Date.now();
        
        if (now - lastRun >= interval) {
            fn(...args);
            lastRun = now;
        }
    };
}

// Example: Debounced search
const debouncedSearch = debounce((query) => {
    console.log(`Searching for: ${query}`);
}, 500);

console.log("\nDebounce test (500ms delay):");
debouncedSearch("ja");
debouncedSearch("jav");
debouncedSearch("javas");
debouncedSearch("javasc");
debouncedSearch("javascript");
// Only final call executes after 500ms

// Example: Throttled scroll
const throttledScroll = throttle(() => {
    console.log("Scroll event");
}, 1000);

console.log("\nThrottle (max once per 1s):");
for (let i = 0; i < 5; i++) {
    throttledScroll();
}

// ======================================
// End of Asynchronous Programming Exercises
// ======================================
