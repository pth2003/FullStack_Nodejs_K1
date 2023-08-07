// bai 1 :

var a = [1, 5, 2, 4, 7, 3];
var max = a[0],
  min = a[0];
var vtMAX = 0,
  vtMIN = 0;
for (var i in a) {
  if (a[i] > max) {
    max = a[i];
    vtMAX = i;
  }
}
for (var i in a) {
  if (a[i] < min) {
    min = a[i];
    vtMIN = i;
  }
}
console.log(`Gia tri lon nhat la : ${max} tai vi tri ${vtMAX}`);
console.log(`Gia tri lon nhat la : ${min} tai vi tri ${vtMIN}`);
// bai 2
var numbers = [1, 2, 11, 4, 8, 0];
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
var prime = [];
for (var i in numbers) {
  if (isPrime(numbers[i])) {
    prime.push(numbers[i]);
  }
}
var sum = 0,
  tb = 0;
for (var i in prime) {
  sum += prime[i];
}
tb = sum / prime.length;
if (prime.length === 0) {
  console.log("Khong co so nguyen to");
} else {
  console.log(`Trung binh cac so nguyen to la : ${tb}`);
}
var n = [1, 2, 8, 2, 8, 0];
for (var i = 0; i < n.length; i++) {
  for (var j = i + 1; j < n.length; j++) {
    if (n[i] === n[j]) {
      n.splice(j, 1);
    }
  }
}

console.log(n);

// bai 4 :
var number = [5, 1, 9, 8, 10];
var element = 4;
number.push(element);
number.sort(function (a, b) {
  if (a < b) {
    return -1;
  }
});
console.log(number);
