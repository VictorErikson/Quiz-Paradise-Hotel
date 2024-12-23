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
  

const questionContainer = document.querySelector("#questionContainer");
const doneBtn = document.querySelector(".done");
const infoContainer = document.querySelector(".info");
const quote = document.querySelector(".quote");
const instructions = document.querySelector(".instructions")

const inTruesCategory = [];
const inFalsesCategory = [];
const correctAnswers = [];


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

    //      <label for="frontend">Frontend</label>
    //     <input type="checkbox" id="frontend" name="role" value="frontend">
    const dishLabel = document.createElement("label")
    const dish = document.createElement("input");
    dish.type = "checkbox";
    // dish.id = foodOption.id;
    dish.name = "options";
    dish.value = foodOption.value;
    dishLabel.innerText = foodOption.label;
    dishLabel.append(dish);


    // const dish = document.createElement("h3");
    // dish.innerText = foodOption.label;

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

    dishContainer.append(trueBtn,  dishLabel, falseBtn);
    questionContainer.append(dishContainer);

    trueBtn.addEventListener("click", (event) => {
        const dishLabel = event.target.closest(".dishContainer").querySelector("label");
        dishLabel.querySelector('input[type="checkbox"]').checked = true;
        // dish.checked = true;
        inTruesCategory.push(foodOption);
        dishContainer.className = "dishContainer trueCategory";
        
        if (inFalsesCategory.includes(foodOption)){
            inFalsesCategory.splice(inFalsesCategory.indexOf(foodOption), 1);
        }
        
        updateDoneBtn();
    })
    
    falseBtn.addEventListener("click", (event) => {
        const dishLabel = event.target.closest(".dishContainer").querySelector("label");
        dishLabel.querySelector('input[type="checkbox"]').checked = false;
        // dish.checked = false;
        inFalsesCategory.push(foodOption);
        dishContainer.className = "dishContainer falseCategory";
        
        if (inTruesCategory.includes(foodOption)){
            inTruesCategory.splice(inTruesCategory.indexOf(foodOption), 1);
        }
        
        updateDoneBtn()
            
    })
        
})



doneBtn.addEventListener("click", () => {
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

    inTruesCategory.forEach(dish => {
        if (dish.value === true) correctAnswers.push(dish);
    })
    inFalsesCategory.forEach(dish => {
        if (dish.value === false) correctAnswers.push(dish);
    })

    const points = correctAnswers.length;
    const timer = document.querySelector(".time");
    questionContainer.classList.add("results");

    const pointTime = document.querySelector(".pointTime");
    instructions.remove();
    doneBtn.remove();
    
    const result = () => {
        
        quote.innerText = '“Hon är så dum att kossorna somnar” - Olinda Borggren';
        questionContainer.innerHTML = ""
        const msg = document.createElement("h2");
        const diegoDiana = document.createElement("img");
        diegoDiana.src = "../assets/images/diegoDiana.png";
        diegoDiana.classList.add("contester")
        const resultsTrueUl = document.createElement("ul");
        const resultsFalseUl = document.createElement("ul");

        pointsPrint = document.createElement("h2");
        pointTime.append(pointsPrint);
        pointsPrint.innerText = `Poäng: ${points}/24`;
        

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
           
            resultLi.prepend(symbol);
            


        })

    
        const restartBtn = document.createElement("a")
        restartBtn.innerText = "Försök igen"
        restartBtn.href = "../index.html"

        const lost = () => {

            if (points >= Math.floor(foodOptions.length * 0.5)){
                msg.innerText = 'Du Diana och Diego är sannerligen en kompatibel trio! Exakt lika "klipska" alla tre.';
                infoContainer.append(restartBtn);
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
            infoContainer.append(restartBtn);
            msg.innerText = 'Du är något klipskare än Diana och Diego, snyggt jobbat...'

        }

        if (points > Math.floor(foodOptions.length * 0.75)){won()}
        else lost()
    }

    if (reason === "timeout"){
        questionContainer.innerHTML = ""
        const timesUp = document.createElement("h2");
        questionContainer.append(timesUp);
        timesUp.innerText = "Oups, du fick slut på tid!"
        timer.classList.add("fail")

        const choices =  document.querySelector(".choices");
        choices.style.display = "none";

        const showChoices = () => {
            choices.style.display = "";
        }
        setTimeout(() => {
            result();
            showChoices();
            }, 3000);
        // setTimeout(result, 4000);
    }else{
        result();
    }
}

if (document.body.classList.contains("dayMode")){
    document.querySelectorAll(".trueBtn").forEach(arrow => arrow.firstChild.src = "../assets/symbols/arrow_back_black.png");
    document.querySelectorAll(".falseBtn").forEach(arrow => arrow.firstChild.src = "../assets/symbols/arrow_forward_black.png");
} else {
    document.querySelectorAll(".trueBtn").forEach(arrow => arrow.firstChild.src = "../assets/symbols/arrow_back_white.png");
    document.querySelectorAll(".falseBtn").forEach(arrow => arrow.firstChild.src = "../assets/symbols/arrow_forward_white.png");
}