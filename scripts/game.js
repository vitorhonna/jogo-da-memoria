const Game = {
    techs: [
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
    ],

    cards: null,

    init: function () {
        Game.createCards();
        Game.shuffleCards();
    },

    createCards: function () {
        this.cards = [];

        this.techs.forEach((tech) => {
            this.cards = [...this.cards, ...this.createPairOfCards(tech)];
        });
    },

    createPairOfCards: function (tech) {
        return [
            {
                id: this.createId(tech),
                icon: tech,
                flipped: false,
            },
            {
                id: this.createId(tech),
                icon: tech,
                flipped: false,
            },
        ];
    },

    createId: function (tech) {
        return tech + Math.random().toFixed(4).slice(2, 6);
    },

    shuffleCards: function () {
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.cards[randomIndex], this.cards[currentIndex]] = [
                this.cards[currentIndex],
                this.cards[randomIndex],
            ];
        }
    },
};
