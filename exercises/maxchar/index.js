// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxCharacter("abcccccccd") === "c"
// maxCharacter("apple 1231111") === "1"

function maxChar(str) {
    const charMap = {}
    let max = 0;
    let maxCharacter = '';

    for (let char of str){
        if(charMap[char]){
            charMap[char]++;
        }
        else{
            charMap[char] = 1
        }
    }
    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char]
            maxCharacter = char;
        }
    }

    return maxCharacter;
}

module.exports = maxChar;
