/* ============================================================
   Never and Void Types
   (JavaScript equivalent behavior - no keyword equivalent exists,
   shown here as function design patterns)
   ============================================================ */

// void-like behavior - function returns nothing meaningful
function logMessage(message) {
  console.log(message);
  // no return value, implicitly returns undefined
}

logMessage("This function returns nothing.");


// never-like behavior - function that never completes normally
function throwError(message) {
  throw new Error(message);
}

try {
  throwError("Something went wrong.");
} catch (err) {
  console.log("Caught error: " + err.message);
}


// never-like behavior - function that never returns (infinite loop)
// left commented out so this file can run to completion
// function infiniteLoop() {
//   while (true) {
//     // never returns
//   }
// }


/* Equivalent TypeScript for reference:

function logMessage(message: string): void {
  console.log(message);
}

function throwError(message: string): never {
  throw new Error(message);
}

*/
