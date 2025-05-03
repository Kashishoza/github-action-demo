// script.js

document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const htmlElement = document.documentElement;

  // Check for saved user preference in localStorage
  if (localStorage.getItem("theme") === "dark") {
    htmlElement.classList.add("dark");
    console.log("Dark mode enabled on load");
  }

  darkModeToggle.addEventListener("click", () => {
    if (htmlElement.classList.contains("dark")) {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); // Save preference
      console.log("Switched to light mode");
    } else {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Save preference
      console.log("Switched to dark mode");
    }
  });
});
