const hamburger = document.querySelector("#hamburger")
const menu = document.querySelector("#menu")
const body = document.querySelector("body")
const moon = document.querySelector("#moon")
const  hLinks = document.querySelectorAll("#hLink")

// TOGGLE MENU ICON 
hamburger.addEventListener("click", () => {
    menu.classList.toggle("hidden")
    hamburger.classList.toggle("bg-white")
})

// REMOVE MENU AFTER CLICK 
hLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    })
} )

// TOGGLE DARK MODE 
moon.addEventListener("click", () => {
    body.classList.toggle("dark")
   
})