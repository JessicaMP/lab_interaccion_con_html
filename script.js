const replaceText = () => {
  document.querySelector("h1").textContent = "GoodBye";
};

const replaceColor = () => {
  const subHeaders = document.querySelectorAll("h2");
  subHeaders[2].style.color = "orange";
};

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeBackgroundColor = () => {
  document.body.style.backgroundColor = getRandomColor();
};

const changeImg = () => {
    const nombre = gallery[Math.floor(Math.random() * gallery.length)];
  document.getElementById("photo").src = encodeURI(`./Pictures/${nombre}`);
}

const addNewElement = () => {
  const existElementA = document.querySelector("a");
  if (existElementA) return;

  const newDiv = document.createElement("div");
  newDiv.style.padding = "1rem 0";

  const newLink = document.createElement("a");
  const newContent = document.createTextNode("Change background color");
  newLink.setAttribute("href", "#");

  newLink.appendChild(newContent);
  newDiv.appendChild(newLink);

  const currentDiv = document.getElementById("btn");
  document.body.insertBefore(newDiv, currentDiv);

  newLink.addEventListener("click", () => {
    changeBackgroundColor();
    changeImg()
  })
};

const addUploadEvent = () => {
  const button = document.getElementById("btn");

  button.addEventListener("click", () => {
    replaceText();
    replaceColor();
    addNewElement();
  });
};

document.addEventListener("DOMContentLoaded", () => {
  addUploadEvent();
});
