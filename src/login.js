let loginT = document.getElementById('loginTitle')
let loginB = document.getElementById('loginBox')
let registerT = document.getElementById('registerTitle')
let registerB = document.getElementById('registerBox')
let box = document.getElementById('box')
function register(){
    loginB.style.display='none'
    loginT.style.display='none'
    registerT.style.display='block'
    registerB.style.display='flex'
    if(window.innerWidth<768){
        box.classList.add('flex-col-reverse')
        box.classList.remove('flex-col')
    }
}
function login(){
    loginB.style.display='flex'
    loginT.style.display='block'
    registerT.style.display='none'
    registerB.style.display='none'
    if(window.innerWidth<768){
        box.classList.add('flex-col')
        box.classList.remove('flex-col-reverse')
    }
}

let seepswd = document.getElementById('seepswd')
let password = document.getElementById('password')
seepswd.addEventListener('click',function(){
    if(this.classList.contains('fa-eye')){
        seepswd.classList.remove('fa-eye')
        seepswd.classList.add('fa-eye-slash')
        password.setAttribute('type','text')
    }else{
        seepswd.classList.add('fa-eye')
        seepswd.classList.remove('fa-eye-slash')
        password.setAttribute('type','password')
    }
})
