function greetUser (name) {
  return `Welcome back, ${name}!`;
}

function displayGreeting () {
  const nameInput = document.getElementById('nameInput');
  const greetingDisplay = document.getElementById('greeting');
  const name = nameInput.value;
  
  if (name) {
    greetingDisplay.textContent = greetUser(name);
    nameInput.value = '';
  }
}

const button = document.getElementById('greetBtn');
button.addEventListener('click', displayGreeting);
