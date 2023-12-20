let skaitliukas = 0;
const container = document.createElement("div");
const button1 = document.createElement("button");
button1.innerText = "+ ";
button1.style.backgroundColor = "grey";
button1.style.color = "white";
const button2 = document.createElement("button");
button2.innerText = "- ";
button2.style.backgroundColor = "grey";
button2.style.color = "white";
const counter = document.createElement("p");
counter.innerText = `count: (${skaitliukas})`;

container.append(button1, button2, counter);

document.body.append(container);

button1.addEventListener("click", (event) => {
  event.preventDefault();
  skaitliukas++;
  if (skaitliukas % 2 === 0) {
    button1.style.backgroundColor = "red";
  } else {
    button1.style.backgroundColor = "grey";
  }
  counter.innerText = `count: (${skaitliukas})`;
});
button2.addEventListener("click", (event) => {
  event.preventDefault();
  skaitliukas--;
  if (skaitliukas % 2 === 0) {
    button2.style.backgroundColor = "red";
  } else {
    button2.style.backgroundColor = "grey";
  }
  counter.innerText = `count: (${skaitliukas})`;
});
