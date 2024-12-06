const foodOptions = [
    { id: "Columbuskaka", label: "Columbuskaka", value: false },
    { id: "Säfflé", label: "Säfflé", value: false },
    { id: "Malala", label: "Malala", value: false },
    { id: "Aladåb", label: "Aladåb", value: true },
    { id: "Pavlova", label: "Pavlova", value: true },
    { id: "Skomakarlåda", label: "Skomakarlåda", value: true },
    { id: "Tupé", label: "Tupé", value: false },
    { id: "Hälsporre", label: "Hälsporre", value: false },
    { id: "Pålstek", label: "Pålstek", value: false },
    { id: "Gdansk", label: "Gdansk", value: false },
    { id: "Kalops", label: "Kalops", value: true },
    { id: "Lårkaka", label: "Lårkaka", value: false },
    { id: "Kibbe", label: "Kibbe", value: true },
    { id: "Baba ganush", label: "Baba ganush", value: true },
    { id: "Kåldolmar", label: "Kåldolmar", value: true },
    { id: "Paté", label: "Paté", value: true },
    { id: "Plåttermos", label: "Plåttermos", value: false },
    { id: "Qigong", label: "Qigong", value: false },
    { id: "Pölsa", label: "Pölsa", value: true },
    { id: "Fläskläpp", label: "Fläskläpp", value: false },
    { id: "Chimichurri", label: "Chimichurri", value: true },
    { id: "Leverartär", label: "Leverartär", value: false },
    { id: "Pattaya", label: "Pattaya", value: false },
    { id: "Caracas", label: "Caracas", value: false }
  ];
  


//när klar visa vilka svar som var rätt/fel + byta ut citatet mot


// resultat < 20 → Du är tyvärr inte riktigt lika klipskt som Diana Moseni och Diego Martinez Parra. (bilder deras huvuden)

// resultat = 20 →lika smart

// resultat > → Wow! Du är smartare än Diana Moseni och Diego Martinez Parra, snyggt!

const questionContainer = document.querySelector("#questionContainer");
const doneBtn = document.querySelector(".done");
const infoContainer = document.querySelector(".info");
const quote = document.querySelector(".quote");
const instructions = document.querySelector(".instructions")

const inTruesCategory = [];
const inFalsesCategory = [];
const correctAnswers = [];
const points = correctAnswers.length;


const updateDoneBtn = () => {
    if (
        inTruesCategory.length + inFalsesCategory.length === foodOptions.length
    ){
        doneBtn.classList.remove("inactive");
    }else { doneBtn.classList.add("inactive")}
};


foodOptions.forEach(foodOption => {

    const dishContainer = document.createElement("div");
    dishContainer.classList.add("dishContainer")
    const dish = document.createElement("h3");
    dish.innerText = foodOption.label;

    const trueBtn = document.createElement("button");
    trueBtn.classList.add("trueBtn")
    const falseBtn = document.createElement("button");
    falseBtn.classList.add("falseBtn")
    const arrowBack = document.createElement("img");
    const arrowForward = document.createElement("img");
    arrowBack.src = "../assets/symbols/arrow_back_white.png";
    arrowForward.src = "../assets/symbols/arrow_forward_white.png";
    falseBtn.append(arrowForward);
    trueBtn.append(arrowBack);

    dishContainer.append(trueBtn, dish, falseBtn);
    questionContainer.append(dishContainer);

    trueBtn.addEventListener("click", () => {
        inTruesCategory.push(foodOption);
        dishContainer.className = "dishContainer trueCategory";

        if (inFalsesCategory.includes(foodOption)){
            inFalsesCategory.splice(inFalsesCategory.indexOf(foodOption), 1);
        }

        updateDoneBtn();
    })
    falseBtn.addEventListener("click", () => {
        inFalsesCategory.push(foodOption);
        dishContainer.className = "dishContainer falseCategory";
        
        if (inTruesCategory.includes(foodOption)){
            inTruesCategory.splice(inTruesCategory.indexOf(foodOption), 1);
        }
        
        updateDoneBtn();
        questionContainer.style.flexDirection = ("row");
        questionContainer.style.alignItems = ("flex-start");

    })
        
})



