const menuIcon = document.getElementById("menu-icon");
const hamburgerMenu = document.getElementById("hamburger-menu");

if (menuIcon && hamburgerMenu) {
  menuIcon.addEventListener("click", () => {
    if (hamburgerMenu.classList.contains("hidden")) {
      hamburgerMenu.classList.remove("hidden");
    } else {
      hamburgerMenu.classList.add("hidden");
    }
  });
}
