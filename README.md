# Conversor-de-monedas--Libreria
El programa es un conversor de monedas que permite al usuario seleccionar dos tipos de monedas diferentes y calcular el equivalente entre ellas en tiempo real. Utiliza tasas de cambio actualizadas para realizar la conversión de manera rápida, sencilla y precisa.

miLibreria.js
miLibreria.js es una librería JavaScript ligera enfocada en la validación de datos de formularios. Su función principal es verificar si una cadena de texto tiene el formato de un correo electrónico válido, evitando así que se ingresen direcciones de email incorrectas en una aplicación web. Esta librería ayuda a resolver el problema común de validar correos electrónicos en el frontend de manera sencilla y reutilizable, mejorando la confiabilidad de los datos enviados por los usuarios.
Instalación
Para usar miLibreria.js, simplemente inclúyala en su página HTML. Puede hacerlo de dos formas:
CDN: Si la librería estuviera publicada en un CDN, podría incluirse directamente con una etiqueta de script apuntando al enlace público, por ejemplo: <script src="https://cdn.ejemplo.com/miLibreria.min.js"></script>. (Reemplace la URL por la de la CDN real, si existiera.)
Descarga directa: Descargue el archivo miLibreria.js y colóquelo en su proyecto (por ejemplo, en el mismo directorio de su página HTML). Luego inclúyalo con una etiqueta script indicando la ruta local al archivo, por ejemplo:
html
Copiar
Editar
<script src="miLibreria.js"></script>
Coloque la etiqueta <script> preferiblemente justo antes del cierre de la etiqueta </body> de su HTML, para asegurarse de que la librería se cargue después del contenido de la página. Una vez incluida, la librería expone un objeto global miLibreria que contiene sus funciones utilitarias.
Uso
A continuación se muestra un ejemplo de cómo utilizar miLibreria.js en una página HTML para validar una dirección de correo electrónico ingresada por el usuario:
html
Copiar
Editar
<!-- Campo de texto para ingresar email y botón para validar -->
<input type="text" id="email" placeholder="Ingresa tu email">
<button onclick="validarEmail()">Validar</button>

<script src="miLibreria.js"></script>
<script>
  function validarEmail() {
    const email = document.getElementById("email").value;
    if (miLibreria.validarEmail(email)) {
      alert("Email válido!");
    }
    // En caso de email inválido, no hace nada (se podría mostrar un mensaje de error si se desea)
  }
</script>
En el ejemplo anterior, el usuario ingresa una dirección de correo en el campo de texto y al pulsar el botón Validar se ejecuta la función validarEmail(). Dentro de esa función, obtenemos el valor del campo de entrada y luego llamamos a miLibreria.validarEmail(email). Si el email tiene un formato válido, la función devuelve true y se muestra una alerta con el mensaje "Email válido!". Si el correo no es válido, la función devolverá false, y en este ejemplo simple no se realiza ninguna acción en ese caso (podría ampliarse el código para alertar al usuario cuando el formato es incorrecto). La función miLibreria.validarEmail() se encarga de verificar que el string proporcionado cumpla con el formato básico de un correo electrónico (por ejemplo, que contenga el símbolo "@" y un dominio válido con un . punto seguido de una extensión). De esta manera, miLibreria.js facilita la validación antes de enviar datos al servidor.
Capturas de pantalla


La consola del navegador mostrando ejemplos del uso de la función validarEmail. En el primer caso se valida un correo electrónico correcto ("usuario@ejemplo.com"), y la función retorna true. En el segundo caso, el correo "usuario@ejemplo" carece de un dominio válido, por lo que la función retorna false. Esto demuestra que miLibreria.js detecta correctamente cuándo una dirección de email tiene un formato válido y cuándo no. (En la imagen, se observan las llamadas a miLibreria.validarEmail(...) realizadas desde la consola del navegador y el valor devuelto en cada caso. Usted puede replicar estas pruebas abriendo las herramientas de desarrollador de su navegador web mientras utiliza la librería.)
