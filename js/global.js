// const BASE =
//   window.location.hostname === "localhost"
//     ? "/"
//     : "/portfolio-project/";



// document.addEventListener("DOMContentLoaded", () => {
//     const themeToggleBtn = document.getElementById("theme-toggle-btn");
//     const themeIconImg = document.getElementById("theme-icon-img");
//     const body = document.body;

//     const iconDarkTheme = `${BASE}assets/logo/moon.svg`;
//     const iconLightTheme = `${BASE}assets/logo/sun.svg`;

//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme === "light") {
//         body.classList.add("light-mode");
//         themeIconImg.src = iconLightTheme;
//     } else {
//         themeIconImg.src = iconDarkTheme;
//     }

//     themeToggleBtn.addEventListener("click", () => {
//         body.classList.toggle("light-mode");
        
//         if (body.classList.contains("light-mode")) {
//             themeIconImg.src = iconLightTheme;
//             localStorage.setItem("theme", "light");
//         } else {
//             themeIconImg.src = iconDarkTheme;
//             localStorage.setItem("theme", "dark");
//         }
//     });
// });