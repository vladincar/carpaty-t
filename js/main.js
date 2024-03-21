//mob menu

let subNav = document.querySelectorAll('.sub-nav')

const menuBox1 = document.querySelector('.menu__box-1 p')
const menuBox2 = document.querySelector('.menu__box-2 p')

menuBox1.addEventListener('click',()=>{
    subNav[2].classList.toggle('opened')
    subNav[3].classList.remove('opened')
})
menuBox2.addEventListener('click',()=>{
    subNav[3].classList.toggle('opened')
    subNav[2].classList.remove('opened')
})

//carusel
    // Get necessary elements
    const carusel = document.querySelector('.carusel');
    const controlButtons = document.querySelectorAll('.carusel-control p');
    const totalSlides = document.querySelectorAll('.carusel div').length;
    let currentSlide = 1;

    // Function to update carousel position
    function updateCarousel() {
        const offset = -(currentSlide - 1) * (window.outerWidth>500?102.5:110); // Assuming each slide occupies 100% width
        carusel.style.transform = `translateX(${offset}% )`;
    }

    // Event listeners for control buttons
    controlButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentSlide = index + 1;
            updateCarousel();
            updateSelectedButton();
        });
    });

    // Function to update selected button style
    function updateSelectedButton() {
        controlButtons.forEach(button => {
            button.classList.remove('pSelected');
        });
        controlButtons[currentSlide - 1].classList.add('pSelected');
    }


    //adjust images
    const posl_img = document.querySelector('.posl-img');
    const poslugi_text = document.querySelector('.poslugi-text').offsetHeight;

    posl_img.setAttribute("height",`${poslugi_text}px`);