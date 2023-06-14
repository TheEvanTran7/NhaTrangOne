const dropdowns = document.querySelectorAll(".faq-dropdown")
dropdowns.forEach(dropdown => {
    var carrot = dropdown.querySelector(".carrot")
    dropdown.addEventListener("click", () => {
        carrot.classList.toggle("carrot-rotate")
        var answer = dropdown.nextElementSibling;
        answer.classList.toggle("open")
    })
})
// if(dropdown){
//     dropdown.classList.toggle("show")
// }
// const menu = document.querySelector(".menu-open")
// if(menu){
//     menu.classList.toggle("menu-open")
//     const carrot = document.querySelector(".carrot-rotate")
//     carrot.classList.toggle("carrot-rotate")
// }