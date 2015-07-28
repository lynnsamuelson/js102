
$(document).ready(function() {


  // Write a JavaScript function that accepts an array as an argument, and
  // returns a new array that is sorted.
  var number = [];
  

  // Write a JavaScript function that accepts an array, and returns a new
  // array that contains elements in the array you passed in that are 
  // larger than 25.

  function larger(a) {
  return a > 25;
  }

  var bigger = number.filter(larger);


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
  $('button').click(function() {
    input = $('#inputNum').val();
    console.log(input);
    number = input.split(",")
      console.log(number);

  var bigger = number.filter(larger);
  console.log("numbers larger than 25 are " + bigger);    
  
  bigger.sort(function(a,b) {
  return a - b;
  });
  console.log("in order the numbers are " + bigger);  
    
  
  

  for (var i = 0; i < bigger.length; i++) {

    el.innerHTML += "<div class="number">" + bigger[i] + "</div>";
    console.log("the numbers are " + output);
  }

  })
  
// var inputArray = (input.split(',') != null);
// console.log(inputArray);  

})

