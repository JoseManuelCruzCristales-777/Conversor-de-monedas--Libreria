# ConversorMonedasJS

> **Desarrollado por:** José Manuel Cruz Cristales y Alejandro Valencia Tenorio

---

## ¿Qué es?

`ConversorMonedasJS` es una librería ligera en JavaScript que permite convertir cantidades entre diferentes monedas en tiempo real desde una página web, utilizando una API pública y sin configuraciones complicadas.

---

## Autores

- **José Manuel Cruz Cristales**
- **Alejandro Valencia Tenorio**

---

## Instalación

1. Descarga `monedas_lib.js`.
2. Agrégala en tu HTML antes de la etiqueta `</body>`:

```html
<script src="monedas_lib.js"></script>
Nota: Esta librería requiere conexión a Internet para funcionar correctamente.

Uso rápido
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

html
Copiar
Editar
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
```
## Capturas

### Conversor funcionando

![Conversor funcionando](./Captura%20de%20pantalla%202025-07-04%20213022.png)

### Resultado en la consola

![Consola mostrando resultado](./Captura%20de%20pantalla%202025-07-04%20213027.png)



-------------------
