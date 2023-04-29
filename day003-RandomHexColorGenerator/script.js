const number = document.querySelector(".hex");
const btn = document.querySelector(".generate");

const generateNumber = () => {
    const randomHexColor = "#" + Math.random().toString(16).substring(2, 8);
    document.body.style.background = randomHexColor
    number.innerHTML = randomHexColor;
}

btn.addEventListener("click", generateNumber);

generateNumber();
