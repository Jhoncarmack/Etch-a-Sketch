const btn = document.createElement("button");
const body = document.querySelector("body");
body.appendChild(btn);
const newDiv = document.createElement("div");
newDiv.classList.add("new");
body.appendChild(newDiv);
newDiv.appendChild(btn);
const oldDiv = document.createElement("div");
oldDiv.appendChild(newDiv);
body.appendChild(oldDiv);
oldDiv.classList.add("old");
// btn.className = "button";
// btn.style.height = "auto";
// btn.textContent = "button";
btn.classList.add("button-style");
btn.textContent = "Sketch";
const container = document.querySelector(".container");

btn.addEventListener("click", (Event) => {
  container.textContent = "";
  let select = Number(prompt("please number (2 ~ 100): "));

  for (let i = 1; i <= select; i++) {
    for (let j = 1; j <= select; j++) {
      if (select >= 100) {
        body.textContent = "restart please";
        body.style.fontSize = "50px";
        Event.preventDefault();

        break;
      }
      const divP = document.createElement("div");
      container.appendChild(divP);
      divP.style.width = `calc(100%/${select})`;
      divP.style.height = `calc(100%/${select})`;
      divP.classList.add("box");

      divP.addEventListener("mouseenter", () => {
        divP.classList.add("color");
      });
    }
  }
});
