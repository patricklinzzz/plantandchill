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

