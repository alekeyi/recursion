// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {


  if ( Array.isArray(obj) ) {
    var output = [];
    for (var i = 0; i < obj.length; i++) {
      if ( obj[i] === undefined || typeof obj[i] === 'function') {
        continue;
      } else {
      output.push( stringifyJSON(obj[i]) );
      }
    }
    return '[' + output + ']';
  }

  if ( obj === null ) {
    return 'null';
  }

  if ( typeof obj === 'object' ) {
    var output = [];
    for ( var key in obj ) {
      if ( obj[key] === undefined || typeof obj[key] === 'function' ) {
        continue;
      }
      output.push( stringifyJSON(key)  + ':' + stringifyJSON(obj[key]) );
    }
    return '{' + output + '}';
  }

  if ( typeof obj === 'string' ) {
    return '\"' + obj + '\"';
  }

  return '' + obj;

};


/*stringifyJSON([1,2,3]);

stringifyJSON([new Number(3), new String('false'), new Boolean(false)]);

var unstringifiableValuesTEST = [
  {
    'functions': function() {},
    'undefined': undefined
  }
];

stringifyJSON(unstringifiableValuesTEST);*/

// console.log(stringifyJSON([1,2,3]));

// console.log(JSON.stringify({ x: 5, y: 6 }));

// // expected output: "{"x":5,"y":6}"

// console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// // expected output: "[3,"false",false]"

// console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// // expected output: "{"x":[10,null,null,null]}"

// console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// // expected output: ""2006-01-02T15:04:05.000Z""

// console.log(JSON.stringify(2));
