function nextBigger(num) {

    // + is the fasted way to cast to a number | https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unary_plus
    const max = getMax(num);

    for (let i = num + 1; i <= max; i++) {
        if (max === getMax(i)) return i;
    }

    return -1;
}

const getMax = num => {
    return +("" + num).split('').sort((a, b) => b - a).join('');
}

module.exports = nextBigger;
