const setting = document.querySelector(".setting");
const settingsPage = document.querySelector(".settings-page");
const settingsButtons = document.querySelectorAll(".settings-page li");

setting.addEventListener("click", () => {
    settingsPage.classList.toggle("open");
    setting.classList.toggle("rotate");
    settingsButtons.forEach(link =>{
        link.classList.toggle("fade");
    });
});