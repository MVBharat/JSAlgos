// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ============= Reverse String =====================

// ============= Solution Method 2 =====================

function reverse(str){
    reversed = '';
    for(character of str){
        reversed = character + reversed;        
    }
    return reversed;
}

module.exports = reverse;

// ============= Solution Method 1 =====================

// function reverse(str) {
    //     return str.split('').reverse().join('')
    // }


// ============= Solution Method 3 =====================

// function reverse(str){
//     return str.split('').reduce((rev, char) => char + rev)
// }

