
window.addEventListener("scroll", function () {
    let header = document.querySelector('.nav-bar');
    header.classList.toggle('rolagem', window.scrollY > 100);
})