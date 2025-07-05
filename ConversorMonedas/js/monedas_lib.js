
//  Obtiene el tipo de cambio base a todas las monedas
async function obtenerTasas(monedaBase) {
  const respuesta = await fetch(`https://open.er-api.com/v6/latest/${monedaBase}`);
  const datos = await respuesta.json();
  if (datos.result !== "success") throw new Error("No se pudo obtener las tasas de cambio.");
  return datos.rates;
}

//  Convierte de una moneda a otra usando la tasa obtenida
async function convertirMoneda(monedaOrigen, monedaDestino, cantidad) {
  const tasas = await obtenerTasas(monedaOrigen);
  const tasa = tasas[monedaDestino]; 
  if (!tasa) throw new Error(`No existe tasa para ${monedaOrigen}→${monedaDestino}`);
  return cantidad * tasa;
}

function iniciarConversor(config) {
  const selectorOrigen = document.getElementById(config.m1);
  const selectorDestino = document.getElementById(config.m2);
  const inputOrigen = document.getElementById(config.cant1);
  const inputDestino = document.getElementById(config.cant2);
  const boton = document.getElementById(config.tasa);
  const salida = document.getElementById(config.change);

  async function actualizar() {
    const monedaOrigen = selectorOrigen.value;
    const monedaDestino = selectorDestino.value;
    const cantidad = parseFloat(inputOrigen.value) || 0;
    salida.textContent = "Calculando…";
    try {
      const resultado = await convertirMoneda(monedaOrigen, monedaDestino, cantidad);
      inputDestino.value = resultado.toFixed(4);
      salida.textContent = ` ${cantidad} ${monedaOrigen} = ${resultado.toFixed(4)} ${monedaDestino}`;
    } catch (e) {
      salida.textContent = "Error: " + e.message;
    }
  }
  
  boton.addEventListener('click', actualizar);
}

// Exponer la función para usarla en el HTML
window.iniciarConversor = iniciarConversor;
