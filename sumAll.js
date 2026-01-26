function sumAll(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const numbers = Array.from({ length: max - min + 1 })
    .map((_, i) => min + i);

  return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sumAll([4,1]));
console.log(sumAll([1,4]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));

