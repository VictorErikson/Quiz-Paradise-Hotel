const questions = [
    {
        question: "Skrattar bäst som skrattar...",
        options: [
            { id: "farstun", label: "I farstun", value: false },
            { id: "holken", label: "I holken", value: false },
            { id: "sist", label: "Sist", value: true },
            { id: "prästen", label: "Före prästen", value: false }
        ],
        name: "skrattar",
        quote: "“Jag har inte tänkt så mycket för jag har haft så jävla ont i huvudet av allt tänkande”. - Paulina “Paow” Danielsson"
    },
    {
        question: "När katten är borta dansar råttorna på...",
        options: [
            { id: "amerikabåten", label: "Amerikabåten", value: false },
            { id: "farstugolvet", label: "Farstugolvet", value: false },
            { id: "huvudet", label: "Huvudet", value: false },
            { id: "bordet", label: "Bordet", value: true }
        ],
        name: "katten",
        quote: "“Jag tror att USA gränsar mot Vitryssland, Moskva och Tahiti” - Lukas Holm"
    },
    {
        question: "Bättre en fågel i handen än tio i...",
        options: [
            { id: "skogen", label: "Skogen", value: true },
            { id: "Huset", label: "Huset", value: false },
            { id: "Källaren", label: "Källaren", value: false },
            { id: "Munnen", label: "Munnen", value: false }
        ],
        name: "fågel",
        quote: "“Jag är typ jävligt otrevlig. Fast på ett trevligt sätt”.  - Emma Andersson"
    },
    {
        question: "Kärt barn har många...",
        options: [
            { id: "Vänner", label: "Vänner", value: false },
            { id: "Hopp", label: "Hopp", value: false },
            { id: "Ögon", label: "Ögon", value: false },
            { id: "Namn", label: "Namn", value: true }
        ],
        name: "barn",
        quote: "“När folk frågar om jag har opererat mina bröst brukar jag säga: Nä, kolla nu när jag hoppar så får du se att jag inte gjort det”.  - Sofia Hellqvist"
    },
    {
        question: "Upp som en sol och ner som en...",
        options: [
            { id: "Pannkaka", label: "Pannkaka", value: true },
            { id: "Måne", label: "Måne", value: false },
            { id: "Meteor", label: "Meteor", value: false },
            { id: "Solnedgång", label: "Solnedgång", value: false }
        ],
        name: "uppOchNer",
        quote: "“Hon är så dum att kossorna somnar” - Olinda Borggren"
    },
    {
        question: "Finns det hjärterum finns det...",
        options: [
            { id: "Löjtanter", label: "Löjtanter", value: false },
            { id: "Handtag", label: "Handtag", value: false },
            { id: "Stjärterum", label: "Stjärterum", value: true },
            { id: "Finrum", label: "Finrum", value: false }
        ],
        name: "hjärterum",
        quote: '“Vem var den där kung Ludvig då? Var det han som blev manglad?” - Calle Åberg'
    },
    {
        question: "Den enes död är den andres...",
        options: [
            { id: "Hunger", label: "Hunger", value: false },
            { id: "Sjukdom", label: "Sjukdom", value: false },
            { id: "Bröd", label: "Bröd", value: true },
            { id: "Lön", label: "Lön", value: false }
        ],
        name: "död",
        quote: "“Jag hoppas att han dör ensam, olycklig och utan sin hund.” - Aina Lesse"
    },
    {
        question: "Ingen rök utan...",
        options: [
            { id: "Vedklabbar", label: "Vedklabbar", value: false },
            { id: "Eld", label: "Eld", value: true },
            { id: "Tänddon", label: "Tänddon", value: false },
            { id: "Tändstickor", label: "Tändstickor", value: false }
        ],
        name: "rök",
        quote: "“Jag vet inte vad Sverige ligger i för världsdel” - Saga Scott"
    },
    {
        question: "Det man inte har i huvudet får man ha i...",
        options: [
            { id: "Öronen", label: "Öronen", value: false },
            { id: "RAM-minnet", label: "RAM-minnet", value: false },
            { id: "Benen", label: "Benen", value: true },
            { id: "Armarna", label: "Armarna", value: false }
        ],
        name: "huvudet",
        quote: "“Jag vill bara fitta på alla” - Frida Westman"
    },
    {
        question: "Tala är silver, tiga är...",
        options: [
            { id: "Guld", label: "Guld", value: true },
            { id: "Hoppjerka", label: "Hoppjerka", value: false },
            { id: "Utanförskap", label: "Utanförskap", value: false },
            { id: "Hambo", label: "Hambo", value: false }
        ],
        name: "tala",
        quote: "“Kan inte Astrid Lindgren ha sagt kuken ska ha sitt?” - Ewelina Ostrowska"
    },
    {
        question: "Vill man vara fin får man...",
        options: [
            { id: "Åka", label: "Åka släde", value: false },
            { id: "huvudbonad", label: "Bära huvudbonad", value: false },
            { id: "lida", label: "Lida pin", value: true },
            { id: "äta", label: "Äta med bestick", value: false }
        ],
        name: "fin",
        quote: "“Plåttermos, vad är det för någonting?” - Casper Wolter"
    },
    {
        question: "Pengar växer inte på...",
        options: [
            { id: "Träd", label: "Träd", value: true },
            { id: "Huvudet", label: "Huvudet", value: false },
            { id: "Hakan", label: "Hakan pin", value: false },
            { id: "Grannen", label: "Grannens gård", value: false }
        ],
        name: "pengar",
        quote: "“Basketspelare är väl typ 3,53 meter långa.” - Oliver Strige"
    }
];


