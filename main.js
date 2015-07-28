
$(document).ready(function() {


  // Write a JavaScript function that accepts an array as an argument, and
  // returns a new array that is sorted.
  var number = [21, 33, 5, 9, 99, 34];
  number.sort(function(a,b) {
  return a - b;
  });
  console.log(number);

  // Write a JavaScript function that accepts an array, and returns a new
  // array that contains elements in the array you passed in that are 
  // larger than 25.

  function larger(a) {
  return a > 25;
  }

  var bigger = number.filter(larger);

  console.log(bigger);

  // var button = document.getElementById("math");
  // var output = document.getElementById("output");

  // function show() {
  //   console.log("clicked");
  //   if (document.getElementById("inputNum") != null) {
  //     var input = document.getElementById("inputNum").value;
  //   }
  //   console.log("The user entered " + input);
   
  // }
  var input;
  function show() {
    input = $('#inputNum').val();
    console.log(input);
  }

})