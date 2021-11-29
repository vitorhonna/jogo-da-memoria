let techs = [
    "bootstrap",
    "css",
    "electron",
    "firebase",
    "html",
    "javascript",
    "jquery",
    "mongo",
    "node",
    "react",
];

let cards = null;

function createCards(techs) {
    let cards = [];

    techs.forEach((tech) => {
        // cards.push(createPairOfCards(tech));
        cards = [...cards, ...createPairOfCards(tech)];
    });

    // return cards.flatMap((pair) => pair);
    return cards;
}

function createPairOfCards(tech) {
    return [
        {
            id: createId(tech),
            icon: tech,
            flipped: false,
        },
        {
            id: createId(tech),
            icon: tech,
            flipped: false,
        },
    ];
}

function createId(tech) {
    return tech + Math.random().toFixed(4).slice(2, 6);
}

function shuffleCards(cards) {
    let currentIndex = cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [
            cards[currentIndex],
            cards[randomIndex],
        ];
    }
}

function startGame() {
    cards = createCards(techs);
    shuffleCards(cards);
}
