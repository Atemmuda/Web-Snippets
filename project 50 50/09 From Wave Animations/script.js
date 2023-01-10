//getting all the label elements
const labels = document.querySelectorAll('.form-control label')

//manipulating each label
labels.forEach((label) => {
    label.innerHTML = label.innerText
        .split('')
        .map((letter, idx) => `<span transition-delay:${idx * 100}ms>${letter}</span>`)
        .join('')
})