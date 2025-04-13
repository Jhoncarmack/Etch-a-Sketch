const btn = document.createElement("button");
const body = document.querySelector("body");
body.appendChild(btn);
btn.className = "button";
btn.style.height = "auto";
btn.textContent = "button";
const container = document.querySelector(".container");
btn.addEventListener("click", () => {
  container.textContent = "";
  let select = Number(prompt("수 입력: "));

  for (let i = 1; i <= select; i++) {
    for (let j = 1; j <= select; j++) {
      const divP = document.createElement("div");
      container.appendChild(divP);

      divP.style.width = `calc(100%/${select})`;
      divP.style.height = `calc(100%/${select})`;
      divP.className = "box";
    }
  }
});
