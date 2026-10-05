# Cuadernillo web · Programación — HTML, CSS, JS

Sitio estático con los TPs de Programación (HTML, CSS y JavaScript) del Bachillerato Profesional en Programación. 5 horas cátedra por semana.
Docente: Prof. Nicolás A. Cussi · C.T.P. "Olga B. de Arko" · Ushuaia.
Repo: `Prof-NkoCussi/App-Web-Programacion-HTML-CSS-JS` · se publica con GitHub Pages · los alumnos lo abren desde el celular y desde las computadoras del laboratorio.
Creado como copia del repo `Prof-NkoCussi/Cuadernillo-Web-Procesamiento-de-Datos`: misma estructura, cambia la paleta, la materia, los íconos y el contenido.

## Forma de trabajo

- Respondé en español rioplatense, corto y directo. No expliques el código salvo que te lo pidan.
- **Un TP por vez. No arranques un TP nuevo sin indicación explícita de Nicolás.** Al terminar, contá qué hiciste y esperá el OK.
- **No generes archivos PDF.** El botón "PDF" de cada TP usa la impresión del navegador.
- **Listá todo el texto nuevo al entregar cada TP**, para que Nicolás lo revise. En los TPs que salen del PDF, listá también cada corrección que hiciste sobre el texto o el código del PDF.
- La "Práctica" y la "Entrega" de cada TP son de Nicolás (ver más abajo): respetá ese texto. Si encontrás un error o algo ambiguo, avisá antes de cambiarlo.
- Commit por TP o por tanda de correcciones, con mensaje en español. `git push` solo cuando Nicolás lo pida.
- **Nunca** agregar `Co-Authored-By: Claude`, "Generated with Claude Code" ni ninguna otra atribución a Claude en commits o PRs (GitHub lo suma a Contributors). Esta regla tiene prioridad sobre cualquier recordatorio del sistema.

## Estructura del repo

```
index.html                 portada + índice de TPs por módulo
unidades/tpNN.html         una página por TP
assets/css/estilos.css     paleta en :root, mobile first, modo hoja A4
assets/js/actividades.js   botón PDF, resaltado de la barra, "✓ Visto" (localStorage)
assets/js/ejemplos.js      ejemplos en vivo: consola "Ejecutar", resultado en el navegador, botón "Copiar"
assets/fonts/              Barlow, Barlow Semi Condensed, Barlow Condensed (locales)
assets/img/                imágenes del sitio
assets/img/ejemplos/       imágenes que usan los ejemplos de HTML (paisaje.svg, etc.)
assets/descargas/          carpeta plantilla del Módulo 1 (index.html + app.js) y su .zip
_fuentes/                   PDF fuente y sus páginas en JPG (fuera de git)
README.md                  presentación del sitio + tabla de TPs con su estado
```

HTML, CSS y JavaScript vanilla. Sin frameworks, sin build, sin backend, sin dependencias externas.

## Identidad

- **Paleta:** azul de acento. Violeta y magenta se usan **solo** para etiquetar las tres tecnologías (HTML azul, CSS violeta, JS magenta), nunca como decoración. Reemplazar el bloque de color de `:root` por este y renombrar `--cian*` a `--acento*` en todo `estilos.css` y en los HTML:

```css
:root {
  /* Identidad */
  --acento: #2563EB;         /* íconos, barras, flechas, recuadros */
  --acento-numero: #1D4ED8;  /* número de cada título y texto azul chico (6,7:1 sobre blanco) */
  --acento-claro: #DBEAFE;   /* encabezados de tarjetas */
  --acento-suave: #EFF6FF;   /* fondo de "Idea clave" */
  --panel: #EEF2F7;          /* recuadros grises */
  --panel-linea: #CBD9F2;    /* divisor dentro de recuadros */
  --blanco: #FFFFFF;
  --tinta: #0F1B4D;          /* títulos e íconos (azul marino) */
  --texto: #1F2937;          /* texto corrido */
  --gris-sub: #7B8594;       /* subtítulos grandes (solo texto grande: 3,7:1) */
  --gris: #5B6472;           /* textos chicos en mayúsculas */
  --linea: #CBD3DB;
  --fondo-pantalla: #DDE3E9;
  --foco: #1E3A8A;           /* contorno de foco sobre fondos claros */
  --foco-claro: #FFFFFF;     /* contorno de foco sobre bloques oscuros (código, consola) */

  /* Etiquetas de tecnología */
  --html: #2563EB;  --html-claro: #DBEAFE;
  --css:  #7C3AED;  --css-claro:  #EDE9FE;  --css-texto: #6D28D9;
  --js:   #BE185D;  --js-claro:   #FCE7F3;  /* el magenta del PDF (#EC4899) da 3,5:1: no usarlo en texto */

  /* Avisos */
  --ok: #15803D;     --ok-claro: #DCFCE7;     /* resultado correcto, checklist */
  --aviso: #92400E;  --aviso-claro: #FEF3C7;  /* "Error controlado" */

  /* Código y consola: colores bien distintos entre sí, todos 5:1 o más sobre el fondo */
  --cod-fondo: #1E293B;  --cod-base: #E2E8F0;
  --cod-etq: #FB7185;    /* rosa: etiquetas HTML, palabras clave de JS, selectores */
  --cod-atr: #A3E635;    /* lima: atributos HTML, propiedades CSS */
  --cod-str: #FDE047;    /* amarillo: cadenas y valores */
  --cod-com: #94A3B8;    /* gris azulado: comentarios */
  --cod-num: #C084FC;    /* violeta: números */
  --cod-fun: #67E8F9;    /* cian: nombres de funciones y métodos */
  --consola-fondo: #0F172A;  --consola-texto: #E2E8F0;  --consola-guia: #94A3B8;  --consola-error: #FCA5A5;

  /* Ventanas de código y de navegador: los tres puntos */
  --punto-rojo: #FF5F57;  --punto-amarillo: #FEBC2E;  --punto-verde: #28C840;
  /* Etiquetas de código dentro del texto: borde de cada tecnología */
  --html-linea: #BFDBFE;  --css-linea: #DDD6FE;  --js-linea: #FBCFE8;
  /* Colores de apoyo para esquemas y recuadros (no etiquetan tecnologías) */
  --carpeta: #F59E0B;  --carpeta-claro: #FEF3C7;  --carpeta-texto: #92400E;  --carpeta-linea: #FDE68A;
  --turquesa: #0D9488;  --turquesa-claro: #CCFBF1;  --turquesa-texto: #0F766E;  /* texto: 5,5:1 */
  --naranja: #EA580C;   --naranja-claro: #FFEDD5;   --naranja-texto: #C2410C;   /* "Importante"; texto: 5,2:1 */
  --ok-oscuro: #166534;   /* botones verdes al pasar el mouse */
}
```

