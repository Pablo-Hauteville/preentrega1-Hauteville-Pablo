  
/* Este es un conversor sencillo de monedas frecuentes en una casa de cambio local- la unidad de referencia es el dolar*/
  let tiposDeCambio = {
    ars: 467,
    usd: 1,
    uru: 37,
    brl: 5.01,
    eur: 0.91    
  };
  
  let continuar = true;
  
  
  while (continuar) {
    let moneda1 = prompt("¿Qué moneda deseas convertir? (ars, usd, uru, brl, eur)");
    let moneda2 = prompt("¿A qué moneda deseas convertir? (ars, usd, uru, brl, eur)");
    let cantidad = parseInt(prompt("Ingresa la cantidad para convertir:"));
  
    if (isNaN(cantidad)) {
      alert("Ingrese una cantidad válida");
    } else if (!tiposDeCambio[moneda1]) {
      alert(`Esta moneda ${moneda1} no es válida.`);
    } else if (!tiposDeCambio[moneda2]) {
      alert(`Esta moneda ${moneda2} no es válida.`);
    } else {
      let resultado = cantidad * (tiposDeCambio[moneda2] / tiposDeCambio[moneda1]);
      alert(`${cantidad} ${moneda1} equivalen a ${resultado} ${moneda2}`);
    }
  
    continuar = confirm("¿Deseas realizar otra conversión?");
  } 