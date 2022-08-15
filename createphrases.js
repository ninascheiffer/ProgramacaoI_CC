//Aluna: Marina P M Scheiffer - 2A CC 

function  createLovePhrases(){
    let phrases =(
        [{
            phrase1: "O verdadeiro amor nunca se desgasta. Quando mais se dá, mais se tem.",
            author1: "Antoine de Saint-Exupéry",
        }, 
        {
            phrase2:"Eu te amo é uma frase muito forte para ser dita em vão. Ame primeiro, diga depois.",
            author2: "Renato Russo",
        },
        {
            phrase3: "Lutar pelo amor é bom, mas alcançá-lo sem luta é melhor.",
            author3: "William Shakespeare",
        },
        {
            phrase4: "O amor é o espaço e o tempo tornados sensíveis ao coração.",
            author4: "Marcel Proust",
        },
        {
            phrase5: "Se o amor é fantasia, eu me encontro ultimamente em pleno carnaval.",
            author5: "Toquinho e Mutinho",
        }] );

let listSize = phrases.length;
console.log(`Tamanho da lista ${listSize}`);

let drawPhrase = Math.floor(Math.random() * listSize - 0 + 1);
console.log(drawPhrase);

console.log('A frase sorteada é ', phrases[drawPhrase]);

}
createLovePhrases();