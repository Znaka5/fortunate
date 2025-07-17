const Deck = document.querySelector(".game-box > .deck")
const Card_Box = document.querySelector(".game-box > .card-box")
const _Cards = ["Mirror", "Blood", "Broken Sword", "Luck", "spades", "fortune", "star", "pentagram", "you", "queen of 10's"]

function loadCards() {
    document.querySelector(".game-box > .card-box").style.display = "flex"
    const Nums = `${Math.random()}`.slice(2, 6).split('')
    const Cards = new Set(Nums.map(num => _Cards[num]))

    const Card_Elements = Array.from(Cards).map(card => {
        const el = document.createElement("div")
        el.innerHTML = card
        return el
    })

    Card_Elements.map(card => Card_Box.appendChild(card))
}

Deck.addEventListener("click", () => {
    Array.from(Card_Box.children).map(child => Card_Box.removeChild(child))

    loadCards()
});