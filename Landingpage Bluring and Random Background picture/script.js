const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
//querySelector - select element based on id

let load = 0

let int = setInterval(blurring, 30)
//设置间隔 function, milliseconds 1second = 1000 milliseconds

function blurring() {
    load++
    if (load > 99) {
        clearInterval(int)
    }
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    //tranaparent
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

const imagePaths = [
    "https://i.pinimg.com/originals/e4/70/bc/e470bc6679e92a45a6cfd118bb9c80a7.jpg",
    "https://i.pinimg.com/originals/35/30/a8/3530a81cd6aff8dc45a84ae9f7f2a7d3.jpg"
    
    
];
const randomIndex = Math.floor(Math.random() * imagePaths.length);
//generate a random index number to select an image from the array


const randomImagePath = imagePaths[randomIndex];
//use the random index number to select an image path from the array


bg.style.backgroundImage = `url(${randomImagePath})`;
bg.style.backgroundRepeat = "no-repeat";
bg.style.backgroundPosition = "absolute"
bg.style.top = "-30px";
bg.style.left = "-30px";
bg.style.filter = "blur(30px)";
bg.style.width = "calc(100vw + 60px)";
bg.style.height = "calc(100vh + 60px)";
bg.style.zIndex = "-1";
bg.style.backgroundPosition = "center";