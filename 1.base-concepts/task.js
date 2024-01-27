"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = (b**2) - (4*a*c);

  if (d < 0 ) {
    arr = [];
  } else if (d === 0) {
    let x = -b/(2*a);
    arr.push(x);
  } else {
    let x1 = (-b + Math.sqrt(d))/(2*a);
    let x2 = (-b - Math.sqrt(d))/(2*a);
    arr.push(x1, x2)
  }
  return arr;
}

function calculateTotalMortgage (percent, contribution, amount, countMonths) {
totalDebth = amount - contribution;
monthInterest = (percent / 100) / 12;
payment = totalDebth * (monthInterest + (monthInterest / (((1 + monthInterest) ** countMonths) - 1)));
totalAmountToPay = (payment * countMonths).toFixed(2);
return Number(totalAmountToPay);  
}


