const count = document.querySelector(".count")
const buttons = document.querySelector(".buttons")

buttons.addEventListener("click", (clickPoint) => {
    if (clickPoint.target.classList.contains("add")) {
        count.innerHTML++;
    }
    if (clickPoint.target.classList.contains("subtract")) {
        count.innerHTML--;
    }
    if (clickPoint.target.classList.contains("reset")) {
        count.innerHTML = 0;
    }
    setColor();
})

const setColor = () => {
    if (count.innerHTML > 0) {
        count.style.color = "green";
    } else if (count.innerHTML < 0) {
        count.style.color = "orangered";
    } else {
        count.style.color = "#fff";
    }
}