doneBtn.addEventListener("click", () => {
    inTruesCategory.forEach(dish => {
        if (dish.value === true) correctAnswers.push(dish);
    })
    inFalsesCategory.forEach(dish => {
        if (dish.value === false) correctAnswers.push(dish);
    })

    
    finnished();
    clearInterval(interval);
})

let countdownTime = 2 * 60;
const timer = document.querySelector(".time");

const updateTimer = () => {

    const minutes = Math.floor(countdownTime / 60);
    const seconds = countdownTime % 60;

    timer.innerText = `Tid kvar: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

    if (countdownTime <= 0) {
        clearInterval(interval);
        finnished("timeout");
    } 

    countdownTime--;
}

const interval = setInterval(updateTimer, 1000);

updateTimer();


const finnished = (reason) => {
    const timer = document.querySelector(".time");


    const result = () => {
        

        quote.innerText = '“Hon är så dum att kossorna somnar” - Olinda Borggren';
        questionContainer.innerHTML = ""
        const msg = document.createElement("h2");
        const diegoDiana = document.createElement("img");
        diegoDiana.src = "../assets/images/diegoDiana.png";
        diegoDiana.classList.add("contester")
        const resultsTrueUl = document.createElement("ul");
        const resultsFalseUl = document.createElement("ul");
        instructions.remove();
        doneBtn.remove();

        infoContainer.append(msg, diegoDiana);
        questionContainer.append(resultsTrueUl, resultsFalseUl);

        // { id: "Columbuskaka", label: "Columbuskaka", value: false },
        foodOptions.forEach((dish, i) => {

            const resultLi = document.createElement("li");
            const symbol = document.createElement("img");

            symbol.classList.add("symbol");

            resultLi.innerText = `${dish.label}`;
            if (dish.value === false){
                resultLi.classList.add("falseCategory");
                inFalsesCategory.includes(dish) ? symbol.src = "../assets/symbols/true.png" : symbol.src = "../assets/symbols/false.png";
                resultsFalseUl.append(resultLi);
            } else {
                resultLi.classList.add("trueCategory");
                inTruesCategory.includes(dish) ? symbol.src = "../assets/symbols/true.png" : symbol.src = "../assets/symbols/false.png";
                resultsTrueUl.append(resultLi);
            }; 
           

            


        })

    
        const restartBtn = document.createElement("a")
        restartBtn.innerText = "Försök igen"
        restartBtn.href = "../index.html"

        const lost = () => {

            if (points >= (foodOptions.length * 0.5).floor){
                msg.innerText = 'Du Diana och Diego är sannerligen en kompatibel trio! Exakt lika "klipska" alla tre.';
                questionContainer.append(restartBtn);
            } else {
                msg.innerText = "Du är tyvärr inte RIKTIGT lika klipskt som Diana och Diego..."
                const apply = document.createElement("a");
                apply.innerText = "Ansök nu!";
                apply.href = "https://shortaudition.com/paradise_hotel_2025";
                apply.classList.add("apply");
                infoContainer.append(apply);
            }
        }
        const won = () => {
            questionContainer.append(restartBtn);
            msg.innerText = 'Du är något klipskare än Diana och Diego, snyggt jobbat...'

        }

        if (points >= (foodOptions.length * 0.75).floor){won()}
        else lost()
    }

    if (reason === "timeout"){
        questionCount.remove();
        questionContainer.innerHTML = ""
        const timesUp = document.createElement("h2");
        questionContainer.append(timesUp);
        timesUp.innerText = "Oups, du fick slut på tid!"
        timer.classList.add("fail")

        setTimeout(result, 2000);
    }else{
        result();
    }
}