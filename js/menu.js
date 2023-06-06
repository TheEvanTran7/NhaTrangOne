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
const navbarHeight = document.querySelector("nav").offsetHeight;
const noodleButton = document.querySelector("#noodle")
noodleButton.addEventListener("click", () => {
    const noodleSection = document.querySelector("#noodle-section")
    var targetPosition = noodleSection.offsetTop - navbarHeight;
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
})
const appButton = document.querySelector("#appetizer")
appButton.addEventListener("click", () => {
    const appSection = document.querySelector("#appetizer-section")
    var targetPosition = appSection.offsetTop - navbarHeight;
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
})
const riceButton = document.querySelector("#rice")
riceButton.addEventListener("click", () => {
    const riceSection = document.querySelector("#rice-section")
    var targetPosition = riceSection.offsetTop - navbarHeight;
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
})
const entreeButton = document.querySelector("#entree")
entreeButton.addEventListener("click", () => {
    const entreeSection = document.querySelector("#entree-section")
    var targetPosition = entreeSection.offsetTop - navbarHeight;
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
})
