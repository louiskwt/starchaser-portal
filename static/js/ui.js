document.addEventListener("DOMContentLoaded", () => {
  const navbarBtn = document.getElementById("nav-btn");
  const navbar = document.getElementById("navbarNav");

  navbarBtn.addEventListener("click", () => {
    navbar.classList.toggle("collapse");
  });

  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    if (link.href === window.location.href) link.classList.add("active");
  });
});
