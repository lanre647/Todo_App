let icon = document.getElementById("tog");
let body = document.querySelector("body");
let backgroudimage = document.getElementById("bg");
let container = document.querySelector(".container");

let isIconClicked = false;

function toggleLihtTheme() {
  if (isIconClicked === false) {
    backgroudimage.src = "assets/bg-desktop-dark.jpg";
    icon.src = "assets/icon-sun.svg";
    body.classList.remove("ighttheme");
    container.classList.remove("contain");
    isIconClicked = true;
  } else {
    backgroudimage.src = "assets/bg-desktop-light.jpg";
    icon.src = "assets/icon-moon.svg";
    body.classList.add("ighttheme");
    container.classList.add("contain");
    isIconClicked = false;
  }
}

icon.addEventListener("click", toggleLihtTheme);

/***********************************todo function*****************************************/

const form = document.querySelector("form");
let input = document.querySelector("input");
const listContainer = document.querySelector(".todo-item");
let todoItemsInfo = document.querySelectorAll(".todo-items-info span");
let todo = document.querySelectorAll("todo-item li");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});

todoItemsInfo.forEach((items) => {
  items.addEventListener("click", () => {
    document.querySelector("span.active").classList.remove("active");
    items.classList.add("active");
    saveData();
  });
});

function addTask() {
  if (input.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
