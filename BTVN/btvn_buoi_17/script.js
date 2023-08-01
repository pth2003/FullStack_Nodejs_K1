"use strict";
// bai 1 :
let sokm = 2;
let tongTien;
if (sokm === 1) {
  tongTien = 15000;
} else if (sokm > 1 && sokm <= 5) {
  tongTien = 15000 + (sokm - 1) * 13500;
} else if (sokm > 5) {
  tongTien = 15000 + 4 * 13500 + (sokm - 5) * 11000;
  if (sokm > 120) {
    (tongTien = tongTien - tongTien * 0), 1;
  }
}

console.log(`Tong tien = ${tongTien}`);

//Bai 2 :
let soDien = 52;
let soTien;
if (soDien > 0 && soDien <= 50) {
  soTien = soDien * 1678;
} else if (soDien >= 51 && soDien <= 100) {
  soTien = 50 * 1678 + soDien * 1734;
} else if (soDien >= 101 && soDien <= 200) {
  soTien = 50 * 1678 + 50 * 1734 + soDien * 2014;
} else if (soDien >= 201 && soDien <= 300) {
  soTien = 50 * 1678 + 50 * 1734 + 100 * 2014 + soDien * 2536;
} else if (soDien >= 301 && soDien <= 400) {
  soTien = 50 * 1678 + 50 * 1734 + 100 * 2014 + 100 * 2536 + soDien * 2834;
} else {
  soTien =
    50 * 1678 +
    50 * 1734 +
    100 * 2014 +
    100 * 2536 +
    100 * 2834 +
    soDien * 2927;
}

console.log("So tien can thanh toan la  : " + soTien);

// bai 3 :
var n = 5;
var sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i * (i + 1);
}
console.log(`Tong bang :  ${sum}`);

// bai 4 :
let a = 13;
let ktSNT = function (n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
};

if (ktSNT(a)) {
  console.log(`${a} la so nguyen to`);
} else {
  console.log(`${a} khong la so nguyen to`);
}

// bai 5 :
let soDong = 5;
let x = 1;
for (var i = 1; i <= soDong; i++) {
  let row = "";
  for (var j = 1; j <= i; j++) {
    row += x + " ";
    x++;
  }
  console.log(row);
}

// bai 6 :
let kt = 6;
for (var i = 1; i <= kt; i++) {
  let row = "";
  for (var j = 1; j <= kt; j++) {
    if ((i + j) % 2 === 0) {
      row += "X";
    } else {
      row += " ";
    }
  }
  console.log(row);
}

// Bai 7 :
let size = 10;
for (var i = 1; i <= size; i++) {
  let row = "";
  for (var j = 1; j <= size; j++) {
    var kq = i * j;
    row += `${i} * ${j} =${kq}\t`;
  }
  console.log(row);
}

// bai 8  :
let s = 0;
let N = 5;
for (var i = 1; i <= N; i++) {
  s += 1 / i;
}
console.log(s);
