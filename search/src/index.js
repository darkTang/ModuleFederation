// import("header/Header").then((Header) => {
//   // 我们自己定义的组件名字/暴露模块的名字
//   document.body.appendChild(Header.default());
// });

Promise.all([import("header/Header"), import("list/List")]).then(([Header, List]) => {
  document.body.appendChild(Header.default());
  document.body.appendChild(List.default(5));
});
