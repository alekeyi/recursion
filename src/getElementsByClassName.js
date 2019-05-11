// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:



var getElementsByClassName = function(className) {
  // your code here

  // input : a class name
  // output: an array of elements that match the className argument

  // create an array to hold our output
  var outputArray = [];

  // node is undefined? so define node
  var element = arguments[1] || document.body;


  // create function to see if node has class
  var classExists = function(element, className) {

    // see if node has className in it and return true or false
    if ( element.classList && element.classList.contains(className) ) {
      return true;
    } else {
    return false;
    }
  };

  // see if node exists in className and if yes push into []
  if ( classExists(element, className) ) {
    outputArray.push(element);
  }

  // if start node has any children....
  if ( element.childNodes ) {

    // iterate over the childNodes in node
    for ( var i = 0; i < element.childNodes.length; i++ ) {

      // let the [] = recursive call of our function, conating childnodes
      outputArray = outputArray.concat(getElementsByClassName(className, element.childNodes[i]));
    }
  }

  // return final array
  return outputArray;
};







// var getElementsByClassName = function(className, element) {
//   function jq( myid ) {

//     return "." + myid.replace( /(:|\.|\[|\]|,|=|@)/g, "\\$1" );

//   }

//   // var classNameNew = JSON.stringify(className);
//   classNameNew = jq(className);

//   if($(classNameNew)[0]){
//     return true;
//   }else{
//     return false;
//   }
// }