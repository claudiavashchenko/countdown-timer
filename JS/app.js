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
      surprise()
   }
}, 1000)

function surprise() {
   const colors = [
    "rgba(255, 105, 97, 0.5)",
    "rgba(97, 168, 255, o.5)",
    "rgba(247, 255, 97, 0.5)",
    "rgba(97, 255, 184, 0.5)",
    "rgba(255, 255, 255, 0.5)"
   ]
   
   for (let i = 0; i < 500; i++) {
    setTimeout(() => {
    const circleElement = document.createElement("div")
    circleElement.classList.add("circle")
    timeLeftText.append(circleElement)
    }, i * 5)
   }

  
}