const sliderFill = document.querySelector(".fill");
const timeLeftText = document.querySelector("#time-left");
const startCount = 5;
let timeLeft = startCount

const timerId = setInterval(() => {
   timeLeft--
   timeLeftText.textContent = timeLeft;
   sliderFill.style.width = (timeLeft/startCount) * 100 + "%"
   if(timeLeft <= 0) {
      clearInterval(timerId)
      timeLeftText.textContent = "FIN!"
   }
}, 1000)