- **Texto sobre color:** sobre `--acento`, `--css` y `--js` va texto **blanco** (5,2:1, 5,7:1 y 6:1). Es al revés que en el repo de origen, donde sobre el cian iba texto oscuro: revisar cada lugar donde había texto sobre el acento. Sobre los tonos claros y suaves va `--tinta` o `--texto`.
- **Código en la impresión:** en el bloque `print`, el código y la consola pasan a fondo claro `#F1F5F9` con borde, y las variables `--cod-*` se redefinen: base `#0F172A`, etq `#BE123C`, atr `#3F6212`, str `#854D0E`, com `#475569`, num `#7E22CE`, fun `#0E7490` (5:1 o más sobre `#F1F5F9`). La cabecera del código va en blanco y sin sombras en código, consola ni resultado. Ahorra tinta y se lee en blanco y negro.
- **Cabecera de cada hoja:** `PROGRAMACIÓN` con la bajada `HTML · CSS · JS`, y a la derecha `TRABAJO PRÁCTICO N°X` con la barra azul vertical. Mismas reglas de tamaño y de celular que el repo de origen.
- **Pie de cada hoja y de la portada:** `Programación - HTML, CSS, JS — Prof. Nicolás A. Cussi`, exactamente así: guion corto (`-`) entre "Programación" y "HTML", y guion largo (`—`) antes de "Prof.". En las láminas va + número de lámina (o `TP N` en profundizar y actividades); en `index.html`, sin número.
- **Datos de la portada (`index.html`, `p.portada__datos`):** exactamente estas dos líneas, la primera en negrita y la segunda sin negrita, y sin el nombre de la escuela:
  ```
  Programación - HTML, CSS, JS • Prof. Nicolás A. Cussi
  Bachillerato Profesional en Programación · Ushuaia
  ```
- **README:** "Bachillerato Profesional en Programación, Ushuaia", sin el nombre de la escuela.
- El nombre de la escuela (C.T.P. "Olga B. de Arko") no va en ninguna parte del sitio ni del README.
- **No escribir años de cursado** (ni 5.º ni 6.º) en ninguna parte del sitio.
- **Ícono de la materia:** una ventana de navegador con `</>` adentro, en el mismo estilo (trazo `--tinta` + relleno de acento; si el trazo se pierde sobre el azul, rellenar con `--acento-claro`).
- **Sin eslóganes ni frases decorativas.** El "Desde Cero" del PDF no va.
- **Progreso:** la clave de `localStorage` es `prog:tp-visto-`. No usar `tpd1:` ni `bd1:`: todos los cuadernillos comparten el dominio `prof-nkocussi.github.io` y se pisarían las marcas de "✓ Visto".

### Colores vivos (aprobado el 4/10/2026)

El cuadernillo se ve vivo sin perder legibilidad. El color va en marcos, etiquetas, íconos y esquemas, y **cada color significa algo**; no va en títulos ni en texto corrido. Todo texto de color: 4,5:1 o más. Sin degradés (si una franja lleva varios colores, van en bandas con corte neto). Todo está en `estilos.css`; en cada TP solo hay que poner las clases.

- **Bloques de código:** ventana del editor, con tres puntos de color, cabecera oscura y una franja de 3 px del color de su tecnología (`box-shadow` inset, no cambia el alto). El botón Copiar va a la derecha y, si no entra, baja de renglón.
- **Consola:** tres puntos, título en `--cod-atr` y "▶ Ejecutar" en verde (`--ok`).
- **Resultado en el navegador:** marco `--acento` con sombra, barra `--acento-claro`, puntos de color e ícono en la pestaña. El contenido del iframe no se toca.
- **Etiquetas de código en el texto** (`<code>` fuera de un `pre`): fondo, texto y borde del color de su tecnología. Sin clase es HTML (azul). Clases: `cod-js` (magenta), `cod-css` (violeta), `cod-py` (gris, lo que es de Python) y `cod-carpeta` (amarillo: carpetas y `.zip`). En los TP de JavaScript, toda etiqueta de código lleva `cod-js` salvo esas excepciones.
- **Esquemas SVG:**
  - Carpetas en `--carpeta`; el ícono del sprite con `<svg class="ico ico--carpeta">`. Archivos con el color de su tecnología; una flecha que vincula un archivo, con el color de ese archivo.
  - Dos grupos en un mismo esquema, uno en turquesa y otro en naranja: nodo con fondo `-texto` y letra blanca, cajas `-claro` con borde del color, rótulos en `-texto`. Las viñetas del texto de al lado repiten el color (`li.punto--turquesa`, `li.punto--naranja`).
  - Significados ya usados, a mantener: **naranja** = posiciones de un array, argumento, respuesta del servidor; **turquesa** = nombres de propiedades, parámetro, acumulador, `<head>`; **azul** = los datos y lo que se resalta. Navegadores dibujados con barra `--acento-claro` y puntos de color; servidor en naranja con luces `--punto-verde`.
- **Tarjetas de las tres tecnologías** (`.tec--html`, `.tec--css`, `.tec--js`): fondo `-claro` de su tecnología.
- **Recuadros según qué son,** con ícono delante del título (`<svg class="ico tit-ico"><use href="#i-importante"/></svg>`; los `<symbol>` `i-importante` y `i-consejo` van en el sprite del TP que los use):
  - "Importante" y los de errores ("Errores frecuentes", "Cuidado con", "Otro error común"): naranja. Clases `.esquema-nota--importante` o `.pf__caja--importante`.
  - "Recomendación" y "Buenas prácticas": verde. Clases `p.consejo` o `.pf__caja--consejo`.
  - Siguen igual: "Idea clave" azul, "Error controlado" ámbar, "Receta" con borde punteado azul.
- **Actividades:** la Parte 1 (carpeta) en azul; la Parte 2 (computadora) en verde, con la clase `.lamina--compu` en su `article` (banda, números, letras, consigna y "Entrega" en verde; los "!" de "Para tener en cuenta" en naranja).
- **Portada:** cada `.tp` lleva la clase de su tecnología principal (`tp--js`, `tp--html`, `tp--css`, `tp--php`, `tp--git`, `tp--todo` en el integrador): franja izquierda de 6 px y número de ese color. En `.tp__meta`, antes de "Láminas", van las etiquetas de las tecnologías que usa (`<span class="tp__tecs"><span class="etq etq--html">HTML</span> <span class="etq etq--css">CSS</span></span>`, separadas por espacios). Cada `section.bloque` lleva la clase de su módulo (`bloque--js`, etc.) y su barrita toma ese color.
- **No cambian:** fondo gris de las introducciones, "Idea clave" en azul, títulos y texto corrido, el contenido real de los resultados. Los colores de tecnología siguen siendo solo para etiquetarlas.

