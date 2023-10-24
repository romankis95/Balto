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
        "domanda": "A che piano va signorina?\r\nGuardi che è il suo ascensore privato!",
        "risposta": "Signorina, come sempre ha ragione",
        "opzioni": ["Signorina, come sempre ha ragione", "Ah si?", "Qualcuno chiami il presidente"]
    },
    {
        "domanda": "Tagliamo la Magnolia?",
        "risposta": "E il pettirosso poi che fine fa?",
        "opzioni": ["E il pettirosso poi che fine fa?", "Qualcuno pensi al pampini", "Me magnerei na bella pizza!"]
    },
    {
        "domanda": "Vamos Argentina!!!",
        "risposta": "Vamos vamos!",
        "opzioni": ["Vamos vamos!", "Io tifo il milan", "A me piace la Paella"]
    },
    {
        "domanda": "Scusi, ma poi il pullman torna indietro?\r\nSi.",
        "risposta": "Scusi, intendevo oggi torna indietro?",
        "opzioni": ["Scusi, intendevo oggi torna indietro?", "Ma che vo' da me?", "Prendi il treno"]
    },
    {
        "domanda": "Ciao Piccione!",
        "risposta": "Ciao Balto!",
        "opzioni": ["Ciao Balto!", "Che schifo un piccione.", "Ciao Mario"]
    },
    {
        "domanda": "Roman ripara la lavastoviglie te che sei un informatico.\r\nMa mamma...veramente...",
        "risposta": "Zitto brutto coglione!",
        "opzioni": ["Zitto brutto coglione!", "Va bene chiamo un tecnico.", "E' difficile?"]
    },
    {
        "domanda": "Che dos balotaaaaaaas",
        "risposta": "**meme gatto**",
        "opzioni": ["**meme gatto**", "No non fumo grazie!", "Giochi a calcio?"],
    },
    {
        "domanda": "Spread, sprode, spruden?",
        "risposta": "Solo quel coglione di roman poteva inventarla così",
        "opzioni": ["E' giusto.", "Solo quel coglione di roman poteva inventarla così", "Je ne parlé francé"]
    },
    {
        "domanda": "Due bottiglie di rosso, una paglia con mamma, cosa facciamo ora?",
        "risposta": "Correggiamo le verifiche!",
        "opzioni": ["Correggiamo le verifiche!", "Andiamo di amari", "Mamma?"]
    },
    {
        "domanda": "Hai una pianta carnivora. come la chiami?",
        "risposta": "Benito",
        "opzioni": ["Carlo", "Benito", "Giorgia, sono una mamma, sono una donna, sono CRISTIANAAAAA"]
    },
    {
        "domanda": "Andiamo a vivere insieme?",
        "risposta": "Solo se prima affitti un faro dal pover gianni",
        "opzioni": ["Solo se prima affitti un faro dal pover gianni", "Si", "No"]
    },
    {
        "domanda": "Secondo te, roman imparerà mai ad abbinare pantaloni e maglia?",
        "risposta": "AHAHAH, no",
        "opzioni": ["AHAHAH, no", "Prima o poi", "Si"]
    },
    {
        "domanda": "Qualcuno ti regala un quaderno a forma di darth vader, che fa il suono tipico. Per sbaglio lo fai partire a lezione in uni, cosa fai?",
        "risposta": "HEHEHEHEEHE, bimba felicia",
        "opzioni": ["HEHEHEHEEHE, bimba felicia", "Lo nascondo", "Dico che non è mio"]
    },
    {
        "domanda": "Devi andare a visitare un paese, con quali criteri scegli la meta?",
        "risposta": "Conflitto in corso, mine e missili",
        "opzioni": ["Conflitto in corso, mine e missili", "Basta che facciano il cornetto al porto", "Vamos vamos!"]
    },
    {
        "domanda": "Hi do you speak english? No.",
        "risposta": "Neither do i",
        "opzioni": ["Neither do i", "E voi chi cazzo siete?", "Vi porto il conto"]
    },
    {
        "domanda": "Su 1000 meme che ricevi al giorno, quanti ti fanno ridere? E quanti fanno ridere a roman?",
        "risposta": "1 a me, 1000 a lui",
        "opzioni": ["1 a me, 1000 a lui", "tutti", "alcuni"]
    },
    {
        "domanda": "La giornata perfetta consiste in una di queste tre cose:",
        "risposta": "All'IKEA a prendere uno ǍƏƚƚšŒ",
        "opzioni": ["Fare un aperitivo in terrazza",
            "Cena a lume di candela con tizio che suona il violino", "All'IKEA a prendere uno ǍƏƚƚšŒ"
        ]
    },
    {
        "domanda": "Quando devi fare l'ennesima traduzione di Zelensky, cosa senti ogni mattina? ",
        "risposta": "dobreizewski nazdarvorvia slava ukranini",
        "opzioni": ["dobreizewski nazdarvorvia slava ukranini", "cari concittadini...", "Boh chi lo capisce"]
    },
    {
        "domanda": "Hai i coglioni girati, qual è la combo giusta per tirarti su di morale?",
        "risposta": "Mac, parcheggino, e un pirla in macchina",
        "opzioni": ["Serata al pub", "Mi chiudo in camera", "Mac, parcheggino, e un pirla in macchina"]
    },
    {
        "domanda": "Stasera ho fame, cosa mi ordino?",
        "risposta": "Un porco ramen!",
        "opzioni": ["Na bella pizza", "Del sushi", "Un porco ramen!"]
    },
    {
        "domanda": "Cosa vuoi per natale?",
        "risposta": "Un gruppo col padre di roman dove ci mandiamo solo selfie senza chattare",
        "opzioni": ["Un gruppo col padre di roman dove ci mandiamo solo selfie senza chattare", "Un viaggio in giappone", "Una carbonara fatta bene"]
    },
    {
        "domanda": "Zigo Zago!",
        "risposta": "Ah, è quasi arrivato, pipì ed esco!",
        "opzioni": ["Zugo zogo", "Di cosa parli?", "Ah, è quasi arrivato, pipì ed esco!"]
    },
    //{
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
const questionCountText = document.getElementById('question-count'); // Aggiunto il contatore delle domande
const backgroundImage = document.getElementById("start-image");
const startbuttoncontainer = document.getElementById('start-button-container')
const title = document.getElementById('title')
const prize = document.getElementById('prize')
const docquiz = document.getElementById('quiz')


