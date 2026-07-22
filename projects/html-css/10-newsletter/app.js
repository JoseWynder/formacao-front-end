// Select elements
const root = document.documentElement;
const btn = document.getElementById("btn-theme");
const year = document.getElementById("year");

// Filling in the current year
year.textContent = new Date().getFullYear();

// Light / dark theme
btn.addEventListener("click", () => {
    const dark = root.getAttribute("data-theme") === 'dark';

    if (dark) {
        root.removeAttribute("data-theme");
    } else {
        root.setAttribute("data-theme", "dark");
    }
});