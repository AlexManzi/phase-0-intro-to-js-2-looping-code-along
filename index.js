const cards = (["Guadalupe", "Ollie", "Aki"], "surprise");
function writeCards(names, eventName) {
    let newCards =[]
    for (let i = 0; i < names.length ; i++) {
        newCards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    }
    return newCards
}


function countDown() {
    let i = 11;
    while (i > 0) {
        i--
        console.log(i)
        }
    }
countDown()

