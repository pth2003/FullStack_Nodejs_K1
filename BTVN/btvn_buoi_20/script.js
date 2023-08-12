// Bài 1 :

var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var result = arrA.reduce(function (prev, current) {
  if (arrB.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);

console.log(result);

// Bai 2 :

var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

function flatten(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, []);
}

console.log(flatten(arr));

// Bài 3 :
var arr = [
  ["a", 1, true],
  ["b", 2, false],
];
var result = [];
for (var i = 0; i < arr[0].length; i++) {
  var tempArray = [];
  for (var j = 0; j < arr.length; j++) {
    tempArray.push(arr[j][i]);
  }
  result.push(tempArray);
}

console.log(result);

// Bài 4 :
