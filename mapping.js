var input = [
  { x: 3, y: 4 }, // triangle
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(triangle){
	var squared = Math.pow(triangle.x, 2) + Math.pow(triangle.y, 2);
	return Math.sqrt(squared) 
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);

