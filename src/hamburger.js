const menuButton = document.getElementById('menuButton')
const closeMenuButton = document.getElementById('closeMenuButton')
const mobileMenu = document.getElementById('mobileMenu')

menuButton.addEventListener('click', () => {
    mobileMenu.style.display='block'
    setTimeout(() => {
        mobileMenu.style.transform='translateX(0)'
    }, 50)
})

closeMenuButton.addEventListener('click', () => {
    mobileMenu.style.transform='translateX(100%)'
    setTimeout(() => {
        mobileMenu.style.display='hidden'
    }, 200)
})
document.addEventListener('click', function(event) {
    const isClickInsideMenu = mobileMenu.contains(event.target)
    const isClickOnMenuButton = menuButton.contains(event.target)

    if (!isClickInsideMenu && !isClickOnMenuButton && !mobileMenu.classList.contains('hidden')) {
        closeMenuButton.click()
    }
})
// 固定導覽列
// 回到上方
document.addEventListener('DOMContentLoaded', function() {
    const scrollTopBtn = document.getElementById("scrollTopBtn")
    window.onscroll = function() {scrollFunction()}
    //header動畫
    const header = document.querySelector('header')
    let preScroll = 0

    function scrollFunction() {
        if (document.documentElement.scrollTop > 80) {
        scrollTopBtn.style.display = "block"
        } else {
        scrollTopBtn.style.display = "none"
        }

        const nowScroll =document.documentElement.scrollTop
        if(document.documentElement.scrollTop>20){
            header.style.backgroundColor=''
            if(nowScroll<preScroll){
                header.style.transform="translateY(0%)" //往上
            }else if(nowScroll>preScroll){
                header.style.transform="translateY(-100%)" //往下
            }
        preScroll=nowScroll
        }
        else{
            header.style.transform="translateY(0%)"
        }
    }
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        })
    })
})
