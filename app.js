const canvas = document.getElementsByClassName("canvas")[0];
const brushPic = document.getElementsByClassName('brush')[0];
const eraserPic = document.getElementsByClassName('Eraser')[0];
const colorblock = document.getElementsByClassName('colors')[0];
var c1 = canvas.getContext('2d');

var color = "black";

canvas.height = window.innerHeight-50;
canvas.width = window.innerWidth;
var x,y;
let isDrawing = false;
let eraser = false;
canvas.addEventListener('mousedown',(event)=>{
    x = event.offsetX;
    y = event.offsetY;
    isDrawing = true;
})

eraserPic.addEventListener('click',(event)=>{
    eraser = true;
    eraserPic.style.borderBottom = "1px solid black";
    brushPic.style.borderBottom = "none";
})

canvas.addEventListener('touchstart',(event)=>{
    x = event.offsetX;
    y = event.offsetY;
    isDrawing = true;
})


canvas.addEventListener('mousemove',(event)=>{
    if(isDrawing)
    {
        c1.beginPath();
        if(!eraser){
            c1.globalCompositeOperation = 'destination-over';
            c1.lineWidth = 2;
            c1.strokeStyle= color;
        }else{
            c1.globalCompositeOperation = 'destination-out';
            c1.lineWidth = 10;
        }
        c1.moveTo(x,y);
        c1.lineTo(event.offsetX,event.offsetY);
        x = event.offsetX;
        y = event.offsetY;
        c1.stroke();
    }
})

canvas.addEventListener('touchmove',(event)=>{
    if(isDrawing){
    c1.moveTo(x,y);
    c1.lineTo(event.offsetX,event.offsetY);
    x = event.offsetX;
    y = event.offsetY;
    c1.strokeStyle= color;
    c1.stroke();
    }
})


canvas.addEventListener("mouseup",()=>{
    isDrawing = false;
})

canvas.addEventListener("touchend",()=>{
    isDrawing = false;
})

const changecolor = (p) =>{
    color = p;
}

brushPic.addEventListener("click",()=>{
    eraser = false;
    eraserPic.style.borderBottom = "none";
    brushPic.style.borderBottom = "1px solid black";
    if(colorblock.style.opacity==1){
        colorblock.style.opacity=0;
        colorblock.style.transform= "translateX(220px)";

    }else{
        colorblock.style.opacity=1;
        colorblock.style.transform= "translateX(0px)";
    }
})