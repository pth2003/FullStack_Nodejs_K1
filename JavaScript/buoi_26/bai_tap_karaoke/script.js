var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");

var progressBarWidth = progressBar.clientWidth;
var progressDot = progress.querySelector("span");
var isDrag = false;
var initialClientX = 0;
var initialRate = 0;
var rate = 0;
var hanldeChange = function (value) {
  console.log(value);
};
var audio = document.querySelector(".audio");

var currentTimeElement = progressBar.previousElementSibling;
var durationTimeElement = progressBar.nextElementSibling;

var playBtn = document.querySelector(".play-btn");
var playIcon = `<i class="fa-solid fa-play"></i>`;
var pauseIcon = `<i class="fa-solid fa-pause"></i>`;
var getTime = function (seconds) {
  var mins = Math.floor(seconds / 60);
  var sec = Math.floor(seconds - mins * 60);
  if (mins > 10 || sec < 10) {
    return `0${mins}:0${sec}`;
  }
  return `${mins}:${sec}`;
};
progressBar.addEventListener("mousedown", function (e) {
  //   Tinh ti le phan tram giua vi tri click voi chieu rong
  if (e.which === 1) {
    rate = (e.offsetX * 100) / progressBarWidth;
    progress.style.width = `${rate}%`;
    initialRate = rate; // vị trị khi click
    isDrag = true;
    initialClientX = e.clientX;
    var currentTime = (audio.duration * rate) / 100;
    currentTimeElement.innerHTML = getTime(currentTime);
    audio.currentTime = currentTime;
  }
});
progressDot.addEventListener("mousedown", function (e) {
  e.stopPropagation(); // xu ly tình trạng nổi bọt của span
  isDrag = true;
  initialClientX = e.clientX;
});

document.addEventListener("mousemove", function (e) {
  if (isDrag) {
    var space = e.clientX - initialClientX;
    rate = (space * 100) / progressBarWidth + initialRate;
    if (rate < 0) {
      rate = 0;
    } else if (rate > 100) {
      rate = 100;
    }
    if (rate >= 0 && rate <= 100) {
      progress.style.width = `${rate}%`;
    }
  }
});
document.addEventListener("mouseup", function () {
  isDrag = false;
  initialRate = rate;
  var currentTime = (audio.duration * rate) / 100;
  currentTimeElement.innerText = getTime(currentTime);
  audio.currentTime = currentTime;
});

/*
    Khi bấm chuột  vào chấm :
        lấy ra vị trí clientX
    Khi kéo chuột :
        lấy clientX theo vị trí
        tính khoảng cách kéo : clientX mới - clientX ban đầu
*/

