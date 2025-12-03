function solution(str) {
    return str
        .split(/([A-Z][A-Z])/gi)
        .filter(Boolean)
        .map(char => (char.length % 2 === 0 ? char : `${char}_`))
}

function solution(str) {

    const regexp = /\w{1,2}/gi;
    let match = str.match(regexp);
    let responseArray = [];

    if(match != null){

    
    for (let i = 0; i < match.length; i++) {
        if (match[i].length > 1) {
            responseArray.push(match[i]);
        } else {
            responseArray.push(match[i] + '_');
        }
    }
}

    return responseArray;

}

console.log(solution("abcdef"))
console.log(solution("abcdefg"))
console.log(solution(""))