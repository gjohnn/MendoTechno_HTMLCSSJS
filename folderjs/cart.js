

function addtocart(id){
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
    guardarcart();
}
