//num al lado del carrito
const cartamount = document.querySelector(".cartamount");

function addtocart(id){
    Toastify({
        text: "Producto agregado",
        duration: 1400,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "rgb(71, 1, 192)",
        },
        onClick: function(){} // Callback after click
    }).showToast();
    const item = prodarray.find((prod) =>prod.id === id)
    cart.push(item)
    showcart();
}
function elimprod(id){
    const prodID = id;
    cart = cart.filter((prod)=>prod.id !== prodID)
    showcart();
    console.log(cart);
}

//pintar cart

const showcart = ()=>{
    const modalbody = document.querySelector(".modal .modal-body")
    modalbody.innerHTML = ""
    cart.forEach((prod)=>{
        let cant = 1;
        const { id, marca, nombre, cat, precio, prodimage} = prod
        modalbody.innerHTML +=`
        <div class="cart-prod d-flex">
            <figure class="cart-contimg img-fluid">
                <img class="cart-contimg-img" src="${prodimage}">
            </figure>
            <div>
            <p class="m-0">${cat}</p>
                <p class="m-0">${marca}</p>
                <p class="m-0">${nombre}</p>
                <p class="m-0">Cantidad: ${cant}</p>
                <p class="m-0">$${cant*precio}</p>
            </div>
            <div class="botonescart">
            <button type="button" class="btn btn-success">+</button>
            <button type="button" class="btn btn-danger">-</button>
            <button type="button" onclick="elimprod(${id})" class="btn btn-warning">Eliminar</button>
            </div>

        </div>
        `
    })
    if (cart.length === 0 ){
        modalbody.innerHTML = `<p class="text-center">Nada por aquí...</p>`
    }
    preciofinal = cart.reduce((acc,prod)=>{
        acc + cant * prod.precio, 0})
    
    cartamount.textContent = cart.length
    guardarcart();
}

//vaciar cart
const vaciarcart = document.querySelector("#vaciarcart")
vaciarcart.addEventListener("click", ()=>{
    cart.length = []
    showcart();
})

//sumar precios
const preciofinal = document.querySelector("#pretotal")

const finalcompra = document.querySelector("#finalizarcompra")

finalcompra.addEventListener("click",()=>{
    if(cart.length >=1){
    swal({
        title: "Compra realizada!",
        text: "Gracias por su confianza!",
        icon: "success",
        button: "Cerrar",
      });
    cart.length = []
    showcart();
    }else{
        swal({
            title: "Oh no!",
            text: "No hay productos en el carrito...",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
    }
})