// Bai 1 :
var sum = function (...args) {
  var tong = 0;
  args.forEach(function (arg) {
    if (!isNaN(arg) && arg !== Infinity && typeof arg === "number") {
      tong += arg;
    } else {
      console.log("Tham so truyen vao khong phai so");
      return;
    }
  });
  return tong;
};

// console.log(sum(1, "2", 3));

// BAI 2 :s
Number.prototype.getCurrency = function (currency) {
  return this.toLocaleString("vi") + " " + currency;
};
String.prototype.getCurrency = function (currency) {
  var value = +this;
  return value.getCurrency(currency);
};
//Case 1
var price = 12000;
console.log(price.getCurrency("đ")); //Hiển thị: 12,000 đ

//Case 2
var price = "12000000";
console.log(price.getCurrency("đ")); //Hiển thị: 12,000,000 đ

// Bai 3 :
function convertToNestedArray(flatArray) {
  const categoriesMap = {};
  const nestedCategories = [];

  flatArray.forEach(function (item) {
    const { id, name, parent } = item; // trich xuat doi tuong
    if (!categoriesMap[id]) {
      categoriesMap[id] = { id, name };
    } else {
      categoriesMap[id].name = name;
    }

    if (parent === 0) {
      nestedCategories.push(categoriesMap[id]);
    } else {
      categoriesMap[parent] = categoriesMap[parent] || { children: [] };
      categoriesMap[parent].children = categoriesMap[parent].children || [];
      categoriesMap[parent].children.push(categoriesMap[id]);
    }
  });

  return nestedCategories;
}

var flatArray = [
  {
    id: 1,
    name: "Chuyên mục 1",
    parent: 0,
  },
  {
    id: 2,
    name: "Chuyên mục 2",
    parent: 0,
  },
  {
    id: 3,
    name: "Chuyên mục 3",
    parent: 0,
  },
  {
    id: 4,
    name: "Chuyên mục 2.1",
    parent: 2,
  },
  {
    id: 5,
    name: "Chuyên mục 2.2",
    parent: 2,
  },
  {
    id: 6,
    name: "Chuyên mục 2.3",
    parent: 2,
  },
  {
    id: 7,
    name: "Chuyên mục 3.1",
    parent: 3,
  },
  {
    id: 8,
    name: "Chuyên mục 3.2",
    parent: 3,
  },
  {
    id: 9,
    name: "Chuyên mục 3.3",
    parent: 3,
  },
  {
    id: 10,
    name: "Chuyên mục 2.2.1",
    parent: 5,
  },
  {
    id: 11,
    name: "Chuyên mục 2.2.2",
    parent: 5,
  },
];

var nestedArr = convertToNestedArray(flatArray);
console.log(nestedArr);

Array.prototype.reduce2 = function (callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : this[0];

  for (let i = initialValue !== undefined ? 0 : 1; i < this.length; i++) {
    accumulator = callback(accumulator, this[i]);
  }

  return accumulator;
};
const numbers = [1, 2, 3, 4, 5];
const s = numbers.reduce2(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(s);