audio.addEventListener("loadeddata", function () {
  // dinh dang ve so phut gay
  durationTimeElement.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  if (audio.paused) {
    audio.play();
    this.innerHTML = pauseIcon;
  } else {
    audio.pause();
    this.innerHTML = playIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  if (!isDrag) {
    currentTimeElement.innerHTML = getTime(this.currentTime);

    // Tinh ty le phan tram
    rate = (this.currentTime / this.duration) * 100;
    // Update vao timer
    progress.style.width = `${rate}%`;
    hanldeKaraoke(this.currentTime);
  }
});

var timer = progressBar.querySelector(".timer");

progressBar.addEventListener("mousemove", function (e) {
  timer.style.display = "block";
  timer.style.left = `${e.offsetX}px`;
  rate = (e.offsetX * 100) / this.clientWidth;
  var currentTime = (audio.duration * rate) / 100;
  timer.innerText = getTime(currentTime);
});
progressBar.addEventListener("mouseout", function () {
  timer.style.display = "none";
});

audio.addEventListener("ended", function () {
  rate = 0;
  audio.currentTime = 0;
  progress.style.width = 0;
  playBtn.innerHTML = playIcon;
});

var lyric = `{"err":0,"msg":"Success","data":{"sentences":[{"words":[{"startTime":18120,"endTime":18650,"data":"Có"},{"startTime":18650,"endTime":19190,"data":"cơn"},{"startTime":19190,"endTime":19190,"data":"mưa"},{"startTime":19190,"endTime":19720,"data":"nào"},{"startTime":19720,"endTime":20270,"data":"đôi"},{"startTime":20270,"endTime":20820,"data":"mình"},{"startTime":20820,"endTime":21380,"data":"đi"},{"startTime":21380,"endTime":21890,"data":"qua"}]},{"words":[{"startTime":21890,"endTime":22410,"data":"Anh"},{"startTime":22410,"endTime":22940,"data":"đến"},{"startTime":22940,"endTime":23480,"data":"bên"},{"startTime":23480,"endTime":24020,"data":"em"}]},{"words":[{"startTime":24020,"endTime":24020,"data":"Ngày"},{"startTime":24020,"endTime":24550,"data":"đôi"},{"startTime":24550,"endTime":25070,"data":"mình"},{"startTime":25070,"endTime":25580,"data":"chia"},{"startTime":25580,"endTime":26680,"data":"xa"}]},{"words":[{"startTime":26680,"endTime":26680,"data":"Mỗi"},{"startTime":26680,"endTime":27180,"data":"lá"},{"startTime":27180,"endTime":27720,"data":"rơi"},{"startTime":27720,"endTime":27720,"data":"bên"},{"startTime":27720,"endTime":28820,"data":"hồ"}]},{"words":[{"startTime":28820,"endTime":29360,"data":"Nỗi"},{"startTime":29360,"endTime":29910,"data":"cô"},{"startTime":29910,"endTime":30420,"data":"đơn"},{"startTime":30420,"endTime":30940,"data":"lớn"},{"startTime":30940,"endTime":33940,"data":"lên"}]},{"words":[{"startTime":35210,"endTime":35210,"data":"Mùa"},{"startTime":35210,"endTime":35710,"data":"thu"},{"startTime":35710,"endTime":36260,"data":"ấy"}]},{"words":[{"startTime":36260,"endTime":36260,"data":"Em"},{"startTime":36260,"endTime":36800,"data":"không"},{"startTime":36800,"endTime":37320,"data":"còn"},{"startTime":37320,"endTime":37860,"data":"bên"},{"startTime":37860,"endTime":38390,"data":"cạnh"},{"startTime":38390,"endTime":38910,"data":"anh"},{"startTime":38910,"endTime":39420,"data":"nữa"}]},{"words":[{"startTime":39420,"endTime":40010,"data":"Anh"},{"startTime":40010,"endTime":40010,"data":"vẫn"},{"startTime":40010,"endTime":40520,"data":"đứng"},{"startTime":40520,"endTime":40520,"data":"nơi"},{"startTime":40520,"endTime":41100,"data":"đây"}]},{"words":[{"startTime":41100,"endTime":41610,"data":"Chờ"},{"startTime":41610,"endTime":42150,"data":"em"},{"startTime":42150,"endTime":42670,"data":"cùng"},{"startTime":42670,"endTime":43180,"data":"cơn"},{"startTime":43180,"endTime":43730,"data":"mưa"}]},{"words":[{"startTime":43730,"endTime":44250,"data":"Chúng"},{"startTime":44250,"endTime":44770,"data":"ta"},{"startTime":44770,"endTime":44770,"data":"sau"},{"startTime":44770,"endTime":45870,"data":"này"}]},{"words":[{"startTime":45870,"endTime":46390,"data":"Chẳng"},{"startTime":46390,"endTime":46930,"data":"có"},{"startTime":46930,"endTime":47460,"data":"chúng"},{"startTime":47460,"endTime":47990,"data":"ta"},{"startTime":47990,"endTime":47990,"data":"bây"},{"startTime":47990,"endTime":50990,"data":"giờ"}]},{"words":[{"startTime":52270,"endTime":52270,"data":"Một"},{"startTime":52270,"endTime":52810,"data":"người"},{"startTime":52810,"endTime":52810,"data":"âm"},{"startTime":52810,"endTime":53320,"data":"thầm"}]},{"words":[{"startTime":53320,"endTime":53320,"data":"Đứng"},{"startTime":53320,"endTime":53850,"data":"dưới"},{"startTime":53850,"endTime":54390,"data":"mưa"},{"startTime":54390,"endTime":54910,"data":"nhìn"},{"startTime":54910,"endTime":55970,"data":"em"}]},{"words":[{"startTime":55970,"endTime":56500,"data":"Một"},{"startTime":56500,"endTime":56500,"data":"người"},{"startTime":56500,"endTime":57040,"data":"giữa"},{"startTime":57040,"endTime":57570,"data":"thành"},{"startTime":57570,"endTime":58120,"data":"phố"}]},{"words":[{"startTime":58120,"endTime":58120,"data":"Vẫn"},{"startTime":58120,"endTime":58650,"data":"cứ"},{"startTime":58650,"endTime":59170,"data":"chờ"},{"startTime":59170,"endTime":60230,"data":"em"}]},{"words":[{"startTime":60230,"endTime":60770,"data":"Vì"},{"startTime":60770,"endTime":61310,"data":"sao"},{"startTime":61310,"endTime":61310,"data":"cứ"},{"startTime":61310,"endTime":62380,"data":"nơi"},{"startTime":62380,"endTime":62380,"data":"đó"},{"startTime":62380,"endTime":63420,"data":"mà"}]},{"words":[{"startTime":63420,"endTime":63930,"data":"Anh"},{"startTime":63930,"endTime":64500,"data":"dần"},{"startTime":64500,"endTime":65000,"data":"xa"},{"startTime":65000,"endTime":65530,"data":"nơi"},{"startTime":65530,"endTime":68530,"data":"đâu"}]},{"words":[{"startTime":69280,"endTime":69280,"data":"Giờ"},{"startTime":69280,"endTime":69790,"data":"này"},{"startTime":69790,"endTime":70310,"data":"chỉ"},{"startTime":70310,"endTime":70310,"data":"nỗi"},{"startTime":70310,"endTime":70870,"data":"nhớ"}]},{"words":[{"startTime":70870,"endTime":71370,"data":"Cứ"},{"startTime":71370,"endTime":71910,"data":"vơi"},{"startTime":71910,"endTime":72460,"data":"nhiều"},{"startTime":72460,"endTime":73510,"data":"thêm"}]},{"words":[{"startTime":73510,"endTime":74050,"data":"Giờ"},{"startTime":74050,"endTime":74050,"data":"này"},{"startTime":74050,"endTime":74570,"data":"chỉ"},{"startTime":74570,"endTime":75100,"data":"mình"},{"startTime":75100,"endTime":75640,"data":"ta"}]},{"words":[{"startTime":75640,"endTime":75640,"data":"Với"},{"startTime":75640,"endTime":76160,"data":"những"},{"startTime":76160,"endTime":76680,"data":"tháng"},{"startTime":76680,"endTime":77230,"data":"năm"},{"startTime":77230,"endTime":77780,"data":"dài"}]},{"words":[{"startTime":77780,"endTime":78330,"data":"Có"},{"startTime":78330,"endTime":78820,"data":"khi"},{"startTime":78820,"endTime":78820,"data":"em"},{"startTime":78820,"endTime":79360,"data":"chẳng"},{"startTime":79360,"endTime":79360,"data":"còn"},{"startTime":79360,"endTime":79900,"data":"yêu"},{"startTime":79900,"endTime":81390,"data":"anh"}]},{"words":[{"startTime":81390,"endTime":81390,"data":"Như"},{"startTime":81390,"endTime":81920,"data":"trái"},{"startTime":81920,"endTime":81920,"data":"tim"},{"startTime":81920,"endTime":82470,"data":"ta"},{"startTime":82470,"endTime":83050,"data":"từng"},{"startTime":83050,"endTime":85160,"data":"chung"},{"startTime":85160,"endTime":85160,"data":"lối"},{"startTime":85160,"endTime":87700,"data":"đi"}]},{"words":[{"startTime":87700,"endTime":87700,"data":"Anh"},{"startTime":87700,"endTime":88080,"data":"đi"},{"startTime":88080,"endTime":88490,"data":"một"},{"startTime":88490,"endTime":88490,"data":"vòng"},{"startTime":88490,"endTime":88870,"data":"thị"},{"startTime":88870,"endTime":89290,"data":"trấn"}]},{"words":[{"startTime":89290,"endTime":89680,"data":"Trên"},{"startTime":89680,"endTime":90100,"data":"con"},{"startTime":90100,"endTime":90100,"data":"đường"},{"startTime":90100,"endTime":90460,"data":"cũ"},{"startTime":90460,"endTime":90870,"data":"ta"},{"startTime":90870,"endTime":91680,"data":"đi"}]},{"words":[{"startTime":91680,"endTime":91680,"data":"Vòng"},{"startTime":91680,"endTime":92070,"data":"bánh"},{"startTime":92070,"endTime":92470,"data":"xe"},{"startTime":92470,"endTime":92470,"data":"như"},{"startTime":92470,"endTime":92860,"data":"thế"},{"startTime":92860,"endTime":92860,"data":"cứ"},{"startTime":92860,"endTime":93670,"data":"chạy"}]},{"words":[{"startTime":93670,"endTime":94060,"data":"Hai"},{"startTime":94060,"endTime":94450,"data":"tuyến"},{"startTime":94450,"endTime":94450,"data":"đường"},{"startTime":94450,"endTime":94860,"data":"ngược"},{"startTime":94860,"endTime":95250,"data":"chiều"},{"startTime":95250,"endTime":95250,"data":"ta"},{"startTime":95250,"endTime":96060,"data":"nghĩ"}]},{"words":[{"startTime":96060,"endTime":96060,"data":"Chắc"},{"startTime":96060,"endTime":96470,"data":"em"},{"startTime":96470,"endTime":96880,"data":"cũng"},{"startTime":96880,"endTime":96880,"data":"quên"},{"startTime":96880,"endTime":97290,"data":"tên"},{"startTime":97290,"endTime":97700,"data":"đường"},{"startTime":97700,"endTime":97700,"data":"này"},{"startTime":97700,"endTime":98110,"data":"rồi"}]},{"words":[{"startTime":98110,"endTime":98490,"data":"Nhánh"},{"startTime":98490,"endTime":98890,"data":"hoa"},{"startTime":98890,"endTime":98890,"data":"sữa"},{"startTime":98890,"endTime":99290,"data":"nhẹ"},{"startTime":99290,"endTime":99680,"data":"bay"},{"startTime":99680,"endTime":99680,"data":"đi"},{"startTime":99680,"endTime":100080,"data":"khắp"},{"startTime":100080,"endTime":100490,"data":"lối"}]},{"words":[{"startTime":100490,"endTime":100490,"data":"Em"},{"startTime":100490,"endTime":100900,"data":"cũng"},{"startTime":100900,"endTime":101270,"data":"giống"},{"startTime":101270,"endTime":101270,"data":"như"},{"startTime":101270,"endTime":101700,"data":"anh"},{"startTime":101700,"endTime":102090,"data":"của"},{"startTime":102090,"endTime":102090,"data":"ngày"},{"startTime":102090,"endTime":102480,"data":"trước"}]},{"words":[{"startTime":102480,"endTime":102870,"data":"Hai"},{"startTime":102870,"endTime":103280,"data":"con"},{"startTime":103280,"endTime":103280,"data":"đường"},{"startTime":103280,"endTime":103660,"data":"về"},{"startTime":103660,"endTime":104070,"data":"nhà"},{"startTime":104070,"endTime":104070,"data":"khi"},{"startTime":104070,"endTime":104490,"data":"sắp"},{"startTime":104490,"endTime":104880,"data":"tối"}]},{"words":[{"startTime":104880,"endTime":104880,"data":"Anh"},{"startTime":104880,"endTime":105260,"data":"còn"},{"startTime":105260,"endTime":105670,"data":"nhớ"},{"startTime":105670,"endTime":105670,"data":"hồi"},{"startTime":105670,"endTime":106070,"data":"đó"},{"startTime":106070,"endTime":106070,"data":"ta"},{"startTime":106070,"endTime":106450,"data":"đi"},{"startTime":106450,"endTime":106870,"data":"học"}]},{"words":[{"startTime":106870,"endTime":107260,"data":"Lúc"},{"startTime":107260,"endTime":107260,"data":"tan"},{"startTime":107260,"endTime":107640,"data":"trường"},{"startTime":107640,"endTime":108060,"data":"thì"},{"startTime":108060,"endTime":108060,"data":"em"},{"startTime":108060,"endTime":108470,"data":"ngồi"},{"startTime":108470,"endTime":108470,"data":"sau"},{"startTime":108470,"endTime":108890,"data":"xe"}]},{"words":[{"startTime":108890,"endTime":109310,"data":"Lúc"},{"startTime":109310,"endTime":109690,"data":"em"},{"startTime":109690,"endTime":110100,"data":"buồn"},{"startTime":110100,"endTime":110100,"data":"thì"},{"startTime":110100,"endTime":110480,"data":"anh"},{"startTime":110480,"endTime":110480,"data":"hay"},{"startTime":110480,"endTime":110880,"data":"trêu"},{"startTime":110880,"endTime":111290,"data":"chọc"}]},{"words":[{"startTime":111290,"endTime":111680,"data":"Bảo"},{"startTime":111680,"endTime":112070,"data":"em"},{"startTime":112070,"endTime":112070,"data":"cười"},{"startTime":112070,"endTime":112490,"data":"kể"},{"startTime":112490,"endTime":112490,"data":"chuyện"},{"startTime":112490,"endTime":112880,"data":"cho"},{"startTime":112880,"endTime":113280,"data":"nhau"},{"startTime":113280,"endTime":113690,"data":"nghe"}]},{"words":[{"startTime":113690,"endTime":113690,"data":"Rồi"},{"startTime":113690,"endTime":114070,"data":"vào"},{"startTime":114070,"endTime":114470,"data":"quán"},{"startTime":114470,"endTime":114470,"data":"mua"},{"startTime":114470,"endTime":114860,"data":"món"},{"startTime":114860,"endTime":115270,"data":"mà"},{"startTime":115270,"endTime":115270,"data":"em"},{"startTime":115270,"endTime":115660,"data":"thích"}]},{"words":[{"startTime":115660,"endTime":116080,"data":"Em"},{"startTime":116080,"endTime":116080,"data":"mỉm"},{"startTime":116080,"endTime":116460,"data":"cười"},{"startTime":116460,"endTime":116880,"data":"làm"},{"startTime":116880,"endTime":116880,"data":"anh"},{"startTime":116880,"endTime":117270,"data":"cũng"},{"startTime":117270,"endTime":117670,"data":"vui"},{"startTime":117670,"endTime":118060,"data":"lây"}]},{"words":[{"startTime":118060,"endTime":118060,"data":"Nhưng"},{"startTime":118060,"endTime":118450,"data":"hồi"},{"startTime":118450,"endTime":118860,"data":"đó"},{"startTime":118860,"endTime":118860,"data":"thì"},{"startTime":118860,"endTime":119250,"data":"vẫn"},{"startTime":119250,"endTime":119670,"data":"là"},{"startTime":119670,"endTime":119670,"data":"hồi"},{"startTime":119670,"endTime":120050,"data":"đó"}]},{"words":[{"startTime":120050,"endTime":120050,"data":"Anh"},{"startTime":120050,"endTime":120490,"data":"cảm"},{"startTime":120490,"endTime":120890,"data":"ơn"},{"startTime":120890,"endTime":120890,"data":"em"}]},{"words":[{"startTime":120890,"endTime":121280,"data":"Đã"},{"startTime":121280,"endTime":121680,"data":"để"},{"startTime":121680,"endTime":121680,"data":"lại"},{"startTime":121680,"endTime":122080,"data":"chuỗi"},{"startTime":122080,"endTime":122250,"data":"ngày"}]},{"words":[{"startTime":122250,"endTime":122790,"data":"Một"},{"startTime":122790,"endTime":122790,"data":"người"},{"startTime":122790,"endTime":123330,"data":"âm"},{"startTime":123330,"endTime":123330,"data":"thầm"}]},{"words":[{"startTime":123330,"endTime":123840,"data":"Đứng"},{"startTime":123840,"endTime":123840,"data":"dưới"},{"startTime":123840,"endTime":124390,"data":"mưa"},{"startTime":124390,"endTime":124930,"data":"nhìn"},{"startTime":124930,"endTime":125970,"data":"em"}]},{"words":[{"startTime":125970,"endTime":125970,"data":"Một"},{"startTime":125970,"endTime":126540,"data":"người"},{"startTime":126540,"endTime":127030,"data":"giữa"},{"startTime":127030,"endTime":127030,"data":"thành"},{"startTime":127030,"endTime":127560,"data":"phố"}]},{"words":[{"startTime":127560,"endTime":128100,"data":"Vẫn"},{"startTime":128100,"endTime":128650,"data":"cứ"},{"startTime":128650,"endTime":128650,"data":"chờ"},{"startTime":128650,"endTime":130260,"data":"em"}]},{"words":[{"startTime":130260,"endTime":130800,"data":"Vì"},{"startTime":130800,"endTime":130800,"data":"sao"},{"startTime":130800,"endTime":131320,"data":"cứ"},{"startTime":131320,"endTime":131860,"data":"nơi"},{"startTime":131860,"endTime":132380,"data":"đó"},{"startTime":132380,"endTime":133450,"data":"mà"}]},{"words":[{"startTime":133450,"endTime":133980,"data":"Anh"},{"startTime":133980,"endTime":134520,"data":"dần"},{"startTime":134520,"endTime":135040,"data":"xa"},{"startTime":135040,"endTime":135580,"data":"nơi"},{"startTime":135580,"endTime":138580,"data":"đâu"}]},{"words":[{"startTime":138980,"endTime":139530,"data":"Giờ"},{"startTime":139530,"endTime":139530,"data":"này"},{"startTime":139530,"endTime":140050,"data":"chỉ"},{"startTime":140050,"endTime":140590,"data":"nỗi"},{"startTime":140590,"endTime":140590,"data":"nhớ"}]},{"words":[{"startTime":140590,"endTime":141120,"data":"Cứ"},{"startTime":141120,"endTime":141670,"data":"vơi"},{"startTime":141670,"endTime":142230,"data":"nhiều"},{"startTime":142230,"endTime":143300,"data":"thêm"}]},{"words":[{"startTime":143300,"endTime":143800,"data":"Giờ"},{"startTime":143800,"endTime":144340,"data":"này"},{"startTime":144340,"endTime":144340,"data":"chỉ"},{"startTime":144340,"endTime":144880,"data":"mình"},{"startTime":144880,"endTime":145400,"data":"ta"}]},{"words":[{"startTime":145400,"endTime":145400,"data":"Với"},{"startTime":145400,"endTime":145920,"data":"những"},{"startTime":145920,"endTime":146460,"data":"tháng"},{"startTime":146460,"endTime":146980,"data":"năm"},{"startTime":146980,"endTime":148060,"data":"dài"}]},{"words":[{"startTime":148060,"endTime":148060,"data":"Có"},{"startTime":148060,"endTime":148610,"data":"khi"},{"startTime":148610,"endTime":148610,"data":"em"},{"startTime":148610,"endTime":149150,"data":"chẳng"},{"startTime":149150,"endTime":149690,"data":"còn"},{"startTime":149690,"endTime":149690,"data":"yêu"},{"startTime":149690,"endTime":150750,"data":"anh"}]},{"words":[{"startTime":150750,"endTime":151270,"data":"Như"},{"startTime":151270,"endTime":151270,"data":"trái"},{"startTime":151270,"endTime":151800,"data":"tim"},{"startTime":151800,"endTime":152330,"data":"ta"},{"startTime":152330,"endTime":152860,"data":"từng"},{"startTime":152860,"endTime":154470,"data":"chung"},{"startTime":154470,"endTime":155000,"data":"lối"},{"startTime":155000,"endTime":158000,"data":"đi"}]},{"words":[{"startTime":195360,"endTime":195900,"data":"Có"},{"startTime":195900,"endTime":196420,"data":"cơn"},{"startTime":196420,"endTime":196420,"data":"mưa"},{"startTime":196420,"endTime":197510,"data":"nào"},{"startTime":197510,"endTime":198030,"data":"đôi"},{"startTime":198030,"endTime":198550,"data":"mình"},{"startTime":198550,"endTime":199080,"data":"đi"},{"startTime":199080,"endTime":199620,"data":"qua"}]},{"words":[{"startTime":199620,"endTime":200140,"data":"Anh"},{"startTime":200140,"endTime":200690,"data":"viết"},{"startTime":200690,"endTime":200690,"data":"cho"},{"startTime":200690,"endTime":201190,"data":"em"}]},{"words":[{"startTime":201190,"endTime":201740,"data":"Bài"},{"startTime":201740,"endTime":202280,"data":"ca"},{"startTime":202280,"endTime":202790,"data":"mùa"},{"startTime":202790,"endTime":203310,"data":"yêu"},{"startTime":203310,"endTime":203840,"data":"xa"}]},{"words":[{"startTime":203840,"endTime":204420,"data":"Mỗi"},{"startTime":204420,"endTime":204910,"data":"lá"},{"startTime":204910,"endTime":205460,"data":"rơi"},{"startTime":205460,"endTime":205460,"data":"bên"},{"startTime":205460,"endTime":206530,"data":"hồ"}]},{"words":[{"startTime":206530,"endTime":207060,"data":"Nỗi"},{"startTime":207060,"endTime":207060,"data":"cô"},{"startTime":207060,"endTime":207600,"data":"đơn"},{"startTime":207600,"endTime":208120,"data":"lớn"},{"startTime":208120,"endTime":211120,"data":"lên"}]},{"words":[{"startTime":212900,"endTime":212900,"data":"Mùa"},{"startTime":212900,"endTime":213410,"data":"thu"},{"startTime":213410,"endTime":213960,"data":"ấy"}]},{"words":[{"startTime":213960,"endTime":213960,"data":"Anh"},{"startTime":213960,"endTime":214480,"data":"không"},{"startTime":214480,"endTime":215010,"data":"còn"},{"startTime":215010,"endTime":215540,"data":"bên"},{"startTime":215540,"endTime":216080,"data":"cạnh"},{"startTime":216080,"endTime":216590,"data":"em"},{"startTime":216590,"endTime":217120,"data":"nữa"}]},{"words":[{"startTime":217120,"endTime":217690,"data":"Em"},{"startTime":217690,"endTime":217690,"data":"vẫn"},{"startTime":217690,"endTime":218210,"data":"đứng"},{"startTime":218210,"endTime":218730,"data":"nơi"},{"startTime":218730,"endTime":219280,"data":"đây"}]},{"words":[{"startTime":219280,"endTime":219280,"data":"Chờ"},{"startTime":219280,"endTime":220320,"data":"anh"},{"startTime":220320,"endTime":220870,"data":"cùng"},{"startTime":220870,"endTime":221390,"data":"cơn"},{"startTime":221390,"endTime":221910,"data":"mưa"}]},{"words":[{"startTime":221910,"endTime":221910,"data":"Chúng"},{"startTime":221910,"endTime":222440,"data":"ta"},{"startTime":222440,"endTime":222980,"data":"sau"},{"startTime":222980,"endTime":224050,"data":"này"}]},{"words":[{"startTime":224050,"endTime":224570,"data":"Chẳng"},{"startTime":224570,"endTime":224570,"data":"có"},{"startTime":224570,"endTime":225100,"data":"chúng"},{"startTime":225100,"endTime":225640,"data":"ta"},{"startTime":225640,"endTime":226170,"data":"bây"},{"startTime":226170,"endTime":227170,"data":"giờ"}]}],"file":"https://static-zmp3.zmdcdn.me/lyrics/1/1/d/1/11d1dffb6e8cfc9fbd2966a2cd2b650e.lrc","enabledVideoBG":true,"defaultIBGUrls":["https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/c/0/5/3c05c10ae36f6361f9af0874bb7c4851.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/e/0/bbe01e4bf6d8e23101fcb6db44df311d.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/1/f/3/a1f34293d1dc92735be8c3f9082c4acf.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/e/9/5/6e95b598e1e14a187ee779bcd888e75c.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/c/8/1/1c81e957a6270eba91571d822a47e7c5.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/0/d/000d9d0679bbbb564a191a6801d7f19d.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/6/4/f/e64f4fd6f53caebabc1c26d592093cfa.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/e/3/1/de315c40b537d40b7409a6702f446631.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/4/6/2/1462efc7378bed3f98ace411e11eab45.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/b/f/a/5bfa05533ed7975035e69a4508c82fd6.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/2/b/1/f2b1b91fa64e0c354150c86fd96c249c.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/5/1/f/b/51fbcd4ae32096ffe2dd89cd36bb6ed9.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/2/3/9/62392463eab1eb1aaa2d1f3bd0f758bb.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/1/2/f/0/12f01e12d6e13e263ef76f3fdb65d66e.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/8/2/4/8824ef8e3e3aa3e302f03879a1f9d7d3.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/4/3/4/9/43491e9d95a9942015548bd2a061250d.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/9/8/7/5/987517940ce71a96bab9c0c88d5b6b95.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/8/e/2/4/8e24305fde744814083af980a593e8c2.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/f/1/2/7/f1270dd1bed79b527228e3351d2b67ae.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/a/3/0/0a301934881ee4e2de30dc8f41bc55f9.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/c/9/f/cc9fce8719364ba9d8a846984c590a0e.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/5/d/e/e5de86acd7567465f54a6b9307076947.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/4/b/b/64bb19c5f971b4e4f16f3bfdff64a396.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/3/2/0/03206606d461843e22451747a9b60769.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/d/4/4/bd4485d6dfef80764869a4d88d9b0475.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/8/6/8/e86817d147315d9d644835f60d17ae41.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/b/4/7/bb477f2f56f162b13426f70c9858c732.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/c/5/3/6/c536ff6ab992e36be24ca0adf8e86ae0.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/6/c/f/c/6cfc1e6e3b94c62cded257659602f00b.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/2/5/d/6/25d6adaa11b4e932d61309ed635d57fa.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/2/a/e/d2ae42243ccd4fec321fc60692a5a2dc.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/b/8/0/e/b80e5777c7eec332c882bf79bd692056.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/7/b/a/e7ba1207018f1d2fa7048598c7d627df.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/f/4/0/3f40bd0d6d8cbcf833c72ab050f19e6a.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/a/d/a/d/adad060e15f8409ec2e7670cf943c202.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/e/d/1/7/ed17742d63b635725e6071a9bee362c5.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/3/a/e/8/3ae816de233a9eae0116b4b5a21af43e.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/7/f/1/d7f15e3996e7923ffc2a64d1f8e43448.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/0/0/7/e/007e6b48696aab4a61ca46a10d980f63.jpg","https://photo-resize-zmp3.zmdcdn.me/w1920_r3x2_jpeg/cover/d/9/f/5/d9f592437d80e358a76e32798ce2d294.jpg"],"BGMode":0},"timestamp":1694357662266}`;

lyric = JSON.parse(lyric).data.sentences;
var btnKara = document.querySelector(".btn");
var karaoke = document.querySelector(".karaoke");
var karaokeInner = document.querySelector(".karaoke-inner");
var closeKara = document.querySelector(".close");
var karaokeContent = document.querySelector(".karaoke-content");
var songInfor = `<p>id 072019</p>
     <p>W/N</p>
`;
var number = 2;
var currentPage;
btnKara.addEventListener("click", function () {
  karaokeInner.classList.add("show");
  karaokeContent.innerHTML = songInfor;
});
closeKara.addEventListener("click", function () {
  karaokeInner.classList.remove("show");
  karaokeContent.innerHTML = "";
});

var hanldeKaraoke = function (currentTime) {
  // quy doi sang milis
  currentTime *= 1000;

  var index = lyric.findIndex(function (wordItem) {
    var wordItemArr = wordItem.words;

    return (
      currentTime >= wordItemArr[0].startTime &&
      currentTime <= wordItemArr[wordItemArr.length - 1].endTime
    );
  });
  if (index !== -1) {
    handleColor(currentTime, index);
    // cong thuc : page = index / 2 +1;
    var page = Math.floor(index / number + 1);
    var offset = (page - 1) * number;
    if (index >= offset && index < offset + number) {
      karaokeContent.innerText = "";
      var div = document.createElement("div");
      for (var i = offset; i < offset + number; i++) {
        // vong lap cac cau trong 1 man hinh
        var p = document.createElement("p");
        // vong lap cac tu trong 1 cau
        lyric[i].words.forEach(function (word) {
          var wordEl = document.createElement("span");
          wordEl.classList.add("word");
          wordEl.innerText = word.data;

          var span = document.createElement("span");
          span.innerText = word.data;
          wordEl.append(span);
          p.append(wordEl);
          // if (currentTime >= word.startTime) {
          //   if (currentTime >= word.startTime && currentTime <= word.endTime) {
          //     var wordTime = word.endTime - word.startTime;
          //     // var start = currentTime - word.startTime;
          //     // var rate = (start * 100) / wordTime;
          //     // console.log(word.data, rate);
          //     span.style.transition = `width ${wordTime}ms linear`;
          //   }
          //   span.style.width = `100%`;
          // }
        });
        div.append(p);
      }
    }
    karaokeContent.append(div);
  }
};

var handleColor = function (currentTime, index) {
  var wordItems = karaokeContent.querySelectorAll(".word");
  lyric[index].words.forEach(function (word) {
    if (currentTime >= word.startTime) {
    }
  });
};
