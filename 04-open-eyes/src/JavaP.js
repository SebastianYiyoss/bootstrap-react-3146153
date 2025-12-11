let imagen = document.querySelector('.cambio')

setInterval(() => {
    imagen.setAttribute('src', '../sources/Logo Comic 2.png')
    setTimeout(() => {
        imagen.setAttribute('src', '../sources/Logo Comic.png')
    }, 500);
}, 1000);