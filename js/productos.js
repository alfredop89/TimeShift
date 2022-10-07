const productContainer = document.querySelector('#tiendaContainer')

const arrayProducts = [
        {
        id: "1",
        nombre: "Reloj clásico casual (plateado/bronze)",
        precio: 355,
        imagen: "./assets/img/product_1.png"
    },
        {
        id: "2",
        nombre: "Reloj casual para hombres (dorado)",
        precio: 220,
        imagen: "./assets/img/product_2.png"
    },
        {
        id: "3",
        nombre: "Reloj clásico casual para vestir (dorado)",
        precio: 185,
        imagen: "./assets/img/product_3.png"
    },
        {
        id: "4",
        nombre: "Reloj clásico deportivo  para hombres",
        precio: 260,
        imagen: "./assets/img/product_4.png"
    },
        {
        id: "5",
        nombre: "Reloj casual para hombres (nueva colección)",
        precio: 380,
        imagen: "./assets/img/product_5.png"
    },
        {
        id: "6",
        nombre: "Reloj clásico casual para hombres (nueva colección)",
        precio: 140,
        imagen: "./assets/img/product_6.png"
    },
        {
        id: "7",
        nombre: "Reloj clásico casual para hombres (contra agua)",
        precio: 170,
        imagen: "./assets/img/product_7.png"
    },
        {
        id: "8",
        nombre: "Reloj deportivo para hombres (nueva colección)",
        precio: 330,
        imagen: "./assets/img/product_8.png"
    }
]

arrayProducts.forEach((producto) => {

    const div = document.createElement('div')
    div.classList.add('product-container', 'd-flex', 'row', 'justify-content-center', 'p-2', 'col-12', 'col-sm-8', 'col-md-6', 'col-lg-4', 'col-xl-3', 'm-4',)

    div.innerHTML = `

                <div class="product-image d-flex justify-content-center align-items-center">
                    <img class="img-fluid img-card mb-4" src="${producto.imagen}" alt="">
                </div>
                <div class="product-price">
                    <p id="productPrice" class="text-end">${producto.precio + '$'}</p>
                </div>
                <div class="product-name">
                    <p id="productName" class="text-start">${producto.nombre}</p>
                </div>

                <div class="mb-4">
                    <i class="product-star fa-solid fa-star"></i>
                    <i class="product-star fa-solid fa-star"></i>
                    <i class="product-star fa-solid fa-star"></i>
                    <i class="product-star fa-solid fa-star"></i>
                    <i class="product-star fa-solid fa-star"></i>
                </div>

                <button id="${producto.id}" class="card-button text-center w-auto mb-4">AGREGAR</button>

    `
    productContainer.appendChild(div)

    let cardButton = document.getElementById(`${producto.id}`).onclick = () => {crearItem(producto.id), productoRepetido(producto.id)}

})