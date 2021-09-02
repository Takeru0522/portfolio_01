const nav = document.querySelector('.nav')
const menuBtn = document.querySelector('.menu-btn')
const navItems = document.querySelectorAll('.menu-nav__item')
const burger = document.querySelector('.menu-btn__burger')

console.log(menuBtn)
let showMenu = false

menuBtn.addEventListener('click', toggleMenu)

function toggleMenu() {
    if (!showMenu) {
        nav.classList.add('open')
        navItems.forEach(item => item.classList.add('open'))
        burger.classList.add('open')
        showMenu = !showMenu
    } else {
        nav.classList.remove('open')
        navItems.forEach(item => item.classList.remove('open'))
        burger.classList.remove('open')
        showMenu = !showMenu
    }
}