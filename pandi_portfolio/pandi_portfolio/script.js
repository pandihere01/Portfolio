const typingEffect = new Typed(".text", {
    strings: ["Software Developer" , "Sportsperson"],
    loop: true,
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 2000,

})

function changeColor(element) {
    const navbarItems = document.querySelectorAll('.navbar a');
    
    navbarItems.forEach(item => {
        item.classList.remove('active');
        item.classList.remove('has-dot');
    });

    element.classList.add('active');
    element.classList.add('has-dot');
}
