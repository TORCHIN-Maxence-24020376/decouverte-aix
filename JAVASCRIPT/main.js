const carouselWrapper = document.querySelector('.carousel-wrapper');
const descriptions = document.querySelectorAll('.description0');

function moveToIndex(index, carouselId) {
    const carouselWrapper = document.querySelector(`#${carouselId} .carousel-wrapper`);
    const images = carouselWrapper.querySelectorAll('.el');

    if (index >= 0 && index < images.length) {
        const targetScroll = images[index].offsetLeft;
        carouselWrapper.scrollTo({
            left: targetScroll,
            behavior: 'smooth',
        });

        descriptions.forEach((description, idx) => {
            description.style.display = idx === index ? 'block' : 'none';
        });
    }
}

document.querySelectorAll('#handicap-control button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const carouselId = 'carousel-itineraires-handicap';
        moveToIndex(index, carouselId);
    });
});

document.querySelectorAll('#standard-control button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const carouselId = 'carousel-itineraires';
        moveToIndex(index, carouselId);
    });
});



let isHandicapMode = false;

function toggleCarousel() {
    isHandicapMode = !isHandicapMode;
    const standardCarousel = document.getElementById('carousel-itineraires');
    const handicapCarousel = document.getElementById('carousel-itineraires-handicap');
    const standardControl = document.getElementById('standard-control');
    const handicapControl = document.getElementById('handicap-control');
    const handicapLogo = document.querySelector('.handicap-logo');
    const standardDescriptions = document.querySelector('.descriptions-standard');
    const handicapDescriptions = document.querySelector('.descriptions-handicap');
    const carte = document.getElementById('carte');
    if (carte) {
        carte.scrollIntoView({ behavior: 'smooth' });
    }
    
    standardControl.style.display = isHandicapMode ? 'none' : 'block';
    standardCarousel.style.display = isHandicapMode ? 'none' : 'block';
    handicapControl.style.display = isHandicapMode ? 'block' : 'none';
    handicapCarousel.style.display = isHandicapMode ? 'block' : 'none';

    standardDescriptions.style.display = isHandicapMode ? 'none' : 'block';
    handicapDescriptions.style.display = isHandicapMode ? 'block' : 'none';

    handicapLogo.style.backgroundColor = isHandicapMode ? '#23d300' : '#007bff';
}


document.querySelectorAll('#standard-control button, #handicap-control button').forEach((button, index) => {
    button.addEventListener('click', () => {
        const parentControl = button.closest('div').id;
        const carouselId = parentControl === 'standard-control' ? 'carousel-itineraires' : 'carousel-itineraires-handicap';
        moveToIndex(index, carouselId);

        document.querySelectorAll(`#${parentControl} button`).forEach((btn) => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
    });
});

function toggleMenu() {
    const selection = document.getElementById('selection');
    selection.classList.toggle('respons'); 
    const carte = document.getElementById('carte');
    if (carte) {
        carte.scrollIntoView({ behavior: 'smooth' });
    }
}
