const menuButton = document.getElementById('menuButton');
const closeMenuButton = document.getElementById('closeMenuButton');
const mobileMenu = document.getElementById('mobileMenu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
    mobileMenu.classList.remove('translate-x-full');
    mobileMenu.classList.add('translate-x-0');
});

closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('translate-x-full');
    mobileMenu.classList.remove('translate-x-0');
    setTimeout(() => {
        mobileMenu.classList.add('hidden');
    }, 300);
});
document.addEventListener('click', function(event) {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnMenuButton = menuButton.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuButton && !mobileMenu.classList.contains('hidden')) {
        closeMenuButton.click();
    }
});
//蝴蝶
let butterfly = document.getElementById('butterfly')
let i = 1
function changeImage(){
    butterfly.src=`pic/butterfly/${i}.png`
    i+=1
    if(i>3){
        i=1
    }
}
setInterval(changeImage, 300)

//標題滑入 進到畫面50%的時候作用
window.addEventListener('scroll', function() {
    let illustration = document.getElementById('illustration')
    let illustrationTop = illustration.getBoundingClientRect().top
    // console.log(proTitleTop,main.offsetTop,window.innerHeight,)
    if(illustrationTop<window.innerHeight*0.75){
        illustration.style.transform='translateX(0)'
    }else{
        illustration.style.transform='translateX(-25%)'
    }
    let watering = document.getElementById('watering')
    let wateringTop = watering.getBoundingClientRect().top
    if(wateringTop<window.innerHeight*0.75){
        watering.style.transform='translateX(0)'
    }else{
        watering.style.transform='translateX(25%)'
    }
});