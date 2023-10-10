var productos = {}; // Objeto para almacenar productos y sus precios

for (var i = 1; i <= 3; i++) {
  var nombre = prompt("Ingresar el nombre del producto " + i);
  var precio = parseFloat(prompt("Ingresar el precio del producto " + i));

  // Almacenar el producto y su precio en el objeto "productos"
  productos[nombre] = precio;
}

var productosMayoresA12 = 0;

for (var producto in productos) {
  if (productos[producto] > 12) {
    productosMayoresA12++;
  }
}

document.write("Queremos contabilizar la cantidad de productos mayores a 12 soles: " + productosMayoresA12);
