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

  let num = 8;
  timer.addEventListener("secondsUpdated", (e) => {
    const timeValues = timer.getTimeValues();
    if (text) {
      text.innerHTML = timeValues.toString();
    }
    circleelements.item(num).classList.toggle("orange");
    if (num <= 8 && num >= 1) {
      num--;
    } else {
      num = 8;
    }
  });

  timer.addEventListener("targetAchieved", (e) => {
    if (text) {
      text.innerHTML = "00.00";
    }
    circleelements.forEach((e) => {
      e.classList.toggle("orange");
    });
  });

  timer.addEventListener("stopped", (e) => {
    if (text) {
      text.innerHTML = "00.00";
    }
    circleelements.forEach((e) => {
      if (e.classList.contains("orange")) {
        e.classList.toggle("orange");
      }
    });
    circleelementsMobile.forEach((e) => {
      if (e.classList.contains("orange")) {
        e.classList.toggle("orange");
      }
    });
  });
}
