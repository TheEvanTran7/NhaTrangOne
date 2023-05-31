const select = document.querySelector(".select")
const selected = document.querySelector(".selected")
const carrot = document.querySelector(".carrot")
const menu = document.querySelector(".menu")
select.addEventListener("click", () => {
    select.classList.toggle("select-clicked")
    carrot.classList.toggle("carrot-rotate")
    menu.classList.toggle("menu-open")
})

const options = document.querySelectorAll(".menu li")
options.forEach(option => {
    option.addEventListener("click", () => {
        carrot.classList.remove("carrot-rotate")
        menu.classList.remove("menu-open")
        selected.innerHTML = option.innerText
        options.forEach(o => {
            o.classList.remove("menu-active")
        })
        option.classList.add('menu-active')
    })
})