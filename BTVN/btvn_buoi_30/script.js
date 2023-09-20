const boldBtn = document.querySelector("#bold-btn");

const underlineBtn = document.querySelector("#underline-btn");
const italicBtn = document.querySelector("#italic-btn");
const colorBtn = document.querySelector("#color-btn");
const newBtn = document.querySelector("#new-btn");
const txtBtn = document.querySelector("#txt-btn");
const pdfBtn = document.querySelector("#pdf-btn");
const content = document.querySelector("#content");
const filename = document.querySelector("#filename-input");
const char = document.querySelector(".char");
const word = document.querySelector(".word");
boldBtn.addEventListener("click", function () {
  document.execCommand("bold");
});

underlineBtn.addEventListener("click", function () {
  document.execCommand("underline");
});

italicBtn.addEventListener("click", function () {
  document.execCommand("italic");
});

colorBtn.addEventListener("input", function () {
  document.execCommand("foreColor", false, colorBtn.value);
});

newBtn.addEventListener("click", function () {
  content.innerHTML = "";
});

txtBtn.addEventListener("click", function () {
  const a = document.createElement("a");
  const blob = new Blob([content.innerText]);
  const dataUrl = URL.createObjectURL(blob);
  a.href = dataUrl;
  a.download = `${filename.value}.txt`;
  a.click();
});

pdfBtn.addEventListener("click", function () {
  var opt = {
    filename: `${filename.value}.pdf`,
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(content).save();
});

content.addEventListener("input", function () {
  if (content.innerText === "") {
    char.innerHTML = `Số ký tự : ${0}`;
    word.innerHTML = `Số từ : ${0}`;
  } else {
    var count = content.innerText.length;
    char.innerHTML = `Số ký tự : ${count}`;
    var sentence = content.innerText.trim();
    var countWord = sentence.split(" ").length;
    word.innerHTML = `Số từ : ${countWord}`;
  }
});
