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

    function animate() {
        animationId = requestAnimationFrame(animate);
        controls.update();
        renderer.render(scene, camera);
    }

    function handleResize() {
        if (!renderer) return;
        const sizes = {
            width: threeDwindow.clientWidth,
            height: threeDwindow.clientHeight
        };

        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();

        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    function init() {
        loadingIndicator.style.display = 'flex';
        const sizes = {
            width: threeDwindow.clientWidth,
            height: threeDwindow.clientHeight
        };
        
        scene = new THREE.Scene();
        scene.background = null;

        camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
        camera.position.set(0, 1, 3);
        scene.add(camera);

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        directionalLight.position.set(1, 2, 3);
        scene.add(directionalLight);

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
            undefined,
            (error) => console.error('模型載入失敗', error)
        );

        controls = new OrbitControls(camera, canvas);
        controls.enableDamping = true;

        renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    btn3d.addEventListener('click', () => {
        threeDwindow.style.display = 'block';
        if (mask) mask.style.zIndex = '21';

        if (!renderer) {
            init();
        } else {
            handleResize();
        }

        if (animationId === null) {
            animate();
        }
    });

    close3d.addEventListener('click', () => {
        threeDwindow.style.display = 'none';
        if (mask) mask.style.zIndex = '10';

        if (animationId) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }
    });

    window.addEventListener('resize', handleResize);
});