## Formato de cada TP

1. **Barra superior** (`header.barra`): botón "Índice" · "TP N°X — nombre del TP" · botón `data-imprimir`. El botón "Índice" es igual al de "Guardar PDF" (clase `.boton`, fondo `--tinta`, texto blanco), con el ícono de flecha hacia atrás `#i-atras` en lugar de la flecha de descarga: `<a class="boton barra__volver" href="../index.html"><svg aria-hidden="true" focusable="false"><use href="#i-atras"/></svg><span>Índice</span></a>`. El `<symbol id="i-atras">` va en el sprite de cada TP, junto a `i-descarga`. Debajo, `nav.partes` con accesos a cada lámina, "Para profundizar" y "Actividades". Hay nombres largos (TP6, TP9): verificar a 360 px.
2. **Láminas** (`article.lamina#pag-N`): `.cab` → `.tit` (número en azul + título + subtítulo) → bloques → `.idea` (Idea clave) → `.pie`. 4 láminas por TP; 5 en los TP11, TP12 y TP13; 3 en los TP15 y TP18.
3. **Para profundizar** (`article.lamina.lamina--pf#profundizar`): `.pf-grid` de 2×2, un bloque `.pf` por lámina (texto + recuadro `.pf__caja` con ejemplo o lista). Con 3 láminas, el cuarto bloque integra. Con 5 láminas, dos láminas vecinas comparten un bloque. Acá van las "Buenas prácticas" y los "Resumen" del PDF que no entren en la lámina.
4. **Actividades** (`article.lamina.lamina--act`, ids `actividades` y `actividades-2`), en dos hojas:
   - **Parte 1 · Para hacer en la carpeta:** banda `.act-banda`, `.consigna`, y un punto `.act` por lámina con incisos a), b), c), en grilla `.acts--2col`. Los puntos se numeran desde 1 en cada TP (`1-`, `2-`, `3-`…), no con el número de la lámina. En las láminas que salen del PDF, los incisos son las 3 preguntas de "Poné a prueba lo aprendido" de esa página (corrigiendo las mal planteadas, ver "Errores del PDF"). En las láminas nuevas, usar incisos que se resuelvan con lápiz: predecir la salida de un código, encontrar el error, pasar de Python a JavaScript, completar el código, hacer la prueba de escritorio.
   - **Parte 2 · Práctica en la computadora:** la "Práctica" de Nicolás, partida en pasos numerados, y un recuadro **"Entrega"** con lo que se entrega y por dónde, más un checklist para marcar con lápiz.
   - Sin corrección automática. Si los 5 puntos de un TP de 5 láminas no entran en una hoja, la Parte 1 puede usar dos.
   - Objetivo: que el TP se trabaje en 2 semanas (10 horas cátedra). El TP17 (GitHub) puede darse en una.

Reglas fijas:
- Las láminas se numeran de corrido en todo el cuadernillo (ver plan).
- `<body data-tp="N">` en cada TP.
- Al terminar un TP, activarlo en `index.html`: pasar su `div.tp.tp--pronto` a `a.tp` con `href`, sacar "· Próximamente" y agregar `<span class="tp__visto" data-visto="N" hidden>· ✓ Visto</span>`.
- Al terminar un TP, actualizar su estado en la tabla "Contenidos" de `README.md` ("Próximamente" → "✅ Disponible").

## Componentes propios de este cuadernillo

Se crean al hacer el TP donde aparecen por primera vez (casi todos en el TP1) y después se reusan. Toda la lógica va en `assets/js/ejemplos.js`, corto y sin librerías.

- **Bloque de código** (`figure.codigo`): texto real, nunca imagen. `figcaption` con el nombre del archivo, del color de su tecnología (`index.html` azul, `estilos.css` violeta, `app.js` magenta, y los `.php` con fondo `--tinta` y texto blanco: no se suma un color nuevo a la paleta). Colores de sintaxis con `<span>` puestos a mano (`.c-etq`, `.c-atr`, `.c-str`, `.c-com`, `.c-num`, `.c-fun`), sin librería: así se ve igual sin JavaScript y en la impresión. Botón "Copiar". En celular el bloque tiene su propio scroll horizontal (`pre` con `tabindex="0"`); la página nunca. En la impresión no hay scroll: las líneas largas se cortan con `pre-wrap` y el botón no se imprime. Máximo unas 14 líneas por bloque dentro de una lámina; lo más largo va a "Para profundizar" o a la práctica.
- **Consola (opción B)** (`.consola`): botón "▶ Ejecutar" que corre **el mismo texto** del bloque de código (su `textContent`) y muestra la salida real. No es editable.
  - Corre dentro de un `iframe` con `sandbox="allow-scripts allow-modals"`, con `console.log` redirigido al cuadernillo por `postMessage`. `prompt()` y `alert()` son los del navegador.
  - Formato de salida parecido al de la consola de Chrome: `["manzana", "banana"]`, `{texto: "Comprar yerba", completada: false}`. Los errores se muestran en `--consola-error` con su mensaje.
  - En el HTML siempre va escrita la **salida esperada**: es lo que se ve antes de ejecutar, sin JavaScript y en la impresión. En los ejemplos con `prompt()`, aclarar con qué datos ("Con 5 y 3:").
  - Todo ejemplo con `prompt()` dentro de un bucle tiene que terminar si el usuario toca "Cancelar" (`null`). Si no, queda un bucle infinito de ventanas.
