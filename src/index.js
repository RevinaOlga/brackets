module.exports = function check(str, bracketsConfig) {

  let configStr = [];

  for (var i = 0; i < bracketsConfig.length; i++) {
    configStr[i] = bracketsConfig[i].join('');
  }

  let newstr = str;

  for (var i = 0; i < str.length/2; i++) {
    newstr = removeFromCycle(configStr, newstr);
  }

  if (newstr === '') {
    return true;
  } else {
    return false;
  }

  function removeFromCycle(configStr, str) {
    for (var i = 0; i < configStr.length; i++) {
      str = str.replace(configStr[i], '');
    }
    return str;
  }

}
