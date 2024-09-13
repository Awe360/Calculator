 let calculated = false;

function clearDisplay() {
    document.calc.screen.value = '';
  }
  
  function deleteLast() {
    let currentValue = document.calc.screen.value;
    document.calc.screen.value = currentValue.substring(0, currentValue.length - 1);
  }
  
  function addValue(value) {
    if (calculated) {
      clearDisplay();  
      calculated = false;
    }
    document.calc.screen.value += value;
  }
  
  function calculate() {
    try {
      document.calc.screen.value = eval(document.calc.screen.value);
      calculated = true;
    } catch (e) {
      document.calc.screen.value = 'Math Error';
    }
  }
  