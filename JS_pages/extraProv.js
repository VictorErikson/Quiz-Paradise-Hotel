const questions = [
    { question: "Isbjörnar har svart hud", value: true },
    { question: "På 1300-talet hade människan 5 fingrar på varje hand", value: true },
    { question: "Solen kretsar kring jorden", value: false },
    { question: "Människan och giraffen har lika många halskotor", value: true },
    { question: "Brott mot jantelagen kan ge 15 års fängelse", value: false },
    { question: "1kg järn väger mer än 1kg bomull", value: false },
    { question: "Det finns pyramider i Mexico", value: true },
    { question: "Eftersom jorden roterar står flygplan stilla i luften", value: false },
    { question: "Om en bil kör 100km/h tar den sig 10 mil på en timme", value: true },
    { question: "Pelikaner finns på riktigt", value: true },
    { question: "Man får håriga handflator av onani", value: false },
    { question: "Brasilien har vunnit guld i fotbolls-EM 5 gånger", value: false },
    { question: "En donut är en engelsk präst", value: false },
    { question: "Sverige har aldrig haft en kvinnlig statsminister", value: false },
    { question: "Det är blod i blodpudding", value: true },
    { question: "Dinosaurierna dog för att de missade Noaks Ark", value: false },
    { question: "Robinson Crusoe upptäckte Amerika", value: false },
    { question: "Man mäter pH-värde med lackmustest", value: true },
    { question: "Gräver man rakt ner i Sverige kommer man alltid till Kina", value: false },
    { question: "Huden är kroppens största organ", value: true },
    { question: "Europa är ett land", value: false }
];


const questionsContainer = document.querySelector("#questionContainer");
const doneBtn = document.querySelector(".done");
const infoContainer = document.querySelector(".info");
const quote = document.querySelector(".quote");
const instructions = document.querySelector(".instructions")
const choices = document.querySelector(".choices");


const correctAnswers = [];
const checked = [];
let unChecked = [];
questions.forEach(question => unChecked.push(question))


//Nu gjorde jag denna nya sida/funktion möjlig att exportera
export const printContent = (questionsArr, label, inputType) => {

    
    questionsArr.forEach(question => {

        const questionContainer = document.createElement("div");
        questionContainer.classList.add("questionContainer");


        //Jag vet att jag borde använda vanlig if-statement här men lärde mig just denna version och vill nöta in den lite
        const input = (
            inputType === "checkbox" && (() => {
                const printQuestion = document.createElement("input");
                printQuestion.type = "checkbox";
                printQuestion.name = "options";
                printQuestion.value = question.value;

                printQuestion.addEventListener("change", (event) => {
                    event.target.checked ? event.target.parentElement.classList.add("checked") : event.target.parentElement.classList.remove("checked");

                    if (event.target.checked){
                        checked.push(question)
                        unChecked.includes(question) && unChecked.splice(unChecked.indexOf(question), 1);
                    } else {
                        unChecked.push(question)
                        checked.includes(question) && checked.splice(checked.indexOf(question), 1);
                    }
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
    

    
    checked.forEach(Obj => {
        Obj.value === true && correctAnswers.push(Obj);
    })
    unChecked.forEach(Obj => {
        Obj.value === false && correctAnswers.push(Obj);
    })

   
    const totPoints = questionsArr.length;
    const points = correctAnswers.length;
   
    const timer = document.querySelector(".time");

    questionContainer.classList.add("results");
    const pointTime = document.querySelector(".pointTime");
    
    instructions.remove();
    doneBtn.remove();
    
    const result = () => {

        choices.style.display = "";
        quote.innerText = '“Det finns väl två olika Afrika?” - Josefine Caarle';
        questionContainer.innerHTML = ""
        const msg = document.createElement("h2");
        const resultsTrueUl = document.createElement("ul");
        const resultsFalseUl = document.createElement("ul");

        const pointsPrint = document.createElement("h2");
        pointTime.append(pointsPrint);
        pointsPrint.innerText = `Poäng: ${points}/${totPoints}`;
        

        infoContainer.append(msg);
        questionContainer.append(resultsTrueUl, resultsFalseUl);

        // { id: "Columbuskaka", label: "Columbuskaka", value: false },
        questionsArr.forEach((question, i) => {

            const resultLi = document.createElement("li");
            const symbol = document.createElement("img");
            symbol.classList.add("symbol");
            resultLi.innerText = `${question.question}`;

            if (question.value === false){
                resultLi.classList.add("falseCategory");
                correctAnswers.includes(question) ? symbol.src = "../assets/symbols/true.png" : symbol.src = "../assets/symbols/false.png";
                resultsFalseUl.append(resultLi);
            } else {
                resultLi.classList.add("trueCategory");
                correctAnswers.includes(question) ? symbol.src = "../assets/symbols/true.png" : symbol.src = "../assets/symbols/false.png";
                resultsTrueUl.append(resultLi);
            }; 
           
            resultLi.prepend(symbol);
            


        })

    
        const restartBtn = document.createElement("a")
        restartBtn.innerText = "Försök igen"
        restartBtn.href = "../index.html"

        const lost = () => {

            if (points >= Math.floor(questions.length * 0.5)){
                msg.innerText = 'Grattis! Du har officiellt uppnått Paradise Hotel-nivå. Ett perfekt balans mellan charm och tja… grundläggande kunskap.';
                infoContainer.append(restartBtn);
            } else {
                msg.innerText = "Oj... Det här gick kanske inte helt enligt plan, men oroa dig inte – du är nu en stark kandidat för nästa säsong av Paradise Hotel! Hjärnkapacitet är överskattat när du har karisma."
                const apply = document.createElement("a");
                apply.innerText = "Ansök nu!";
                apply.href = "https://shortaudition.com/paradise_hotel_2025";
                apply.classList.add("apply");
                infoContainer.append(apply);
            }
        }
        const won = () => {
            infoContainer.append(restartBtn);
            msg.innerText = 'Wow, imponerande! Du har bevisat att du är smartare än en Paradise Hotel-deltagare. Kanske är du inte riktigt redo för reality-TV, men vem vet – Nobelpriset kanske väntar istället?'

        }

        if (points > Math.floor(questions.length * 0.75)){won()}
        else lost()
    }

    if (reason === "timeout"){
        // document.querySelectorAll('[type="checkbox"]').forEach(box => {
        //     ((box.checked && box.value === "true") || (!box.checked && box.value === "false") ) && correctAnswers.push(box.parentElement.parentElement);
        // })

        questionContainer.innerHTML = ""
        const timesUp = document.createElement("h2");
        questionContainer.append(timesUp);
        timesUp.innerText = "Oups, du fick slut på tid!"
        timer.classList.add("fail")

        setTimeout(() => {
            result();
            }, 3000);
        // setTimeout(result, 4000);
    }else{
        result();
    }
}


