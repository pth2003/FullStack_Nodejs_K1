const modules = ["Nhập môn lập trình web", "Ngôn ngữ HTML", "Ngôn ngữ CSS"];
const lessons = [
  {
    module: [
      "Giới thiệu Khóa học HTML-CSS",
      "Nhập môn lập trình web - Phần 1",
      "Nhập môn lập trình web - Phần 2",
      "Công cụ - Phần mềm cần chuẩn bị",
    ],
  },
  {
    module: ["HTML cơ bản - Phần 1", "HTML cơ bản - Phần 2"],
  },
  {
    module: [
      "Giới thiệu ngôn ngữ CSS - Cách viết CSS",
      "Cấu trúc CSS - Bộ chọn (Selector) trong CSS - Phần 1",
      "Bộ chọn CSS (Tiếp theo) - Các thuộc tính định dạng văn bản",
      "Chồng chéo CSS và thứ tự ưu tiên trong CSS",
      "Thuộc tính Background",
      "Thuộc tính Border",
      "Thuộc tính Width - Height",
      "Thuộc tính text-align",
      "Thuộc tính overflow",
    ],
  },
];

const list = document.querySelector(".list");
var lessonIndex = 1;
const createListElement = function () {
  modules.forEach(function (module, index) {
    var htmlModules = ` <div class="active list-item" draggable="true">
    <span class="text-value">Module: ${index + 1}: </span> 
    <span>${module}</span>
  </div>`;
    // 'beforeend': Chèn ở phía bên trong phần tử hiện tại và sau các phần tử con cuối cùng của nó.
    list.insertAdjacentHTML("beforeend", htmlModules);
    lessons[index].module.forEach(function (lesson) {
      var htmlLessons = `<div class="list-item" draggable="true">
     <span class="text-value">Bài: ${lessonIndex++}:</span>
    <span>${lesson}</span>
  </div>`;
      list.insertAdjacentHTML("beforeend", htmlLessons);
    });
  });
};

createListElement();

const listItems = document.querySelectorAll(".list-item");
let draggedItem = null;

for (const item of listItems) {
  item.addEventListener("dragstart", dragStart);
  item.addEventListener("dragend", dragEnd);
  item.addEventListener("dragover", dragOver);
  item.addEventListener("dragenter", dragEnter);
  item.addEventListener("dragleave", dragLeave);
  item.addEventListener("drop", drop);
}

function dragStart(e) {
  draggedItem = this;
  setTimeout(() => {
    this.style.display = "none";
  }, 0);
}

function dragEnd() {
  setTimeout(() => {
    draggedItem.style.display = "block";
    draggedItem = null;
    updateLessonNumbers();
  }, 0);
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.style.border = "2px dashed #ccc";
  console.log("drag enter");
}

function dragLeave() {
  this.style.border = "1px solid white";
}

function drop() {
  this.style.border = "1px solid white";
  if (draggedItem !== this) {
    const items = Array.from(listItems);
    const sourceIndex = items.indexOf(draggedItem);
    const targetIndex = items.indexOf(this);

    if (sourceIndex < targetIndex) {
      this.parentNode.insertBefore(draggedItem, this.nextSibling);
    } else {
      this.parentNode.insertBefore(draggedItem, this);
    }
  }
}

function updateLessonNumbers() {
  const allSpanLessonValues = document.querySelectorAll(
    ".list-item:not(.active) span.text-value"
  );
  console.log(allSpanLessonValues);
  const allSpanTopicValues = document.querySelectorAll(
    ".list-item.active span.text-value"
  );
  allSpanLessonValues.forEach((spanLesson, index) => {
    spanLesson.innerHTML = `Bài ${++index}:`;
  });
  allSpanTopicValues.forEach((spanTopic, index) => {
    spanTopic.innerHTML = `Module ${++index}:`;
  });
}
