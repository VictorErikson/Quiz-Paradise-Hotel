document.addEventListener("DOMContentLoaded", () => {

    const isRootPage = location.pathname === "/" || location.pathname.endsWith("index.html") || location.pathname === "/Quiz-Paradise-Hotel/";
    const assetBase = isRootPage ? "assets" : "../assets";

    //Det blev allmän kod till alla sidor i index, borde gjort en egen JS-fil men nu blev det såhär...
    const modeSwitch = document.querySelector("#modeSwitch");
    const sun = document.querySelector(".sun");
    const moon = document.querySelector(".moon");
    const soundSymbol = document.querySelector(".soundSymbol");
    const soundBtn = document.querySelector(".switchMusic");
    const playSong = localStorage.getItem("playSong");
    const audioElement = document.querySelector("#pageSong");
    const volume = localStorage.getItem("volume");



    const updateBtns = () => {

        const mode = localStorage.getItem("mode");
        const falseBtn = document.querySelectorAll(".falseBtn");
        const trueBtn = document.querySelectorAll(".trueBtn");

        if (falseBtn && trueBtn){
            if (mode === "dayMode"){
                trueBtn.forEach(arrow => arrow.firstChild.src = `${assetBase}/symbols/arrow_back_black.png`);
                falseBtn.forEach(arrow => arrow.firstChild.src = `${assetBase}/symbols/arrow_forward_black.png`);
            } else {
                trueBtn.forEach(arrow => arrow.firstChild.src = `${assetBase}/symbols/arrow_back_white.png`);
                falseBtn.forEach(arrow => arrow.firstChild.src = `${assetBase}/symbols/arrow_forward_white.png`);
            }
        }
        
    }


    const setMode = () => {
        const nightOrDayMode = localStorage.getItem("mode");
        const volume = localStorage.getItem("volume");

        document.body.classList.toggle("dayMode", nightOrDayMode === "dayMode");

        if (nightOrDayMode === "dayMode"){
            sun.src = `${assetBase}/symbols/sunny_yellow.png` 
            moon.src = `${assetBase}/symbols/mode_night_grey.png`

            soundSymbol && setVolume();

        
        }else {
            sun.src = `${assetBase}/symbols/sunny_grey.png` 
            moon.src = `${assetBase}/symbols/mode_night_yellow.png`

            soundSymbol && setVolume();
            
        };
        updateBtns();
    }

    const setVolume = () => {
        const volume = localStorage.getItem("volume");
        const nightOrDayMode = localStorage.getItem("mode");
        let color;

        if (nightOrDayMode){
            nightOrDayMode === "dayMode" ? color = "black" : color = "white";
        } else{
            color = "white";
        }

        if (volume) {
            volume === "on" ? soundSymbol.src = `${assetBase}/symbols/volume_up_${color}.svg` : soundSymbol.src = `${assetBase}/symbols/volume_off_${color}.svg`
        } else {
            soundSymbol.src = `${assetBase}/symbols/volume_off_${color}.svg`
        }
    }

    const startSong = () => {
        const volume = localStorage.getItem("volume") || "off";
        if (audioElement) {
            audioElement.volume = 0.1;
            audioElement.loop = true;

            if (volume === "on") {
                audioElement.play().catch(error => {
                    console.log("Autoplay blocked:", error);
                    localStorage.setItem("volume", "off"); 
                    setVolume();
                });
            }
        }
    };

    soundSymbol && startSong();
    soundSymbol && setVolume();

    const volumeSwitching = () => {
        const volume = localStorage.getItem("volume");
        if (volume){
            if (volume === "on"){
                audioElement.pause();
                localStorage.setItem("volume", "off");
            } else {
                audioElement.play();
                localStorage.setItem("volume", "on");
            }

        } else {
            audioElement.play();
            localStorage.setItem("volume", "on");
        }
        setVolume();
    }

   


    const modeSwitching = () => {
        if (document.body.classList.contains("dayMode")) {
            document.body.classList.remove("dayMode");
            localStorage.setItem("mode", "nightMode");
        } else {
            document.body.classList.add("dayMode");
            localStorage.setItem("mode", "dayMode");
        }
        setMode();
    }
    soundSymbol && soundBtn.addEventListener("click", volumeSwitching);
    

    modeSwitch.addEventListener("click", () => {
        modeSwitching();
    });

    setMode();


    const startMusic = () => {
        const volume = localStorage.getItem("volume");
        volume === "on" && localStorage.setItem("playSong", "true");

    }


   const startBtns = document.querySelectorAll(".startpageBtns a");

   if(startBtns){
        startBtns.forEach(btn => {

            btn.href = `html_Pages/${btn.id}.html`;

            btn.addEventListener('click', () => {
                startMusic();
            });
        })
    }

})




