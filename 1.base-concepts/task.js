"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let totalDebth = amount - contribution;
  let monthInterest = percent / 100 / 12;
  let payment =
    totalDebth *
    (monthInterest + monthInterest / ((1 + monthInterest) ** countMonths - 1));
  //let totalAmountToPay = (payment * countMonths).toFixed(2);
  return Number((payment * countMonths).toFixed(2));
}
