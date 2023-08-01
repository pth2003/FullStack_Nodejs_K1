// var action = "destroy";
// switch (action) {
//   case "create":
//   case "add":
//     console.log("Them");
//     break;
//   case "update":
//   case "edit":
//     console.log("Sua");
//     break;
//   case "delete":
//     console.log("Xoa");
//     break;
//   default:
//     console.log("Danh sach");
//     break;
// }
// if (action === "create" || action === "insert") {
//   console.log("Them");
// } else if (action === "edit" || action === "update") {
//   console.log("Sua");
// } else if (action === "delete" || action === "destroy") {
//   console.log("xoa");
// } else {
//   console.log("Danh sach");
// }
var month = 2;
var year = 2020;
if (month > 0 && month >= 1 && month <= 12 && month % 1 == 0) {
  var days;
  month = +month;
  switch (month) {
    case 2:
      if (year % 4 == 0) {
        days = 28;
      } else {
        days = 29;
      }

      break;
    case 4:
    case 6:
    case 8:
    case 11:
      days = 30;
      break;
    default:
      days = 31;
  }
  console.log(`Thang ${month} co ${days} ngay`);
} else {
  console.log("Khong hop le");
}
