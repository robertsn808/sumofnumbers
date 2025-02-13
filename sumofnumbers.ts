function sumFor(list: number[]): number {
  let total = 0;
  list.forEach((nums) => {
    total += nums;
  });
  console.log(total);
  return total;
}

function sumWhile(list: number[]): number {
  let total = 0;
  let count = 0;
  while (count < list.length) {
    total += list[count];
    count++;
  }
  console.log(total);
  return total;
}

function sumRecursion(list: number[], index = 0, total = 0): number {
  if (index >= list.length) {
    console.log(total);
    return total;
  }
  const newTotal = total + list[index];
  return sumRecursion(list, index + 1, newTotal);
}

function sumTheFunctionalWay(list: number[]): number {
  const newSum = list.reduce((numInList, total) => numInList + total, 0);
  console.log(newSum);
  return newSum;
}

export {
  sumFor, sumWhile, sumRecursion, sumTheFunctionalWay,
};
