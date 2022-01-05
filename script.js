$(document).ready(function () {
  showItemsOnCart()
  calcTotal()
})

class Productos {

  constructor(id, tipo, imagePath, precio, marca, caracteristicas) {

    this.id = id;
    this.tipo = tipo;
    this.imagePath = imagePath;
    this.precio = precio;
    this.marca = marca;
    this.caracteristicas = caracteristicas;
  }
}
const stock = [{
    id: 001,
    tipo: 'NOTEBOOK',
    imagePath: './public/images/notebook/c1.jpeg',
    precio: 82400,
    marca: 'LENOVO',
    caracteristicas: 'Core i5 4Gb 1Tb 15.6" Win10'
  },
  {
    id: 002,
    tipo: 'NOTEBOOK',
    imagePath: './public/images/notebook/c3.jpeg',
    precio: 103000,
    marca: 'ACER',
    caracteristicas: 'Core i5 8Gb 1Tb 15.6" Win10'
  },
  {
    id: 003,
    tipo: 'NOTEBOOK',
    imagePath: './public/images/notebook/c4.jpeg',
    precio: 96400,
    marca: 'HP',
    caracteristicas: 'Core i7 16Gb 1Tb 14" Win10'
  },
  {
    id: 004,
    tipo: 'NOTEBOOK',
    imagePath: './public/images/notebook/c5.jpeg',
    precio: 105400,
    marca: 'HP',
    caracteristicas: 'Core i5 4Gb 1Tb 15.6" Win10'
  },
  {
    id: 005,
    tipo: 'NOTEBOOK',
    imagePath: './public/images/notebook/c6.jpeg',
    precio: 120000,
    marca: 'LENOVO',
    caracteristicas: 'Core i5 8Gb 1Tb 15.6" Win10'
  },
  {
    id: 006,
    tipo: 'NOTEBOOK',
    imagePath: './public/images/notebook/c6.jpeg',
    precio: 93000,
    marca: 'ACER',
    caracteristicas: 'Core i7 16Gb 1Tb 14" Win10'
  },
  {
    id: 007,
    tipo: 'NOTEBOOK',
    imagePath: './public/images/notebook/c7.jpeg',
    precio: 82000,
    marca: 'LENOVO',
    caracteristicas: 'Core i5 4Gb 1Tb 15.6" Win10'
  },
  {
    id: 010,
    tipo: 'AURICULARES',
    imagePath: './public/images/notebook/10.jpg',
    precio: 5803,
    marca: 'CRUSHER',
    caracteristicas: 'Auricular bluetooth'
  },
  {
    id: 011,
    tipo: 'AURICULARES',
    imagePath: './public/images/notebook/11.jpg',
    precio: 4080,
    marca: 'CRUSHER',
    caracteristicas: 'Auricular bluetooth'
  },
  {
    id: 012,
    tipo: 'AURICULARES',
    imagePath: './public/images/notebook/12.jpg',
    precio: 4500,
    marca: 'CRUSHER',
    caracteristicas: 'Auricular bluetooth'
  },
  {
    id: 013,
    tipo: 'AURICULARES',
    imagePath: './public/images/notebook/15.jpg',
    precio: 5320,
    marca: 'CRUSHER',
    caracteristicas: 'Auricular bluetooth'
  },
  {
    id: 020,
    tipo: 'TECLADOS',
    imagePath: './public/images/notebook/20.jpeg',
    precio: 3454,
    marca: 'LOGITECH',
    caracteristicas: 'Logitech K380 inalambrico'
  },
  {
    id: 021,
    tipo: 'TECLADOS',
    imagePath: './public/images/notebook/21.jpeg',
    precio: 2800,
    marca: 'LOGITECH',
    caracteristicas: 'Logitech Mecanico K835'
  },
  {
    id: 022,
    tipo: 'TECLADOS',
    imagePath: './public/images/notebook/22.jpeg',
    precio: 4330,
    marca: 'LOGITECH',
    caracteristicas: 'Teclado y Mouse Logitech MK235 Inalámbrico'
  },
  {
    id: 023,
    tipo: 'TECLADOS',
    imagePath: './public/images/notebook/23.jpeg',
    precio: 6780,
    marca: 'LOGITECH',
    caracteristicas: 'Teclado K400 Plus Inalámbrico'
  },
  {
    id: 024,
    tipo: 'TECLADOS',
    imagePath: './public/images/notebook/24.jpeg',
    precio: 9100,
    marca: 'LOGITECH',
    caracteristicas: 'Teclado Gamer HyperX Alloy Origins Red'
  },
  {
    id: 030,
    tipo: 'MONITORES',
    imagePath: './public/images/notebook/30.jpeg',
    precio: 15200,
    marca: 'LG',
    caracteristicas: 'Monitor Led 19" LG HD 60Hz 5Ms'
  },

  {
    id: 031,
    tipo: 'MONITORES',
    imagePath: './public/images/notebook/31.jpeg',
    precio: 14200,
    marca: 'PHILIPS',
    caracteristicas: 'Monitor Led 19" Philips 60Hz'
  },
  {
    id: 032,
    tipo: 'MONITORES',
    imagePath: './public/images/notebook/32.jpeg',
    precio: 16800,
    marca: 'PHILIPS',
    caracteristicas: 'Monitor Led 19" Philips 60Hz'
  },
  {
    id: 033,
    tipo: 'MONITORES',
    imagePath: './public/images/notebook/33.jpeg',
    precio: 15400,
    marca: 'SAMSUNG',
    caracteristicas: 'Monitor Led 19" Samsung HD 60Hz A330N'
  },
  {
    id: 034,
    tipo: 'MONITORES',
    imagePath: './public/images/notebook/34.jpeg',
    precio: 14600,
    marca: 'SAMSUNG',
    caracteristicas: 'Monitor Led 19" Samsung HD 60Hz A330N'
  },
  {
    id: 035,
    tipo: 'MONITORES',
    imagePath: './public/images/notebook/35.jpeg',
    precio: 17000,
    marca: 'LG',
    caracteristicas: 'Monitor Led 19" LG HD 60Hz 5Ms'
  },
]

