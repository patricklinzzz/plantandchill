const fileUploader = document.getElementById('file-uploader')
const imagePreview = document.getElementById('image-preview')

fileUploader.addEventListener('change', (event) => {
const files = event.target.files

if (files.length > 0) {
    const file = files[0]
    
    const reader = new FileReader()
    
    reader.onload = function(e) {
        imagePreview.innerHTML = ''
        const img = document.createElement('img')
        img.src = e.target.result
        imagePreview.appendChild(img)
    }
    reader.readAsDataURL(file)
}
})

const settingsItems = document.querySelectorAll('.settings-item')
const overlay = document.getElementById('picker-overlay')
const pickerContainer = document.getElementById('picker-container')
const pickerOptions = document.getElementById('picker-options')
const cancelButton = document.getElementById('picker-cancel')

let activeItemValueSpan = null 

function openPicker(item) {
    activeItemValueSpan = item.querySelector('.item-value')
    pickerOptions.innerHTML = ''
    
    const options = item.dataset.options.split(',')
    options.forEach(optionText => {
    const li = document.createElement('li')
    li.className = 'py-2 text-center text-black border-b border-gray-200 cursor-pointer active:bg-gray-200 last:border-b-0'
    li.textContent = optionText
    li.addEventListener('click', () => {
        activeItemValueSpan.textContent = optionText
        closePicker()
    })
    pickerOptions.appendChild(li)
    })

    overlay.classList.remove('opacity-0', 'invisible')
    pickerContainer.classList.remove('translate-y-full')
}

function closePicker() {
    overlay.classList.add('opacity-0', 'invisible')
    pickerContainer.classList.add('translate-y-full')
}

settingsItems.forEach(item => {
    item.addEventListener('click', () => {
    openPicker(item)
    })
})

overlay.addEventListener('click', closePicker)
cancelButton.addEventListener('click', closePicker)