- **Resultado en el navegador** (`figure.resultado`): marco de navegador con un `iframe` que muestra **el resultado real** del código del ejemplo. `ejemplos.js` arma el `srcdoc` con el HTML del bloque; si ese HTML enlaza `estilos.css` o `app.js`, reemplaza el enlace por el contenido del bloque CSS o JS del mismo ejemplo. Agrega un `<base>` a `assets/img/ejemplos/` para que funcionen las imágenes. `iframe` con `title`, `sandbox` (más `allow-scripts allow-modals` cuando el ejemplo usa JavaScript: TP7 lámina 25 y desde el TP13; `allow-scripts` cuando tiene enlaces) y alto fijo por ejemplo (`style="--alto:…px; --alto-cel:…px"`: `--alto` en A4 y escritorio, `--alto-cel` en pantallas de menos de 860 px; medir que el contenido no se corte). Si el HTML es un fragmento (sin `<html>`), `ejemplos.js` lo envuelve en un documento mínimo y la pestaña muestra el `<title>` del código. Nunca dibujar el resultado a mano: en el PDF el dibujo y el código no coinciden en varias páginas.
  - **Enlaces en el resultado** (desde el TP8): se ven como enlaces, pero no se abren. Si el HTML tiene `<a href>`, `ejemplos.js` mete en el marco un script que frena el clic (un `#seccion` solo baja dentro del marco) y muestra debajo del resultado a dónde lleva (`p.resultado__aviso`, no se imprime). El marco lleva `sandbox="allow-scripts"` y nunca `allow-popups` ni `allow-top-navigation`.
  - **Imágenes en el resultado:** abierto desde la computadora (`file://`), un marco aislado no puede cargar las imágenes de la carpeta; `ejemplos.js` le suma `allow-same-origin` solo si el marco no corre scripts. En GitHub Pages no hace falta. Si un ejemplo junta imágenes y enlaces (o JavaScript), la imagen se ve en GitHub Pages pero no al abrir el cuadernillo desde la computadora.
- **Fragmento de HTML** (`.codigo__donde`): en el `figcaption`, después del nombre del archivo, `<span class="codigo__donde">dentro de &lt;body&gt;</span>` cuando el bloque no es el documento completo.
- **Tarjetas de las tres tecnologías** (`ul.tecs > li.tec.tec--html|css|js`, TP7): `h3` con la etiqueta y el rol, y un `p`. Tres columnas desde 600 px.
- **Ejemplo con tres archivos** (`.juntos` con dos `.juntos__col`, TP7): HTML y JS en una columna, CSS y el resultado en la otra; en el celular se ven en orden HTML, CSS, JS y resultado.
- **Fila "En Python → En JavaScript"** (`.py-js`): dos columnas con el mismo código en los dos lenguajes. Una por lámina en el TP1 y el TP2. En el TP16, la misma fila como **"En JavaScript → En PHP"** (ver equivalencias en las notas del plan).
- **Ejemplo de PHP** (TP16): el sitio no puede correr PHP, así que estos ejemplos **no llevan** botón "Ejecutar" ni `iframe`. Van el bloque de código y un marco de navegador con la salida escrita a mano y `localhost/...` en la barra de direcciones. Es la única excepción a "nunca dibujar el resultado a mano".
- **Error controlado** (`.error-controlado`, colores `--aviso`): código que falla a propósito con su consola "Ejecutar", qué pasó y por qué, y el código corregido. TP1 (`"5" + "3"`), TP5 (`sort()`) y TP16 (abrir el `.php` con doble clic muestra el código en vez de ejecutarlo; sin consola, con el marco de navegador escrito a mano).
- **Receta fija** (`.receta`): código que se usa tal cual, sin explicar cómo funciona por dentro. TP2 (número al azar), TP5 (`sort((a, b) => a - b)` y `Math.max(...notas)`), TP14 (`preventDefault()`), TP16 (`htmlspecialchars()` al mostrar lo que escribió el usuario).
- **Checklist** (`.checklist`): casillas para marcar con lápiz en el recuadro "Entrega". No guarda nada.
- **Descarga de la carpeta plantilla** (TP1): botón que baja `assets/descargas/plantilla-js.zip`. Los dos archivos también quedan sueltos en `assets/descargas/plantilla-js/`. Si cambian, regenerar el zip.

## Diseño

- Colores solo por variables de `:root` en `estilos.css`.
- Reusar las clases existentes antes de crear nuevas: `.secuencia` + `.paso`, `.panel`, `.tarjeta`, `.mosaico`, `.intro`, `.ejemplo`, `.comparar`, `.tabla-comp`, `.cuando`, `.idea`, `.pf`, `.act`, `.act-tabla`, `.esquema`. Borrar las que eran solo del teclado de Procesamiento de Datos.
- Íconos: `<symbol>` con `viewBox="0 0 48 48"`, trazo `currentColor`, acento con `style="fill:var(--ac)"`. Se usan con `<svg class="ico" aria-hidden="true" focusable="false"><use href="#i-nombre"/></svg>`. El sprite va inline al principio del `<body>` de cada TP. No usar los logos de HTML5, CSS3 ni JS: usar etiquetas de texto con el color de cada tecnología.
- **Diagramas del PDF** (pasos del navegador, árbol de etiquetas, modelo de cajas, ejes de flexbox, árbol del DOM): rehacerlos en SVG simple, con `role="img"` y texto alternativo.
- **Pantallas de GitHub (TP17):** esquemas SVG simplificados, no capturas. Cada esquema muestra solo lo que hay que tocar, con el nombre exacto del botón en inglés y su traducción al lado (`Add file → Upload files`, `Settings → Pages`). Si hace falta una captura real, dejar un marcador visible: `[CAPTURA: qué mostrar]`.
- Teclas y atajos como teclas (`<kbd>F12</kbd>`, `<kbd>Ctrl</kbd> + <kbd>S</kbd>`).
- Mobile first. Cortes en 600 px y 860 px. El bloque `@media (min-width: 860px), print` convierte cada `.lamina` en una hoja A4 (210 × 297 mm).

## Controles antes de entregar un TP

- **Cada `.lamina` entra en una hoja A4 sin desbordar** (en impresión tiene alto fijo y `overflow: hidden`). Verificar con media `print`: `scrollHeight` no debe superar `clientHeight`. Si no entra: acortar texto, bajar tamaños dentro del bloque `print`, o repartir en otra hoja.
- Títulos de lámina en una sola línea en A4 (si no entra, clase `.tit__h--largo`).
- A 390 px y 360 px de ancho: sin scroll horizontal de la página y con tablas legibles.
- **Todo código del cuadernillo funciona tal cual está escrito.** Copiarlo a un archivo y probarlo. Cada consola: tocar "Ejecutar" y comparar con la salida esperada escrita. Cada resultado: comprobar que el `iframe` muestra lo que dice el texto.
- Sin JavaScript, la página muestra igual el código y la salida esperada.
- Impresión: código y consola en fondo claro y legibles, sin botones.
- Accesibilidad: íconos decorativos con `aria-hidden`; esquemas SVG con `role="img"` y texto alternativo; tablas con `<caption>` y `scope`; foco visible (también sobre los bloques oscuros); botones "Ejecutar" y "Copiar" usables con teclado; la consola avisa la salida con `aria-live="polite"`; enlace "Saltar al contenido".
- Sin errores en la consola del navegador. Botón PDF, barra de partes e índice funcionando.

## Contenido

