const h1 = document.querySelector('h1')
// Support Space:
h1.innerHTML = h1.textContent
    .replace(/\S/g, "<span>$&</span>")
    .replace(/\s/g, "<span>&nbsp;</span>")
let delay = 0
document.querySelectorAll('span').forEach((span, index) => {
    delay += 0.1;
    // if (0 === index%4) delay += 0.1;
    if (0 === Math.round(Math.random())) delay += 0.1;
    span.style.setProperty('--delay', `${delay}s`)
})
h1.addEventListener('animationend', (e) => {
    if (e.target === document.querySelector('h1 span:last-child')) {
        h1.classList.add('ended')
    }
})