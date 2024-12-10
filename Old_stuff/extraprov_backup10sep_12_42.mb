const questions = [
    { question: "Isbjörnar har svart hud", value: "Sant" },
    { question: "På 1300-talet hade människan 5 fingrar på varje hand", value: "Sant" },
    { question: "Solen kretsar kring jorden", value: "Falskt" },
    { question: "Människan och giraffen har lika många halskotor", value: "Sant" },
    { question: "Brott mot jantelagen kan ge 15 års fängelse", value: "Falskt" },
    { question: "1kg järn väger mer än 1kg bomull", value: "Falskt" },
    { question: "Det finns pyramider i Mexico", value: "Sant" },
    { question: "Eftersom jorden roterar står flygplan stilla i luften", value: "Falskt" },
    { question: "Om en bil kör 100km/h tar den sig 10 mil på en timme", value: "Sant" },
    { question: "Pelikaner finns på riktigt", value: "Sant" },
    { question: "Man får håriga handflator av onani", value: "Falskt" },
    { question: "Brasilien har vunnit guld i fotbolls-EM 5 gånger", value: "Falskt" },
    { question: "En donut är en engelsk präst", value: "Falskt" },
    { question: "Sverige har aldrig haft en kvinnlig statsminister", value: "Falskt" },
    { question: "Det är blod i blodpudding", value: "Sant" },
    { question: "Dinosaurierna dog för att de missade Noaks Ark", value: "Falskt" },
    { question: "Robinson Crusoe upptäckte Amerika", value: "Falskt" },
    { question: "Man mäter pH-värde med lackmustest", value: "Sant" },
    { question: "Gräver man rakt ner i Sverige kommer man alltid till Kina", value: "Falskt" },
    { question: "Huden är kroppens största organ", value: "Sant" },
    { question: "Europa är ett land", value: "Falskt" }
];


const questionsContainer = document.querySelector("#questionContainer");
const doneBtn = document.querySelector(".done");
const infoContainer = document.querySelector(".info");
const quote = document.querySelector(".quote");
const instructions = document.querySelector(".instructions")


const correctAnswers = [];

// const checkboxes = () => {
    // const allUnCheckedBoxes = document.querySelectorAll('[type="checkbox"]:not(:checked)');
    
    // const checkboxes = () => {

    //     const allCheckedBoxes = document.querySelectorAll('[type="checkbox"]:checked');

    //     if (allCheckedBoxes.length >= 9){
    //         allCheckedBoxes.forEach(box => {
    //             box.parentElement.parentElement.style.pointerEvents = "none";
    //         });
    //     } else {
    //         allCheckedBoxes.forEach(box => {
    //             box.parentElement.parentElement.style.pointerEvents = "";
    //         });
    //     }
    // }
    // console.log(allCheckedBoxes, allUnCheckedBoxes);

    // inactivateCheckboxes(allCheckedBoxes, 9);
    // inactivateCheckboxes(allUnCheckedBoxes, 12);
// }

//Nu gjorde jag denna nya sida/funktion möjlig att exportera
export const printContent = (questionsArr, label, inputType) => {
    
    questionsArr.forEach(question => {

        const questionContainer = document.createElement("div");
        questionContainer.classList.add("questionContainer");


        //Jag vet att jag borde använda vanlig if-statement men lärde mig just denna version och vill nöta in den lite
        const input = (
            inputType === "checkbox" && (() => {
                const printQuestion = document.createElement("input");
                printQuestion.type = "checkbox";
                printQuestion.name = "options";
                printQuestion.value = question.value;
                printQuestion.addEventListener("change", (event) => {
                    event.target.checked ? event.target.parentElement.classList.add("checked") : event.target.parentElement.classList.remove("checked");
                    // checkboxes();
                    })
                return printQuestion;
            })()
        );
        
        
        label === "yes" && (() => {
            const label = document.createElement("label");
            label.innerText = question.question;
            label.append(input);
            questionContainer.append(label);
        })();

        questionsContainer.append(questionContainer);
            
    })
}

printContent(questions, "yes", "checkbox");


doneBtn.addEventListener("click", () => {
    finnished("", questions);
    clearInterval(interval);
})




export const updateTimer = (howLongTime) => {
    
    const timer = document.querySelector(".time");
    const minutes = Math.floor(howLongTime / 60);
    const seconds = howLongTime % 60;

    timer.innerText = `Tid kvar: ${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

    if (howLongTime <= 0) {
        clearInterval(interval);
        finnished("timeout", questions);
    } 

    return howLongTime -1;
}


let countdownTime = 2 * 60;
const interval = setInterval(() => {
    countdownTime = updateTimer(countdownTime);
}, 1000);

updateTimer(countdownTime);




const finnished = (reason, questionsArr) => {

    document.querySelectorAll('[type="checkbox"]')
    correctAnswers.push(dish);


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
