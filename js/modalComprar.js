let modalComprar = document.querySelector('#modalComprar')
let modalComprarClose = document.querySelector('.modal-comprar-close').onclick = () => {
    modalComprar.style.transform = 'translateY(3000px)'
}
let shoppingComprarButton = document.querySelector('#comprar').onclick = () => {
    modalComprar.style.transform = 'translateY(0px)'
}