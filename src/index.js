const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decodeLetter(letter) {
    let morseChar = ''
    for (let i = 0; i < 10; i = i+2) {
        let char = letter.substr(i, 2)
        switch (char) {
            case '**':
                return ' '
            case '10':
                morseChar += '.'
                break
            case '11':
                morseChar += '-'
                break
        }
    }
    return MORSE_TABLE[morseChar]
}

function decode(expr) {
    let text = '';
    for (let i = 0; i < expr.length; i += 10) {
        let letter = expr.substr(i, 10)
        text += decodeLetter(letter)
    }
    return text
}

module.exports = {
    decode
}