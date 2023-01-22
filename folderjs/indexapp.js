//Product card admin
let prodcard = document.getElementById(`prodcard`);
document.addEventListener("DOMContentLoaded",()=>{
    prodarray.forEach((prod) =>{
        const { id, marca, nombre, cat, precio, prodimage, cant} = prod
    let contentsectioncard = document.createElement("ARTICLE")
    prodcard.appendChild(contentsectioncard);
    contentsectioncard.innerHTML = `
    <div class="card__imgcontainer_prod">
    <img class="card__img__prod" src="./prod/prodimg/${prodimage}">
    </div>
    <div class="card__text">
    <div class="card__text__prod">${nombre}</div>
    <div class="card__price__prod">$${cant * precio}</div>
    <div class="card__cart__prod">
    <button onclick="addtocart(${id})" class="bg-black"><img src="./prod/icon-shopping-cart-prod.png"></button></div>
    </div>
    `
    })
})


let categoriesfilter = document.querySelector("#categoriasfilter");
categoriesfilter.className = "categoriesfilter"
categoriesfilter.innerHTML = `
    <button id="showall" class="categoriesfilter-buttons">Todo</button>
    <button id="showmother" class="categoriesfilter-buttons">Motherboard</button>
    <button id="showram" class="categoriesfilter-buttons">Memorias RAM</button>
    <button id="showgpu" class="categoriesfilter-buttons">GPU/Placa de video</button>
`

let showall = document.querySelector("#showall");
let showmother = document.querySelector("#showmother");
let showram = document.querySelector("#showram");
let showgpu = document.querySelector("#showgpu");

showall.onclick = ()=>{
    prodcard.innerHTML = "";
    prodarray.forEach((prod) =>{
        const { id, marca, nombre, cat, precio, prodimage, cant} = prod
    let contentsectioncard = document.createElement("ARTICLE")
    prodcard.appendChild(contentsectioncard);
    contentsectioncard.innerHTML = `
    <div class="card__imgcontainer_prod">
    <img class="card__img__prod" src="./prod/prodimg/${prodimage}">
    </div>
    <div class="card__text">
    <div class="card__text__prod">${nombre}</div>
    <div class="card__price__prod">$${cant * precio}</div>
    <div class="card__cart__prod">
    <button onclick="addtocart(${id})" class="bg-black"><img src="./prod/icon-shopping-cart-prod.png"></button></div>
    </div>
    `
    })
    
}

showmother.onclick = ()=>{
    prodcard.innerHTML = "";
    prodarraymother.forEach((prod) =>{
        const { id, marca, nombre, cat, precio, prodimage, cant} = prod
    let contentsectioncard = document.createElement("ARTICLE")
    prodcard.appendChild(contentsectioncard);
    contentsectioncard.innerHTML = `
    <div class="card__imgcontainer_prod">
    <img class="card__img__prod" src="./prod/prodimg/${prodimage}">
    </div>
    <div class="card__text">
    <div class="card__text__prod">${nombre}</div>
    <div class="card__price__prod">$${cant * precio}</div>
    <div class="card__cart__prod">
    <button onclick="addtocart(${id})" class="bg-black"><img src="./prod/icon-shopping-cart-prod.png"></button></div>
    </div>
    `
    })
    
}

showram.onclick =  ()=>{
    prodcard.innerHTML = "";
    prodarrayram.forEach((prod) =>{
        const { id, marca, nombre, cat, precio, prodimage, cant} = prod
    let contentsectioncard = document.createElement("ARTICLE")
    prodcard.appendChild(contentsectioncard);
    contentsectioncard.innerHTML = `
    <div class="card__imgcontainer_prod">
    <img class="card__img__prod" src="./prod/prodimg/${prodimage}">
    </div>
    <div class="card__text">
    <div class="card__text__prod">${nombre}</div>
    <div class="card__price__prod">$${cant * precio}</div>
    <div class="card__cart__prod">
    <button onclick="addtocart(${id})" class="bg-black"><img src="./prod/icon-shopping-cart-prod.png"></button></div>
    </div>
    `
    })
    
}
showgpu.onclick = ()=>{
    prodcard.innerHTML = "";
    prodarraygpu.forEach((prod) =>{
        const { id, marca, nombre, cat, precio, prodimage, cant} = prod
    let contentsectioncard = document.createElement("ARTICLE")
    prodcard.appendChild(contentsectioncard);
    contentsectioncard.innerHTML = `
    <div class="card__imgcontainer_prod">
    <img class="card__img__prod" src="./prod/prodimg/${prodimage}">
    </div>
    <div class="card__text">
    <div class="card__text__prod">${nombre}</div>
    <div class="card__price__prod">$${cant * precio}</div>
    <div class="card__cart__prod">
    <button onclick="addtocart(${id})" class="bg-black"><img src="./prod/icon-shopping-cart-prod.png"></button></div>
    </div>
    `
    })
    
}

