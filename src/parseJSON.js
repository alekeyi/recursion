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
    if (typeof json === 'string') {
      json = json.trim();
    }

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

//     // if string
//     if (json == String(json)) {
//      return json.replace(/(['"])/g, "");
//     }


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

  return finalArr;
  }


  // ____ object _____

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
    if (typeof json === 'string'){
      var bodyOfObj = json.slice(1, json.length-1);
    }else{
      var bodyOfObj = json;
    }
    // 'x': 1, 'y': 2


    // get individual elements from body string
    // split them into object
    // var convertedObj = bodyOfObj.split(',')
    var convertedObj = bodyOfObj.split(',').reduce(function(obj, str, index) {
      var strParts = str.split(':');
      if (strParts[0] && strParts[1]) { //<-- Make sure the key & value are not undefined
        strParts[1] = parseJSON(strParts[1]);
        obj[strParts[0].replace(/\s+/g, '').replace(/(['"])/g, "")] = strParts[1]; //<-- Get rid of extra spaces at beginning of value strings
      }
      return obj;
    }, {});

  return convertedObj;
  // end of function bracket closing

  }
  // innerParse(json);
// closing of parseJSON
}

console.log(parseJSON('{}'));              // {}
console.log(parseJSON('true'));            // true
console.log(parseJSON('"foo"'));           // "foo"
console.log(parseJSON('[1, 5, "false"]')); // [1, 5, "false"]
console.log(parseJSON('null'));            // null




/*
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
    // 'x': 1, 'y': 2


    // look for key
    // declare a variable to represent index of colon
    var iColon = bodyOfObj.indexOf(':');

    // declare a key without "" or space
    var key = bodyOfObj.slice(1, iColon - 1);


    // look for value based on comma location (until end of values, no comma)
    var iComma = bodyOfObj.indexOf(',');

    // declare a value
    var value = '';


    // at end of values, there will be no comma, if that's case slice sets to -1:
    if (iComma === -1) {
      value = bodyOfObj.slice(iColon+1).trim()
    } else {
    // set value to location between colon and comma using slice, trim to remove space
      value = bodyOfObj.slice(iColon+1, iComma).trim();
    }
    // value will still have quotes and need them removed, use same quote removal as above
    if (value == String(value)) {
      value = String(value);
    }

    // now add the key and the value to obj
    obj[key] = value;
    return obj;
  }
}
*/