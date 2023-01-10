const container = document.querySelector('.contaniner');
const left = document.querySelector('.left');
const right = document.querySelector('.right');

right.addEventListener('mouseenter', () => {
    container.classList.add('hover-right');
})

right.addEventListener('mouseleave', () => {
    container.classList.remove('hover-right');
})

left.addEventListener('mouseenter', () => {
    container.classList.add('hover-left');
})

left.addEventListener('mouseleave', () => {
    container.classList.remove('hover-left');
})

