
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
    const dropdown = document.querySelector(".dropdown")
    if(dropdown){
        dropdown.classList.toggle("show")
    }
    const menu = document.querySelector(".menu-open")
    if(menu){
        menu.classList.toggle("menu-open")
        const carrot = document.querySelector(".carrot-rotate")
        carrot.classList.toggle("carrot-rotate")
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
            