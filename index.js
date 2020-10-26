let notFadedYet = document.querySelectorAll(".fade-scroll");
let checkpoint = -1;

const fadeInElements = () => {
    if (window.pageYOffset > checkpoint) {
        const newNotFadedYet = [];
        let minTop = Infinity;

        for (let element of notFadedYet) {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop > checkpoint && elementTop < (window.pageYOffset + window.innerHeight)) {
                if (elementTop < minTop && elementTop >= window.pageYOffset) minTop = elementTop;

                setInterval(() => element.classList.add("fade-in"), Math.max((elementTop - minTop) / window.innerHeight * 1000, 0));
                continue;
            }

            newNotFadedYet.push(element);
        }

        notFadedYet = newNotFadedYet;
    }
};

if (window.pageYOffset === 0) fadeInElements();

document.addEventListener("scroll", fadeInElements);

const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const quoteElement = document.querySelector(".review-container q");
const clientNameElement = document.querySelector(".reviewer-name");

const quotes = [
    ["Une super ambiance, un coaching de première, pas de m'as tu vu. Une petite salle intime dédiée à la boxe amateur avec une bonne prépa physique. Esprit de famille. Que du plaisir.", "Jean-Jacques Xjr"], 
    ["pas de chichi, on est là pour bosser dans la bonne humeur.", "Paulin Coste"],
    ["Super, on progresse vraiment ici!", "Lucas Lemieux"]
];

let quoteIndex = 0;

const updateQuote = newQuoteIndex => {
    quoteElement.innerText = quotes[newQuoteIndex][0];
    clientNameElement.innerText = "-" + quotes[newQuoteIndex][1];
};

leftArrow.addEventListener("click", () => {
    if (quoteIndex === 0) quoteIndex = quotes.length;

    quoteIndex--;

    updateQuote(quoteIndex);
});

rightArrow.addEventListener("click", () => {
    quoteIndex++;

    if (quoteIndex === quotes.length) quoteIndex = 0;

    updateQuote(quoteIndex);
});

const contactBtn = document.querySelector(".nav-item.left");

contactBtn.addEventListener("click", () => {
    location.hash = "";
    location.hash = "#contact";
});

