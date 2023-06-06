
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
    if(menuButtons.classList.contains("hide")){
        setTimeout(() => menuButtons.classList.toggle("hide"), 250)
    }else{
        menuButtons.classList.toggle("hide")
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
            