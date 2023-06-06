

const drinkButton = document.querySelector(".bev")
const drinkContent = document.querySelector(".drinks-content")
const foodContent = document.querySelector(".food-content")
const eatButtons = document.querySelectorAll(".eat")
drinkButton.addEventListener("click", () => {
    drinkContent.style.display = "block";
    foodContent.style.display = "none";
})
eatButtons.forEach(button => {
    button.addEventListener("click", () => {
        drinkContent.style.display = "none";
        foodContent.style.display = "block"
    })
})
const navbarHeight = document.querySelector("nav").offsetHeight + 90;
const noodleButton = document.querySelector("#noodle")
noodleButton.addEventListener("click", () => {
    const noodleSection = document.querySelector("#noodle-section")
    var targetPosition = noodleSection.offsetTop - navbarHeight;
    removeActiveButton()
    noodleButton.classList.add("select")
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
})
const appButton = document.querySelector("#appetizer")
appButton.addEventListener("click", () => {
    const appSection = document.querySelector("#appetizer-section")
    var targetPosition = appSection.offsetTop - navbarHeight;
    removeActiveButton()
    appButton.classList.add("select")
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
})
const riceButton = document.querySelector("#rice")
riceButton.addEventListener("click", () => {
    const riceSection = document.querySelector("#rice-section")
    var targetPosition = riceSection.offsetTop - navbarHeight;
    removeActiveButton()
    riceButton.classList.add("select")
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
})
const entreeButton = document.querySelector("#entree")
entreeButton.addEventListener("click", () => {
    const entreeSection = document.querySelector("#entree-section")
    var targetPosition = entreeSection.offsetTop - navbarHeight;
    removeActiveButton()
    entreeButton.classList.add("select")
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
})
const bevButton = document.querySelector(".bev")
bevButton.addEventListener("click", () => {
    const bevSection = document.querySelector("#bev-content")
    var targetPosition = bevSection.offsetTop - navbarHeight;
    removeActiveButton()
    bevButton.classList.add("select")
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
})

function removeActiveButton() {
    const buttons = document.querySelectorAll(".menu-buttons a")
    buttons.forEach(button => {
        button.classList.remove("select")
    })
}
