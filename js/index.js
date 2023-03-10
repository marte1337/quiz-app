// DARK MODE TOGGLE

const darkElements = document.querySelector('[data-js="dark"]')
const btnToggle = document.querySelector('[data-js="dark-mode-switch"]')

btnToggle.addEventListener("click", () => {
    console.log("click")
    darkElements.classList.toggle("dark-mode")
})


// ANSWER CARD

const cardAnswer = document.querySelector('[data-js="answer-card"]')
const btnAnswer = document.querySelector('[data-js="answer-button"]')

console.log(cardAnswer, btnAnswer)


btnAnswer.addEventListener("click", () => {
    console.log("click")
    cardAnswer.classList.remove("hidden")
})