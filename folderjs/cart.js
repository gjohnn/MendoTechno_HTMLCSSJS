//al cart

function addtocart(id) {
  Toastify({
    text: "Producto agregado",
    duration: 1400,
    destination: "https://github.com/apvarun/toastify-js",
    newWindow: true,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: false, // Prevents dismissing of toast on hover
    style: {
      background: "rgb(71, 1, 192)",
    },
    onClick: function () {}, // Callback after click
  }).showToast();
  const yaexiste = cart.some((prod) => prod.id === id);
  if (yaexiste == true) {
    const prod = cart.map((prod) => {
      if (prod.id === id) {
        prod.cant++;
      }
    });
  } else {
    fetch("../data/data.json")
      .then((response) => response.json())
      .then((prodarray) => {
        const item = prodarray.find((prod) => prod.id === id);
        cart.push(item);
      });
  }
  showcart();
}
//eliminar prod
function elimprod(id) {
  const prodID = id;
  cart = cart.filter((prod) => prod.id !== prodID);
  showcart();
}

function sumarcant(id) {
  const prod = cart.map((prod) => {
    if (prod.id === id) {
      prod.cant++;
    }
  });
  showcart();
}
//restar cant
function restarcant(id) {
  const prod = cart.map((prod) => {
    if (prod.id === id) {
      if (prod.cant > 1) {
        prod.cant--;
      } else {
        prod.cant = 1;
      }
    }
  });
  showcart();
}

//pintar cart

const showcart = () => {
  const modalbody = document.querySelector(".modal .modal-body");
  modalbody.innerHTML = "";
  cart.forEach((prod) => {
    const { id, marca, nombre, cat, precio, prodimage, cant } = prod;
    modalbody.innerHTML += `
        <div class="cart-prod d-flex">
        <figure class="cart-contimg img-fluid">
        <img class="cart-contimg-img" src="./prod/prodimg/${prodimage}">
        </figure>
        <div>
        <p class="m-0">${cat}</p>
        <p class="m-0">${marca}</p>
        <p class="m-0">${nombre}</p>
        <p class="m-0">Cantidad: ${cant}</p>
        <p class="m-0">$${cant * precio}</p>
        </div>
        <div class="botonescart">
        <div class="masymenos">
        <button type="button" onclick="sumarcant(${id})" class="btn btn-outline-success m-1">+</button>
        <button type="button" onclick="restarcant(${id})" class="btn btn-outline-danger m-1">-</button>
        </div>
        <button type="button" onclick="elimprod(${id})" class="btn btn-outline-warning text-black">Eliminar</button>
        </div>
        
        </div>
        `;
  });

  //mostrar vacio
  cartamount.textContent = cart.length;
  if (cart.length === 0) {
    modalbody.innerHTML = `<p class="text-center">Nada por aquí...</p>`;
  }
  //sumar precios
  preciofinal.textContent =
    `Precio total: $` +
    cart.reduce((acc, prod) => acc + prod.cant * prod.precio, 0);

  guardarcart();
};
//sumar cant

//sumar num carrito
const cartamount = document.querySelector(".cartamount");
//vaciar cart
const vaciarcart = document.querySelector("#vaciarcart");
vaciarcart.addEventListener("click", () => {
  cart.length = [];
  showcart();
});

//sumar precios const para function
const preciofinal = document.querySelector("#pretotal");
//btn comprar en cart
const finalcompra = document.querySelector("#finalizarcompra");
finalcompra.addEventListener("click", () => {
  if (cart.length >= 1) {
    swal({
      title: "Compra realizada!",
      text: "Gracias por su confianza!",
      icon: "success",
      button: "Cerrar",
    });
    cart.length = [];
    showcart();
  } else {
    swal({
      title: "¡No hay productos en tu carrito!",
      text: "Esperamos tu compra",
      icon: "error",
      buttons: true,
      dangerMode: true,
    });
  }
});
