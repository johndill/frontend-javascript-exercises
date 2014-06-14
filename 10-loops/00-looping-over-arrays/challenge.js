module.exports.sumNumbers = function(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

module.exports.splitAndLowerCaseString = function(str) {
  var str = str.toLowerCase();
  return str.split(',');
};

module.exports.addIndex = function(arr) {
  var newArray = [];
  for (var i = 0; i < arr.length; i++) {
    newArray.push(i + ' is ' + arr[i]);
  }
  return newArray;
};
