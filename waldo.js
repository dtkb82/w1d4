// arr.forEach(function callback(currentValue[, index[, array]]) {
//     //your iterator
// }[, thisArg]);

// function logArrayElements(element, index, array) {
//   console.log('a[' + index + '] = ' + element);
// }

// // Notice that index 2 is skipped since there is no item at
// // that position in the array.
// [2, 5, , 9].forEach(logArrayElements);
// // logs:
// // a[0] = 2
// // a[1] = 5
// // a[3] = 9


// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(function(element, i){
    if (element === "Waldo") {
      found(i);   // execute callback
    }
  })
}


function actionWhenFound(i) {
  console.log("Found Waldo at index " + i + "!"); 
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


