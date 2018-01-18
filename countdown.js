// 1. Use the number passed in to increment down one at a time
//2. check the number
//3. create a console.log message based on the number 

var countdownGenerator = function (x) {
  

	return function(){
		if(x > 0){
			console.log("T-minus " + x + "...");
		} else if (x == 0){
			console.log("Blast Off!");
		} else {
			console.log("Rockets already gone, bub!");
		}
		
		return x--
	}


};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!


// function makeIdGenerator() {
//   var id = 0;

//   // The following is the closure function
//   return function() {
//     // This inner function accesses and assigns the value of
//     // the variable id, which was defined in the parent function
//     id += 1;
//     return id;
//   }
// }

// makeIdGenerator returns a function which is assigned to
// // the variable nextId
// var nextId = makeIdGenerator();

// console.log(nextId()); // Logs: 1
// console.log(nextId()); // Logs: 2