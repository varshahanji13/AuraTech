function goToMain(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;

  if (name && phone) {
    localStorage.setItem('userName', name);
    window.location.href = "main.html";
  } else {
    alert("Please fill in your name and phone number.");
  }
}

function handleSOS() {
  alert("SOS alert activated. Dispatching emergency response...");
}
document.getElementById('sosButton').addEventListener('click', handleSOS);

document.getElementById('goToMainButton').addEventListener('click', goToMain);  
