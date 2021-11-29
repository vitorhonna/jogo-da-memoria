document.addEventListener("DOMContentLoaded", () => {
    const FRONT = "card_front";
    const BACK = "card_back";
    const CARD = "card";

    function renderBoard(cards) {
        // console.log(cards);
        let gameBoard = document.querySelector("#gameBoard");
        // console.log(gameBoard);

        cards.forEach((card) => {
            // console.log(card);
            let cardElement = document.createElement("div");
            cardElement.id = card.id;
            cardElement.classList.add(CARD);
            cardElement.dataset.icon = card.icon;

            createCardContent(card, cardElement);

            cardElement.addEventListener("click", flipCard);

            gameBoard.appendChild(cardElement);
        });
    }

    function createCardContent(card, cardElement) {
        createCardFace(FRONT, card, cardElement);
        createCardFace(BACK, card, cardElement);
    }

    function createCardFace(face, card, cardElement) {
        let cardElementFace = document.createElement("div");
        cardElementFace.classList.add(face);

        if (face === FRONT) {
            cardElementFace.innerHTML = `
                <img
                    class="icon"
                    src="./images/${card.icon}.png"
                    alt="${card.icon}"
                />
            `;
        } else {
            cardElementFace.innerHTML = `&lt/&gt`;
        }

        cardElement.appendChild(cardElementFace);
    }

    function flipCard() {
        // console.log(this);
        if (Game.selectCard(this.id)) {
            this.classList.add("flip");

            if (Game.secondCard) {
                let firstCard = document.querySelector(`#${Game.firstCard.id}`);
                let secondCard = document.querySelector(
                    `#${Game.secondCard.id}`
                );

                if (Game.checkMatch()) {
                    // console.log("match");
                    setTimeout(() => {
                        firstCard.firstElementChild.classList.add("match");
                        secondCard.firstElementChild.classList.add("match");
                    }, 500);
                    setTimeout(() => {
                        firstCard.firstElementChild.classList.add("fade");
                        secondCard.firstElementChild.classList.add("fade");
                    }, 1000);
                    Game.clearSelection();
                } else {
                    setTimeout(() => {
                        firstCard.classList.remove("flip");
                        secondCard.classList.remove("flip");
                        Game.unflipCards();
                        Game.clearSelection();
                    }, 750);
                }
            }
        }
    }

    function startGame() {
        Game.init();
        renderBoard(Game.cards);
    }

    startGame();
});
