var key = "hieu";

document.write(`<p>Tu khoa can tim : ${key} </p>`);

var str = `Lorem hieu ipsum dolor sit amet consectetur adipisicing elit. Vero illo incidunt
enim magni accusamus inventore aliquid delectus excepturi quisquam ex labore
dignissimos iste blanditiis, hieu hieu voluptates officiis odio deleniti veritatis.
Dicta! Lorem hieu ipsum dolor sit amet consectetur adipisicing elit. Vero illo incidunt
enim magni accusamus inventore aliquid delectus excepturi quisquam ex labore
dignissimos iste blanditiis, hieu hieu voluptates officiis odio deleniti veritatis.
Dicta! `;

var dem = 0;
var position = str.toLowerCase().indexOf(key.toLowerCase());
var result = "";

while (position !== -1) {
  result +=
    str.slice(0, position) +
    `<span>${str.slice(position, position + key.length)}</span>`;
  str = str.slice(position + key.length);
  position = str.toLowerCase().indexOf(key.toLowerCase());
  dem++;
}
result += str;
// console.log(result);
document.write(result);
document.write(`<p> Co ${dem} tu ${key} tim duoc.`);
