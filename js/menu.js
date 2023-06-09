

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
var bevPage = false;

const noodleButton = document.querySelector("#noodle")
noodleButton.addEventListener("click", () => {
    const noodleSection = document.querySelector("#noodle-section")
    scrollAction(noodleSection,noodleButton)
})
const appButton = document.querySelector("#appetizer")
appButton.addEventListener("click", () => {
    const appSection = document.querySelector("#appetizer-section")
    scrollAction(appSection,appButton)
})
const riceButton = document.querySelector("#rice")
riceButton.addEventListener("click", () => {
    const riceSection = document.querySelector("#rice-section")
    scrollAction(riceSection,riceButton)
})
const entreeButton = document.querySelector("#entree")
entreeButton.addEventListener("click", () => {
    const entreeSection = document.querySelector("#entree-section")
    scrollAction(entreeSection,entreeButton)
})
const bevButton = document.querySelector(".bev")
bevButton.addEventListener("click", () => {
    bevPage = true
    const bevSection = document.querySelector("#bev-content")
    var targetPosition = getScrollHeight(bevSection) + 62
    removeActiveButton()
    bevButton.classList.add("select")
    console.log(bevSection)
    window.scrollTo({ top: targetPosition, behavior: "smooth"})

})
const topButton = document.querySelector(".top-button")
topButton.addEventListener("click", () => {
    var targetPosition;
    if(ipad.matches){
        targetPosition = 1336
    }
    else if(mobile.matches){
        targetPosition = 857
    }else{
        targetPosition = 900
    }
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
})
window.addEventListener('scroll', function() {
    var appY = 900; // Specify the desired Y position here
    var entreeY = 1676;
    var noodleY = 4400;
    var riceY = 6562;
    if(bevPage){
        return
    }
    removeActiveButton()
    if (window.scrollY >= riceY) {
        riceButton.classList.add("select")
    }else if(window.scrollY >= noodleY){
        noodleButton.classList.add("select")
    }else if(window.scrollY >= entreeY){
        entreeButton.classList.add("select")
    }else if(window.scrollY >= appY){
        appButton.classList.add("select")
    }
});



// HELPER FUNCTIONS
function removeActiveButton() {
    const buttons = document.querySelectorAll(".menu-buttons a")
    buttons.forEach(button => {
        button.classList.remove("select")
    })
}
function scrollAction (section, button) {
    bevPage = false
    var targetPosition = getScrollHeight(section)
    if(button == bevButton){
        if(ipad.matches){
            targetPosition += 3000
        }else{
            targetPosition += 22
        }
    }
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
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