//när klar visa vilka svar som var rätt/fel + byta ut citatet mot

// resultat < 11 → Du är tyvärr inte riktigt lika klipskt som Matte(bilder huvud Mattias Helén)

// resultat = 11 → Du och Matte är som ler och långhalm!

// resultat > 11 → Du är snäppet vassare än Matte, "imponerande"...


const startBtn = document.querySelector(".start");
const info = document.querySelector(".info")
const instructions = document.querySelector(".instructions")
const questionContainer = document.querySelector("#questionContainer")
const quote = document.querySelector(".quote");

let currentQuestionIndex = 0;
const results = [];
let score = 0;
let questionNmbr = 1;
let countdownTime = 2 * 60;
let warningTriggered = false;
let interval;





const startQuiz = () => {

    const questionCount = document.createElement("h2");
    questionCount.classList.add("questionCount");
    const pointTime = document.createElement("div");
    pointTime.classList.add("pointTime");
    info.append(questionCount, pointTime);

    const points = document.createElement("h2");
    points.innerText = `Poäng: ${score}/12`;
    points.classList.add("points");
    const timer = document.createElement("h2");
    timer.classList.add("time");
    startBtn.remove();
    instructions.remove();
    pointTime.append(points, timer);

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
    
    interval = setInterval(updateTimer, 1000);
    
    updateTimer();
}

const finnished = (reason) => {
    const questionCount = document.querySelector(".questionCount");
    const timer = document.querySelector(".time");


    const result = () => {
        

        questionCount.remove();
        quote.innerText = '”Då lägger jag till fittmästare på mitt cv” - Jonathan Hermansson';
        questionContainer.innerHTML = ""
        const msg = document.createElement("h2");
        const matte = document.createElement("img");
        matte.src = "../assets/images/matte.png";
        matte.classList.add("contester")
        const resultsUl = document.createElement("ul");

        const headlineQuestions = document.createElement("h2");
        const headlineAnswers = document.createElement("h2");
        headlineQuestions.classList.add("headline");
        headlineAnswers.classList.add("headline");
        const headlineContainer = document.createElement("div");
        headlineContainer.classList.add("headlineContainer");
        headlineQuestions.innerText = "Frågor";
        headlineAnswers.innerText = "Rätt svar";

        headlineContainer.append(headlineQuestions, headlineAnswers);
        questionContainer.append(msg, matte,headlineContainer, resultsUl);


        const correctAnswers = [];

        questions.forEach(question => {
            question.options.forEach(option => {
                if (option.value === true){
                    correctAnswers.push(option);
                }
            })
        })



        questions.forEach((question, i) => {
            const resultLi = document.createElement("li");
            const questionSpan = document.createElement("span");
            const answerSpan = document.createElement("span");

            const symbol = document.createElement("img");

            resultLi.append(questionSpan, answerSpan);
            symbol.classList.add("symbol");

            questionSpan.innerText = `${i + 1}. ${question.question}`;

            const correctAnswer = `${correctAnswers[i].label}`.toLowerCase();
            const formattedAnswer = correctAnswer.charAt(0).toUpperCase() + correctAnswer.slice(1);
            answerSpan.innerText = formattedAnswer;

            questionSpan.prepend(symbol);
            resultsUl.append(resultLi);

            if (results.find(element => element.question === question.question && element.answer.value === "true")){
                symbol.src = "../assets/symbols/true.png"

            } else symbol.src = "../assets/symbols/false.png";
            
 

        })


        const restartBtn = document.createElement("a")
        restartBtn.innerText = "Försök igen"
        restartBtn.href = "../index.html"

        const lost = () => {

            if (score > 6){
                msg.innerText = 'Du och Matte är som ler och långhalm! Exakt lika "smarta".';
                questionContainer.append(restartBtn);
            } else {
                msg.innerText = "Du är tyvärr inte RIKTIGT lika klipskt som Matte..."
                const apply = document.createElement("a");
                apply.innerText = "Ansök nu!";
                apply.href = "https://shortaudition.com/paradise_hotel_2025";
                apply.classList.add("apply");
                questionContainer.insertBefore(apply, questionContainer.children[2]);
            }
        }
        const won = () => {
            questionContainer.append(restartBtn);
            msg.innerText = 'Du är snäppet vassare än Matte, "imponerande"...'

        }

        if (score > 8){won()}
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
    const points = document.querySelector(".points");
    const questionCount = document.querySelector(".questionCount");
    currentQuestionIndex++;
    const question =  questionObj.question;
    results.push({question, answer});
    score = results.filter(object => object.answer.value === "true").length;
    points.innerText = `Poäng: ${score}/12`
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
                clearInterval(interval);
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
    const questionCount = document.querySelector(".questionCount");
   

    questionContainer.innerHTML = "";
    questionCount.innerText = `Fråga ${questionNmbr}`;

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

startBtn.addEventListener("click", () => {
    startQuiz();
    displayQuestion(currentQuestionIndex);
});