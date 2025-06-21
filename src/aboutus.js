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
//bee
let bee = document.getElementById('bee')
let i = 1
let X = 0
let Y = 0
let lag = false
setInterval(function () {
    bee.setAttribute('src', 'pic/bee/' + i + '.png')
    i++
    if (i > 3) {
        i = 1
    }
}, 200)

window.addEventListener('scroll', function () {
    if (lag) {
        return
    }
    lag = true
    setTimeout(function () {
        lag = false
    }, 1100)

    let addX = Math.random() * 80 - 40
    let addY = Math.random() * 60 - 30
    X += addX
    Y += addY
    if (X > 40) X = 40
    if (X < -40) X = -40
    if (Y > 30) Y = 30
    if (Y < -30) Y = -30
    let scaleX = 1
    if (addX < 0) {
        scaleX = -1
    } else {
        scaleX = 1
    }
    bee.style.transform = `translate(${X}vw, ${Y}vh) scaleX(${scaleX})`
})
