const repeatString = function(string, num) {
  if (num < 1){
    return "ERROR"
  }
  else {
    let result = ''
    for (let i = 1; i <= num; i++){
      result = result + string;
    }
    return result;
  }
}

// Do not edit below this line
module.exports = repeatString;
