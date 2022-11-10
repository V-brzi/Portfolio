const btn = document.getElementById("nav-toggle")
const navBar =  document.getElementById("nav")
const navLinks = Array.from(document.getElementsByClassName("nav-link"))
const hide = "visibility: hidden;"
const switchBtn = `<i class="fa-solid fa-bars"></i>`
let active = false;



btn.addEventListener("click", () => {
    active = !active
    if(active){
        navBar.style = "visibility: visible; animation: slide .2s;"
        btn.innerHTML = `<i class="fa-solid fa-x"></i>`
    }
    else {
        navBar.style = hide 
        btn.innerHTML = switchBtn
    }
})

navLinks.forEach(navLink => {
    navLink.addEventListener("click", () => {
        active = !active
        navBar.style = hide
        btn.innerHTML = switchBtn
    })
})

document.getElementById("portfolio").addEventListener('touchstart', (event) => {
    event.target.classList.add('on-touch');
});

document.getElementById("portfolio").addEventListener('touchend', (event) => {
    event.target.classList.remove('on-touch');
});
