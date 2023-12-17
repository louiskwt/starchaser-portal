document.addEventListener("DOMContentLoaded", () => {
  const navbarBtn = document.getElementById("nav-btn");
  const navbar = document.getElementById("navbarNav");

  navbarBtn.addEventListener("click", () => {
    navbar.classList.remove("collapse");
  });
});