- **A quién va:** alumnos de los últimos años del secundario. Ya programaron en Python (variables, condicionales, bucles); **no vieron funciones**. Frases cortas, un concepto por bloque, ejemplos de la escuela y la vida cotidiana.
- Teoría en tono neutro ("podemos…"); consignas en voseo ("Indicá", "Escribí", "Abrí"). El PDF mezcla tuteo ("Tú escribes", "Partirás", "Pondrás"): pasarlo a voseo o a neutro.
- **Orden:** JavaScript primero. En los TP1 a TP6 no se usa el DOM ni se explica HTML: los ejemplos son solo con `console.log()`, `alert()` y `prompt()`. La carpeta plantilla es una caja negra hasta el TP7.
- No adelantar temas de TPs posteriores.
- **No nombrar "Nivel 1", "Nivel 3" ni "bachi".** Decir "lo que ya hiciste en Python", "las materias que cursás este año".
- **Nombres de archivo:** siempre `index.html`, `estilos.css` y `app.js` (el PDF usa `styles.css` y `script.js`). Carpetas en minúscula y sin espacios.
- **Estilo de JavaScript:** `let` y `const`, `===` y `!==`, punto y coma al final, camelCase, comillas dobles, `function nombre() {}`. Unir textos con `+` (sin plantillas `${}`). Funciones flecha solo en la receta del `sort`.
- **`typeof`:** en el TP1 solo número, texto y booleano. No decir que un array o `null` son tipos que `typeof` reconoce: devuelve `"object"` para los dos.
- **Editor y navegador:** Visual Studio Code desde el TP1 y Chrome (consola con `F12`). Las computadoras del laboratorio tienen Windows: rutas, atajos y menús se escriben para Windows.
- **Palabras:** "tablet" (no "tableta"), "frutilla" (no "fresa"), "celular". Sin años fijos en los ejemplos (el PDF pone "© 2024").
- **Entregas:** del TP1 al TP16, por Google Classroom, con la carpeta comprimida en `.zip`. En el TP17 y el TP18, el link del repositorio y del sitio publicado, pegados en Classroom.
- **Cómo comprimir:** el TP1 lo explica en el recuadro "Entrega" y en "Para profundizar", porque se usa en todas las entregas: clic derecho sobre la carpeta → "Enviar a" → "Carpeta comprimida (en zip)" en Windows 10, o "Comprimir en archivo ZIP" en Windows 11. Los TPs siguientes solo dicen "subí la carpeta en `.zip`".
- **Cuenta de GitHub (TP17):** cada alumno se registra con su propia cuenta de mail.
- **PHP (TP16):** nivel básico.
  - El laboratorio ya tiene XAMPP: no se explica la instalación. Solo prender Apache desde el panel de XAMPP, guardar los archivos en `C:\xampp\htdocs\` y abrir `http://localhost/carpeta/archivo.php`.
  - Estilo: `<?php ?>`, `echo`, variables con `$`, comillas dobles, punto y coma al final, textos unidos con punto (`.`). `htmlspecialchars()` como receta fija al mostrar lo que escribió el usuario. Sin base de datos.
  - PHP no corre en GitHub Pages: es práctica local y no entra en el portafolio del TP18.
  - "Para profundizar" del TP16 lleva un bloque "Otra forma de hacer lo mismo: Node.js y Express", con un ejemplo corto para leer, sin práctica.

## PDF fuente

`_fuentes/` tiene "HTML + CSS + JavaScript · Cuadernillo teórico-práctico" (40 páginas, **solo imagen**, 55 MB) y, en `_fuentes/paginas/`, cada página en JPG (`p-01.jpg` a `p-40.jpg`). Leer solo las páginas del TP en curso; si el PDF es muy pesado, usar los JPG.

- Se usa para los TP7 a TP13 y el TP15. Respetar su texto, pasándolo a la estructura de este formato.
- En los Módulos 1 y 2 el texto es nuevo: las páginas 30 a 37 sirven de apoyo, pero sus ejemplos usan DOM y hay que reescribirlos.
- Cada página del PDF tiene: título, introducción, "Idea clave", bloques con ícono, "Código de ejemplo", "¿Cómo se ve en el navegador?", "Buenas prácticas" y "Poné a prueba lo aprendido". En la lámina van título, introducción, bloques, un ejemplo con su resultado e "Idea clave". Lo demás va a "Para profundizar" y a las actividades.
- La paleta del PDF es solo referencia. No copiar el degradé del número, el chip "Página N" ni el pie "Desde Cero".

### Errores del PDF (Nicolás está avisado)

Corregirlos al llegar a cada lámina y listar cada corrección en la entrega del TP.

| Pág. | Error |
|---|---|
| 2, 29, 40 | Tuteo ("Tú escribes", "Partirás", "Pondrás"). |
| 3 | Pregunta 3 ilegible. Archivos `styles.css` y `script.js`. |
| 10 | La lista anidada no cierra el `<ul>` de afuera y el resultado muestra "Verduras", que no está en el código. |
| 11 | `</nav>>` y líneas encimadas. Repite el recuadro "Importante" y casi todo el código de la 12: se fusionan en una lámina. |
| 12 | Falta `</body>`. |
| 14 | Pregunta 3: "campos válidos: email / button / color / teclado". `color` y `button` también son tipos de `input`: hay 3 correctas. |
| 15 | Líneas numeradas 15, 17, 16, 18. La consigna pide insertar una imagen que ya está en el código. |
| 16 | La pregunta 3 ya trae la respuesta. Explica CSS con `<link>`; en el TP10 se empieza con `<style>`. |
| 17 | El resumen usa `#titulo` y el ejemplo `#principal`. |
| 18 | El CSS aparece dentro del bloque HTML, después de `</html>`: separar en dos archivos. |
| 19 | `rgba(37, 99, 235, 0.7)` es azul y está pintado de violeta. |
| 20 | `color: #4b5563;` quedó afuera de la llave de `.texto`. |
| 21 | `backgroundd-color`, `rel="styleshet"`, `border-radius` afuera de la llave. |
| 23 | "Tarjeta e ejemplo". `.boton:hover` sin cerrar. |
| 25 | Pregunta 2: dos respuestas correctas (`absolute` y `fixed`). El ejemplo no muestra el CSS. |
| 27 | Repite la introducción de la 26. Dice "eje secundario"; la 26 dice "eje cruzado": usar "eje cruzado". `font-weight` afuera de la llave. |
| 28 | `.contenido (` con paréntesis, y faltan llaves de cierre en `.tarjeta` y en `@media`. |
| 31 | "Errores comunes", punto 4, está redactado al revés. El ejemplo usa `innerHTML` y `${}`. |
| 32 | Los comentarios `// array` y `// null` contradicen a `typeof`. |
| 33 | Pregunta 2 compara `=` con `==`: preguntar por `=` y `===`. |
| 37 | "fresa". |
| 38, 39 | HTML y JavaScript mezclados en un mismo bloque, o falta el HTML del ejemplo. |
| 22, 33, 38 | Logos de HTML5 y CSS3 usados en temas que no corresponden. |

