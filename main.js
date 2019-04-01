const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('.item');
let currentIndex = 0;
let lastIndex = slides.length - 1;
let defaultConfig = {
    mode: 'slide',
    interval: 1000
}

test_transition();

swiper();

function swiper(config) {
    slide();
    let mergedConfig = Object.assign({}, defaultConfig, config);
    setInterval(() => {
        increment();
        switch (mergedConfig.mode) {
            case 'slide':
                slide();
                break;
            case 'fade':
                fade();
                break;
        }
    }, mergedConfig.interval);
}

function test_transition() {
    let ele = document.querySelector('.test_transition');
    ele.addEventListener('mouseenter', () => {
        ele.setAttribute('style','width: 200px');
    })
}

function slide() {
    slideX();
    slideY();
}

function slideX() {
    let prev = getPrev();
    let current = getCurrent();
    let next = getNext();  

    prev.style.left = -prev.offsetWidth + 'px';
    current.style.left = 0;
    next.style.left = next.offsetWidth + 'px';
}

function slideY() {
    let prev = getPrev();
    let current = getCurrent();
    let next = getNext();  

    prev.style.zIndex = 1;
    current.style.zIndex = 222;
    next.style.zIndex = 0;
}

function getPrev() {
    let prevIndex;
    currentIndex < 1 ? prevIndex = lastIndex : prevIndex = currentIndex - 1;
    return slides[prevIndex];
}

function getCurrent() {
    return slides[currentIndex];
}

function getNext() {
    let nextIndex;
    currentIndex >= lastIndex ? nextIndex = 0 : nextIndex = currentIndex + 1;
    return slides[nextIndex];
}

function fade() {
    console.log(1);
}

function increment() {
    if(currentIndex >= lastIndex)
        currentIndex = 0;
    else   
        currentIndex++;
}
