const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let arrayOfCodedSymbols = [];
    let morseSymbol = [];
    let arrayOfMorseSymbols = [];
    let arrayOfDecodedText = [];

    for (let i = 0, j = 0; i < expr.length; j++) {
        arrayOfCodedSymbols[j] = expr.substr(i, 10);
        i = i + 10;
    };

    for (let codedSymbol of arrayOfCodedSymbols) {

        if (codedSymbol.startsWith('*')) {
            arrayOfMorseSymbols.push(' ');
        } else {

            while (codedSymbol.startsWith('00')) {
                codedSymbol = codedSymbol.slice(2);
            };

            while (codedSymbol.length >= 2) {
                if (codedSymbol.startsWith('10')) {
                    morseSymbol.push('.');
                    codedSymbol = codedSymbol.slice(2);
                } else if (codedSymbol.startsWith('11')) {
                    morseSymbol.push('-');
                    codedSymbol = codedSymbol.slice(2);
                };
            }

            arrayOfMorseSymbols.push(morseSymbol.join(''));
            morseSymbol.length = 0;

        };

    };


    for (let item of arrayOfMorseSymbols) {
        if (item === ' ') {
            arrayOfDecodedText.push(' ');
        } else {
            arrayOfDecodedText.push(`${MORSE_TABLE[item]}`);
        }
    };

    return arrayOfDecodedText.join('');
}



module.exports = {
    decode
}