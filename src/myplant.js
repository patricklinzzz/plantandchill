let all_btn =document.getElementById('all_btn')
let medicinal_btn =document.getElementById('medicinal_btn')
let carnivorous_btn =document.getElementById('carnivorous_btn')
let succulent_btn =document.getElementById('succulent_btn')
let medicinal =document.getElementsByClassName('medicinal')
let carnivorous =document.getElementsByClassName('carnivorous')
let succulent =document.getElementsByClassName('succulent')

all_btn.onclick = function() {
    all_btn.style.backgroundColor='#E8BEA4'
    medicinal_btn.style.backgroundColor='#E5E7EB'
    carnivorous_btn.style.backgroundColor='#E5E7EB'
    succulent_btn.style.backgroundColor='#E5E7EB'
    for (let i = 0; i < medicinal.length; i++) {
        medicinal[i].style.display = 'block';
    }
    for (let i = 0; i < carnivorous.length; i++) {
        carnivorous[i].style.display = 'block';
    }
    for (let i = 0; i < succulent.length; i++) {
        succulent[i].style.display = 'block';
    }
};
medicinal_btn.onclick = function() {
    all_btn.style.backgroundColor='#E5E7EB'
    medicinal_btn.style.backgroundColor='#E8BEA4'
    carnivorous_btn.style.backgroundColor='#E5E7EB'
    succulent_btn.style.backgroundColor='#E5E7EB'    
    for (let i = 0; i < medicinal.length; i++) {
        medicinal[i].style.display = 'block';
    }
    for (let i = 0; i < carnivorous.length; i++) {
        carnivorous[i].style.display = 'none';
    }
    for (let i = 0; i < succulent.length; i++) {
        succulent[i].style.display = 'none';
    }
};
carnivorous_btn.onclick = function() {
    all_btn.style.backgroundColor='#E5E7EB'
    medicinal_btn.style.backgroundColor='#E5E7EB'
    carnivorous_btn.style.backgroundColor='#E8BEA4'
    succulent_btn.style.backgroundColor='#E5E7EB'     
    for (let i = 0; i < medicinal.length; i++) {
        medicinal[i].style.display = 'none';
    }
    for (let i = 0; i < carnivorous.length; i++) {
        carnivorous[i].style.display = 'block';
    }
    for (let i = 0; i < succulent.length; i++) {
        succulent[i].style.display = 'none';
    }
};
succulent_btn.onclick = function() {
    all_btn.style.backgroundColor='#E5E7EB'
    medicinal_btn.style.backgroundColor='#E5E7EB'
    carnivorous_btn.style.backgroundColor='#E5E7EB'
    succulent_btn.style.backgroundColor='#E8BEA4'  
    for (let i = 0; i < medicinal.length; i++) {
        medicinal[i].style.display = 'none';
    }
    for (let i = 0; i < carnivorous.length; i++) {
        carnivorous[i].style.display = 'none';
    }
    for (let i = 0; i < succulent.length; i++) {
        succulent[i].style.display = 'block';
    }
};
// 跳小視窗
let closewin = document.querySelectorAll('.close')
let plant_window = document.getElementById('plant_window')
let Catharathus = document.getElementById('Catharathus')
let mask = document.getElementById('mask')
const header = document.querySelector('header')
const myplant_window = document.getElementById('myplant_window')

let body = document.body
let scrollY = 0

Catharathus.onclick = function () {
    header.style.display='none'
    plant_window.style.display='block'
    scrollY = window.scrollY
    mask.style.position='fixed'
    mask.style.display='block'
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.overflowY = 'scroll'
    body.style.width = '100%'
}
mask.onclick = function () {
    header.style.display='flex'
    plant_window.style.display='none'
    myplant_window.style.display='none'
    body.style.position = ''
    window.scrollTo(0, scrollY)
    mask.style.display='none'
}
closewin.forEach(function(button){
    button.onclick = function () {
        header.style.display='flex'
        plant_window.style.display='none'
        body.style.position = ''
        window.scrollTo(0, scrollY)
        mask.style.display='none'
        myplant_window.style.display='none'
    }
})

function openMyplant(){
    header.style.display='none'
    myplant_window.style.display='block'
    scrollY = window.scrollY
    mask.style.position='fixed'
    mask.style.display='block'
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.overflowY = 'scroll'
    body.style.width = '100%'
}

const myplantbtn = document.querySelectorAll('.myplantbtn')
const myplantdiv = document.querySelectorAll('.myplantdiv')
myplantbtn.forEach( btn =>{
    btn.onclick=function(){
        myplantbtn.forEach(button => {
            button.classList.remove('text-black')
            button.classList.add('text-gray-200')
        })
        btn.classList.add('text-black')
        btn.classList.remove('text-gray-200')
        for(i=0;i<myplantbtn.length;i++){
            if(myplantbtn[i].classList.contains('text-black')){
                myplantdiv[i].style.display='block'
            }else{
                myplantdiv[i].style.display='none'
            }
        }
    }
})

//發送訊息
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-record-btn');
    const inputField = document.getElementById('record-input');
    const recordsContainer = document.getElementById('records-container');

    addButton.addEventListener('click', () => {
        const newText = inputField.value.trim();

        if (newText === '') {
            return;
        }

        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth() + 1;
        const day = today.getDate();
        
        const newParagraph = document.createElement('p');
        newParagraph.textContent = `${year}/${month}/${day} ${newText}`;
        newParagraph.className = 'mt-2'; 
        
        recordsContainer.appendChild(newParagraph);
        inputField.value = '';
        inputField.focus();
    });

    inputField.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });

});