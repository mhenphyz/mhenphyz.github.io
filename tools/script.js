var lowerCase, upperCase, numbers, special, hex, useLower, 
    useUpper, useNumbers, useSpecial, useHex, keyLenght,
    oneKeyOutput, multipleKeysOutput, keyNumbers;

function defineVariables(){
    oneKeyOutput = document.querySelector('.passwd');
    multipleKeysOutput = document.querySelector('.keytable');
    lowerCase = document.querySelector('input[name="lowerCase"]').value
    upperCase = document.querySelector('input[name="upperCase"]').value;
    numbers = document.querySelector('input[name="numbers"]').value;
    special = document.querySelector('input[name="specialChars"]').value;
    hex = document.querySelector('input[name="hexChars"]').value;
    useLower = document.querySelector('input[name="useLowerCases"]').checked;
    useUpper = document.querySelector('input[name="useUpperCases"]').checked;
    useNumbers = document.querySelector('input[name="useNumbers"]').checked;
    useSpecial = document.querySelector('input[name="useSpecial"]').checked;
    useHex = document.querySelector('input[name="useHex"]').checked;
    keyLenghtSlider = document.querySelector('#keyLenght');
    keyLenghtText = document.querySelector('#passwdLenght');
    keyLenght = keyLenghtText.innerHTML;
    keyLenghtSlider.oninput = function(){
      keyLenghtText.innerHTML = keyLenghtSlider.value;
    };
    
    // generate passwords for the first time
    generatePasswords();
}

function generatePasswords(){
  keyNumbers = document.getElementById('numberOfkeys').value;
  keyLenght = keyLenghtText.innerHTML;

  if (keyNumbers < 1 || (useLower == false) && (useUpper == false) && (useNumbers == false) && (useSpecial == false) && (useHex == false) ) {
    oneKeyOutput.innerHTML = 'NULL';
  } else if ( keyNumbers == 1) {
    oneKeyOutput.innerHTML = keyGen(keyLenght, useLower, useUpper, useNumbers, useSpecial, useHex);
  } else if ( keyNumbers > 1){
    multipleKeysOutput.innerHTML = "";
    for (let key = 0; key < keyNumbers; key++) {
      const newKey = document.createElement('span');
      newKey.className = 'key'
      newKey.innerHTML = keyGen(keyLenght, useLower, useUpper, useNumbers, useSpecial, useHex)
      multipleKeysOutput.appendChild(newKey); 
    }
  }
}


function random() {
  const { crypto, Uint32Array } = window;
  if (typeof crypto?.getRandomValues === 'function' && typeof Uint32Array === 'function') {
    // Divide a random UInt32 by the maximum value (2^32 -1) to get a result between 0 and 1
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295;
  }

  return Math.random();
}

function keyGen( length = 8, useLowerCase = true, useUpperCase = true, useNumbers = true, useSpecial = true, useHex = false) {
  let chars = '';
  let key = '';

  if (useLowerCase) chars += lowerCase;
  if (useUpperCase) chars += upperCase;
  if (useNumbers) chars += numbers;
  if (useSpecial) chars += special;
  if (useHex) chars += hex;

  for (let i = 0; i < length; i++) {
    key += chars[Math.floor(random() * chars.length)];
  }

  return key;
}

window.addEventListener('load', function () {
  defineVariables();
})