import Timer from "easytimer.js";

export function CircleTimer(timer: Timer) {
  const circle = document.getElementById(
    "circle2"
  ) as unknown as SVGCircleElement;
  const button = document.getElementById("button") as HTMLElement;

  const length = circle.getTotalLength();
  console.log(length);

  circle.style.strokeDasharray = length.toString();
  circle.style.strokeDashoffset = length.toString();

  let count = timer.getTimeValues().minutes;

  timer.addEventListener("minutesUpdated", (e) => {
    console.log((length - length / count).toString());
    const times = length / count;
    circle.style.strokeDashoffset = (length - times).toString();

    count -= 1;
  });
}