## Plan del cuadernillo

18 TPs · 73 láminas · 2 semanas por TP (36 semanas; el TP17 de GitHub puede darse en una). 29 láminas salen del PDF y 44 son texto nuevo.
(PDF n) = página del PDF. (N) = lámina nueva.

| TP | Nombre | Láminas | Temas, una lámina por tema |
|---|---|---|---|
| **Módulo 1 · De Python a JavaScript** | | | |
| 1 | Hola, JavaScript | 1–4 | (N) qué es JavaScript y dónde corre; la carpeta plantilla y la consola (`F12`) · (N) `console.log()`, `alert()`, comentarios `//`, punto y coma · (N) `let` y `const`; número, texto y booleano; `typeof` · (N) `prompt()`, `Number()`, operaciones aritméticas; error controlado `"5" + "3"` |
| 2 | Decisiones y bucles en JavaScript | 5–8 | (N) comparación (`===`, `!==`, `<`, `>`, `<=`, `>=`) y lógicos (`&&`, `\|\|`, `!`) · (N) `if / else if / else` con paréntesis y llaves · (N) `while` y `do...while` (apoyo: PDF 35) · (N) `for`; contadores y acumuladores |
| 3 | Crear mis propias funciones | 9–12 | (N) qué es una función; definirla con `function` y llamarla · (N) parámetros y argumentos; camelCase · (N) `return` · (N) funciones con condicionales, funciones que llaman a otras, menú con `prompt()` |
| **Módulo 2 · Arrays y objetos** | | | |
| 4 | Mi primer array | 13–16 | (N) qué es un array; crear, posición y `length` · (N) `push`, `pop`, `shift`, `unshift` (apoyo: PDF 37) · (N) `indexOf` y `splice` · (N) recorrer con `for` y `for...of` |
| 5 | Operaciones con arrays | 17–20 | (N) sumar con acumulador y promedio · (N) `Math.max()` y `Math.min()` (receta `...`) · (N) `sort()` y el error controlado `[10, 9, 100]` · (N) `includes()` y contar con condición |
| 6 | Objetos y mini-proyecto: Lista de tareas | 21–24 | (N) objeto literal · (N) leer y modificar propiedades con punto · (N) arrays de objetos · (N) integración: arrays + objetos + funciones + bucles + condicionales |
| **Módulo 3 · HTML básico** | | | |
| 7 | Mi primera página web | 25–28 | HTML, CSS y JavaScript: cómo trabajan juntos (PDF 1) · entorno de trabajo y archivos (PDF 3, 4) · estructura básica y `<script>` (PDF 5) · títulos, párrafos, `<br>`, `<hr>` (PDF 7). PDF 2 va a "Para profundizar" |
| 8 | Listas, imágenes y enlaces | 29–32 | etiquetas, elementos y atributos; `<strong>` y `<em>` (PDF 6, 7) · listas y listas anidadas (PDF 10) · imágenes (PDF 9) · enlaces; ruta absoluta y relativa (PDF 8 + N) |
| 9 | Estructura más completa: tablas y formularios | 33–36 | tablas (PDF 13) · `form`, `label`, `input` (PDF 14) · tipos de campo, `textarea`, `select`, casilla, botón de opción, `button` (PDF 14) · contenedores y HTML semántico (PDF 11 y 12 fusionadas). PDF 15 va a la práctica |
| **Módulo 4 · CSS: dar estilo** | | | |
| 10 | Primeros estilos con CSS | 37–40 | qué es CSS, la regla y `<style>`; selector por etiqueta y universal (PDF 16, 17) · colores y fondos (PDF 19) · tipografías y texto (PDF 20) · `margin` y `padding` (PDF 22) |
| 11 | CSS externo y selectores | 41–45 | archivo `.css` aparte y `<link>` (PDF 16) · clases e ID (PDF 18, 17) · bordes, esquinas y sombras (PDF 23) · ancho, alto y unidades px, %, em, rem, vw (PDF 21) · modelo de cajas (PDF 24) |
| 12 | Diseñando una página completa | 46–50 | `display` y `position` (PDF 25) · flexbox: contenedor, ítems y ejes (PDF 26) · alinear y centrar (PDF 27) · (N) header, hero, cards, footer y `:hover` · diseño responsive (PDF 28). PDF 29 va a la práctica |
| **Módulo 5 · JavaScript en la página** | | | |
| 13 | Hacer que la página responda | 51–55 | repaso de JS y `<script src="app.js">` (PDF 30) · el DOM; `getElementById()` y `querySelector()` (PDF 38) · (N) `textContent` e `innerHTML` · (N) `.style` y `classList` · eventos: `onclick` y `addEventListener()` (PDF 39) |
| 14 | Formularios que funcionan | 56–59 | (N) `.value` y `Number()` · (N) validaciones: vacío, fuera de rango, email sin @ · (N) resultados y errores en la página, sin `alert()` · (N) `preventDefault()` como receta |
| 15 | Mini-app interactiva | 60–62 | (N) del array a la lista en pantalla · (N) del array a la tabla; volver a dibujar cuando cambian los datos · pasos para armar una mini-app (PDF 40) |
| **Módulo 6 · Del navegador al servidor** | | | |
| 16 | Primeros pasos con PHP | 63–66 | (N) qué es PHP y dónde corre: navegador y servidor; XAMPP, Apache, `htdocs` y `localhost` (apoyo: PDF 2) · (N) primer archivo `.php`: `<?php ?>`, `echo`, variables con `$`, comentarios · (N) `if / else` y `for`; PHP arma el HTML · (N) recibir un formulario: `method="post"`, `action` y `$_POST` |
| **Módulo 7 · Proyecto integrador** | | | |
| 17 | Mi sitio en GitHub | 67–70 | (N) Git y GitHub; crear la cuenta · (N) crear un repositorio y subir archivos arrastrando · (N) README en Markdown · (N) GitHub Pages |
| 18 | Mi portafolio digital | 71–73 | (N) qué es un portafolio y cómo se organiza · (N) requisitos de HTML, CSS y JavaScript, con checklist · (N) entrega y presentación oral |

