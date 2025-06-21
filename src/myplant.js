let all_btn = document.getElementById('all_btn')
let medicinal_btn = document.getElementById('medicinal_btn')
let carnivorous_btn = document.getElementById('carnivorous_btn')
let succulent_btn = document.getElementById('succulent_btn')
let medicinal = document.getElementsByClassName('medicinal')
let carnivorous = document.getElementsByClassName('carnivorous')
let succulent = document.getElementsByClassName('succulent')

all_btn.onclick = function () {
    all_btn.style.backgroundColor = '#E8BEA4'
    medicinal_btn.style.backgroundColor = '#E5E7EB'
    carnivorous_btn.style.backgroundColor = '#E5E7EB'
    succulent_btn.style.backgroundColor = '#E5E7EB'
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
medicinal_btn.onclick = function () {
    all_btn.style.backgroundColor = '#E5E7EB'
    medicinal_btn.style.backgroundColor = '#E8BEA4'
    carnivorous_btn.style.backgroundColor = '#E5E7EB'
    succulent_btn.style.backgroundColor = '#E5E7EB'
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
carnivorous_btn.onclick = function () {
    all_btn.style.backgroundColor = '#E5E7EB'
    medicinal_btn.style.backgroundColor = '#E5E7EB'
    carnivorous_btn.style.backgroundColor = '#E8BEA4'
    succulent_btn.style.backgroundColor = '#E5E7EB'
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
succulent_btn.onclick = function () {
    all_btn.style.backgroundColor = '#E5E7EB'
    medicinal_btn.style.backgroundColor = '#E5E7EB'
    carnivorous_btn.style.backgroundColor = '#E5E7EB'
    succulent_btn.style.backgroundColor = '#E8BEA4'
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
    header.style.display = 'none'
    plant_window.style.display = 'block'
    scrollY = window.scrollY
    mask.style.position = 'fixed'
    mask.style.display = 'block'
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.overflowY = 'scroll'
    body.style.width = '100%'
}
mask.onclick = function () {
    header.style.display = 'flex'
    plant_window.style.display = 'none'
    myplant_window.style.display = 'none'
    body.style.position = ''
    window.scrollTo(0, scrollY)
    mask.style.display = 'none'
}
closewin.forEach(function (button) {
    button.onclick = function () {
        header.style.display = 'flex'
        plant_window.style.display = 'none'
        body.style.position = ''
        window.scrollTo(0, scrollY)
        mask.style.display = 'none'
        myplant_window.style.display = 'none'
    }
})

function openMyplant() {
    header.style.display = 'none'
    myplant_window.style.display = 'block'
    scrollY = window.scrollY
    mask.style.position = 'fixed'
    mask.style.display = 'block'
    body.style.position = 'fixed'
    body.style.top = `-${scrollY}px`
    body.style.overflowY = 'scroll'
    body.style.width = '100%'
}

const myplantbtn = document.querySelectorAll('.myplantbtn')
const myplantdiv = document.querySelectorAll('.myplantdiv')
myplantbtn.forEach(btn => {
    btn.onclick = function () {
        myplantbtn.forEach(button => {
            button.classList.remove('text-black')
            button.classList.add('text-gray-200')
        })
        btn.classList.add('text-black')
        btn.classList.remove('text-gray-200')
        for (i = 0; i < myplantbtn.length; i++) {
            if (myplantbtn[i].classList.contains('text-black')) {
                myplantdiv[i].style.display = 'block'
            } else {
                myplantdiv[i].style.display = 'none'
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

    inputField.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addButton.click();
        }
    });

});

//計算下次澆水的剩餘天數
let alarmDay = document.getElementById('alarm-day')
let preWatering = document.getElementById('pre-watering')
let nextWatering = document.getElementById('next-watering')
function remainday() {
    let nowdate = new Date().setHours(0, 0, 0, 0)
    let preWdate = new Date(preWatering.value).setHours(0, 0, 0, 0)
    let alarmDayValue = alarmDay.value
    let remainDay = alarmDayValue - Math.floor((nowdate - preWdate) / (1000 * 60 * 60 * 24))
    nextWatering.style.color = '#4d4012'
    console.log(nowdate, preWdate, remainDay);
    const futureDate = new Date(new Date().setDate(new Date().getDate() + (remainDay + 1)))
    const year = futureDate.getFullYear()
    const month = futureDate.getMonth() + 1
    const day = futureDate.getDate()
    const formattedDate = `${year}/${month}/${day}`
    if (remainDay == 0) {
        nextWatering.innerText = '明天'
    } else if (remainDay == 1) {
        nextWatering.innerText = '後天'
    } else if (remainDay < 0) {
        nextWatering.innerText = '今天'
    } else {
        nextWatering.innerText = remainDay + 1 + '天後 ' + formattedDate
    }
}
preWatering.addEventListener('input', remainday)
alarmDay.addEventListener('input', remainday)

//提醒通知
let settime = document.getElementById('alarm-time')
let alarmTimerId = null;
let watering_chk = document.getElementById('watering_chk')
settime.addEventListener('change', function () {
    let timeinput = settime.value
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            // 如果使用者同意，就設定鬧鐘
            setAlarm(timeinput);
        } else {
            // 如果使用者拒絕，給予提示
            alert('您已拒絕顯示通知')
        }
    });
    function setAlarm(timeinput) {
        if (alarmTimerId) {
            clearInterval(alarmTimerId);
        }
        alarmTimerId = setInterval(() => {
            let nowdate = new Date().setHours(0, 0, 0, 0)
            let preWdate = new Date(preWatering.value).setHours(0, 0, 0, 0)
            let alarmDayValue = alarmDay.value
            let remainDay = alarmDayValue - Math.floor((nowdate - preWdate) / (1000 * 60 * 60 * 24))
            let currentTime = String(new Date().getHours()).padStart(2, '0') + ':' + String(new Date().getMinutes()).padStart(2, '0')
            if (currentTime == timeinput && watering_chk.checked && remainDay < 0) {
                new Notification('該澆花囉!')
                clearInterval(alarmTimerId)
            }
        }, 1000);
    }
})
