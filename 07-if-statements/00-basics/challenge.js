module.exports.favoriteNumber = function(favNum, guess) {
  if (guess > favNum) {
    return "Too high";
  } else if (guess < favNum) {
    return "Too low";
  } else {
    return "You got it!";
  }
};

module.exports.checkLock = function(num1, num2, num3, num4) {
  if ((num1 === 3 || num1 === 5 || num1 === 7) && (num2 === 2) && (num3 >= 5 && num3 <= 100) && (num4 < 9 || num4 > 20)) {
    return "correct";
  } else {
    return "incorrect";
  }
};

module.exports.canIGet = function(item, money) {
  if (item === "MacBook Air") {
    return money >= 999;
  } else if (item === "MacBook Pro") {
    return money >= 1299;
  } else if (item === "Mac Pro") {
    return money >= 2499;
  } else if (item === "Apple Sticker") {
    return money >= 1;
  } else {
    return false;
  }
};