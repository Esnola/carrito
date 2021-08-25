const icono = document.querySelector('#icono-uno');
const datosIcono = icono.getBoundingClientRect();
const posY = datosIcono.top;
const posYmax = posY + datosIcono.height;
const posX = datosIcono.left;
const posXmax = posX + datosIcono.width;
let mouseX = 0;
let mouseY = 0;


function mousePosition(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    console.log(`La X es ${mouseX} -  ${mouseY}`);
}


console.log(datosIcono.top);
console.log(datosIcono.left)
console.log(datosIcono.width);
console.log(datosIcono.height);

//console.log(mouseX);




icono.addEventListener('mousemove', () => {
    // addEventListener('mousemove', mousePosition, false)
    mousePosition(event);
    moverIcono();
})

icono.addEventListener('blur', () => {
    icono.style.marginTop = posY;
    icono.style.marginLeft = posX;
})


function moverIcono() {
    if (mouseX > posX && mouseX < posXmax) {
        icono.style.marginTop = mouseX + 'px';
    }
}

