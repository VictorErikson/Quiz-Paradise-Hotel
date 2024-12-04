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
        quote: "**'Vem var den där kung Ludvig då? Var det han som blev manglad?' - Calle Åberg**"
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


