/** Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il
nome e cognome e l’indicazione se può guidare, in base all’età */

console.log("JSnackobject4");
const persone = [
    {
        nome: "Giacomo", cognome: "Di Guardo", eta: 25
    },
    {
        nome: "Piero", cognome: "Lo Presti", eta: 38
    },
    {
        nome: "Giulia", cognome: "Lanza", eta: 15
    },
    {
        nome: "Paola", cognome: "Bonaccorsi", eta: 55
    },
    {
        nome: "Alessio", cognome: "Marino", eta: 9
    }
]
const maggiorenne = []
for (let i = 0; i < persone.length; i++) {
    persona = persone[i]
    if (persona.eta >= 18) {
        maggiorenne.push(persona)
        console.log("Puoi guidare", maggiorenne[i]);
    } else if (persona.eta <= 18) {
        maggiorenne.push(persona)
        console.log("Non puoi guidare", maggiorenne[i]);
    }
}
