const questions = [
    {
        category: "HISTORIA",
        question: "När dog Jesus?",
        quote: "“Vasaskeppets första seglats… Det kan ju ha varit 2005. Det var ju ett tag sedan.\" - Adrian Montin",
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
        quote: "\"Vad fan är ett landskap?\" - Saga Scott",
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
        quote: '"Jag är jude. Eller jag vill vara jude. Eller jag har varit mycket hemma hos en kompis som är jude" - Oliver Strige',
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
        quote: "\"Jag har lärt mig att spanjorerna inte utrotade enhörningarna\" - Paulina \"Paow\" Danielsson, 2014",
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
        quote: "\"Jag tycker att bevisen för att sjöjungfrur finns är solklara\" - Saga Scott",
        options: [
            { id: "stefanSant", label: "Sant", value: false },
            { id: "stefanFalskt", label: "Falskt", value: true }
        ],
        name: "lofven"
    },
    {
        category: "HISTORIA",
        question: "När skedde slaget vid Hastings?",
        quote: "\"Det skulle vara coolt om en fågel skulle para sig med en zebra. Fast förmodligen skulle zebrans snopp döda fågeln\" - Frida Westman",
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
        quote: "\"En ko har väl tre-fyra hjärtan?\" - Smail Alihodzic",
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
        quote: "\"Det finns väl två olika Afrika?\" - Josefine Caarle, 2015",
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
        quote: "\"Antiklimax, det är väl sån här insektsutrotning\" - Adam Lökholm",
        options: [
            { id: "republikTrue", label: "Sant", value: false },
            { id: "republicFalse", label: "Falskt", value: true }
        ],
        name: "republik"
    },
    {
        category: "HISTORIA",
        question: "När blev Carl XVI Gustaf kung?",
        quote: "\"Första mannen på månen. Var det typ på 1500-talet eller ännu längre tillbaka?\" - Josefine Caarle, 2015",
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
let currentQuestionIndex = 0;
const results = [];
let score = 0;




const handleChoice = (answer, questionObj) => {
    currentQuestionIndex++;
    const question =  questionObj.question;
    results.push({question, answer});

    

    if (currentQuestionIndex < questions.length){
        
        console.log(results);
        setTimeout(() => {
            quote.innerText = questionObj.quote;
            displayQuestion(currentQuestionIndex);}, 2000);
        score = results.filter(object => object.answer.value === true).length;
        // results.forEach(obect => {if (Object.value === true ){score ++}});

}}



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
                value: selectedOption.value
            };
            if (answer.value === true){
                const sibling = event.target.nextElementSibling;
                sibling.classList.add("correct");
            }
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

// nextBtn.addEventListener("click", () => {
//     currentQuestionIndex++;

//     if (currentQuestionIndex < questions.length){
//         displayQuestion(currentQuestionIndex);
//     }
// })

displayQuestion(currentQuestionIndex);