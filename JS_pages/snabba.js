const questions = [
    {
        category: "HISTORIA",
        question: "När dog Jesus?",
        quote: "“Vasaskeppets första seglats… Det kan ju ha varit 2005. Det var ju ett tag sedan.” - Adrian Montin",
        options: [
            { id: "36", label: "År 36 e.kr", value: false },
            { id: "33", label: "År 33 e.Kr.", value: true },
            { id: "0", label: "År 0", value: false },
            { id: "5", label: "År 5 f. Kr", value: false }
        ],
        name: "jesus"
    },
    {
        category: "SAMHÄLLSKUNSKAP",
        question: "Hur många landskap finns det i Sverige?",
        quote: "“Vad fan är ett landskap?” - Saga Scott",
        options: [
            { id: "22", label: "22", value: false },
            { id: "25", label: "25", value: true },
            { id: "32", label: "32", value: false },
            { id: "15", label: "15", value: false }
        ],
        name: "landskap"
    },
    {
        category: "GEOGRAFI",
        question: "Var ligger Markusplatsen?",
        quote: "“Jag är jude. Eller jag vill vara jude. Eller jag har varit mycket hemma hos en kompis som är jude” - Oliver Strige",
        options: [
            { id: "copenhagen", label: "Köpenhamn, Danmark", value: false },
            { id: "berlin", label: "Berlin, Tyskland", value: false },
            { id: "london", label: "London, Storbritanien", value: false },
            { id: "venedigMarkus", label: "Venedig, Italien", value: true }
        ],
        name: "markus"
    },
    {
        category: "HISTORIA",
        question: "När blev Gustav Vasa kung?",
        quote: "“Jag har lärt mig att spanjorerna inte utrotade enhörningarna” - Paulina “Paow” Danielsson",
        options: [
            { id: "1631", label: "1631", value: false },
            { id: "1571", label: "1571", value: false },
            { id: "1598", label: "1598", value: false },
            { id: "1523", label: "1523", value: true }
        ],
        name: "vasa"
    },
    {
        category: "SAMHÄLLSKUNSKAP",
        question: "Stefan Löfven blev partiordförande för Centerpartiet 2014?",
        quote: "“Jag tycker att bevisen för att sjöjungfrur finns är solklara” - Saga Scott",
        options: [
            { id: "stefanSant", label: "Sant", value: false },
            { id: "stefanFalskt", label: "Falskt", value: true }
        ],
        name: "lofven"
    },
    {
        category: "HISTORIA",
        question: "När skedde slaget vid Hastings?",
        quote: "“Det skulle vara coolt om en fågel skulle para sig med en zebra. Fast förmodligen skulle zebrans snopp döda fågeln” - Frida Westman",
        options: [
            { id: "1902", label: "År 1902", value: false },
            { id: "1789", label: "År 1789", value: false },
            { id: "1066", label: "År 1066", value: true },
            { id: "1437", label: "År 1437", value: false }
        ],
        name: "hastings"
    },
    {
        category: "HISTORIA",
        question: "När skiljdes Svenska kyrkan från staten?",
        quote: "“En ko har väl tre-fyra hjärtan?” - Smail Alihodzic",
        options: [
            { id: "1874", label: "År 1874", value: false },
            { id: "1791", label: "År 1791", value: false },
            { id: "2000", label: "År 2000", value: true },
            { id: "1913", label: "År 1913", value: false }
        ],
        name: "kyrkan"
    },
    {
        category: "GEOGRAFI",
        question: "Var ligger Akropolis?",
        quote: "“Det finns väl två olika Afrika?” - Josefine Caarle",
        options: [
            { id: "rom", label: "Rom, Italien", value: false },
            { id: "aten", label: "Aten, Grekland", value: true },
            { id: "venedig", label: "Venedig, Italien", value: false },
            { id: "paros", label: "Paros, Grekland", value: false }
        ],
        name: "akropolis"
    },
    {
        category: "SAMHÄLLSKUNSKAP",
        question: "Sverige är en republik?",
        quote: "“Antiklimax, det är väl sån här insektsutrotning” - Adam Lökholm",
        options: [
            { id: "republikTrue", label: "Sant", value: false },
            { id: "republicFalse", label: "Falskt", value: true }
        ],
        name: "republik"
    },
    {
        category: "HISTORIA",
        question: "När blev Carl XVI Gustaf kung?",
        quote: "“Första mannen på månen. Var det typ på 1500-talet eller ännu längre tillbaka?” - Josefine Caarle",
        options: [
            { id: "1971", label: "1971", value: false },
            { id: "1980", label: "1980", value: false },
            { id: "1973", label: "1973", value: true },
            { id: "1948", label: "1948", value: false }
        ],
        name: "kungen"
    }
];



const nextBtn = document.querySelector(".next")
const questionContainer = document.querySelector("#questionContainer");
const quote = document.querySelector(".quote");
const points = document.querySelector(".points");
const questionCount = document.querySelector(".questionCount")
let currentQuestionIndex = 0;
const results = [];
let score = 0;
let questionNmbr = 1;
let warningTriggered = false;

