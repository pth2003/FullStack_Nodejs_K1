// const template = `
// <p>Helll F8</p>
// <h2>Khoa hoc FullStack </h2>
// `;

// console.log(template);

// const templateEl = document.createElement("template");

// templateEl.innerHTML = template;
// // console.log(templateEl.content);

// const templateNode = templateEl.content.cloneNode(true);

// console.log(templateNode);

customElements.define(
  "hello-word",
  class extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
      this.innerText = "HELLO";
    }
  }
);

class F8 {
  static component(name) {
    console.log(name);
  }
}
