"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumFor = sumFor;
exports.sumWhile = sumWhile;
exports.sumRecursion = sumRecursion;
exports.sumTheFunctionalWay = sumTheFunctionalWay;
function sumFor(list) {
    var total = 0;
    list.forEach(function (nums) {
        total += nums;
    });
    console.log("sumFor total is ".concat(total));
    return total;
}
function sumWhile(list) {
    var total = 0;
    var count = 0;
    while (count < list.length) {
        total += list[count];
        count++;
    }
    console.log("sumWhile total is ".concat(total));
    return total;
}
function sumRecursion(list, index, total) {
    if (index === void 0) { index = 0; }
    if (total === void 0) { total = 0; }
    if (index >= list.length) {
        console.log("sumRecursion total is ".concat(total));
        return total;
    }
    var newTotal = total + list[index];
    return sumRecursion(list, index + 1, newTotal);
}
function sumTheFunctionalWay(list) {
    var theSum = list.reduce(function (total, numInList) { return total + numInList; }, 0);
    console.log("sumTheFunctionalWay total is ".concat(theSum));
    return theSum;
}
console.log(sumFor([1, 2, 3, 4]));
console.log(sumWhile([1, 2, 3, 4]));
console.log(sumRecursion([1, 2, 3, 4]));
console.log(sumTheFunctionalWay([1, 2, 3, 4]));
console.log('sumTheFunctionalWay: ', sumTheFunctionalWay([1, 2, 3, 4]));
