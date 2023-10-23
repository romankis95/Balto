const quizData = [{
        "domanda": "Quanto Balto sà orientarsi per Roma?",
        "risposta": "Dipende, se ce Roman finisce al capolinea. Opposto.",
        "opzioni": ["Dipende, se ce Roman finisce al capolinea. Opposto.", "Tanto, è un segugio",
            "E' meglio di waze!"
        ]
    },
    {
        "domanda": "Ivan?",
        "risposta": "IVAN",
        "opzioni": ["IVAN", "Damian?", "Ciuchino"]
    },
    {
        "domanda": "A che piano va signorina?",
        "risposta": "Signorina, come sempre ha ragione",
        "opzioni": ["Signorina, come sempre ha ragione"]
    },
    {
        "domanda": "Tagliamo la Magnolia?",
        "risposta": "E il pettirosso poi che fine fa?",
        "opzioni": ["E il pettirosso poi che fine fa?"]
    },
    {
        "domanda": "Vamos Argentina!!!",
        "risposta": "Vamos vamos!",
        "opzioni": ["Vamos vamos!"]
    },
    {
        "domanda": "Scusi, ma poi il pullman torna indietro?\r\nSi.",
        "risposta": "Scusi, intendevo oggi torna indietro?",
        "opzioni": ["Scusi, intendevo oggi torna indietro?"]
    },
    {
        "domanda": "Ciao Piccione!",
        "risposta": "Ciao Balto!",
        "opzioni": ["Ciao Balto!"]
    },
    {
        "domanda": "Roman ripara la lavastoviglie te che sei un informatico",
        "risposta": "Ma mamma...",
        "opzioni": ["Ma mamma..."]
    },
    {
        "domanda": "Cosa dovevi fare invece dell'uni?",
        "risposta": "**meme gatto** la troiaaaaaaaaa!",
        "opzioni": ["**meme gatto** la troiaaaaaaaaa!"],
        "note": "da valutare attentamente"
    },
    {
        "domanda": "Spread, sprode, spruden?",
        "risposta": "solo quel coglione di roman poteva inventarla così",
        "opzioni": ["E' giusto.", "solo quel coglione di roman poteva inventarla così"]
    },
    {
        "domanda": "Due bottiglie di rosso, una paglia con mamma, cosa facciamo ora?",
        "risposta": "Correggiamo le verifiche!",
        "opzioni": ["Correggiamo le verifiche!"]
    },
    {
        "domanda": "Hai una pianta carnivora. come la chiami?",
        "risposta": "Benito",
        "opzioni": ["Carlo", "Benito", "Giorgia, sono una mamma, sono una donna, sono CRISTIANAAAAA"]
    },
    {
        "domanda": "Andiamo a vivere insieme?",
        "risposta": "Solo se prima affitti un faro",
        "opzioni": ["Solo se prima affitti un faro", "Si", "No"]
    },
    {
        "domanda": "Secondo te, roman imparerà mai ad abbinare pantaloni e maglia?",
        "risposta": "AHAHAH, no",
        "opzioni": ["AHAHAH, no", "Prima o poi", "Si"]
    },
    {
        "domanda": "Qualcuno ti regala un quaderno a forma di darth vader, che fa il suono tipico. Per sbaglio lo fai partire a lezione in uni, cosa fai?",
        "risposta": "HEHEHEHEEHE, bimba felicia",
        "opzioni": ["HEHEHEHEEHE, bimba felicia", "lo nascondo"]
    },
    {
        "domanda": "Devi andare a visitare un paese, con quali criteri scegli la meta?",
        "risposta": "Conflitto in corso, mine e missili",
        "opzioni": ["Conflitto in corso, mine e missili"]
    },
    {
        "domanda": "Hi do you speak english? No.",
        "risposta": "Neither do i",
        "opzioni": ["Neither do i"]
    },
    {
        "domanda": "Su 1000 meme che ricevi al giorno, quanti ti fanno ridere? E quant fanno ridere a roman?",
        "risposta": "1 a me, 1000 a lui",
        "opzioni": ["1 a me, 1000 a lui", "tutti", "alcuni"]
    },
    {
        "domanda": "Il ragazzo giusto ti porta a:",
        "risposta": "All'IKEA a prendere uno ǍƏƚƚšŒ",
        "opzioni": ["Fare un aperitivo in terrazza",
            "Cena a lume di candela con tizio che suona il violino", "All'IKEA a prendere uno ǍƏƚƚšŒ"
        ]
    },
    // {
    //     "domanda": "",
    //     "risposta": "",
    //     "opzioni": [""]
    // },
    // {
    //     "domanda": "",
    //     "risposta": "",
    //     "opzioni": [""]
    // },
    // {
    //     "domanda": "",
    //     "risposta": "",
    //     "opzioni": [""]
    // },
    // {
    //     "domanda": "",
    //     "risposta": "",
    //     "opzioni": [""]
    // },
    // {
    //     "domanda": "",
    //     "risposta": "",
    //     "opzioni": [""]
    // }, {
    //     "domanda": "",
    //     "risposta": "",
    //     "opzioni": [""]
    // }, {
    //     "domanda": "",
    //     "risposta": "",
    //     "opzioni": [""]
    // }, {
    //     "domanda": "",
    //     "risposta": "",
    //     "opzioni": [""]
    // }, {
    //     "domanda": "",
    //     "risposta": "",
    //     "opzioni": [""]
    // }, {
    //     "domanda": "",
    //     "risposta": "",
    //     "opzioni": [""]
    // }
];

