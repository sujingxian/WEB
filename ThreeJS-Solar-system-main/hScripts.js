import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

import stars from '../assets/stars.jpeg';
import earthTexture from '../assets/earth.jpeg';
import moonTexture from '../assets/moon.jpeg';
import sunTexture from '../assets/sun.jpeg';

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    75, 
    window.innerWidth / window.innerHeight, 
    0.1, 
    1000
    );
const orbit = new OrbitControls(camera,renderer.domElement);

// const axesHelper = new THREE.AxesHelper(10);
// scene.add(axesHelper);

camera.position.set(-10,2,5);
orbit.update();


const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);

const spotLight = new THREE.SpotLight(0xFFFFFF);
scene.add(spotLight);
spotLight.position.set(-100,100,0);
spotLight.intensity = 10;
spotLight.angle = 0.2;

// const sLightHelper = new THREE.SpotLightHelper(spotLight);
// scene.add(sLightHelper);

const textureLoader = new THREE.TextureLoader();
scene.background = textureLoader.load(stars);

const sunGeometry = new THREE.SphereGeometry(16,30,30);
const sunMaterial = new THREE.MeshBasicMaterial({
    map: textureLoader.load(sunTexture)
});

const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

const earthGeometry = new THREE.SphereGeometry(4,30,30);
const earthMaterial = new THREE.MeshBasicMaterial({
    map: textureLoader.load(earthTexture)
});

const earth = new THREE.Mesh(earthGeometry, earthMaterial);
sun.add(earth);
earth.rotation.z = 0.13*Math.PI;
earth.position.set(64,0,0);

const moonGeometry = new THREE.SphereGeometry(3,30,30);
const moonMaterial = new THREE.MeshBasicMaterial({
    map: textureLoader.load(moonTexture)
});

const moon = new THREE.Mesh(moonGeometry, moonMaterial);
earth.add(moon);
moon.position.set(15,0,0);


function animate() {
    sun.rotateY(0.004);
    earth.rotateY(0.0092)
    moon.rotateY(0.00004);

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});