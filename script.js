
function btnClick(val) {
  var screen = document.getElementById("screen");

  if (val === 'clear') {
     clearScreen();
  } else if (val === '=') {
    equalClick();
  } else if (val === '%') {
    try {
      // Calculate percentage
      var currentValue = parseFloat(screen.innerText);
      screen.innerText = (currentValue / 100).toString();
    } catch (error) {
      screen.innerText = 'Error';
    }
  } else {
    // Append the value to the current screen content
    screen.innerText += val;
  }
  clickSound.pause();  // Pause the audio
  clickSound.currentTime = 0;

  playClickSound();
}


function clearScreen(){
    var screen=document.getElementById("screen");
    screen.innerText=''
    clickSound.pause();  // Pause the audio
  clickSound.currentTime = 0;
    playClickSound()
    
}
function equalClick(){
    var text=document.getElementById("screen").innerText
    var result=eval(text)
    document.getElementById("screen").innerText=result
    clickSound.pause();  // Pause the audio
  clickSound.currentTime = 0;
    playClickSound()
}
function playClickSound(){
    var clickSound=document.getElementById("clickSound");
    clickSound.play();
}