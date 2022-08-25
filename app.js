const btn = document.querySelector(".dropdown-btn");
const content = document.querySelector(".dropdown-content");

btn.addEventListener("mouseover", () => {
    content.classList.add("show");
})

btn.addEventListener("mouseout", () => {
    content.classList.remove("show");
});

