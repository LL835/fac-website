const toggleNavbarBtn = document.querySelector(".toggle-navbar");
const navbarLinks = document.querySelector(".navbar-links");
const linkstoSection = document.querySelectorAll(".navbar-links li a");

toggleNavbarBtn.addEventListener("click", (e) => {
    const hamburgerVisibility = navbarLinks.getAttribute("data-visible");
    if (hamburgerVisibility === "false"){
        navbarLinks.setAttribute("data-visible", "true");
        toggleNavbarBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`
    } else if (hamburgerVisibility === "true"){
        navbarLinks.setAttribute("data-visible", "false")
        toggleNavbarBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
})

linkstoSection.forEach(link => link.addEventListener("click", ()=> {
    const hamburgerVisibility = navbarLinks.getAttribute("data-visible");
    if (hamburgerVisibility === "true"){
        navbarLinks.setAttribute("data-visible", "false")
        toggleNavbarBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`
    }
}))