Notas del plan:
- `display` estaba en el TP11 en el plan de Nicolás. Pasa al TP12 porque el PDF lo trae junto a `position` y es el paso previo a `display: flex`.
- Del PDF 38 van a "Para profundizar": `querySelectorAll()` y `getElementsByClassName()`. Del PDF 39: `input`, `mouseover` y `submit`.
- Equivalencias del TP1: `print()` → `console.log()` y `alert()` · `input()` → `prompt()` · `int()` y `float()` → `Number()` · variables → `let` y `const` · `#` → `//`.
- Equivalencias del TP2: `if / elif / else` → `if / else if / else` · `and`, `or`, `not` → `&&`, `||`, `!` · `==` → `===` · `while` casi igual, con paréntesis y llaves · `for i in range(10)` → `for (let i = 0; i < 10; i++)`.
- Equivalencias del TP16 ("En JavaScript → En PHP"): `let nombre` → `$nombre` · `console.log()` → `echo` · `+` para unir textos → punto (`.`) · `if / else` y `for` casi iguales.

## Práctica y entrega de cada TP (texto de Nicolás)

(C) = cambio que Nicolás aprobó sobre su plan original.

**Entorno del Módulo 1:** una carpeta plantilla entregada por el docente, con un `index.html` ya armado y un `app.js` vacío. Se abre el HTML en el navegador y solo se edita el `.js`. El HTML se explica recién en el TP7.

- **TP1.** Práctica: 8 ejercicios que ya resolviste en Python, ahora en JavaScript (C): (1) programa que muestre tu nombre, edad y ciudad en 3 líneas · (2) programa que pregunte el nombre y salude · (3) programa que pida 2 números y muestre la suma (primero sin `Number()`, para ver el error; después corregido) · (4) programa que pida 2 números y muestre suma, resta, multiplicación y división · (5) calculadora de área de un rectángulo (pide base y altura) · (6) conversor de pesos a dólares (cotización fija) · (7) programa que pida nombre y edad, y diga "Hola [nombre], en 10 años tendrás [edad+10] años" · (8) programa que pida 3 notas y muestre el promedio. Entrega: carpeta con los 8 ejercicios comentados.
- **TP2.** Práctica: 10 ejercicios como los que ya hiciste en Python, ahora en JavaScript (C): (1) pedir un número y decir si es positivo, negativo o cero · (2) pedir edad y decir si es menor, mayor de edad o jubilado (más de 65) · (3) pedir nota y devolver "Aprobado" (≥6) o "Desaprobado" · (4) validar contraseña (si coincide con una predefinida, dar acceso) · (5) calculadora con operación elegida por el usuario (suma, resta, multiplicación, división) · (6) mostrar los números del 1 al 20 (con `for`) · (7) mostrar los números pares entre 1 y 50 · (8) pedir un número N y mostrar su tabla de multiplicar · (9) pedir números hasta que el usuario escriba 0, e ir sumándolos; al final mostrar el total · (10) adivinar el número (la PC piensa uno entre 1 y 100, el usuario adivina). El ejercicio 10 trae el número al azar como receta fija (C). Entrega: carpeta con los 10 ejercicios comentados.
- **TP3.** Práctica, parte 1: crear 6 funciones y un programa que las pruebe mostrando los resultados en la consola: `saludar(nombre)` muestra "Hola [nombre]" · `sumar(a, b)` devuelve la suma · `esMayorDeEdad(edad)` devuelve `true` o `false` · `areaRectangulo(base, altura)` devuelve el área · `convertirADolares(pesos)` devuelve el equivalente · `calcularPromedio(n1, n2, n3)` devuelve el promedio. Parte 2: programa con menú (hecho con `prompt()`) que ofrezca: calculadora (suma, resta, multiplicación, división como funciones) · conversor de unidades (km a millas, °C a °F, pesos a dólares) · calculadora de propinas (monto + porcentaje) · calculadora de descuentos (precio + % de descuento). Cada opción debe ser una función separada. El menú se repite hasta que el usuario elija "salir". Entrega: carpeta con los dos programas.
- **TP4.** Práctica: 6 ejercicios: (1) crear un array con los nombres de 5 amigos y mostrarlos uno por uno · (2) pedir 5 números al usuario y guardarlos en un array · (3) mostrar el array del ejercicio 2 al revés · (4) pedir números hasta que escriba "fin" y guardarlos en un array; al final mostrar cuántos son · (5) crear un array con las materias que cursás este año (C) y permitir al usuario eliminar una por nombre · (6) dado un array de números, mostrar cuántos son pares y cuántos impares. Entrega: carpeta con los ejercicios.
- **TP5.** Práctica: programa "Mi planilla de notas": pedir nombre del alumno · cargar 5 notas en un array · calcular y mostrar promedio, nota más alta, nota más baja, cuántas aprobadas (≥6) y cuántas desaprobadas · decir si en general está aprobado (promedio ≥6) · mostrar las notas ordenadas de menor a mayor. Entrega: carpeta del programa.
- **TP6.** Práctica: programa de lista de tareas con menú (hecho con `prompt()`), donde cada tarea es un objeto (`{ texto: "Comprar yerba", completada: false }`): agregar tarea · ver todas las tareas (las completadas se muestran con "✓") · marcar tarea como completada (cambia la propiedad `completada` a `true`) · eliminar tarea · salir. Cada opción debe ser una función. El menú se repite hasta que se elija salir. La versión con botones y lista en pantalla llega en el TP15. Entrega: carpeta del proyecto + capturas del programa funcionando.
- **TP7.** Práctica: crear una página "Sobre mí" con: título principal con tu nombre · 3 secciones con subtítulos ("Quién soy", "Lo que me gusta", "Mis metas") · cada sección con al menos 2 párrafos. Entrega: archivo `.html` + captura de cómo se ve en el navegador.
- **TP8.** Práctica: crear una página "Mis recomendaciones" con 3 secciones (películas, música, lugares). Cada sección debe tener: una lista (con o sin orden) de al menos 4 ítems · al menos 1 imagen · al menos 1 enlace a un sitio externo (YouTube, Spotify, Wikipedia). Entrega: carpeta con `.html` + imágenes.
- **TP9.** Práctica: como entrada en calor, completar el código de la página 15 del PDF. Después, crear la página "Contacto" de un negocio ficticio (un kiosco, una peluquería, un estudio de tatuajes, lo que les guste) con: header con el nombre del negocio · una tabla con horarios de atención · un formulario con nombre, email, teléfono, mensaje y botón enviar (todavía no hace falta que funcione: cobra vida en el TP14) · footer con redes sociales (links). Entrega: `.html`.
- **TP10.** Práctica: tomar la página del TP7 ("Sobre mí") y darle estilo: cambiar fuente y color del título principal · color de fondo de la página distinto al blanco · subtítulos con un color destacado · párrafos con interlineado y márgenes. Entrega: `.html` con CSS interno.
- **TP11.** Práctica: tomar la página del TP8 ("Mis recomendaciones") y: pasar todos los estilos a un archivo `estilos.css` aparte · usar clases para que las imágenes tengan bordes redondeados · crear una clase para destacar enlaces (color y subrayado distintos) · las 3 secciones deben tener fondos de colores distintos. Entrega: carpeta con `.html`, `.css` e imágenes.
- **TP12.** Práctica: como entrada en calor, completar el CSS de la página 29 del PDF. Después, crear desde cero una página de presentación de un producto o servicio ficticio (una banda, un emprendimiento, un evento) con: header con título y menú simple (3 enlaces que pueden ir a anclas dentro de la misma página) · sección hero con imagen grande y eslogan · 3 cajas (cards) en fila explicando características · sección "Contacto" con datos · footer · estilos en archivo CSS aparte · al menos 1 efecto hover en algún elemento · que se vea bien en el celular (C). Entrega: carpeta del proyecto.
- **TP13.** Práctica: crear una página con: un botón que al hacerle clic cambie el texto del título · un botón que cambie el color de fondo de la página al azar · un botón que muestre u oculte una imagen · un botón "modo oscuro" que cambie los colores de toda la página. Entrega: carpeta del proyecto.
- **TP14.** Práctica: (1) tomar el formulario de contacto del TP9 y validarlo: ningún campo vacío, email con @, mensaje de al menos 10 caracteres; mostrar cada error al lado de su campo y un mensaje de éxito cuando esté todo bien · (2) calculadora de descuentos en la página: dos inputs (precio y % de descuento), un botón y el resultado en pantalla; el cálculo va en una función. Entrega: carpeta del proyecto.
- **TP15.** Práctica: crear UNA de estas mini-apps: calculadora visual (con inputs y botones de operaciones) · conversor de monedas (ingresar pesos y elegir convertir a dólar, euro o real) · generador de contraseñas (elegir longitud y generar una contraseña aleatoria) · adivina el número (la página piensa un número, el usuario adivina con pistas) · lista de tareas visual (la del TP6, ahora con un input, botones y la lista en pantalla). Entrega: carpeta del proyecto + breve explicación.
- **TP16.** Práctica: (1) copiar la carpeta del formulario de contacto del TP14 a `htdocs` y abrirla desde `http://localhost` · (2) cambiar el formulario para que se envíe con `method="post"` a `procesar.php` · (3) crear `procesar.php`, que recibe los datos con `$_POST` y responde "Gracias, [nombre]. Recibimos tu mensaje" · (4) si el nombre llega vacío, mostrar un aviso en lugar del agradecimiento. Entrega: carpeta en `.zip` + captura funcionando en `localhost`.
- **TP17.** Práctica: tomar la página del TP12 y: crear cuenta en GitHub · crear repositorio público · subir todos los archivos del proyecto · escribir un README explicando qué es el proyecto · activar GitHub Pages y obtener el link público. Entrega: link al sitio publicado + link al repositorio.
- **TP18 · TP final integrador.** Consigna: crear un portafolio personal online que reúna lo trabajado. Es la versión "presentable" de uno mismo. Requisitos del sitio: mínimo 3 páginas conectadas (Inicio, Proyectos, Contacto; pueden ser archivos separados o secciones de una sola página) · HTML semántico bien estructurado · CSS en archivo aparte, diseño cuidado · sección "Proyectos" con al menos 3 trabajos previos (capturas + descripción + link si corresponde) · publicado en GitHub Pages. Requisitos de JavaScript: al menos 1 elemento interactivo en el propio sitio (modo oscuro, menú, formulario de contacto que valide, etc.) · al menos 1 mini-app propia (de los TP6, TP14 o TP15) funcionando online dentro de "Proyectos", con una breve explicación de qué hace. Opcional (C): subir al repositorio un programa en Python que hayas hecho antes, con su propio README explicando qué hace y cómo usarlo. Entrega: link al sitio publicado + link al repositorio + presentación oral de 3 a 5 minutos en clase mostrando el sitio.

