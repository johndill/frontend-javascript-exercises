module.exports.createCourse = function(title, duration, students) {
  var course = {};
  course.title = title;
  course.duration = duration;
  course.students = students;
  return course;
};

module.exports.addProperty = function(object, newProp, newVal) {
  if (object.hasOwnProperty(newProp)) {
    return object;
  } else {
    object[newProp] = newVal;
    return object;
  }
};

module.exports.formLetter = function(letter) {
  return 'Hello ' + letter.recipient + ',\n\n' + letter.msg + '\n\nSincerely,\n' + letter.sender;
};

module.exports.canIGet = function(item, money) {
  var products = {};
  products['MacBook Air'] = 999;
  products['MacBook Pro'] = 1299;
  products['Mac Pro'] = 2499;
  products['Apple Sticker'] = 1;

  return money >= products[item];
};