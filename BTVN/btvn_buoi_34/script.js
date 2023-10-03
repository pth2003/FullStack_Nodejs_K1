document.addEventListener("DOMContentLoaded", async function () {
  const dbUrl = "http://localhost:3000/todo";
  let form = document.querySelector("form.todo");
  let list = document.querySelector("ul");

  const getAllTodos = async () => {
    const reponse = await fetch(dbUrl);
    const data = await reponse.json();
    return data;
  };

  async function saveTodo(text) {
    const req = new Request(dbUrl, {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ text: text }),
    });

    const res = await fetch(req);
    const data = await res.json();
    return data;
  }

  function appendTextToList(todo) {
    list.innerHTML += `
        <li data-id="${todo.id}">
          <div class="list-elm-head">
            <span class="id">${todo.id}</span>
          </div>
          <div class="list-elm-body">
            <span class="text">${todo.text}</span>
            <span class="delete">x</span>
          </div>
        </li>`;
  }

  try {
    const todos = await getAllTodos();
    todos.forEach((todo) => {
      appendTextToList(todo);
    });

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      const res = await saveTodo(form.task.value);
      console.log(res);
      appendTextToList(res);
      form.reset();
    });

    list.addEventListener("click", async function (e) {
      if (e.target.classList.contains("delete")) {
        const id = e.target.parentElement.parentElement.dataset.id;
        console.log(id);
        await fetch(new Request(`${dbUrl}/${id}`, { method: "DELETE" }));
        document.querySelector(`li[data-id="${id}"]`).outerHTML = "";
      }
    });
  } catch (error) {
    console.error(error);
  }
});
