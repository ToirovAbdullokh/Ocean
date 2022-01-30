let navbar = document.querySelector(".header .navbar");
document.querySelector(".menu-bars").onclick = () =>{
    navbar.classList.toggle("active");
}

document.querySelectorAll(".about-us__video .dots-inner").forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute("data-src");
        document.querySelector(".about-us__video video").src = src;
    }
})