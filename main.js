// CALCULATOR APP
var calculatorType = prompt('Welcome to the calculator app. Enter (b) for basic (+or-or/or*) y } or (a) for advanced (power or square root).')


if (calculatorType === 'a') {
  alert('Advanced calculator selected');
  var advancedCalculatorType = prompt('Type (a) for power calculator or (b) for square root calculator')
  if (advancedCalculatorType === 'a') {
    var advancedNumberOne = prompt('')
  }

  var advancedNumberOne = prompt('')


} else if (calculatorType === 'b') {
  alert('Basic calculator selected');
  var basicNumberOne = prompt('Basic calculator selected, please follow the prompts. Enter first number')
  var symbol = prompt('enter + - / or *')
  var basicNumberTwo = prompt ('enter second number to get answer')
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

} else {
  console.log('Error. Please refresh the page and enter (a) or (b) when prompted');
}
