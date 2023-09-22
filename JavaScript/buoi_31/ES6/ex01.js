/*
    Scope : pham vi

    1. global scope : pham vi toan cuc
    2. Local scope : pham vi cuc bo
    - function scope : pham vi trong ham
    - block scope : pham vi trong 1 khoi 
*/
// global scope
function handle() {
  //func scope
  var a = 10;
  if (a >= 10) {
    // block scope
    for (var i = 0; i < 10; i++) {
      // block scope
    }
  }
}

// let , const
// let dung nhu var nhung khong duoc dung ngoai pham vi khai bao
// let duoc phep thay doi
// let khong duoc khai bao nhieu lan trong cung 1 scope

// const khong duoc phep thay doi
// khi khai bao const thi bat buoc phai gan gia tri

for (var i = 0; i < 10; i++) {
  let a = 10;
  console.log(a, i);
  if (i === 3) {
    let a = 20;
    console.log(a, i);
  }
}
