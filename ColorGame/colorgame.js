var numberOfSquares = 5;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor;
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var restButton = document.querySelector("#resetButton");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
      modeButtons[3].classList.remove("selected");
      modeButtons[4].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy"){
        numberOfSquares = 5;
        superHardoff();
      }else if (this.textContent === "Medium"){
        numberOfSquares = 10;
        superHardoff();
      }else if (this.textContent === "Hard"){
        numberOfSquares = 20;
        superHardoff();        
      }else if (this.textContent === "Very Hard"){
        numberOfSquares = 25;
        superHardoff();
      }else{
        numberOfSquares = 100;
        superHardon();
      }
      reset();
    });
  }
}

function superHardon(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.width = "7%";
    squares[i].style.paddingBottom = "7%";

  }
}

function superHardoff(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.width = "15%";
    squares[i].style.paddingBottom = "15%";

  }
}

function setupSquares(){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.background;
      if(clickedColor === pickedColor){
        messageDisplay.textContent = "Correct";
        restButton.textContent = "Play Again";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      }else{
          this.style.background = "darkgrey";
          messageDisplay.textContent = "Try Again"
        }
      });
  }
}

function reset(){
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "darkgrey";
}

resetButton.addEventListener("click", function(){
  reset();
});

function changeColors(color){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  var r = Math.floor(Math.random() * 256)
  var g = Math.floor(Math.random() * 256)
  var b = Math.floor(Math.random() * 256)
  return "rgb(" + r + ", " + g + ", " + b + ")"

}
