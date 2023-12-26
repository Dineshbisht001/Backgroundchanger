let colors = ['white', 'black'];
let currentIndex = 0;
const changeButton = document.getElementById('changeButton');

function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

function toggleBackgroundColor() {
  changeBackgroundColor(colors[currentIndex]);
  currentIndex = (currentIndex + 1) % colors.length;
}

  