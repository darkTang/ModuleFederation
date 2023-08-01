const List = (num) => {
  const fragment = document.createDocumentFragment();
  const ul = document.createElement("ul");
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.innerHTML = `item${i}`;
    fragment.appendChild(li);
  }
  ul.appendChild(fragment);
  return ul;
};

export default List
