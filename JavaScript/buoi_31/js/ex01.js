// shadow dom

var host = document.querySelector("#shadow-root");

const root = host.attachShadow({ mode: "open" });
root.innerHTML = `<style>
p {
    color : red;
}</style>
<p>Hello F8</p>`;
