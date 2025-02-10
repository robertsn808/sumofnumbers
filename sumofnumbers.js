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
    console.log(total);
    return total;
}
function sumWhile(list) {
    var total = 0;
    var count = 0;
    while (count < list.length) {
        total += list[count];
        count++;
    }
    console.log(total);
    return total;
}
function sumRecursion(list, index, total) {
    if (index === void 0) { index = 0; }
    if (total === void 0) { total = 0; }
    if (index >= list.length) {
        console.log(total);
        return total;
    }
    var newTotal = total + list[index];
    return sumRecursion(list, index + 1, newTotal);
}
function sumTheFunctionalWay(list) {
    var newSum = list.reduce(function (numInList, total) { return numInList + total; }, 0);
    console.log(newSum);
    return newSum;
}
