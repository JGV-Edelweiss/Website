// JavaScript für das mobile Menü
const navLinks = document.querySelector(".nav-links");
const navToggle = document.querySelector("header nav");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
