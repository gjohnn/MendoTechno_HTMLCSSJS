fetch("../data/data.json")
.then((response)=>response.json())
.then((prodarray)=>{
    show(prodarray);
}
)
class Producto {
    constructor(id, marca, nombre, cat, precio, prodimage, cant) {
        this.id = id;
        this.marca = marca;
        this.nombre = nombre;
        this.cat = cat;
        this.precio = precio;
        this.prodimage = prodimage;
        this.cant = cant;
    }
    pushto() {
        prodarray.push(this);
    }
}

function show(msj) {
    console.log(msj);
}

let cart = []
document.addEventListener("DOMContentLoaded",()=>{
    cart = JSON.parse(localStorage.getItem("cart"))||[]
    showcart();
})


/*const prodarray = [
    {id:1, marca: "ASUS PRIME", nombre:"B560M-A Intel 11ª 10ª LGA1200", cat:"MOTHERBOARD", precio : 50000, prodimage: "prod1.png", cant : 1},
    {id:2, marca:"GIGABYTE", nombre:"A520M-H AMD AM4", cat:"MOTHERBOARD", precio :95000, prodimage:"prod2.png", cant : 1},
    {id:3, marca:"GIGABYTE", nombre:"B450 AORUS M AMD AM4", cat:"MOTHERBOARD", precio:110000, prodimage:"prod3.png", cant:1},
    {id:4, marca:"ASUS ROG STRIX", nombre:"Z590-E WIFI Bluetooth ATX ARGB Intel 11ª 10ª LGA1200", cat:"MOTHERBOARD", precio:110000, prodimage:"prod4.png", cant:1},
    {id:5, marca:"Crucial", nombre:"Crucial Basics DDR4 8GB 2666mhz CL19", cat:"MEMORIA RAM", precio:11000, prodimage:"prod5.png", cant:1},
    {id:6, marca:"Patriot", nombre:"Viper Steel DDR4 8GB 3600MHz CL20", cat:"MEMORIA RAM", precio:17000, prodimage:"prod6.png", cant:1},
    {id:7, marca:"Patriot", nombre:"Viper Steel RGB DDR4 8GB 3600MHz CL20", cat:"MEMORIA RAM", precio:27000, prodimage:"prod7.png", cant:1},
    {id:8, marca:"PNY", nombre:"XLR8 RGB DDR4 16GB 3200MHz CL16 Negra", cat:"MEMORIA RAM", precio:25000, prodimage:"prod8.png", cant:1},
    {id:9, marca:"GIGABYTE", nombre:"RX 580 8GB GDDR5", cat:"GPU", precio:55000, prodimage:"prod9.png", cant:1},
    {id:10, marca:"EVGA", nombre:"RTX 3070 EVGA 8GB GDRR6", cat:"GPU", precio:180000, prodimage:"prod10.png", cant:1},
    {id:11, marca:"ASROCK", nombre:"AMD Radeon RX 6800 XT 16GB", cat:"GPU", precio:155000, prodimage:"prod11.png", cant:1},
    {id:12, marca:"MSI", nombre:"Radeon RX 6600 XT MECH 2X 8G OC", cat:"GPU", precio:100000, prodimage:"prod12.png", cant:1}
];


let prodarraymother = prodarray.filter(item => item.cat == "MOTHERBOARD");
let prodarrayram = prodarray.filter(item => item.cat == "MEMORIA RAM");
let prodarraygpu = prodarray.filter(item => item.cat == "GPU");*/

function guardarcart(){
localStorage.setItem("cart", JSON.stringify(cart))
}

