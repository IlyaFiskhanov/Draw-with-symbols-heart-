
button.onclick = function () {
  if (button.style.backgroundColor == 'black') {
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
  } else {
    button.style.backgroundColor = 'black';
    button.style.color = 'white';
  }
}

button1.onclick = function () {
  if (button1.style.backgroundColor == 'black') {
    button1.style.backgroundColor = 'white';
    button1.style.color = 'black';
  } else {
    button1.style.backgroundColor = 'black';
    button1.style.color = 'white';
  }
}

button2.onclick = function () {
  if (button2.style.backgroundColor == 'black') {
    button2.style.backgroundColor = 'white';
    button2.style.color = 'black';
  } else {
    button2.style.backgroundColor = 'black';
    button2.style.color = 'white';
  }
}

button3.onclick = function () {
  if (button3.style.backgroundColor == 'black') {
    button3.style.backgroundColor = 'white';
    button3.style.color = 'black';
  } else {
    button3.style.backgroundColor = 'black';
    button3.style.color = 'white';
  }
}


button.style.backgroundColor = 'black';
button1.style.backgroundColor = 'black';
button2.style.backgroundColor = 'black';
button3.style.backgroundColor = 'black';

let weCanDraw = false;
let isClicked = false;
let weCanDraw1 = false;
let isClicked1 = false;
let weCanDraw2 = false;
let isClicked2 = false;
let weCanDraw3 = false;
let isClicked3 = false;

button.addEventListener('click', function () {
  if (isClicked) {
    
    isClicked = false;
    weCanDraw = false;
  } else {
    
    isClicked = true;
    weCanDraw = true;
  }
});

button1.addEventListener('click', function () {
  if (isClicked1) {
    isClicked1 = false;
    weCanDraw1 = false;
  } else {
    isClicked1 = true;
    weCanDraw1 = true;
  }
});

button2.addEventListener('click', function () {
  if (isClicked2) {
    isClicked2 = false;
    weCanDraw2 = false;
  } else {
    isClicked2 = true;
    weCanDraw2 = true;
  }
});
button3.addEventListener('click', function () {
  if (isClicked3) {
    isClicked3 = false;
    weCanDraw3 = false;
  } else {
    isClicked3 = true;
    weCanDraw3 = true;
  }
});


function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
}

function draw() {
  textSize(80);

  if (weCanDraw) {
    text('🤎', mouseX, mouseY);
  }else if (weCanDraw1) {
    text('💞', mouseX, mouseY);
  }else if (weCanDraw2) {
    text('🧡', mouseX, mouseY);
  }else if (weCanDraw3) {
    text('💝', mouseX, mouseY);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

