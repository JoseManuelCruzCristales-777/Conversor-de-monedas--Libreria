a. Portada
Nombre de la librería
ConversorMonedasJS

Autores
José Manuel Cruz Cristales
Alejandro Valencia Tenorio

Breve descripción
Esta librería en JavaScript permite convertir cantidades entre diferentes monedas en tiempo real. Se conecta a una API pública para obtener tasas de cambio actualizadas y muestra los resultados directamente en una página web. Es ideal para integrar funciones de conversión de monedas en cualquier proyecto HTML de forma rápida y sencilla.

b. Instalación
Para usar la librería, descárgala y agrégala en tu archivo HTML justo antes de la etiqueta de cierre </body>:

<script src="monedas_lib.js"></script>
c. Uso
Prepara tu HTML con los IDs requeridos:

html
Copiar
Editar
<select id="moneda-uno">
  <option value="MXN">MXN</option>
  <option value="USD">USD</option>
  <option value="EUR">EUR</option>
  <!-- Agrega las monedas que desees -->
</select>
<input type="number" id="cantidad-uno" placeholder="Cantidad">
<button id="taza">Convertir</button>
<select id="moneda-dos">
  <option value="MXN">MXN</option>
  <option value="USD">USD</option>
  <option value="EUR">EUR</option>
</select>
<input type="number" id="cantidad-dos" placeholder="Resultado" readonly>
<div id="cambio"></div>
Inicializa la librería al final de tu archivo HTML así:

<script src="monedas_lib.js"></script>
<script>
  iniciarConversor({
    selDe:  'moneda-uno',
    selA:   'moneda-dos',
    inpDe:  'cantidad-uno',
    inpA:   'cantidad-dos',
    btn:    'taza',
    out:    'cambio'
  });
</script>
Cuando el usuario elige monedas y da clic en el botón, la librería se conecta a la API pública y realiza la conversión en tiempo real, mostrando el resultado y posibles mensajes en la interfaz.
d. Capturas de pantalla
A continuación, agrega imágenes de ejemplo mostrando la interfaz y/o la consola del navegador:



(Puedes sustituir "ruta/a/tu_capturaX.png" por la ruta o URL real de tus imágenes)

