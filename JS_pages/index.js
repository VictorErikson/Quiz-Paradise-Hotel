const modeBtn = document.querySelector(".modeBtn");
const modeSwitch = document.querySelector("#modeSwitch");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const soundSymbol = document.querySelector(".soundSymbol");

const setMode = () => {
    const nightOrDayMode = localStorage.getItem("mode");
    if (nightOrDayMode){
        document.body.classList.toggle("dayMode", nightOrDayMode === "dayMode")

        if (nightOrDayMode === "dayMode"){
            sun.src = "../assets/symbols/sunny_yellow.png" 
            moon.src = "../assets/symbols/mode_night_grey.png"


            soundSymbol.src = "../assets/symbols/volume_up_black.svg"
        }else {
            sun.src = "../assets/symbols/sunny_grey.png" 
            moon.src = "../assets/symbols/mode_night_yellow.png"
            soundSymbol.src = "../assets/symbols/volume_up_white.svg"
        };
    }
    
}

const setVolume = () => {
    const volume = localStorage.getItem("volume");
}

const modeSwitching = () => {
    localStorage.setItem("mode", document.body.classList.toggle("dayMode") ? "dayMode" : "nightMode");
    setMode();
}

modeSwitch.addEventListener("click", modeSwitching);
// soundSymbol.addEventListener("click", toggleSound);

setMode();


//Ljud
// const muted = "volume_off";
// const on = "volume_up";
// const toggleSound = () => {
//     soundSymbol.classList.toggle("off");

//     if (soundSymbol.classList("off")){
//         soundSymbol.src = ´../assets/symbols/volume_up_black.svg´
//     }
// }

