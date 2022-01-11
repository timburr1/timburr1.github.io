/** Elves 
const D4 = ['I', 'A', 'E', 'O']
const D6A = ['I', 'A', 'E', 'O', '\u00CB', 'U']
const D6B = ['I', 'A', 'E', 'O', 'AE', 'U']
const D6C = ['I', 'A', 'E', 'O', '\u00DA', 'U']
const D8 = ['TH', 'EL', 'AS', 'IL', 'IR', 'OR', 'OD', 'AN']
const D10 = ['R', 'N', 'D', 'L', 'G', 'H', 'T', 'M', 'F', 'S']
const D12 = ['R', 'N', 'D', 'L', 'G', 'H', 'T', 'M', 'F', 'S', 'C', 'W']
const D20 = ['R', 'N', 'D', 'L', 'G', 'H', 'T', 'M', 'F', 'S', 'C', 'W',
            'P', 'B', 'Y', 'V', 'R', 'N', 'D', 'L']
**/

const D4 = ['I', 'A', 'E', 'O']
const D6A = ['I', 'A', 'E', 'O', 'Y', 'U']
const D6B = ['I', 'A', 'E', 'O', 'AE', 'U']
const D6C = ['L', 'N' ,'R', 'G', 'D', 'T']
const D8A = ['IR', 'IC', 'EL', 'IL', 'OR', 'AR', 'ON', 'EN']
const D8B = ['IR', 'RA', 'NA', 'DA', 'YM', 'YN', 'TH', 'EA']
const D10 = ['L', 'N', 'R', 'G', 'D', 'M', 'TH', 'S', 'V', 'B']
const D12 = ['L', 'N', 'R', 'G', 'D', 'M', 'S', 'V', 'B', 'C', 'K', 'F'] 
const D20 = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 
            'N', 'P', 'QU', 'R', 'S', 'T', 'V', 'W', 'Y', 'Z']

function roll() {
    var letters = []

    letters.push(D4[random(D4.length)])
    letters.push(D6A[random(D6A.length)])
    letters.push(D6B[random(D6B.length)])
    letters.push(D6C[random(D6C.length)])
    letters.push(D8A[random(D8.length)])
    letters.push(D8A[random(D8.length)])
    letters.push(D8B[random(D8.length)])
    letters.push(D8B[random(D8.length)])
    letters.push(D10[random(D10.length)])
    letters.push(D12[random(D12.length)])
    letters.push(D20[random(D20.length)])    
    letters.push(D20[random(D20.length)])

    document.getElementById("results").innerHTML += shuffle(letters) + '<br>';
}

function random(max) {
    return Math.floor(Math.random() * max);
}

function shuffle(letters){
    var result = ""

    while(letters.length > 0) {
        var idx = random(letters.length)
        result += letters[idx] + ', '
        letters.splice(idx, 1)
    }

    return result;
}