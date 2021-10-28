const raisinAlarm = function (cookie) {
  let result = "";
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      result = "Raisin alert!";
      break;
    } else {
      result = "All good!";
    }
  }
  return result;
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function (cookie) {
  let result = [];
  for (let j = 0; j < cookie.length; j++) {
    if (cookie[j] === "🍇") {
      result = "Raisin alert!";
      break;
    } else {
      result = "All good!";
    }
  }
  return result;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));
