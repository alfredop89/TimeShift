// MODAL DE IMAGEN DEL PRODUCTO

let productImage = document.querySelectorAll('.product-image')
let arrayImagecontainer = [...productImage]

arrayImagecontainer.forEach((container) => {
    container.onclick = () => {
        
        let modalProducto = document.createElement('div')
        modalProducto.classList.add('modal-product-img', 'd-flex', 'justify-content-center', 'align-items-center')

        modalProducto.innerHTML = `
    
                    <div class="modal-product-close">
                        <i class="fa-solid fa-xmark"></i>
                    </div>
                    <div>
                        ${container.firstElementChild.outerHTML}
                    </div>

        `
        body.appendChild(modalProducto)

        modalProducto.onclick = () => {
            modalProducto.classList.remove('modal-product-visible')
        }

        modalProducto.classList.add('modal-product-visible')

        let closeModalImg = document.querySelector('.modal-product-close').onclick = () => {
            modalProducto.classList.remove('modal-product-visible')
        }

    }
})














        

    
    




























