let producto = stock.map(item => new Productos(item.id, item.tipo, item.imagePath, item.precio, item.marca, item.caracteristicas))

// RENDERIZADO DE PRODUCTOS

for (const elemento of producto) {

  let cardNueva = document.createElement('div')
  cardNueva.innerHTML = `<div class="container mt-5 mb-5 d-flex justify-content-center align-items-center">
  <div class="card">
      <div class="inner-card"> <img src=${elemento.imagePath} class="img-fluid rounded">
          <div class="d-flex justify-content-between align-items-center mt-3 px-2">
              <h4>${elemento.marca}</h4> <span class="heart"><i class="fa fa-heart"></i></span>
          </div>
          <div class="m-1 px-2"> <small>${elemento.caracteristicas}</small> </div>
          <div class="px-2">
              <h3 class="p-2">${elemento.precio}$</h3>
          </div>
          <div class="px-2"> <button id="${elemento.id}"class="btn btn-outline-primary px-3 agregar" onClick=agregarAlCarrito(event)>Agregar</button> </div>
      </div>
  </div>
  </div>`;

  let contenedor = document.getElementById("contenedor")

  contenedor.appendChild(cardNueva)
}

// SIDEBAR CARRITO
const btnToggle = document.getElementById('carrito1')
btnToggle.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');

});

const btnCerrar = document.getElementById('cerrado')
btnCerrar.addEventListener('click', function () {
  document.getElementById('sidebar').classList.toggle('active');

});


//AGREGAR AL CARRITO

function clickeado() {

  toastr.options = {
    "positionClass": "toast-bottom-right",
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "3000",
    "extendedTimeOut": "1000",

  }
  toastr["success"]("Producto añadido al carrito")
}

function agregarAlCarrito(e) {
  clickeado();

  const productoClickeado = producto.find(item => item.id === parseInt(e.target.id))
  const cart = localStorage.getItem('MiCarrito')
  const prevCart = cart ?
    JSON.parse(cart) :
    []

  const newCart = [
    ...prevCart,
    productoClickeado
  ]

  localStorage.setItem("MiCarrito", JSON.stringify(newCart));
  showItemsOnCart()
  calcTotal()
}

//RENDERIZADO DE PRODUCTOS EN CARRITO
function showItemsOnCart() {
  const cart = JSON.parse(localStorage.getItem('MiCarrito'))
  const normalizeCart = cart ? cart : []
  $("#tbody").html(normalizeCart.map(item => buildTrItem(item)))
}

const buildTrItem = item => {
  return `<tr id=${item.id}><td>${item.marca}</td>
<td>${item.caracteristicas}</td>
<td>${item.precio}$</td>
<td><button id="${item.id}" class="btn-remover" onClick=removeItem(event)>-</button></td></tr>`
}

