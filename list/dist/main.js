(() => {
  "use strict";
  document.body.appendChild(
    ((e) => {
      const t = document.createDocumentFragment(),
        n = document.createElement("ul");
      for (let n = 0; n < e; n++) {
        const e = document.createElement("li");
        (e.innerHTML = `item${n}`), t.push(e);
      }
      return n.appendChild(t), n;
    })()
  );
})();
