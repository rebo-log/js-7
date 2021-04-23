let num = parseInt(prompt('Enter  number between 100 and 999 ')) || 0  ;

let smallest_number = 100;
let val = num ;
let max_numb = 999;
// calculation for Narcissistic Number edit this when you underrated more about function for
function narcissistic( value ) {
    var valStr = '' + value;
    var valLength = valStr.length;
    var result = 0;  
    for (var i in valStr) {
      result += Math.pow((+valStr[i]), valLength);
    }
      return result === value;
  };

  if ( smallest_number >= val || val >= max_numb){
    alert(`The number must be between 100 and 999`);
}else if (narcissistic(num) === true ) {
    alert(`Narcissistic Number`);
}else{
    alert(`Not Narcissistic`);
}

