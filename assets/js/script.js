$(".project-case").click(function () {
    $(".project-case").removeClass("active");
    $(this).addClass("active");
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const width = window.innerWidth

console.log(width)

if (width < 700) {
    const img = document.getElementById("parcours-svg");
    img.setAttribute("src", "/assets/img/parcours-min.svg");
} else {
    const img = document.getElementById("parcours-svg");
    img.setAttribute("src", "/assets/img/parcours.svg");
}