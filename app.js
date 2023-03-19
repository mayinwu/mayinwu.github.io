let elements = document.querySelectorAll(".fade-in-init");
let windowHeight = window.innerHeight;

function checkScrollIn() {
    for (let i = 0; i < elements.length; i++) {
        let elementTop = elements[i].getBoundingClientRect().top;
        if (elementTop < windowHeight) {
            elements[i].classList.add("fade-in");
        }
    }
}

window.addEventListener("scroll", function() {
    checkScrollIn();
});

checkScrollIn(); // check on load