/* Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.
    Es:
Crea un nuovo array con la lista dei mammiferi.
[
    { nome: ‘leone’, famiglia: ‘felidi’, classe: ‘mammiferi’ },
    { nome: ‘cane’, famiglia: ‘canidi’, classe: ‘mammiferi’ },
    { nome: ‘gallina’, famiglia: ‘fasianidi’, classe: ‘uccelli’ },
]
 */

console.log("JSnack 3");
const animali = [
    {
        nome: "Elefante", famiglia: "Elephantidae", classe: "Mammiferi"
    },
    {
        nome: "Pesce gatto", famiglia: "Ictaluridae", classe: "Actinopterygii"
    },
    {
        nome: "Pappagalli", famiglia: "Psittacidae", classe: "Aves"
    },
    {
        nome: "Homo Sapiens", famiglia: "Hominidae", classe: "Mammiferi"
    }
]
const mammiferi = []
for (let i = 0; i < animali.length; i++) {
    const animale = animali[i]
    if (animale.classe === "Mammiferi") {
        mammiferi.push(animale)
    }
}
console.log(mammiferi);