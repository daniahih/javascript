// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words
// and capitalize them, and then the second function, sortWords(),
// will sort the words in alphabetical order. If the array contains
// anything but strings, it should throw an error.
// Call the functions once with an array of words and call it once
// with an array that includes at least one item that is not a word.
// Print the resolve and reject in a .then, .catch

const Arr = ["dania", "mohammad", "hih"];
const newArray = ["dania", "hhhs", 120, 12];

function makeAllCaps(arr) {
  return new Promise( (resolve, reject) =>{
    let result = true;

    for (i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== "string") result = false;
    }

    if (result == true) {
      resolve(arr.join(" ").toUpperCase().split(" "));
    } else {
      reject(arr);
    }
  });
}

function sortAndCheck(arr) {
  return new Promise((resolve)=> {
    resolve(arr.sort());
  });
}

makeAllCaps(Arr)
  .then((arr) => sortAndCheck(arr))
  .then((arr) => console.log(`[${arr}] is all words!`))
  .catch((arr) => console.log(`[${arr}] includes items that are not words!`));

makeAllCaps(newArray)
  .then((arr) => sortAndCheck(arr))
  .then((arr) => console.log(`[${arr}] is all words!`))
  .catch((arr) => console.log(`[${arr}] includes items that are not words!`));
