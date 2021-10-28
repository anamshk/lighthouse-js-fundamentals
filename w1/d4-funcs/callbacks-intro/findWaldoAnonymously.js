// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  names.forEach(function(element, index) {
    if (element === 'Waldo') {
      found(index);
    }
  });
};

//const actionWhenFound = function(index) {
//  console.log("Waldo is located at:" ${index}!`);
//};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], function(index) {
  console.log("Waldo is located at:", index);
});

//Waldo is located at: 2
