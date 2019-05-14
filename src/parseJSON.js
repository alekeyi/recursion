// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  // input: JSON string
  // output: javascript object
  // input could be:
    // object, array, string, boolean, null

  // potential base cases

  json = json.trim();

  // if false boolean
  if (json === 'false') {
    return false;
  }

  if (json === 'true') {
    return true;
  }

  // if null
  if (json === 'null') {
    return null;
  }

  // if number
  if (json == Number(json)) {
    return Number(json);
  }


  // if is a string
  if (json[0] === '\"' && json[json.length -1] === '\"') {
    json = json.slice(1, json.length-1);

     // if string
    if (json == String(json)) {
     return String(json);
    }

  }


  // __recurse through array__

  // if json arg is array
  if (json[0] === '[' && json[json.length-1] === ']') {

    // return an empty array for empty array
    if (json === '[]') {
      return [];
    }

    // get the body of the array from the string
    // slice into an array
    var bodyOfArray = json.slice(1, json.length-1);
    // [ 'bla, bla, bla' ]

    // get individual elements from the body string
    // split them into complete array
    var convertedArray = bodyOfArray.split(',');
    // [ 'bla', 'bla', 'bla' ]

    // recurse through array
    var finalArr = convertedArray.map(function(item, index, array) {
      return parseJSON(item);
    });

  return finalArr
  }


  // ____ recruse through object _____

  // if json arg is obj
  if (json[0] === '{' && json[json.length-1] === '}') {

    // return an empty object for empty object
    if (json === '{}') {
      return {};
    }

    // declare an object to output
    var obj = {};

    // get body of the object from the string
    // slice into an object
    var bodyOfObj = json.slice(1, json.length-1);
    // { 'x': 1, 'y': 2 }

    // get individual elements from body string
    // split them into object
    var convertedObj = bodyOfArray.split(',')

    // recurse through object
    var finalObj = convertedObj.map

  }


// end of function bracket closing
}

console.log(parseJSON('{}'));              // {}
console.log(parseJSON('true'));            // true
console.log(parseJSON('"foo"'));           // "foo"
console.log(parseJSON('[1, 5, "false"]')); // [1, 5, "false"]
console.log(parseJSON('null'));            // null



