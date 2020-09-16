const canvas = document.getElementsByClassName("canvas")[0];
const brushPic = document.getElementsByClassName('brush')[0];
const colorblock = document.getElementsByClassName('colors')[0];
var c1 = canvas.getContext('2d');

var color = "black";

canvas.height = window.innerHeight-50;
canvas.width = window.innerWidth;
var x,y;
let isDrawing = false;
canvas.addEventListener('mousedown',(event)=>{
    x = event.offsetX;
    y = event.offsetY;
    isDrawing = true;
})

canvas.addEventListener('mousemove',(event)=>{
    if(isDrawing){
    c1.moveTo(x,y);
    console.log(event.offsetY)
    c1.lineTo(event.offsetX,event.offsetY);
    x = event.offsetX;
    y = event.offsetY;
    c1.strokeStyle= color;
    c1.stroke();}
})

canvas.addEventListener("mouseup",()=>{
    isDrawing = false;
})

const changecolor = (p) =>{
    color = p;
}

brushPic.addEventListener("click",()=>{
    colorblock.classList.toggle("hide-color");
})