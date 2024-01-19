import Timer from "easytimer.js";

export function pauseTimerPage() {
  let timer = new Timer();
  timer.start({ countdown: true, startValues: { minutes: 5 } });
  const appRoot = document.getElementById("app");

  const pauseDiv = document.createElement("div");
  pauseDiv.className = "pause-page";

  const icon = document.createElement("i");
  icon.classList.add("bx", "bx-pause");
  const h1 = document.createElement("h1");
  h1.innerHTML = "PAUSE AND BREATHE";
  const countDownDiv = document.createElement("div");
  countDownDiv.className = "countdown";
  const values = document.createElement("div");
  values.className = "values";
  values.innerHTML = timer.getTimeValues().toString();

  timer.addEventListener("secondsUpdated", function (e) {
    values.innerHTML = timer.getTimeValues().toString();
  });

  timer.addEventListener("targetAchieved", function (e) {
    values.innerHTML = "Pause over";
  });

  const button = document.createElement("button");
  button.innerHTML = "NO PAUSE, GO NOW";
  button.addEventListener("click", () => {
    timer.stop();
  });

  countDownDiv.appendChild(values);
  pauseDiv.appendChild(icon);
  pauseDiv.appendChild(h1);
  pauseDiv.appendChild(countDownDiv);
  pauseDiv.appendChild(button);
  appRoot?.appendChild(pauseDiv);
}
