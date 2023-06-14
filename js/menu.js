

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
const mobile = window.matchMedia("(max-width: 750px)");
const ipad = window.matchMedia("(min-width: 750px) and (max-width: 1400px)")
var bevPage = false;

const appButton = document.querySelector("#appetizer")
const appSection = document.querySelector("#appetizer-section")
appButton.addEventListener("click", () => {
    scrollAction(appSection,appButton)
})
const entreeButton = document.querySelector("#entree")
const entreeSection = document.querySelector("#entree-section")
entreeButton.addEventListener("click", () => {
    scrollAction(entreeSection,entreeButton)
})
const noodleButton = document.querySelector("#noodle")
const noodleSection = document.querySelector("#noodle-section")
noodleButton.addEventListener("click", () => {
    scrollAction(noodleSection,noodleButton)
})
const riceButton = document.querySelector("#rice")
const riceSection = document.querySelector("#rice-section")
riceButton.addEventListener("click", () => {
    scrollAction(riceSection,riceButton)
})
const bevButton = document.querySelector(".bev")
const bevSection = document.querySelector("#bev-content")
bevButton.addEventListener("click", () => {
    bevPage = true
    var targetPosition = getScrollHeight(bevSection) + 62
    removeActiveButton()
    bevButton.classList.add("select")
    console.log(bevSection)
    window.scrollTo({ top: targetPosition, behavior: "smooth"})

})
const topButton = document.querySelector(".top-button")
topButton.addEventListener("click", () => {
    var targetPosition;
    console.log("hello")
    if(mobile.matches){
        targetPosition = getScrollHeight(appSection) - 350
        if(bevPage){
            targetPosition = getScrollHeight(bevSection) - 350
        }
    }
    else if(ipad.matches){
        console.log('hello')
        targetPosition = getScrollHeight(appSection) - 150
    }
    else{
        targetPosition = 900
    }
    window.scrollTo({ top: targetPosition, behavior: "smooth"})
})
window.addEventListener('scroll', function() {
    var appY = getScrollHeight(appSection) - 100; // Specify the desired Y position here
    var entreeY = getScrollHeight(entreeSection) - 100;
    var noodleY = getScrollHeight(noodleSection) - 100;
    var riceY = getScrollHeight(riceSection) - 100;
    if(window.scrollY >= appY){
        topButton.classList.remove("hide")
    }else{
        topButton.classList.add("hide")
    }
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
        // console.log('hello2')
        targetPosition -= 60
    }
    // else if(ipad.matches){
    //     targetPosition -= 170
    // }
    else{
        targetPosition -= 180
    }
    // if(mobile.matches){
    //     targetPosition = targetPosition - 60
    // }else{
    //     targetPosition -= 180
    // }
    return targetPosition
}

