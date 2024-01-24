import Timer from "easytimer.js";

export function CircleTimer(timer: Timer) {
  const circlesvg = document.getElementById(
    "circle-svg"
  ) as unknown as SVGAElement;
  const circleelements = circlesvg.querySelectorAll("circle");
  const circlesvgMobile = document.getElementById(
    "circle-svg-mobile"
  ) as unknown as SVGAElement;
  const circleelementsMobile = circlesvgMobile.querySelectorAll("circle");

  const text = document.getElementById("circle-timer-text");

  let numMobile = 4;
  timer.addEventListener("secondsUpdated", (e) => {
    circleelementsMobile.item(numMobile).classList.toggle("orange");
    if (numMobile <= 4 && numMobile >= 1) {
      numMobile--;
    } else {
      numMobile = 4;
    }
  });

  let num = 9;
  timer.addEventListener("secondsUpdated", (e) => {
    const timeValues = timer.getTimeValues();
    if (text) {
      text.innerHTML = timeValues.toString();
    }
    circleelements.item(num).classList.toggle("orange");
    if (num <= 9 && num >= 1) {
      num--;
    } else {
      num = 9;
    }
  });
}
