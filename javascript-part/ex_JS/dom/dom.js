//---------6-------------
var green = document.querySelector("div#ex6 button.js-bgr-blue");
var red = document.querySelector("div#ex6 button.js-bgr-red");
var brg = document.getElementById("ex6");
green.addEventListener("click", function () {
  brg.style.backgroundColor = "green";
});
red.addEventListener("click", function () {
  brg.style.backgroundColor = "red";
});

//--------------10---------------
var readMoreBtn = document.querySelector(".read-more-btn");
var text = document.querySelector(".text");
var more = document.querySelector("span.moreText");
var less = document.querySelector("span.dots");
more.style.display = "none";
less.style.display = "inline";
readMoreBtn.addEventListener("click", () => {
  if (readMoreBtn.innerText === "Read More") {
    readMoreBtn.innerText = "Read Less";
    more.style.display = "inline";
    less.style.display = "none";
  } else {
    readMoreBtn.innerText = "Read More";
    more.style.display = "none";
    less.style.display = "inline";
  }
});

//---------------------13----------------------
var seconds = 0;
var tens = 0;
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var btnStart = document.getElementById("btn-start");
var btnStop = document.getElementById("btn-stop");
var btnReset = document.getElementById("btn-reset");
var interval;
function startTimer() {
  tens++;
  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}
btnStart.addEventListener("click", function () {
  interval = setInterval(startTimer);
});
btnStop.addEventListener("click", function () {
  clearInterval(interval);
});
btnReset.addEventListener("click", function () {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
});
