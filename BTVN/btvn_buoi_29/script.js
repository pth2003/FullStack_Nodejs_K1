const list = document.querySelector(".list");
const listItems = document.querySelector(".list-item");

let lessionIndex = 0;
let moduleIndex = 0;
// Ham tinh toan vvi tri con tro chuot
const getMouseOffset = function (e) {
  const targetRect = e.target.getBoundingClientRect(); // tra vef DOMReact
  const offset = {
    x: e.pageX - targetRect.left,
    y: e.pageY - targetRect.top,
  };
  return offset;
};
const getElementVerticalCenter = function (e) {
  const rect = e.getBoundingClientRect();
  return (rect.bottom - rect.top) / 2;
};

const appendPlacerholder = function (evt, index) {
  evt.preventDefault();
  if (index === dragIndex) {
    return;
  }
  const offser = getMouseOffset(evt);
  const middleY = getElementVerticalCenter(e.target);
  const placeholder = list.children[dragIndex];
  if (offset.y > middleY) {
    list.insertBefore(e.target, placeholder);
  } else if (list.children[index + 1]) {
    list.insertBefore(e.target.nextSibling || e.target, placeholder);
  }
  return;
};

function sortable(rootEl, onUpdate) {
  var dragEl;

  // Making all siblings movable
  render(rootEl);

  // Function responsible for sorting
  function _onDragOver(evt) {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";

    var target = evt.target;
    if (target && target !== dragEl && target.nodeName == "DIV") {
      // Sorting
      const offset = getMouseOffset(evt);
      const middleY = getElementVerticalCenter(evt.target);

      if (offset.y > middleY) {
        if (target.nextSibling.parentElement === rootEl) {
          rootEl.insertBefore(dragEl, target.nextSibling);
          //   rootEl.dataset.index = target.nextSibling.dataset.index;
        }
      } else {
        if (target.parentElement === rootEl) {
          rootEl.insertBefore(dragEl, target);
          //   rootEl.dataset.index = target.dataset.index;
        }
      }
    }
  }

  // End of sorting
  function _onDragEnd(evt) {
    evt.preventDefault();

    dragEl.classList.remove("ghost");
    rootEl.removeEventListener("dragover", _onDragOver, false);
    rootEl.removeEventListener("dragend", _onDragEnd, false);

    // Notification about the end of sorting
    onUpdate(dragEl);
  }

  // Sorting starts
  rootEl.addEventListener(
    "dragstart",
    function (evt) {
      dragEl = evt.target; // Remembering an element that will be moved

      // Limiting the movement type
      evt.dataTransfer.effectAllowed = "move";
      evt.dataTransfer.setData("Text", dragEl.textContent);

      // Subscribing to the events at dnd
      rootEl.addEventListener("dragover", _onDragOver, false);
      rootEl.addEventListener("dragend", _onDragEnd, false);

      setTimeout(function () {
        // If this action is performed without setTimeout, then
        // the moved object will be of this class.
        dragEl.classList.add("ghost");
      }, 0);
    },
    false
  );
}

function render(rootEl) {
  [].slice.call(rootEl.children).forEach(function (itemEl, index) {
    itemEl.draggable = true;
    let type = "Bài";

    if (itemEl.classList.contains("active")) {
      type = "Module";
      moduleIndex++;
    } else {
      lessionIndex++;
    }
    if (!itemEl.children.length) {
      itemEl.innerHTML = `${type}: ${
        type === "Module" ? moduleIndex : lessionIndex
      }: <span>${itemEl.innerText}</span>`;
    } else {
      itemEl.innerHTML = `${type}: ${
        type === "Module" ? moduleIndex : lessionIndex
      }: <span>${itemEl.children[0].innerText}</span>`;
    }
  });
}

// Using
sortable(list, function (item) {
  lessionIndex = 0;
  moduleIndex = 0;

  render(list);
});
