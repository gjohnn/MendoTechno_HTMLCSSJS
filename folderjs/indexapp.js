let prodcard = document.querySelector("#prodcard");
function pintar(arr) {
  arr.forEach((prod) => {
    const { id, marca, nombre, cat, precio, prodimage, cant } = prod;
    let contentsectioncard = document.createElement("ARTICLE");
    prodcard.appendChild(contentsectioncard);
    contentsectioncard.innerHTML = `
      <div class="card__imgcontainer_prod">
      <img class="card__img__prod" title="${nombre}" src="./prod/prodimg/${prodimage}">
      </div>
      <div class="card__text">
      <div class="card__text__prod">${nombre}</div>
      <div class="card__price__prod">$${cant * precio}</div>
      <div class="card__cart__prod">
      <button onclick="addtocart(${id})" class="bg-black"><img src="./prod/icon-shopping-cart-prod.png"></button></div>
      </div>
      `;
  });
}
function mostrarprods(prodarray) {
  //Product card admin

  let categoriesfilter = document.querySelector("#categoriasfilter");
  categoriesfilter.className = "categoriesfilter";
  categoriesfilter.innerHTML = `
    <button id="showall" class="categoriesfilter-buttons">Todo</button>
    <button id="showmother" class="categoriesfilter-buttons">Motherboard</button>
    <button id="showram" class="categoriesfilter-buttons">Memorias RAM</button>
    <button id="showgpu" class="categoriesfilter-buttons">GPU/Placa de video</button>
`;

  function onDOMContentLoaded() {
    prodcard.innerHTML = "";
    pintar(prodarray);
  }
  onDOMContentLoaded();

  let showall = document.querySelector("#showall");
  let showmother = document.querySelector("#showmother");
  let showram = document.querySelector("#showram");
  let showgpu = document.querySelector("#showgpu");

  showall.onclick = () => {
    prodcard.innerHTML = "";
    pintar(prodarray);
  };
  showmother.onclick = () => {
    prodcard.innerHTML = "";
    let cate = prodarray.filter((prod) => prod.cat == "MOTHERBOARD");
    pintar(cate);
  };

  showram.onclick = () => {
    prodcard.innerHTML = "";
    let cate = prodarray.filter((prod) => prod.cat == "MEMORIA RAM");
    pintar(cate);
  };
  showgpu.onclick = () => {
    prodcard.innerHTML = "";
    let cate = prodarray.filter((prod) => prod.cat == "GPU");
    pintar(cate);
  };
  const buscado = [];
  document.addEventListener("keyup", (e) => {
    buscado.length = 0
    e.target.matches("#searching");
    if (e.target.matches("#searching")) {
      prodarray.forEach((prod) => {
        if ((prod.nombre).toUpperCase().includes(e.target.value.toUpperCase())){
          prodcard.innerHTML = "";
          buscado.push(prod)
          pintar(buscado);
        }
      });
    }
  });
}

//BARRA DE BÚSQUEDA
