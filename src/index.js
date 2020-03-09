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

function decode(expr) {
    let arr = expr.match(/.{1,10}/g);

    arr = arr.map((val) => val = val.replaceAll("10", "."));
    arr = arr.map((val) => val = val.replaceAll("11", "-"));
    arr = arr.map((val) => val = val.replaceAll("0", ""));
    arr = arr.map((val) => val = val.replaceAll("**********", " "));
    
    arr = arr.map((val) => val = MORSE_TABLE[val] || val);

    return arr.join("");
}

String.prototype.replaceAll = function(search, replace){
    return this.split(search).join(replace);
}

module.exports = {
    decode
}