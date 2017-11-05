// CALCULATOR APP
var calculatorType = prompt('Welcome to the calculator app. Enter (b) for basic (+, -, / or *) y } or (a) for advanced (power or square root. Bonus feature: enter (x) for bmi calculator) Bonus bonus (z) for trip calculator. (n) for basic function');


if (calculatorType === 'a') {
  alert('Advanced calculator selected');
  var advancedCalculatorType = prompt('Type (a) for power calculator or (b) for square root calculator');
  if (advancedCalculatorType === 'a') {
    var advancedNumberOne = prompt('x^y enter value for x');
    var advancedNumberTwo = prompt('x^y enter value for y');
    alert(Math.pow(parseInt(advancedNumberOne), parseInt(advancedNumberTwo)));
  } else if (advancedCalculatorType === 'b') {
      var advancedNumberOne = prompt("Enter number to find it's square root");
      alert(Math.sqrt(parseInt(advancedNumberOne)));
  } else {
    alert('Error please refresh the page')
  }




} else if (calculatorType === 'b') {
  alert('Basic calculator selected');
  var basicNumberOne = prompt('Basic calculator selected, please follow the prompts. Enter first number');
  var symbol = prompt('enter + - / or *');
  var basicNumberTwo = prompt ('enter second number to get answer');
  if (symbol === '+') {
    alert(parseInt(basicNumberOne) + parseInt(basicNumberTwo));
  } else if (symbol === '-') {
    alert(parseInt(basicNumberOne) - parseInt(basicNumberTwo));
  } else if (symbol === '*') {
    alert(parseInt(basicNumberOne) * parseInt(
      basicNumberTwo));
  } else if (symbol === '/') {
    alert(parseInt(basicNumberOne) / parseInt(basicNumberTwo));
  } else {
    alert('Error please refresh and try again. Ensure that you follow the prompts');
  }



} else if (calculatorType === 'x') {
  var bmiCalculator = prompt('for metric system enter (a) for imperial system enter (b)')
  if (bmiCalculator === 'a') {
    var height = prompt('enter height in m')
    var mass = prompt('enter weight in kg')
    alert( parseFloat(mass)/parseFloat(height)**2)
  } else if (bmiCalculator === 'b'){
    var height = prompt('enter height in lbs')
    var mass = prompt('enter weight in inches')
    alert(703*parseFloat(mass)/parseInt(height)**2)
  }
  
// } else if (calculatorType === 'z') {
//   alert('Trip calculator selected');
// } else if (calculatorType === 'n') {
//     alert('function calculator selected')
//     functionType = prompt('Which function? + - / *')
//     function add(numberOne, numberTwo ) {
//     var numberOne = prompt('first number')
//     var numberTwo = prompt('second ')
//     var answer= parseInt(numberOne)+parseInt(numberTwo);
//     alert(numberOne + ' + '+ numberTwo + ' = '+ answer)
//   }
//   if (functionType === '+'){
//     add();
//   }
}


else {
  alert('Error. Please refresh the page and enter (a) or (b) when prompted');
}