// Add the paths to your heart images
const fullHeartImage = '/images/1.png';
const emptyHeartImage = '/images/2.png';
const maxquestions = 10;
const maxNumber = 10;
let currentQuestionIndex = 0;
let score = 0;
let lives = 3;
let = questionCount = 0;
const bark = new Audio('/audio/bark.mp3')
const audio = new Audio('/audio/bones.mp3');
let randquesitons = []
startButton.addEventListener('click', () => {
    randquesitons = generateUniqueRandomIntegers(quizData.length,10)
    // Nascondi il pulsante "Start" con animazione
    startButton.style.display = 'none';
    // Mostra le vite
    heartContainer.style.display = 'block';
    backgroundImage.style.display = 'none';
    backgroundImage.hidden = true
    startbuttoncontainer.style.display = 'none';
    // Avvia il quiz
    loadQuestion();
    questionContainer.style.display = 'block';
    bark.play()
});


// Aggiungi questa funzione per generare un array di indici casuali unici
function getRandomUniqueIndices(max, count) {
    const indices = [];
    while (indices.length < count) {
        const randomIndex = Math.floor(Math.random() * max);
        if (!indices.includes(randomIndex)) {
            indices.push(randomIndex);
        }
    }
    return indices;
}

function loadQuestion() {
    if (questionCount < maxquestions) { // Carica solo 10 domande casuali
        const randomIndices = randquesitons.pop();
        console.log(randomIndices)

        const question = quizData[randomIndices];

        questionText.innerText = question.domanda;
        optionsList.innerHTML = '';
        updateQuestionCount(); // Aggiunto l'aggiornamento del contatore

        const optionsContainer = document.createElement('ul');
        optionsContainer.id = 'options-list'; // Aggiungi un ID per lo stile della lista
        question.opzioni.forEach((option) => {
            const listItem = document.createElement('li');
            const button = document.createElement('button');
            button.innerText = option;
            button.className = 'option-button'; // Aggiungi una classe per lo stile dei bottoni
            button.addEventListener('click', () => checkAnswer(option, randomIndices));
            listItem.appendChild(button);
            optionsContainer.appendChild(listItem);
        });

        optionsList.appendChild(optionsContainer);
    } else {
        showResults();
    }
}


function updateQuestionCount() {
    questionCount++;
    // Aggiorna il testo del contatore delle domande con il numero corrente e il totale.
    questionCountText.innerText = `Domanda ${questionCount} su ${maxquestions}`;
}

