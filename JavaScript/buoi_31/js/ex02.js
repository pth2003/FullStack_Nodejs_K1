// Tao component de hien thi hinh anh
// Cac thuoc tinh  :
/*
    -link  : duong dan anh
    -width : chieu rong
    -height : chieu cao
    -style : css inline
*/

// var ShowImage = function () {
//   return Reflect.construct(HTMLElement, [], this.constructor);
// };

Component.create("show-image", function () {
  var shadow = this.attachShadow({ mode: "open" });
  var link = this.getAttribute("link");
  var width = this.getAttribute("width");
  var height = this.getAttribute("height");
  var style = this.getAttribute("style");

  shadow.innerHTML = `<img src="${link}"  width="${width}" height="${height}" style="${style}">`;
});

Component.create("box-image", function () {
  var style = document.createElement("style");
  style.innerHTML = `
        .box-image {
            border : 3px solid red;
            padding : 10px;
            display : inline-block;
        }
    `;
  this.prepend(style);
  this.innerHTML = `<div class = "box-image"> ${this.innerHTML}</div>`;
});
