// Función para capturar datos personales
function capturarDatosPersonales() {
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    let email = prompt("Ingrese su correo electrónico:");
    let direccion = prompt("Ingrese su dirección:");

    return {
        nombre: nombre,
        apellido: apellido,
        email: email,
        direccion: direccion
    };
}

// Función para capturar los productos en el carrito
function capturarProducto() {
    let nombreProducto = prompt("Ingrese el nombre del producto:");
    let cantidad = parseInt(prompt(`Ingrese la cantidad de unidades de ${nombreProducto}:`));
    let precio = parseFloat(prompt(`Ingrese el precio por unidad de ${nombreProducto}:`));

    return {
        nombre: nombreProducto,
        cantidad: cantidad,
        precio: precio
    };
}

// Función para calcular el total sin impuestos ni descuentos
function calcularTotalSinDescuento(carrito) {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].cantidad * carrito[i].precio;
    }
    return total;
}

// Función para aplicar un descuento
function aplicarDescuento(total, descuento) {
    return total - (total * (descuento / 100));
}

// Función para calcular el IVA
function calcularIVA(total) {
    const iva = 21; // IVA del 21%
    return total * (iva / 100);
}

// Función para mostrar los datos del usuario en la consola
function mostrarDatosUsuario(usuario) {
    console.log(`Datos del usuario:`);
    console.log(`Nombre: ${usuario.nombre}`);
    console.log(`Apellido: ${usuario.apellido}`);
    console.log(`Email: ${usuario.email}`);
    console.log(`Dirección: ${usuario.direccion}`);
}

// Función principal del simulador
function simuladorCompra() {
    // Capturar los datos personales del usuario
    let usuario = capturarDatosPersonales();
    mostrarDatosUsuario(usuario); // Mostrar los datos en la consola

    // Capturar productos en el carrito
    let carrito = [];
    let cantidadProductos = parseInt(prompt("¿Cuántos productos quiere agregar al carrito?"));

    // Capturamos los productos ingresados
    for (let i = 0; i < cantidadProductos; i++) {
        carrito.push(capturarProducto());
    }

    // Calculamos el total sin descuento ni IVA
    let totalSinDescuento = calcularTotalSinDescuento(carrito);
    console.log("Total sin descuento: $" + totalSinDescuento);

    // Aplicar un descuento si es necesario
    let aplicarDescuentoUsuario = prompt("¿Desea aplicar un descuento? (si/no)").toLowerCase();
    let totalConDescuento = totalSinDescuento;

    if (aplicarDescuentoUsuario === "si") {
        let descuento = parseFloat(prompt("Ingrese el porcentaje de descuento:"));
        totalConDescuento = aplicarDescuento(totalSinDescuento, descuento);
        console.log(`Se ha aplicado un descuento del ${descuento}%. Total con descuento: $${totalConDescuento}`);
    }

    // Calculamos el IVA
    let iva = calcularIVA(totalConDescuento);
    let totalConIVA = totalConDescuento + iva;

    // Mostrar resultados finales al usuario
    console.log("IVA (21%): $" + iva);
    console.log("Total con IVA: $" + totalConIVA);

    alert(`Total de la compra con IVA incluido: $${totalConIVA}`);
}

// Ejecutar el simulador
simuladorCompra();