//REMOVER ITEMS DE CARRITO
function removeItem(e) {
  const itemId = parseInt(e.target.id)
  const prevCart = JSON.parse(localStorage.getItem('MiCarrito'))
  const newCart = prevCart.filter(item => item.id !== itemId)
  localStorage.setItem("MiCarrito", JSON.stringify(newCart))
  showItemsOnCart()
  calcTotal()
}

//CALCULAR TOTAL
function calcTotal() {
  const cart = JSON.parse(localStorage.getItem('MiCarrito'));
  const total = (cart && cart.length) ?
    cart.reduce((acc, item) => {
      acc = acc + parseFloat(item.precio)
      return acc
    }, 0) :
    0
  $('#total').html(`<p>Total ${total}</p>`)

}

//VACIAR CARRITO

function vaciarCarrito() {
  localStorage.removeItem('MiCarrito')
  $('#tbody').empty()
  $('#total').html(`<p>Total 0</p>`)
}


// BARRA DE BUSQUEDA

$('#btnSearch').on("click", filtrar)

function filtrar(e) {

  e.preventDefault()

  document.getElementById("contenedor").innerHTML = '';

  let search = $('#search').val().toUpperCase()

  let filtro = producto.filter(element => element.marca == search || element.tipo == search)

  for (const element of filtro) {

    $("#contenedor").append(
      `<div> <div class="container mt-5 mb-5 d-flex justify-content-center align-items-center">
<div class="card">
    <div class="inner-card"> <img src=${element.imagePath} class="img-fluid rounded">
        <div class="d-flex justify-content-between align-items-center mt-3 px-2">
            <h4>${element.marca}</h4> <span class="heart"><i class="fa fa-heart"></i></span>
        </div>
        <div class="m-1 px-2"> <small>${element.caracteristicas}</small> </div>
        <div class="px-2">
            <h3 class="p-2">${element.precio}$</h3>
        </div>
        <div class="px-2"> <button id="${element.id}"class="btn btn-outline-primary px-3 agregar" onClick=agregarAlCarrito(event)>Agregar</button> </div>
    </div>
</div>
</div> </div>`);

  }

  if (filtro == '') {

    alert('Producto no encontrado')
  }

}

// FILTRADO PRODUCTOS

let btnFiltro = document.getElementById('btnUno')
btnFiltro.addEventListener('click', tipoProducto)

function tipoProducto(e) {
  e.preventDefault();
  let n = 0;
  for (n = 0; n < document.fproductos.flexRadioDefault.length; n++) {

    if (document.fproductos.flexRadioDefault[n].checked) {
      break;
    }
  }

  document.getElementById("contenedor").innerHTML = '';

  let filtrar = producto.filter(element => element.tipo == document.fproductos.flexRadioDefault[n].value)

  for (const elemento of filtrar) {

    $("#contenedor").append(`<div class="container mt-5 mb-5 d-flex justify-content-center align-items-center">
    <div class="card">
        <div class="inner-card"> <img src=${elemento.imagePath} class="img-fluid rounded">
            <div class="d-flex justify-content-between align-items-center mt-3 px-2">
                <h4>${elemento.marca}</h4> <span class="heart"><i class="fa fa-heart"></i></span>
            </div>
            <div class="m-1 px-2"> <small>${elemento.caracteristicas}</small> </div>
            <div class="px-2">
                <h3 class="p-2">${elemento.precio}$</h3>
            </div>
            <div class="px-2"> <button id="${elemento.id}"class="btn btn-outline-primary px-3 agregar" onClick=agregarAlCarrito(event)>Agregar</button> </div>
        </div>
    </div>
    </div>`);

  }

}

function finalizarCompra() {

  const carrito = localStorage.getItem('MiCarrito')

 if (carrito !== null) {

  Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Procesando su compra',
    showConfirmButton: false,
    timer: 2000
  })
  setTimeout(function () {
    window.location.href = "https://cuestam.github.io/pago.html";
  }, 1700);
 }
   
 else {
  alert('Agregue productos al carrito')
}
}


function email(){
  const datosEmail = $("#emailUsuario").val()
if (datosEmail === "") {

alert('Ingrese su email')
}
else {

  Swal.fire(
    'Suscripción registrada',
    'Nos pondremos en contacto a la brevedad',
    'success'
  )
}

}