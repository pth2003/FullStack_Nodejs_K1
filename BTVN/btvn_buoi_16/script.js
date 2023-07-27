// Bai 1 : hoan vi hai so a b
var a = 3,
  b = 5;
a = a + b;
b = a - b;
a = a - b;
console.log(`a: ${a} va b : ${b}`);
//bai 2 : tinh bieu thuc s
var S = (10 + 20 + 5) ^ (10 / 2);
console.log(`Gia tri cua S : ${S}`);

//Bai 3 : tim so lon nhat
var c = 5,
  d = 2,
  e = 8;
var max = c;
if (max < d) {
  max = d;
} else if (max < e) {
  max = e;
}
console.log(`So lon nhat : ${max}`);

//Bai 4: kiem tra cung dau
var f = 2,
  g = -3;
if (f * g < 0) {
  console.log("Khac dau");
} else {
  console.log("Cung dau");
}

//Bai 5 : sap xep 3 so
var a1 = 6,
  b1 = 2,
  c1 = 3;
var tmp;
console.log(`day so truoc khi chuyen : ${a1}, ${b1}, ${c1}`);
if (a1 > b1) {
  tmp = a1;
  a1 = b1;
  b1 = tmp;
}
if (a1 > c1) {
  tmp = a1;
  a1 = c1;
  c1 = tmp;
}
if (b1 > c1) {
  tmp = b1;
  b1 = c1;
  c1 = tmp;
}
console.log(`day so sau khi chuyen :  ${a1}, ${b1}, ${c1}`);
