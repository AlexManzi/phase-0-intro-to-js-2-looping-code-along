const cards = ["Guadalupe", "Ollie", "Aki"];
function writeCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        console.log(`Thank you, ${cards[i]}, for the wonderful surprise gift!`)
        }
    return cards
}
writeCards(cards)


function countDown() {
    let j = 10;
    while (j >= 0) {
        console.log(j)
        j--
    }
}
countDown()