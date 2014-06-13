module.exports.addItem = function(newItem, arr) {
  if (arr.indexOf(newItem) === -1) {
    arr.push(newItem);
  }
};

module.exports.reverseSortedList = function(arr) {
  arr.sort();
  arr.reverse();
  return arr;
};