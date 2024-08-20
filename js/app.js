function verificarStock(producto, stock) {
    if (stock > 0) {
        return `El producto "${producto}" está disponible.`;
    } else {
        return `El producto "${producto}" está agotado.`;
    }
}

function calcularTotalCarrito(precios) {
    let total = 0;
    for (let i = 0; i < precios.length; i++) {
        total += precios[i];
    }
    return total;
}

let producto = "Corazon plateado";
let stock = 3;
console.log(verificarStock(producto, stock));  // Salida: "El producto 'Corazon plateado' está disponible."

let carrito = [2500, 2500];  // Precios en pesos argentinos
console.log("El total del carrito es: $" + calcularTotalCarrito(carrito));  // Salida: "El total del carrito es: $5000"


