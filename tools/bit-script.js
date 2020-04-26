var inputValue, inputNotation, byte, bits;
var inputUnits = ["bit", "byte", "kilobits", "kilobyte", "megabits", "megabyte", "gigabits", "gibabyte", "terabits", "terabyte", "petabits", "petabyte"] 

window.addEventListener('load', function () {
    setVariables();
  });

function convertBits(){
  setVariables();
}

function setVariables(){
    // 1 byte == 8 bits
    byte = 8;
    inputUnit = inputUnits[document.querySelector('#unit-type').value];
    inputValue = document.querySelector('#amount').value;
    inputNotation = document.querySelector('#notation').value;

    // start calculation
    calc();
}

//convert to bits
function calc(){

  if (inputUnit == "bit"){
    bits = inputValue
  }
  else if (inputUnit == "byte"){
    bits = inputValue * byte
  }
  else if (inputUnit == "kilobits"){
    bits = inputValue * inputNotation
  }
  else if (inputUnit == "kilobyte"){
    bits = inputValue * inputNotation * byte
  }
  else if (inputUnit == "megabits"){
    bits = inputValue * inputNotation * inputNotation
  }
  else if (inputUnit == "megabyte"){
    bits = inputValue * inputNotation * inputNotation * byte
  }
  else if (inputUnit == "gigabits"){
    bits = inputValue * inputNotation * inputNotation * inputNotation
  }
  else if (inputUnit == "gibabyte"){
    bits = inputValue * inputNotation * inputNotation * inputNotation * byte
  }
  else if (inputUnit == "terabits"){
    bits = inputValue * inputNotation * inputNotation * inputNotation  * inputNotation
  }
  else if (inputUnit == "terabyte"){
    bits = inputValue * inputNotation * inputNotation * inputNotation * inputNotation * byte
  }
  else if (inputUnit == "petabits"){
    bits = inputValue * inputNotation * inputNotation * inputNotation  * inputNotation  * inputNotation
  }
  else if (inputUnit == "petabyte"){
    bits = inputValue * inputNotation * inputNotation * inputNotation * inputNotation * inputNotation * byte
  }

  // now calculate every one
  bytes     = bits / byte;
  kilobits  = bits / inputNotation;
  kilobytes = kilobits / byte;
  megabits  = kilobits / inputNotation;
  megabytes = megabits / byte;
  gigabits  = megabits / inputNotation
  gibabytes = gigabits / byte;
  terabits  = gigabits / inputNotation;
  terabytes = terabits / byte;
  petabits  = terabits / inputNotation
  petabytes = petabits / byte;

  document.querySelector("#bits-out").innerHTML = bits;
  document.querySelector("#bytes-out").innerHTML = bytes;
  document.querySelector("#kilobits-out").innerHTML = kilobits;
  document.querySelector("#kilobytes-out").innerHTML = kilobytes;
  document.querySelector("#megabits-out").innerHTML = megabits;
  document.querySelector("#megabytes-out").innerHTML = megabytes;
  document.querySelector("#gigabits-out").innerHTML = gigabits;
  document.querySelector("#gibabytes-out").innerHTML = gibabytes;
  document.querySelector("#terabits-out").innerHTML = terabits;
  document.querySelector("#terabytes-out").innerHTML = terabytes;
  document.querySelector("#petabits-out").innerHTML = petabits;
  document.querySelector("#petabytes-out").innerHTML = petabytes;
}
