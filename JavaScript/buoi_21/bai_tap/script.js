var posts = [
  {
    title: "Bai viet 1",
    thumbnail: "https://picsum.photos/500/300",
    excertpt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
        incidunt quos officia exercitationem accusamus in odio possimus
        deleniti rem inventore voluptates beatae facilis maxime praesentium et
        quis repellat accusantium. Aliquam?`,
  },
  {
    title: "Bai viet 2",
    thumbnail: "https://picsum.photos/500/300",
    excertpt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
        incidunt quos officia exercitationem accusamus in odio possimus
        deleniti rem inventore voluptates beatae facilis maxime praesentium et
        quis repellat accusantium. Aliquam?`,
  },
  {
    title: "Bai viet 3",
    thumbnail: "https://picsum.photos/500/300",
    excertpt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
        incidunt quos officia exercitationem accusamus in odio possimus
        deleniti rem inventore voluptates beatae facilis maxime praesentium et
        quis repellat accusantium. Aliquam?`,
  },
  {
    title: "Bai viet 4",
    thumbnail: "https://picsum.photos/500/300",
    excertpt: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
        incidunt quos officia exercitationem accusamus in odio possimus
        deleniti rem inventore voluptates beatae facilis maxime praesentium et
        quis repellat accusantium. Aliquam?`,
  },
];
var html = `
<div class="posts">
   ${posts
     .map(function (post, index) {
       return `<div class="post-item">
    <img src=${
      post.thumbnail
    } alt="" class = "${index % 2 !== 0 ? "right" : ""}" />
   
    <h3>${post.title}</h3>
    <p>
     ${post.excertpt}
    </p>
  </div>`;
     })
     .join("")}      
</div>
`;

document.write(html);
