import Timer from "easytimer.js";

export function CircleTimer(timer: Timer) {
  const circlesvg = document.getElementById(
    "circle-svg"
  ) as unknown as SVGAElement;
  const circleelements = circlesvg.querySelectorAll("circle");
  const text = document.getElementById("circle-timer-text");

  console.log(circleelements);
  let num = 0;

  timer.addEventListener("secondsUpdated", (e) => {
    const timeValues = timer.getTimeValues();
    if (text) {
      text.innerHTML = timeValues.toString();
    }

    circleelements.item(num).classList.toggle("blue");
    if (num <= 3) {
      num++;
    } else {
      num = 0;
    }
  });
}
