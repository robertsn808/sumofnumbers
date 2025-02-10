function sumFor(list: number[]): number {
  let total = 0;
  list.forEach((nums) => {
    total += nums;
  });
  console.log(`sumFor total is ${total}`);
  return total;
}

function sumWhile(list: number[]): number {
  let total = 0;
  let count = 0;
  while (count < list.length) {
    total += list[count];
    count++;
  }
  console.log(`sumWhile total is ${total}`);
  return total;
}

function sumRecursion(list: number[], index = 0, total = 0): number {
  if (index >= list.length) {
    console.log(`sumRecursion total is ${total}`);
    return total;
  }

  const newTotal = total + list[index];

  return sumRecursion(list, index + 1, newTotal);
}

function sumTheFunctionalWay(list: number[]): number {
  const theSum = list.reduce((total, numInList) => total + numInList, 0);
  console.log(`sumTheFunctionalWay total is ${theSum}`);
  return theSum;
}

console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
console.log('sumTheFunctionalWay: ', sumTheFunctionalWay([1, 2, 3, 4]));
export {
  sumFor, sumWhile, sumRecursion, sumTheFunctionalWay,
};
