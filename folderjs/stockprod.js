class Producto {
    constructor(id, marca, nombre, cat, precio, prodimage) {
        this.id = id;
        this.marca = marca;
        this.nombre = nombre;
        this.cat = cat;
        this.precio = precio;
        this.prodimage = prodimage;
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


const prodarray = [];
//MOTHERBOARD
const prod1 = new Producto(1, "ASUS PRIME", "B560M-A Intel 11ª 10ª LGA1200", "MOTHERBOARD", 50000, "../prod/prodimg/prod1.png",1);
prod1.pushto();
const prod2 = new Producto(2, "GIGABYTE", "A520M-H AMD AM4", "MOTHERBOARD", 95000, "../prod/prodimg/prod2.png");
prod2.pushto();
const prod3 = new Producto(3, "GIGABYTE", "B450 AORUS M AMD AM4", "MOTHERBOARD", 110000, "../prod/prodimg/prod3.png");
prod3.pushto();
const prod4 = new Producto(4, "ASUS ROG STRIX", "Z590-E WIFI Bluetooth ATX ARGB Intel 11ª 10ª LGA1200", "MOTHERBOARD", 110000, "../prod/prodimg/prod4.png");
prod4.pushto();
//RAM
const prod5 = new Producto(5, "Crucial", "Crucial Basics DDR4 8GB 2666mhz CL19", "MEMORIA RAM", 11000, "../prod/prodimg/prod5.png");
prod5.pushto();
const prod6 = new Producto(6, "Patriot", "Viper Steel DDR4 8GB 3600MHz CL20", "MEMORIA RAM", 17000, "../prod/prodimg/prod6.png");
prod6.pushto();
const prod7 = new Producto(7, "Patriot", "Viper Steel RGB DDR4 8GB 3600MHz CL20", "MEMORIA RAM", 27000, "../prod/prodimg/prod7.png");
prod7.pushto();
const prod8 = new Producto(8, "PNY", "XLR8 RGB DDR4 16GB 3200MHz CL16 Negra", "MEMORIA RAM", 25000, "../prod/prodimg/prod8.png");
prod8.pushto();
//GPU
const prod9 = new Producto(9, "GIGABYTE", "RX 580 8GB GDDR5", "GPU", 55000, "../prod/prodimg/prod9.png");
prod9.pushto();
const prod10 = new Producto(10, "EVGA", "RTX 3070 EVGA 8GB GDRR6", "GPU", 180000, "../prod/prodimg/prod10.png");
prod10.pushto();
const prod11 = new Producto(11, "ASROCK", "AMD Radeon RX 6800 XT 16GB", "GPU", 155000, "../prod/prodimg/prod11.png");
prod11.pushto();
const prod12 = new Producto(12, "MSI", "Radeon RX 6600 XT MECH 2X 8G OC", "GPU", 100000, "../prod/prodimg/prod12.png");
prod12.pushto();

let prodarraygpu = prodarray.filter(item => item.cat == "GPU");
let prodarrayram = prodarray.filter(item => item.cat == "MEMORIA RAM");
let prodarraymother = prodarray.filter(item => item.cat == "MOTHERBOARD");

function guardarcart(){
localStorage.setItem("cart", JSON.stringify(cart))
}