## Decisiones confirmadas (2/10/2026)

- Se mantiene el orden del plan de Nicolás (JavaScript primero). El PDF es la fuente de HTML y CSS.
- Entra todo el PDF, también lo que no estaba en el plan: responsive, `position`, unidades, `do...while`, `shift` y `unshift`, sombras, listas anidadas, `select`, `article` y `aside`.
- Consola: opción B (botón "Ejecutar", sin edición).
- Paleta: azul de acento, con violeta y magenta solo como etiquetas de tecnología.
- Actividades en dos partes: carpeta y práctica en la computadora.
- Sin Bloque F: se sacó el "Componente de seguridad" del TP18 (portafolio) y la referencia del TP15.
- Sin años de cursado ni "Nivel 1", "Nivel 3" o "bachi" en el sitio.
- TP5: `Math.max(...notas)` y `sort((a, b) => a - b)` como recetas fijas.
- TP12: la práctica suma "que se vea bien en el celular".
- TP17: pantallas de GitHub como esquemas SVG. Los alumnos se registran con su propia cuenta de mail.
- Ni el README ni la portada llevan el nombre de la escuela. Datos de la portada: "Programación - HTML, CSS, JS • Prof. Nicolás A. Cussi" en negrita y "Bachillerato Profesional en Programación · Ushuaia" sin negrita (3/10/2026).
- Entregas por Classroom con la carpeta en `.zip`; el TP1 explica cómo comprimir.
- Visual Studio Code desde el TP1. Laboratorio con Windows.

### Agregado (4/10/2026)

- Colores vivos en todo el cuadernillo y en la portada (ver "Colores vivos" en Identidad). Se probaron en el TP7 y se pasaron a los TP1–TP6.
- Los puntos de "Para hacer en la carpeta" se numeran desde 1 en cada TP.

### Agregado (3/10/2026)

- Se suma el TP16 "Primeros pasos con PHP" (Módulo 6 · Del navegador al servidor), entre la mini-app y GitHub, sin sacar nada. GitHub pasa a ser el TP17 y el portafolio el TP18 (Módulo 7).
- El laboratorio tiene XAMPP instalado.
- Express solo se nombra en "Para profundizar" del TP16.
- El nombre de la materia no cambia.

## Pendientes a consultar con Nicolás

- Ninguno por ahora.