//Product card admin
let prodcard = document.getElementById(`prodcard`);
prodarray.forEach((prod) =>{
    const { id, marca, nombre, cat, precio, prodimage, cant} = prod
let contentsectioncard = document.createElement("ARTICLE")
prodcard.appendChild(contentsectioncard);
contentsectioncard.innerHTML = `
<div class="card__imgcontainer_prod">
<img class="card__img__prod" src="${prodimage}">
</div>
<div class="card__text">
<div class="card__text__prod">${nombre}</div>
<div class="card__price__prod">$${cant * precio}</div>
<div class="card__cart__prod">
<button onclick="addtocart(${id})" class="bg-black"><img  src="../prod/icon-shopping-cart-prod.png"></button></div>
</div>
`
})