const startButton = document.getElementById('start-button');
const questionContainer = document.getElementById('question-container');
const resultsContainer = document.getElementById('results-container');
const questionText = document.getElementById('question-text');
const optionsList = document.getElementById('options');
const heartContainer = document.getElementById('heart-container');

let currentQuestionIndex = 0;
let score = 0;
let lives = 3;

function loadQuestion() {
    if (currentQuestionIndex < quizData.length) {
        const question = quizData[currentQuestionIndex];
        questionText.innerText = question.domanda;
        optionsList.innerHTML = '';

        const optionsContainer = document.createElement('ul');
        optionsContainer.id = 'options-list'; // Aggiungi un ID per lo stile della lista
        question.opzioni.forEach((option) => {
            const listItem = document.createElement('li');
            const button = document.createElement('button');
            button.innerText = option;
            button.className = 'option-button'; // Aggiungi una classe per lo stile dei bottoni
            button.addEventListener('click', () => checkAnswer(option));
            listItem.appendChild(button);
            optionsContainer.appendChild(listItem);
        });

        optionsList.appendChild(optionsContainer);
    } else {
        showResults();
    }
}


function checkAnswer(selectedOption) {
    const question = quizData[currentQuestionIndex];
    if (selectedOption === question.risposta) {
        score++;
    } else {
        lives--; // Riduci una vita per ogni errore
        updateLivesDisplay();
    }

    if (currentQuestionIndex === quizData.length - 1) {
        // Se l'utente ha risposto a tutte le domande, mostra i risultati
        showResults();
    } else {
        currentQuestionIndex++;
        loadQuestion();
    }
}



function showFailure() {
    questionContainer.style.display = 'none';
    resultsContainer.style.display = 'none';
    const failureImage = document.createElement('img');
    failureImage.src = 'images/failure.jpg'; // Inserisci il percorso all'immagine di fallimento
    failureImage.alt = 'Hai perso';
    const retryButton = document.createElement('button');
    retryButton.innerText = 'Riprova';
    retryButton.id = 'retry-button'; // Aggiungi un ID per lo stile del pulsante
    retryButton.addEventListener('click', resetGame);
    resultsContainer.appendChild(failureImage);
    resultsContainer.appendChild(retryButton);
    resultsContainer.style.display = 'block';
}

function resetGame() {
    currentQuestionIndex = 0;
    score = 0;
    lives = 3;
    updateLivesDisplay();
    resultsContainer.style.display = 'none';
    loadQuestion();
    questionContainer.style.display = 'block';
}

function showResults() {
    questionContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = `Hai totalizzato ${score} punti su ${quizData.length} domande!<br>`;

    // Aggiungi il pulsante di congratulazioni se l'utente ha almeno una vita rimasta
    if (lives > 0) {
        const congratsButton = document.createElement('button');
        congratsButton.innerText = 'Congratulazioni! Vedi il tuo premio';
        congratsButton.id = 'congrats-button';
        congratsButton.addEventListener('click', showPrize);
        resultsContainer.appendChild(congratsButton);
    }
}

function showPrize() {
    // Nascondi il risultato e il pulsante di congratulazioni
    //resultsContainer.style.display = 'none';

    // Crea il contenitore per lo slideshow
    const slideshowContainer = document.createElement('div');
    slideshowContainer.id = 'slideshow-container';
    resultsContainer.appendChild(slideshowContainer);

    // Aggiungi le tue venti foto al tuo slideshow
    for (let i = 1; i <= 3; i++) {
        const slide = document.createElement('div');
        slide.innerHTML = `<img src="/images/slide${i}.jpeg" alt="Slide ${i}">`;
        slideshowContainer.appendChild(slide);
    }

    // Inizializza Slick Slider
    $(slideshowContainer).slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Intervallo tra le diapositive in millisecondi
    });

    // Aggiungi musica al tuo slideshow (assicurati di avere il file audio nel tuo progetto)
    // const audio = new Audio('your-audio-file.mp3');
    // audio.play();
}

function updateLivesDisplay() {
    heartContainer.innerHTML = '';
    for (let i = 0; i < lives; i++) {
        const heartIcon = document.createElement('span');
        heartIcon.innerHTML = '❤️';
        heartContainer.appendChild(heartIcon);
    }
}
updateLivesDisplay();

startButton.addEventListener('click', () => {
    // Nascondi il pulsante "Start" con animazione
    startButton.style.display = 'none';
    // Mostra le vite
    heartContainer.style.display = 'block';

    // Avvia il quiz
    loadQuestion();
    questionContainer.style.display = 'block';
});