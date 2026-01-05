/** @format */

const snowContainer = document.getElementById("snow-container");
const snowContent = ["&#10052", "&#10053", "&#10054"];

const random = (num) => {
  return Math.floor(Math.random() * num);
};

const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(10) + 10;
  const size = random(25) + 25;
  return `
    top: -${top}%;
    left: ${left}%;
    font-size: ${size}px;
    animation-duration: ${dur}s;
  `;
};

const createSnow = (num) => {
  for (var i = num; i > 0; i--) {
    var snow = document.createElement("div");
    snow.className = "snow";
    snow.style.cssText = getRandomStyles();
    snow.innerHTML = snowContent[random(3)];
    snowContainer.append(snow);
  }
};

const removeSnow = () => {
  snowContainer.style.opacity = "0";
  setTimeout(() => {
    snowContainer.remove();
  }, 500);
};

window.addEventListener("load", () => {
  createSnow(30);
  setTimeout(removeSnow, 1000 * 60);
});

window.addEventListener("click", () => {
  removeSnow();
});

/** 
const nyanContainer = document.getElementById("nyan-container");

const random = (num) => {
  return Math.floor(Math.random() * num);
};

const getRandomStyles = () => {
  const top = random(100);
  const left = random(100);
  const dur = random(5) + 5;
  const size = random(200) + 50;
  return `
    top: ${top}%;
    left: -${left}%;
    animation-duration: ${dur}s;
    width: ${size}px;
    height: ${size}px;
  `;
};

const createNyan = (num) => {
  for (var i = num; i > 0; i--) {
    var nyan = document.createElement("div");
    nyan.className = "nyan";
    nyan.style.cssText = getRandomStyles();
    nyanContainer.append(nyan);
  }
};

const removeNyan = () => {
  nyanContainer.style.opacity = "0";
  setTimeout(() => {
    nyanContainer.remove();
  }, 500);
};

window.addEventListener("load", () => {
  createNyan(15);
  setTimeout(removeNyan, 1000 * 60);
});

window.addEventListener("click", () => {
  removeNyan();
});
*/
