// footer year
let year = document.getElementById('year');
let date = new Date().getFullYear();
year.innerText = date;


// Back to top button
let backtotop = document.querySelector('.back-to-top')
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        backtotop.classList.add('active')
    } else {
        backtotop.classList.remove('active')
    }
})
