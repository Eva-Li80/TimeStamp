export function NavBar() {
  const menu = document.getElementById("menu") as HTMLElement;
  const menuIcon = document.querySelector(".bx-menu") as HTMLElement;
  const menyOpenIcon = document.getElementById("menu-open-icon") as HTMLElement;
  const menyCloseIcon = document.getElementById(
    "menu-close-icon"
  ) as HTMLElement;
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
