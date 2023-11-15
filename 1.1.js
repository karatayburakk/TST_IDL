function declarative(array, fn) {
  return array.map(fn);
}

function imperative(array, fn) {
  const myArr = [];

  for (let i = 0; i < array.length; i++) {
    myArr.push(fn(array[i]));
  }

  return myArr;
}
