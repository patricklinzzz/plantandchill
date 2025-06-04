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

let closewin = document.getElementById('close')
let plant_window = document.getElementById('plant_window')
let Catharathus = document.getElementById('Catharathus')
Catharathus.onclick = function () {
    plant_window.style.display='block'
}
closewin.onclick = function () {
    plant_window.style.display='none'
}