function checkAnswer(selectedOption, index) {
    const question = quizData[index]
    if (selectedOption === question.risposta) {
        score++;
    } else {
        lives--; // Riduci una vita per ogni errore
        updateLivesDisplay();
    }
    if (lives === 0) {
        showResults();
    }
    if (index === quizData.length - 1) {
        // Se l'utente ha risposto a tutte le domande, mostra i risultati
        showResults();
    } else {
        index++;
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
    window.location.reload();
}

function showResults() {
    questionContainer.style.display = 'none';
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = `Hai totalizzato ${score} punti su ${maxquestions} domande!<br>`;

    // Aggiungi il pulsante di congratulazioni se l'utente ha almeno una vita rimasta
    if (lives > 0) {
        const congratsButton = document.createElement('button');
        congratsButton.innerText = 'Congratulazioni! Vedi il tuo premio';
        congratsButton.id = 'congrats-button';
        congratsButton.addEventListener('click', showPrize);
        resultsContainer.appendChild(congratsButton);
    } else {
        const noLivesMessage = document.createElement('p');
        noLivesMessage.innerText = 'Mi dispiace, secondo il nostro complicatissimo algoritmo, non sei un vero balto';
        resultsContainer.appendChild(noLivesMessage);

        const retryButton = document.createElement('button');
        retryButton.innerText = 'Riprova';
        retryButton.id = 'retry-button';
        retryButton.addEventListener('click', resetGame);
        resultsContainer.appendChild(retryButton);
    }
}

const imageSources = Array.from({ length: maxNumber+1 }, (_, i) => `/images/slide (${i + 1}).jpeg`);

 
  
function showPrize() {

    audio.play();
    // Crea il contenitore per lo slideshow
    const slideshowContainer = document.createElement('div');
    slideshowContainer.id = 'slideshow-container';
    prize.appendChild(slideshowContainer);
    docquiz.hidden = true
    title.hidden = true
    // Aggiungi le tue venti foto al tuo slideshow
    const randoms = generateUniqueRandomIntegers(36,10)
    for (let i = 0; i <= randoms.length; i++) {
        const slide = document.createElement('div');
        slide.innerHTML = `<img src="/images/slide (${randoms[i]}).jpeg" alt="Slide ${i}">`;
        slideshowContainer.appendChild(slide);
    }

    // Inizializza Slick Slider
    const slickSlideshow = $(slideshowContainer).slick({
        infinite: true,
        lazyLoad: 'anticipated',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // Intervallo tra le diapositive in millisecondi
        responsive: [{
            breakpoint: 480, // Imposta il breakpoint per dispositivi con larghezza massima di 480px (tipicamente, iPhone in modalità retrato)
            settings: {
                slidesToShow: 1, // Visualizza 1 slide alla volta
                slidesToScroll: 1, // Scorri 1 slide alla volta
                centerMode: true, // Centra le immagini
                centerPadding: "0", // Padding
                variableWidth: true, // Larghezza variabile per adattarsi allo schermo
                adaptiveHeight: true, // Altezza adattiva
            }
       }]
    });

// Aggiungi un gestore di eventi per controllare quando il slideshow è stato inizializzato
slickSlideshow.on('init', function () {
  // Questo è il gestore dell'evento 'init' che si attiva quando il slideshow è stato inizializzato
  console.log('Slideshow inizializzato correttamente');
});

// Aggiungi un gestore di eventi per controllare quando una diapositiva è cambiata
slickSlideshow.on('afterChange', function (event, slick, currentSlide) {
  // Questo è il gestore dell'evento 'afterChange' che si attiva quando una diapositiva è cambiata
  console.log(`Diapositiva corrente: ${currentSlide}`);
  // Puoi eseguire controlli qui e forzare la ricarica delle immagini se necessario
});


}




function updateLivesDisplay() {
    heartContainer.innerHTML = '';
    for (let i = 0; i < lives; i++) {
        const heartIcon = document.createElement('img');
        heartIcon.src = fullHeartImage; // Display a full heart
        heartIcon.classList.add('hfull')
        heartIcon.alt = '❤️'; // Alt text for accessibility
        heartContainer.appendChild(heartIcon);
    }
    const remainingEmptyHearts = 3 - lives;
    for (let i = 0; i < remainingEmptyHearts; i++) {
        const heartIcon = document.createElement('img');
        heartIcon.src = emptyHeartImage; // Display an empty heart for remaining lives
        heartIcon.classList.add('hempty')
        heartIcon.alt = '🤍'; // Alt text for accessibility
        heartContainer.appendChild(heartIcon);
    }
}

updateLivesDisplay();




function generateUniqueRandomIntegers(maxNumber, count) {
    if (maxNumber < count) {
      console.error('Max number should be greater than or equal to the count.');
      return [];
    }
  
    const result = [];
    for (let i = 0; i < count; i++) {
      let randomNumber;
      do {
        randomNumber = Math.floor(Math.random() * (maxNumber + 1));
      } while (result.includes(randomNumber));
      result.push(randomNumber);
    }
    
    console.log(result)
    return result;
  }


