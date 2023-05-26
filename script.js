const form = document.getElementById('inputForm');
const outputText = document.getElementById('promptText');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  updateOutput();
});const inputFields = document.querySelectorAll('input[data-hint], textarea[data-hint]');

// Add event listeners for input fields
inputFields.forEach(function(input) {
  input.addEventListener('input', function() {
    updateOutput();
  });
  input.addEventListener('focus', function() {
    showHint(input);
  });
  input.addEventListener('blur', function() {
    hideHint(input);
  });
});

function showHint(input) {
  const hintBox = input.nextElementSibling;
  if (hintBox.classList.contains('hint-box')) {
    hintBox.textContent = input.getAttribute('data-hint');
    hintBox.style.display = 'block';
  }
}

function hideHint(input) {
  const hintBox = input.nextElementSibling;
  if (hintBox.classList.contains('hint-box')) {
    hintBox.style.display = 'none';
  }
}


function updateOutput() {
  const input1 = document.getElementById('input1').value;
  const input2 = document.getElementById('input2').value;
    const input3 = document.getElementById('input3').value;
    const input4 = document.getElementById('input4').value;
    const input5 = document.getElementById('input5').value;
    const input6 = document.getElementById('input6').value;
   const input7 = document.getElementById('input7').value;
  
 

  const output = `Imagina que estás trabajando en el equipo de marketing de <span class="input1">${input1}</span> 

Tu objetivo es desarrollar una estrategia efectiva para conectar con el Avatar, el cliente ideal de la empresa. Este Avatar es una representación ficticia de nuestro público objetivo, el mismo es <span class="input2">${input2}</span> 

La pieza publicitaria que se utilizara es <span class="input3">${input3}</span> 

Y la idea central que queremos transmitir es<span class="input4">${input4}</span> . El producto o servicio a promocionar es <span class="input5">${input5}</span> .
 
Identificar y generar una lista con <span class="input6">${input6}</span>  <span class="input7">${input7}</span> que esten alineados con el Avatar, la pieza, la idea central y el producto o servicio. Cada resultado debe estar respaldado por razones especificadas que demuestren su relevancia para el Avatar, ademas es importante adaptarlos a la industria para que sean coherentes y convincentes. Ser claro y persuasivo. Se debe captar la atención del avatar, generar interés y conexión emocional, y motivar al público objetivo a realizar una acción deseada. Ser original y transmitir la idea central. 
 `;

  outputText.innerHTML = output;

  // Reset all input classes
  const inputs = document.querySelectorAll('input');
  inputs.forEach(function(input) {
    input.classList.remove('filled');
  });

  // Add 'filled' class to the corresponding inputs
  const input1Elements = document.querySelectorAll('.input1');
  input1Elements.forEach(function(element) {
    const input = document.getElementById('input1');
    input.classList.add('filled');
  });

  const input2Elements = document.querySelectorAll('.input2');
  input2Elements.forEach(function(element) {
    const input = document.getElementById('input2');
    input.classList.add('filled');
  });

  const input3Elements = document.querySelectorAll('.input3');
  input3Elements.forEach(function(element) {
    const input = document.getElementById('input3');
    input.classList.add('filled');
  });

  const input4Elements = document.querySelectorAll('.input4');
  input4Elements.forEach(function(element) {
    const input = document.getElementById('input4');
    input.classList.add('filled');
  });


 const input5Elements = document.querySelectorAll('.input5');
  input5Elements.forEach(function(element) {
    const input = document.getElementById('input5');
    input.classList.add('filled');
  });


 const input6Elements = document.querySelectorAll('.input6');
  input6Elements.forEach(function(element) {
    const input = document.getElementById('input6');
    input.classList.add('filled');
  });


 const input7Elements = document.querySelectorAll('.input7');
  input7Elements.forEach(function(element) {
    const input = document.getElementById('input7');
    input.classList.add('filled');
  });
}


// Event listeners for input fields
const inputs = document.querySelectorAll('input');
inputs.forEach(function(input) {
  input.addEventListener('input', function() {
    updateOutput();
  });
});

const copyButton = document.getElementById('copyButton');
const promptText = document.getElementById('promptText');

copyButton.addEventListener('click', function() {
  copyToClipboard(promptText.textContent);
});

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Text copied to clipboard!');
}

const copyInputsButton = document.getElementById('copyInputsButton');
copyInputsButton.addEventListener('click', function() {
  copyInputsAsJson();
});

function copyInputsAsJson() {
  const inputs = document.querySelectorAll('input, textarea');
  const inputsData = {};

  inputs.forEach(function(input) {
    inputsData[input.id] = input.value;
  });

  const json = JSON.stringify(inputsData, null, 2);

  copyToClipboard(json);
  alert('Inputs copied as JSON!');
}