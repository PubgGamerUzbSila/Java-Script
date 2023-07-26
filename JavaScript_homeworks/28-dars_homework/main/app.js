const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;")
});

document.addEventListener('click', e => {
    cursor.classList.add("expand");
    setTimeout(() => {
        cursor.classList.remove("expand");
    }, 500);
});

function startGame() {
    const minutes = document.getElementById('minutes').value;
    const difficulty = document.getElementById('difficulty').value;
  
    if (minutes < 1 || difficulty === "") {
      alert("Please enter valid minutes and select a difficulty level before starting the game!");

    } else {
      alert(`Game started with ${minutes} minute(s) and ${difficulty} difficulty level!`);
    }
  }