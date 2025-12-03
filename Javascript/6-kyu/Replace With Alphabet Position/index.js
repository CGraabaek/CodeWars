/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
*/



function alphabetPosition(text) {
    let ans = "";
    const lowerCase = text.toLowerCase();
    // Lowercase letters are from 97 - 122.
    const charCodeDiff = 96; 

    for (c in lowerCase) {
        let char = lowerCase[c]
        let posNumber = char.charCodeAt();

        if (posNumber > 96 && posNumber < 123) {
            const position = char.charCodeAt() - charCodeDiff;

            ans += position + " ";
        }
    }

    return ans.trim();
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."))