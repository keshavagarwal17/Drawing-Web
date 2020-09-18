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

canvas.addEventListener('touchstart',(event)=>{
    x = event.offsetX;
    y = event.offsetY;
    isDrawing = true;
})


canvas.addEventListener('mousemove',(event)=>{
    if(isDrawing){
    c1.moveTo(x,y);
    c1.lineTo(event.offsetX,event.offsetY);
    x = event.offsetX;
    y = event.offsetY;
    c1.strokeStyle= color;
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
    if(colorblock.style.opacity==1){
        console.log("i am here")
        console.log(colorblock.style.display)
        colorblock.style.opacity=0;
        colorblock.style.maxHeight=null;

    }else{
        colorblock.style.opacity=1;
        colorblock.style.maxHeight=colorblock.scrollHeight+'px';
    }
})