let line = document.querySelector(".clock-progress-bar"),
    clock = document.querySelector(".clock-display");
    clock_main = document.querySelector(".clock");

let is_hex = false;

clock.onmouseover = () => {
  is_hex = true
  updateClock()
}

clock.onmouseout =  () => {
  is_hex = false
  updateClock()
}


function updateClock(){
  var now = new Date(),
      hours = now.getHours(),
      minutes = now.getMinutes(),
      seconds = now.getSeconds();

  let line_width = seconds/60*14 //секунды деленные на размер линии в единицах измерения указанных в css (rem)
  line.style.width = line_width+"rem" // меняю стиль элемента а именно ширину линии

  var hex_hour = Number(hours).toString(16),
      hex_minutes = Number(minutes).toString(16),
      hex_seconds = Number(seconds).toString(16)

  if (hex_hour.length < 2) hex_hour = "0"+hex_hour
  if (hex_minutes.length < 2) hex_minutes = "0"+hex_minutes
  if (hex_seconds.length < 2) hex_seconds = "0"+hex_seconds

  var hex_time = hex_hour+hex_minutes+hex_seconds

  clock_main.style.backgroundColor = "#" + hex_time


  if (hours < 10) hours = "0"+hours
  if (minutes < 10) minutes = "0"+minutes
  if (seconds < 10) seconds = "0"+seconds

  var time;

  if (is_hex){
    time = hex_hour+":"+hex_minutes+":"+hex_seconds
  }
  else {
    time = hours+":"+minutes+":"+seconds
  }
  change(time)
}

function change(text) {
  clock.innerHTML = text
}

let timer;

function clockInit() {
  timer = setInterval(updateClock, 1000);
  updateClock(); // start before setInterval
}

clockInit()



// function updateClock() {
//   var clock = document.querySelector(".clock-display");
//   var date = new Date();
//   var hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
//   var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
//   var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
//   time = hours + ":" + minutes + ":" + seconds;
//   console.log("the current hours", time)
//   clock.innerHTML = hours + ":" + minutes + ":" + seconds
//  var clockBar = document.querySelector(".clock-progress-bar");
// clockBar.style.width = seconds*7.5 + "px"
// }
// var myClock = setInterval(updateClock, 1000);
//
// function updateColor() {
//
//   var clockBackground = document.querySelector(".clock");
//   var randomColor = Math.floor(Math.random()*16777215).toString(16);
//   clockBackground.style.backgroundColor = "#" + randomColor;
//
// }
// var myColor = setInterval(updateColor, 2000);
