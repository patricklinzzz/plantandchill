const fileUploader = document.getElementById('file-uploader');
const imagePreview = document.getElementById('image-preview');

fileUploader.addEventListener('change', (event) => {
const files = event.target.files;

if (files.length > 0) {
    const file = files[0];
    
    const reader = new FileReader();
    
    reader.onload = function(e) {
        imagePreview.innerHTML = '';
        const img = document.createElement('img');
        img.src = e.target.result;
        imagePreview.appendChild(img);
    }
    
    // 開始讀取檔案，並將其轉換為 Base64 格式的 URL
    reader.readAsDataURL(file);
}
});

const settingsItems = document.querySelectorAll('.settings-item');
const overlay = document.getElementById('picker-overlay');
const pickerContainer = document.getElementById('picker-container');
const pickerOptions = document.getElementById('picker-options');
const cancelButton = document.getElementById('picker-cancel');

let activeItemValueSpan = null; // 用來記錄目前正在被編輯的項目

// 開啟選擇器函式
function openPicker(item) {
    activeItemValueSpan = item.querySelector('.item-value');
    pickerOptions.innerHTML = '';
    
    const options = item.dataset.options.split(',');
    options.forEach(optionText => {
    const li = document.createElement('li');
    li.className = 'py-2 text-center text-black border-b border-gray-200 cursor-pointer active:bg-gray-200 last:border-b-0';
    li.textContent = optionText;
    li.addEventListener('click', () => {
        activeItemValueSpan.textContent = optionText;
        closePicker();
    });
    pickerOptions.appendChild(li);
    });

    // --- JS 邏輯修改處 ---
    // 顯示選擇器和遮罩
    overlay.classList.remove('opacity-0', 'invisible');
    pickerContainer.classList.remove('translate-y-full');
}

// 關閉選擇器函式
function closePicker() {
    // --- JS 邏輯修改處 ---
    // 隱藏選擇器和遮罩
    overlay.classList.add('opacity-0', 'invisible');
    pickerContainer.classList.add('translate-y-full');
}

// 為每一個設定項目加上點擊事件
settingsItems.forEach(item => {
    item.addEventListener('click', () => {
    openPicker(item);
    });
});

// 點擊遮罩或取消按鈕時關閉選擇器
overlay.addEventListener('click', closePicker);
cancelButton.addEventListener('click', closePicker);
