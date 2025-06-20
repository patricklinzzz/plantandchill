import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

document.addEventListener('DOMContentLoaded', () => {

    const btn3d = document.getElementById('btn3d');
    const close3d = document.getElementById('close3d');
    const threeDwindow = document.getElementById('canvas-container');
    const mask = document.getElementById('mask');
    const canvas = document.querySelector('#webgl-canvas');
    const loadingIndicator = document.getElementById('loading-indicator');


    let camera, scene, renderer, controls, animationId = null;

    /**
     * 動畫迴圈函式：持續更新畫面
     */
    function animate() {
        // 預約下一幀的繪製
        animationId = requestAnimationFrame(animate);
        // 更新控制器（如果使用者有拖曳）
        controls.update();
        // 渲染場景
        renderer.render(scene, camera);
    }

    /**
     * 處理視窗大小變化的函式
     */
    function handleResize() {
        // 如果渲染器還沒建立，就什麼都不做
        if (!renderer) return;

        // 以 threeDwindow 的當前大小為準
        const sizes = {
            width: threeDwindow.clientWidth,
            height: threeDwindow.clientHeight
        };

        // 更新相機的長寬比
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        // 更新渲染器的尺寸
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    /**
     * 初始化 Three.js 場景的函式 (只會在第一次點擊時執行一次)
     */
    function init() {
        loadingIndicator.style.display = 'flex';
        // 取得容器的當前尺寸
        const sizes = {
            width: threeDwindow.clientWidth,
            height: threeDwindow.clientHeight
        };
        
        // --- 場景 ---
        scene = new THREE.Scene();
        scene.background = null; // 透明背景

        // --- 相機 ---
        camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
        camera.position.set(0, 1, 3);
        scene.add(camera);

        // --- 光源 ---
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 2, 3);
        scene.add(directionalLight);

        // --- 載入模型 ---
        const gltfLoader = new GLTFLoader();
        gltfLoader.load(
            './pic/GL02.glb',
            (gltf) => {
                console.log('模型載入成功');
                const model = gltf.scene;
                model.position.set(0, -1, 0);
                scene.add(model);
                
                loadingIndicator.style.display = 'none';
            },
            undefined, // 載入進度，這裡省略
            (error) => console.error('模型載入失敗', error)
        );

        // --- 控制器 ---
        controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;

        // --- 渲染器 ---
        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true // 啟用透明度
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    // --- 3. 設定事件監聽器 ---

    // 「打開」按鈕的點擊事件
    btn3d.addEventListener('click', () => {
        threeDwindow.style.display = 'block';
        if (mask) mask.style.zIndex = '21';

        // 如果 renderer 不存在，代表是第一次打開，執行初始化
        if (!renderer) {
            init();
        } else {
            // 如果不是第一次，可能視窗在隱藏時被縮放，所以重新計算一次尺寸
            handleResize();
        }

        // 如果動畫迴圈沒有在跑，就啟動它
        if (animationId === null) {
            animate();
        }
    });

    close3d.addEventListener('click', () => {
        threeDwindow.style.display = 'none';
        if (mask) mask.style.zIndex = '10';

        // 如果動畫迴圈正在跑，就取消它，節省效能
        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    });

    // 最後，只註冊一次 resize 事件
    window.addEventListener('resize', handleResize);
});