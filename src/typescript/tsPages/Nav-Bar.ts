export function NavBar() {
  const menu = document.getElementById("menu") as HTMLElement;
  const menuIcon = document.querySelector(".bx-menu") as HTMLElement;
  const menyOpenIcon = document.getElementById("menu-open-icon") as HTMLElement;
  const menyCloseIcon = document.getElementById(
    "menu-close-icon"
  ) as HTMLElement;
  const visualTimer = document.getElementById(
    "menu-VISUAL_TIMER"
  ) as HTMLElement;
  const analogTimer = document.getElementById(
    "menu-ANALOG_TIMER"
  ) as HTMLElement;
  const digitalTimer = document.getElementById(
    "menu-DIGITAL_TIMER"
  ) as HTMLElement;
  const textTimer = document.getElementById("menu-TEXT_TIMER") as HTMLElement;
  const circleTimer = document.getElementById(
    "menu-CIRCLES_TIMER"
  ) as HTMLElement;
  const startTimer = document.getElementById(
    "menu-start-timer1"
  ) as HTMLElement;
  visualTimer.addEventListener("click", toggleMenu);
  analogTimer.addEventListener("click", toggleMenu);
  digitalTimer.addEventListener("click", toggleMenu);
  textTimer.addEventListener("click", toggleMenu);
  circleTimer.addEventListener("click", toggleMenu);
  startTimer.addEventListener("click", toggleMenu);

  //ikonen på startsidan
  menuIcon.addEventListener("click", toggleMenu);
  //ikon mobilvy öppna menyn
  menyOpenIcon.addEventListener("click", toggleMenu);
  menyCloseIcon.addEventListener("click", toggleMenu);

  // Funktion för att visa/dölja menyn
  function toggleMenu() {
    menu.style.display =
      menu.style.display === "none" || menu.style.display === ""
        ? "flex"
        : "none";
  }
}