// klocka

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

    
    const result = () => {
        questionCount.remove();
        quote.innerText = '“För två år sedan kände att jag ville göra något annorlunda. Så då tog jag bort min förhud. Nu ligger den i min pappas frys” - Alexander Wigren';
        questionContainer.innerHTML = ""
        const msg = document.createElement("h2");
        const resultsUl = document.createElement("ul");
        questionContainer.append(resultsUl, msg);

        results.forEach(question => {
            const resultLi = document.createElement("li");
            resultLi.innerText = `${question.question}: ${question.answer.answer}`
            question.answer.value === "true" ? resultLi.classList.add("correct") :resultLi.classList.add("false");
            resultsUl.append(resultLi);
        })

        const restartBtn = document.createElement("a")
        restartBtn.innerText = "Försök igen"
        restartBtn.href = "../index.html"

        const lost = () => {

            if (score > 5){
                msg.innerText = "Du är en person som gärna klär dig minimalt, ofta tänker syndiga tankar och är hetast på stadens nattklubb. Du har faktist alla attribut och kunskaper det krävs för att medverka i en klassisk Paradise Hotel säsong."
                questionContainer.append(restartBtn);
            } else {
                msg.innerText = "På med småbyxorna, olja in torson och tänk riktigt syndiga tankar orimligt högt. Du har faktiskt allt som krävs för att bli en ”Paradise”-deltagare. Stort grattis!"
                const apply = document.createElement("a");
                apply.innerText = "Ansök nu!";
                apply.href = "https://shortaudition.com/paradise_hotel_2025";
                apply.classList.add("apply");
                questionContainer.append(apply);
            }
        }
        const won = () => {
            questionContainer.append(restartBtn);
            msg.innerText = "Vad är nu detta? Du är helt enkelt för klipsk för att bli en Paradise Hotel-deltagare."

        }

        if (score > 7){won()}
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

const handleChoice = (answer, questionObj) => {
    currentQuestionIndex++;
    const question =  questionObj.question;
    results.push({question, answer});
    score = results.filter(object => object.answer.value === "true").length;
    points.innerText = `Poäng: ${score}/10`
    const misstakes = results.filter(object => object.answer.value === "false").length;

    
    const updateQuestion = () => {
        if (currentQuestionIndex < questions.length){
            setTimeout(() => {
                quote.innerText = questions[currentQuestionIndex].quote;
                questionNmbr ++;
                questionCount.innerText = `Fråga ${questionNmbr} - ${questions[currentQuestionIndex].category}`
                displayQuestion(currentQuestionIndex);}, 1000);
                
                
            }else {
                setTimeout(finnished, 1000);
            }
        }
        
    if (misstakes === 5 && !warningTriggered){
        warningTriggered = true;

        const warning = document.createElement("h2");
        warning.innerText = "Dags att boka biljett till Paradise Hotel?";
        warning.style.color = "#8f2207";
        warning.style.fontSize = "24px";
        questionContainer.insertBefore(warning, questionContainer.firstChild)

        questionContainer.style.pointerEvents = "none";
        setTimeout(() => {questionContainer.style.pointerEvents = "auto";}, 2000)

        setTimeout(() => {
            questionContainer.removeChild(questionContainer.firstChild);

            if (currentQuestionIndex < questions.length){
                    quote.innerText = questions[currentQuestionIndex ].quote;
                    questionNmbr ++;
                    questionCount.innerText = `Fråga ${questionNmbr}`
                    displayQuestion(currentQuestionIndex);    
                }else {
                    setTimeout(finnished, 1000);
                }
            }, 2000);


        } else {
            updateQuestion();
        }
}



const displayQuestion = (index) => {
    questionContainer.innerHTML = "";
    const questionObj = questions[index];
    const question = document.createElement("h3");
    question.id = question;
    question.innerText = questionObj.question;
    questionContainer.append(question);
    
    questionObj.options.forEach(option => {
        const input = document.createElement("input");

        input.addEventListener("change", (event) => {
            const selectedOption = event.target;
            const answer = {
                id: selectedOption.id,
                value: selectedOption.value,
                answer: selectedOption.nextElementSibling.innerText
            };
            const grandparent = event.target.parentElement?.parentElement;
            grandparent.style.pointerEvents = "none";
            setTimeout(() => {grandparent.style.pointerEvents = "auto";}, 1000)
            
            
            const sibling = event.target.nextElementSibling;
            if (answer.value === "true"){
                sibling.classList.add("correct");

            }else sibling.classList.add("incorrect");
            

            handleChoice(answer, questions[currentQuestionIndex]);
            
        
        });

        input.type = "radio";
        input.id = option.id;
        input.name = questionObj.name;
        input.value = option.value;
        questionContainer.append(input);
        const label = document.createElement("label");
        label.htmlFor = option.id;
        label.innerText = option.label;
        questionContainer.append(label);


    } )
} 

displayQuestion(currentQuestionIndex);

