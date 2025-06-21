let section1 = document.getElementById('section1')
let section2 = document.querySelectorAll('.section2')
let section2pic = document.getElementById('section2pic')
window.document.addEventListener('scroll', function () {
    if (section1.offsetTop - window.scrollY - window.innerHeight < -50) {
        section1.style.transform = 'translateY(0)'
        section1.style.opacity = '1'
    } else {
        section1.style.transform = 'translateY(100%)'
        section1.style.opacity = '0.5'
    }
    if (section2pic.offsetTop - window.scrollY - window.innerHeight < -50) {
        section2pic.classList.replace('opacity-0', 'opacity-100')
    } else {
        section2pic.classList.replace('opacity-100', 'opacity-0')
    }
    section2.forEach(function (item) {
        if (item.offsetTop - window.scrollY - window.innerHeight < -50) {
            item.style.transform = 'translateX(0)'
            item.style.opacity = '1'
        } else {
            item.style.transform = 'translateX(100%)'
            item.style.opacity = '0'
        }
    })
})
