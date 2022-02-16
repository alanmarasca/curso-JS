let nombreProductoA = "Calendario";
let stockProductoA = 30;
let precioProductoA = 590;


let nombreProductoB = "Fechas-Especiales"
let stockProductoB = 40;
let precioProductoB = 1190;


let nombreProductoC = "Imanes";
let stockProductoC = 50;
let precioProductoC = 240;


let nombreProductoD = "Cuadros"
let stockProductoD = 60;
let precioProductoD = 1950;


let nombreProductoE = "Fotos"
let stockProductoE = 80;
let precioProductoE = 34;

alert("Nuestros productos: " + nombreProductoA + "\n"
+ nombreProductoB + "\n" 
+ nombreProductoC + "\n"
+ nombreProductoD + "\n"
+ nombreProductoE + "\n")


let cantidadProductosComprados = parseInt(prompt("Por favor, ingrese la cantidad de productos distintos que queres comprar"))
let precioTotalVenta = 0;
let cantidadComprada;

for ( let i = 0 ; i < cantidadProductosComprados; i++){

    let nombreCompra = prompt("Ingrese el producto que desee comprar:")

    if (( nombreCompra == nombreProductoA) || (nombreCompra == "calendario")) {
        cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar:"));
        if(cantidadComprada <= stockProductoA){
           stockProductoA = stockProductoA - cantidadComprada;
           precioTotalVenta += cantidadComprada * precioProductoA;
            console.log("Hay en stock" + "" + stockProductoA + "" + "Calendarios");
            
          }
          else{
              alert("La compra permitida es hasta " + stockProductoA + "unidades")
          }
    }
    else if((nombreCompra == nombreProductoB) || (nombreCompra == "Fechas Especiales") || (nombreCompra == "fechas especiales")) {
        cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar:"));
        if(cantidadComprada<=stockProductoB){
            stockProductoB = stockProductoB - cantidadComprada;
            precioTotalVenta += cantidadComprada * precioProductoB;
            console.log("Hay en stock" + stockProductoB + "Fechas-Especiales");
           
        }
        else{
            alert("La compra permitida es hasta " + stockProductoB + "unidades")
         }
    }

    else if((nombreCompra == nombreProductoC) || (nombreCompra == "imanes")){
        cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar:"));
        if(cantidadComprada<=stockProductoC){           
            stockProductoC = stockProductoC - cantidadComprada;
            precioTotalVenta += cantidadComprada * precioProductoC;
            console.log("Hay en stock" + stockProductoD + "Imanes");
           
        }
        else{
            alert("La compra permitida es hasta " + stockProductoC + "unidades")
         }
    }
    else if((nombreCompra == nombreProductoD)|| (nombreCompra == "cuadros") || (nombreCompra == "cuadro")) {
        cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar:"));
        if(cantidadComprada<=stockProductoD){            
            stockProductoD = stockProductoD - cantidadComprada;
            precioTotalVenta += cantidadComprada * precioProductoD;
            console.log("Hay en stock" + stockProductoD + "Cuadros");
            
        }
        else{
            alert("La compra permitida es hasta " + stockProductoD + "unidades")
         }
    }
    else if((nombreCompra == nombreProductoE) || (nombreCompra == "foto") || (nombreCompra == "Foto")){
        cantidadComprada = parseInt(prompt("Ingrese la cantidad que quiere comprar:"));
        if(cantidadComprada<=stockProductoE){            
            stockProductoE = stockProductoE - cantidadComprada;
             precioTotalVenta += cantidadComprada * precioProductoE;
            console.log("Hay en stock" + stockProductoE + "Fotos");
            
        }
        else{
            alert("La compra permitida es hasta " + stockProductoE + "unidades")
         }
    }

alert("El precio total de su compra es de: $" + precioTotalVenta);

}
