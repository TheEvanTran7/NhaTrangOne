
//toggle button the dropdown menu
const toggle = document.getElementById("toggle");
const navLinks = document.querySelector(".Nav_Bar_Links");
const locationNavLink = document.querySelector("#location")
const bars = document.querySelectorAll(".bar")
const toggleDropDown =  () => {
    navLinks.classList.toggle("active")
    if (navLinks.classList.contains('active')) {document.body.style.overflow = 'hidden';}
    else {document.body.style.overflow = 'auto';}
    bars.forEach((element) => {
        element.classList.toggle("active")
    })
    var menuButtons = document.querySelector(".menu-buttons")
    if(menuButtons){
        if(menuButtons.classList.contains("hide")){
            setTimeout(() => menuButtons.classList.toggle("hide"), 250)
        }else{
            menuButtons.classList.toggle("hide")
        }
    }
    var backTopButton = document.querySelector(".top-button")
    if(backTopButton && !backTopButton.classList.contains("hide")){
        backTopButton.style.opacity = backTopButton.style.opacity == "0" ? "100" : "0"
    }
    const map = document.querySelector(".map")
    if(map){
        map.classList.toggle("hide")
    }
}
toggle.addEventListener('click', () => {
    toggleDropDown()
})
if(locationNavLink){
    locationNavLink.addEventListener("click", () => {
        toggleDropDown()
    })
}
            