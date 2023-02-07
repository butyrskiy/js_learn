function showVerticalMessage(str) {
  let newStr;
  if(str[0] === 's') {
    newStr = 'S' + str.slice(1);
    // console.log(newStr);
  } else newStr = str;

  if(newStr.length > 7) {
    newStr = newStr.slice(0,7);
  }

  for(let char of newStr) {
    console.log(char);
  }
}

showVerticalMessage('strada');