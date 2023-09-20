// HTMLElement

// var title = document.querySelector(".title");
// console.log(title);

// custom element

/*  
    - ky thuat tao ra 1 the html rieng
    - the html nay phai co 2 tu tro len va co gach ngang
    - ky thuat de phan chia cac thanh phan trong trang web -> hay con goi la component

Su dung : 
    - customElements
    - ke thua tu HTMLElemnt
    - lifecycle callbacks -> vong doi tu luc 1 component duoc tao ra cho den luc xoa no

*/
//  Tao component : 1 ham hoac 1 class

var HelloWorld = function () {
  return Reflect.construct(HTMLElement, [], this.constructor);
};

HelloWorld.prototype = Object.create(HTMLElement.prototype);

// Vong doi component
HelloWorld.prototype.constructor = HelloWorld;

HelloWorld.prototype.connectedCallback = function () {
  console.log("connected");
  this.innerText = "hello world";
};

// dang ki component
customElements.define("hello-world", HelloWorld);
