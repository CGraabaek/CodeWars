function moveZeros(arr) {
  const zeroCount = arr.filter(item => item === 0);
  let arrayWithoutZeros = arr.filter(item => item !== 0);

  // for (let i = 0; i < zeroCount; i++) {
  //   arrayWithZeroesAtEnd.push(0);
  // }

  // return arrayWithZeroesAtEnd;

  //Trying copy array insted
  return [...arrayWithoutZeros, ...zeroCount]
}


console.log(moveZeros(['a', 'b', null, 'c', 'd', 1, 1, 3, 1, 9, {}, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]))