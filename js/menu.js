

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


const navbarHeight = document.querySelector("nav").offsetHeight
const mobile = window.matchMedia("(max-width: 1000px)");
const ipad = window.matchMedia("(min-width: 1000px) and (max-width: 1400px)")
const noodleButton = document.querySelector("#noodle")
noodleButton.addEventListener("click", () => {
    const noodleSection = document.querySelector("#noodle-section")
    var targetPosition = getScrollHeight(noodleSection)
    removeActiveButton()
    noodleButton.classList.add("select")
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
})
const appButton = document.querySelector("#appetizer")
appButton.addEventListener("click", () => {
    const appSection = document.querySelector("#appetizer-section")
    var targetPosition = getScrollHeight(appSection)
    removeActiveButton()
    appButton.classList.add("select")
    console.log(targetPosition)
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
})
const riceButton = document.querySelector("#rice")
riceButton.addEventListener("click", () => {
    const riceSection = document.querySelector("#rice-section")
    var targetPosition = getScrollHeight(riceSection)
    removeActiveButton()
    riceButton.classList.add("select")
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
})
const entreeButton = document.querySelector("#entree")
entreeButton.addEventListener("click", () => {
    const entreeSection = document.querySelector("#entree-section")
    var targetPosition = getScrollHeight(entreeSection)
    removeActiveButton()
    entreeButton.classList.add("select")
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
})
const bevButton = document.querySelector(".bev")
bevButton.addEventListener("click", () => {
    const bevSection = document.querySelector("#bev-content")
    var targetPosition = getScrollHeight(bevSection) + 62
    removeActiveButton()
    bevButton.classList.add("select")
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
})
const topButton = document.querySelector(".top-button")
topButton.addEventListener("click", () => {
    const topSection = document.querySelector(".menu-nav")
    var targetPosition = 887
    if(ipad.matches){
        targetPosition = 1366
    }
    else if(!mobile.matches){
        targetPosition = 933
    }
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
})
function removeActiveButton() {
    const buttons = document.querySelectorAll(".menu-buttons a")
    buttons.forEach(button => {
        button.classList.remove("select")
    })
}

function getScrollHeight(section){
    var targetPosition = section.offsetTop - navbarHeight;
    if(mobile.matches){
        targetPosition = targetPosition - 60
    }else{
        targetPosition -= 180
    }
    return targetPosition
}

