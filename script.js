const canvas = document.querySelector('.cnvs')
ctx = canvas.getContext('2d')
let isDrawing = false

window.addEventListener('load', () => {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
})

const startDraw = () =>{
    isDrawing = true;
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.strokeStyle = 'white'
}
const startErase = () => {
    isDrawing = true;
    ctx.beginPath()
    ctx.lineWidth = 50
    ctx.strokeStyle = 'black'
}

const drawing = (e) => {
    if(!isDrawing) return
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
}

canvas.addEventListener('mousemove', drawing);
canvas.addEventListener('mouseup', () => isDrawing = false);

let tol = document.querySelectorAll('#d1>div')

tol.forEach( i => i.addEventListener('click', (e) => {
        tol.forEach(i => {
            i.style.boxShadow = '';
            i.style.transform = '';
        })
        canvas.removeEventListener('mousedown', startDraw);
        canvas.removeEventListener('mousedown', startErase);
        i.style.boxShadow = "0 0 10px orange";
        i.style.borderRadius = '10px' ;
        i.style.transform = 'scale(1.3)';
        if(i.classList.contains('pen')){
            canvas.addEventListener('mousedown', startDraw);
        }else if(i.classList.contains('eraser')){
            canvas.addEventListener('mousedown', startErase);
        }else{
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            i.style.boxShadow = '';
            i.style.transform = '';
        }
}))