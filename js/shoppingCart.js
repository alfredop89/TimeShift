// MODAL DEL CARRITO

let shoppingModal = document.querySelector('#shoppingModal')
let cartContainer = document.querySelector('.cart-item-container')
let spanCart = document.querySelector('#spanCart')


let vaciarCarrito = document.querySelector('#borrarTodo')

// ABRIR Y CERRAR EL MODAL DEL CARRITO

let shoppingCloseButton = document.querySelector('#shoppingCloseButton').onclick = () => {
    shoppingModal.style.transform ='translateX(3000px)'
}

let navCart = document.querySelector('#navCart').onclick = (e) => {
    e.preventDefault()
    shoppingModal.style.transform ='translateX(0px)'
}


// ------------------------------------------------------------------------------------------------


// CARRITO DE COMPRAS

let shoppingCart = []

function carritoVacío(){
    if(shoppingCart.length === 0){
        cartContainer.innerHTML = `
        <!-- texto "vacío" -->
        <div class="cart-item-container">
            <h3 class="mt-5 text-center empty-text">Carrito vacío</h3>
        </div>
    `
    spanCart.innerText = shoppingCart.length
    }
}

let crearItem = (id) =>{

    let item = arrayProducts.find((producto) => id === producto.id)
    shoppingCart.push(item)
    spanCart.innerText = shoppingCart.length
    console.log(shoppingCart)
    shoppingCartUpdate()
    anadirAlCarrito()
    botonComprar()
    precioTotal()
}

// PRODUCTO EN EL CARRITO DE COMPRAS

function anadirAlCarrito() {

    shoppingCart.forEach((producto) => {

        let itemContainer = document.createElement('div')
        itemContainer.classList.add('cart-product-container', 'd-flex', 'justify-content-between', 'align-items-center', 'py-3', 'my-3')
                
        itemContainer.innerHTML = `
            <div class="d-flex justify-content-start align-items-center col-8 m-0">
                <div class="cart-product-img d-flex justify-content-center align-items-center mx-3">
                    <img class="img-fluid" src="${producto.imagen}" alt="">
                </div>
                <div class="cart-product-name d-flex justify-content-center align-items-center">
                    <p class="m-0">${producto.nombre}</p>
                </div>
            </div>
    
            <div class="d-flex justify-content-center align-items-center">
                <div class="cart-product-quantity d-flex justify-content-center align-items-center">
                    <p class="m-0">Cant : 0</p>
                </div>
                <div class="p-2 text-center">
                    <i id="${producto.id}" class="text-end cart-close-product fa-solid fa-xmark"></i>
                </div>
            </div>
        `
        cartContainer.append(itemContainer)

        // BOTÓN PARA ELIMINAR PRODUCTO DEL CARRITO

        let closeProduct = document.getElementById(`${producto.id}`).onclick = () =>{eliminarProducto(producto.id), carritoVacío()}

    })


}

// ACTUALIZANDO EL CARRITO

function shoppingCartUpdate() {
    cartContainer.innerHTML = ``
}

// ELIMINAR PRODUCTO DEL CARRITO

let eliminarProducto =(id) => {

    
    let buscarProducto = shoppingCart.find((producto) => id === producto.id)
    console.log(buscarProducto)
    shoppingCart =  shoppingCart.filter((producto) => { return producto !== buscarProducto})

    shoppingCartUpdate()
    anadirAlCarrito()
    botonComprar()
    precioTotal()

}

// VACIAR EL CARRITO

vaciarCarrito.onclick = () => {
    shoppingCart.length = 0
    cartContainer.innerHTML = `
            <!-- texto "vacío" -->
            <div class="cart-item-container">
                <h3 class="mt-5 text-center empty-text">Carrito vacío</h3>
            </div>
    `
    spanCart.innerText = shoppingCart.length
    console.log(shoppingCart)
    botonComprar()
}

// BOTÓN COMPRAR

function botonComprar() {
    let comprarButton = document.getElementById('comprar')
        if(shoppingCart.length > 0){
            comprarButton.classList.add('comprar-visible')
        }
        else{
            comprarButton.classList.remove('comprar-visible')
        }
}

// PRECIO TOTAL DE LOS PRODUCTOS

function precioTotal() {

    let totalCompra = shoppingCart.reduce((acc, prod) => acc + prod.precio, 0)
    let cartPriceTotal = document.getElementById('cartPriceTotal').innerText = 'Total a pagar:  ' + '   ' + totalCompra + '$'
    
}

// CANTIDAD DE PRODUCTOS EN EL CARRITO

let productoRepetido = (id) => {

    let buscarRepetido = shoppingCart.some((producto) => id === producto.id)
    console.log(buscarRepetido) 
}









