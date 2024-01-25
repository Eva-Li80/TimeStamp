import Timer from "easytimer.js";

export function pauseTimerPage(timer: Timer) {
  timer.start({ countdown: true, startValues: { minutes: 5 } });
  const values = document.querySelector(".values");
  if (values) {
    values.innerHTML = timer.getTimeValues().toString();

    timer.addEventListener("secondsUpdated", function (e) {
      values.innerHTML = timer.getTimeValues().toString();
    });

    timer.addEventListener("targetAchieved", function (e) {
      values.innerHTML = "Pause over";
    });
    timer.addEventListener("stopped", function (e) {
      values.innerHTML = "Pause stopped";
    });
  }

  const button = document.getElementById("pause-btn");
  if (button) {
    button.addEventListener("click", () => {
      timer.stop();
    });
  }
}
