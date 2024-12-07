const modeBtn = document.querySelector(".modeBtn");
const modeSwitch = document.querySelector("#modeSwitch");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

const setMode = () => {
    const nightOrDayMode = localStorage.getItem("mode");
    if (nightOrDayMode){
        document.body.classList.toggle("dayMode", nightOrDayMode === "dayMode")

        if (nightOrDayMode === "dayMode"){
            sun.src = "../assets/symbols/sunny_yellow.png" 
            moon.src = "../assets/symbols/mode_night_grey.png"
        }else {
            sun.src = "../assets/symbols/sunny_grey.png" 
            moon.src = "../assets/symbols/mode_night_yellow.png"
        };
    }



    
}

const modeSwitching = () => {
    localStorage.setItem("mode", document.body.classList.toggle("dayMode") ? "dayMode" : "nightMode");
    setMode();
}

modeSwitch.addEventListener("click", modeSwitching);

setMode();