// xu ly thoi gian

const days = [
  "Chu nhat",
  "Thu hai",
  "Thứ ba",
  "Thu tu",
  "Thu nam",
  "Thu sau",
  "Thu bay",
];

setInterval(() => {
  const today = new Date();
  const output = `${days[today.getDay()]}, ngay ${today.getDate()} thang ${
    today.getMonth() + 1
  } nam ${today.getFullYear()}, ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

  document.body.innerHTML = output;
}, 1000);
// date format
// dinh dang iso
// viet thuong

// địng dạng LONG
// viết tháng bằng  tiếng anh

// định dạng SHORT
// định dạng đầy đủ

// Hàm xử lý get
// getDate() : lấy ngày
// getDay() : lấy ngày trong tuần
// getFullYear : lấy năm đầy đủ (yyyy)
// getYear : 2 sô cuối của nawm
// getHour :

// Hàm xử lý set
