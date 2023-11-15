const convert = document.getElementById('converter');
const displayScreen = document.querySelector('.result-screen');
const clearBtn = document.getElementById('clear');
const inputField = document.getElementById('enteredValue');

function convertToNumber() {
   const enteredValue = document.getElementById('enteredValue');
   return parseInt(enteredValue.value);
}

function tempConverter(fromTemp, toTemp) {
   const enteredValue = convertToNumber();
   let answer = 0;

   if (fromTemp === 'C' && toTemp === 'F') {
      answer = (enteredValue * 9/5) + 32;
      return answer.toFixed(2);
   } 
   else if (fromTemp === 'C' && toTemp === 'K') {
      return enteredValue + 273.15;
   }
   else if (fromTemp === 'F' && toTemp === 'C') {
      answer = (enteredValue - 32) * 5/9;
      return answer.toFixed(2);
   }
   else if (fromTemp === 'F' && toTemp === 'K') {
      answer = ((enteredValue - 32) * 5/9) + 273.15;
      return answer.toFixed(2);
   }
   else if (fromTemp === 'K' && toTemp === 'F') {
      answer = ((enteredValue - 273.15) * 9/5) + 32;
      return answer.toFixed(2);
   }
   else if (fromTemp === 'K' && toTemp === 'C') {
      return enteredValue - 273.15;
   }
   else {
      return "Please select the correct units."
   }
}

function displayResult(fromTemp, toTemp, result) {
   const enteredValue = document.getElementById('enteredValue').value;
   let resultDesc = '';
   let calculatedResult = '';

   if (result === "Please select the correct units.") {
      resultDesc = "Please select the correct units.";
      calculatedResult = "Nan";
   } else {
      calculatedResult = `${result}${'\u00B0'}${toTemp}`;
      resultDesc = `${enteredValue}${'\u00B0'}${fromTemp} is equal to ${result}${'\u00B0'}${toTemp}`;
   }

   document.getElementById('result').textContent = calculatedResult; 
   document.getElementById('description').textContent = resultDesc;
}

inputField.addEventListener('focus', function() {
   const toTemp = document.querySelector('#basic-addon1').value;
   document.getElementById('unit').textContent = `${'\u00B0'}${toTemp}`;
});

convert.addEventListener('click', function() {
   const fromTemp = document.querySelector('#basic-addon').value;
   const toTemp = document.querySelector('#basic-addon1').value;
   const result = tempConverter(fromTemp, toTemp);
   displayScreen.style.visibility = 'visible';
   displayResult(fromTemp, toTemp, result);
});

clearBtn.addEventListener('click', function() {
   location.reload();
 });
 