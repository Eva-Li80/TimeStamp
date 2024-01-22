export function startPage() {
  const appRoot = document.getElementById("app");

  const startDivPage = document.createElement("div");
  startDivPage.className = "start-page";

  //Add logotype
  const logotype = document.createElement("i");
  logotype.classList.add("bx", "bx-menu", "bx-rotate-90");
  logotype.addEventListener("click", () => {
    //go to start timer page
  });

  const h1 = document.createElement("h1");
  h1.innerHTML = "INTERVAL";
  const p = document.createElement("p");
  p.innerHTML = "For all your timing needs.";

  startDivPage.appendChild(logotype);
  startDivPage.appendChild(h1);
  startDivPage.appendChild(p);

  appRoot?.appendChild(startDivPage);
}
