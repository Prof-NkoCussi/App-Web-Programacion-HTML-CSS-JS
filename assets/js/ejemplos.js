/* ==========================================================
   Programación - HTML, CSS, JS — ejemplos.js
   Ejemplos en vivo de los TPs:
   - Botón "Copiar" en cada bloque de código (figure.codigo)
   - Botón "▶ Ejecutar" en cada consola (.consola[data-codigo]):
     corre el texto del bloque de código en un iframe aislado
     y muestra la salida real, con formato parecido al de Chrome.
   Sin JavaScript, la página muestra el código y la salida esperada.
   ========================================================== */
(function () {
  "use strict";

  /* ---- Aviso para lectores de pantalla ---- */
  var aviso = document.createElement("p");
  aviso.className = "sr-only";
  aviso.setAttribute("aria-live", "polite");
  document.body.appendChild(aviso);
  function avisar(texto) {
    aviso.textContent = "";
    window.setTimeout(function () { aviso.textContent = texto; }, 50);
  }

  function crearBoton(texto, clase) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "boton-cod " + (clase || "");
    b.textContent = texto;
    return b;
  }

  /* ==========================================================
     Copiar
     ========================================================== */
  function copiar(texto, listo) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(texto).then(listo, function () { copiarViejo(texto, listo); });
    } else {
      copiarViejo(texto, listo);
    }
  }
  function copiarViejo(texto, listo) {
    var area = document.createElement("textarea");
    area.value = texto;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    try { document.execCommand("copy"); listo(); } catch (e) { /* sin portapapeles */ }
    document.body.removeChild(area);
  }

  var bloques = document.querySelectorAll("figure.codigo");
  Array.prototype.forEach.call(bloques, function (fig) {
    var cab = fig.querySelector("figcaption");
    var pre = fig.querySelector("pre");
    if (!cab || !pre) { return; }
    var archivo = cab.textContent.trim();
    var boton = crearBoton("Copiar");
    boton.setAttribute("aria-label", "Copiar el código de " + archivo);
    boton.addEventListener("click", function () {
      copiar(pre.textContent, function () {
        boton.textContent = "✓ Copiado";
        avisar("Código copiado");
        window.setTimeout(function () { boton.textContent = "Copiar"; }, 1600);
      });
    });
    cab.appendChild(boton);
  });

  /* ==========================================================
     Consola: "▶ Ejecutar"
     ========================================================== */

  /* Este código corre DENTRO del iframe. Se pasa como texto. */
  function puente() {
    function formato(v, nivel) {
      if (typeof v === "string") { return nivel ? JSON.stringify(v) : v; }
      if (v === null) { return "null"; }
      if (v === undefined) { return "undefined"; }
      if (typeof v === "function") { return "ƒ " + (v.name || "") + "()"; }
      if (typeof v === "number" && Object.is(v, -0)) { return "-0"; }
      if (Array.isArray(v)) {
        if (nivel > 2) { return "Array(" + v.length + ")"; }
        return "[" + v.map(function (x) { return formato(x, nivel + 1); }).join(", ") + "]";
      }
      if (typeof v === "object") {
        if (nivel > 2) { return "{…}"; }
        return "{" + Object.keys(v).map(function (k) {
          return k + ": " + formato(v[k], nivel + 1);
        }).join(", ") + "}";
      }
      return String(v);
    }
    function enviar(tipo, texto) { parent.postMessage({ consola: true, tipo: tipo, texto: texto }, "*"); }
    function linea(args) {
      return Array.prototype.map.call(args, function (a) { return formato(a, 0); }).join(" ");
    }
    console.log = console.info = console.debug = function () { enviar("log", linea(arguments)); };
    console.warn = function () { enviar("log", linea(arguments)); };
    console.error = function () { enviar("error", linea(arguments)); };
    var alertaOriginal = window.alert;
    window.alert = function (m) {
      enviar("guia", "alert: " + formato(m === undefined ? "" : m, 0));
      alertaOriginal.call(window, m);
    };
    window.addEventListener("error", function (e) {
      e.preventDefault();  // el error se muestra en la consola del cuadernillo, no en la del navegador
      enviar("error", e.message || "Error");
    });
    window.__fin = function () { enviar("fin", ""); };
  }

  var enCurso = null;  // { marco, salida, boton }

  function agregarLinea(salida, texto, clase) {
    var span = document.createElement("span");
    if (clase) { span.className = clase; }
    span.textContent = texto + "\n";
    salida.appendChild(span);
  }

  function terminar() {
    if (!enCurso) { return; }
    var s = enCurso.salida;
    if (!s.textContent) { agregarLinea(s, "(el programa no mostró nada)", "consola__guia"); }
    enCurso.boton.disabled = false;
    enCurso = null;
  }

  window.addEventListener("message", function (e) {
    if (!enCurso || e.source !== enCurso.marco.contentWindow) { return; }
    var d = e.data;
    if (!d || d.consola !== true) { return; }
    if (d.tipo === "fin") { terminar(); return; }
    var clase = d.tipo === "error" ? "consola__error" : (d.tipo === "guia" ? "consola__guia" : "");
    agregarLinea(enCurso.salida, d.texto, clase);
  });

  /* data-codigo puede nombrar varios bloques del mismo archivo, separados por espacio:
     se corren juntos, en ese orden */
  function bloquesDe(consola) {
    return consola.getAttribute("data-codigo").trim().split(/\s+/).map(function (id) {
      return document.getElementById(id);
    });
  }

  function ejecutar(consola, boton) {
    var pres = bloquesDe(consola).map(function (fig) { return fig && fig.querySelector("pre"); });
    if (pres.indexOf(null) !== -1) { return; }
    if (enCurso) {
      enCurso.marco.parentNode.removeChild(enCurso.marco);
      enCurso.boton.disabled = false;
      enCurso = null;
    }

    var salida = consola.querySelector(".consola__salida");
    var estado = consola.querySelector(".consola__estado");
    var nota = consola.querySelector(".consola__nota");
    salida.textContent = "";
    if (estado) { estado.textContent = ""; }
    if (nota) { nota.hidden = true; }

    var codigo = pres.map(function (pre) { return pre.textContent; }).join("\n")
      .replace(/<\/script/gi, "<\\/script");
    var marco = document.createElement("iframe");
    marco.setAttribute("sandbox", "allow-scripts allow-modals");
    marco.setAttribute("title", "Ejecución del ejemplo");
    marco.setAttribute("aria-hidden", "true");
    marco.setAttribute("tabindex", "-1");
    marco.className = "sr-only";
    marco.srcdoc = "<!DOCTYPE html><html><head><meta charset=\"utf-8\"></head><body>" +
      "<script>(" + puente.toString() + ")();<\/script>" +
      "<script>\n" + codigo + "\n<\/script>" +
      "<script>__fin();<\/script></body></html>";

    boton.disabled = true;
    enCurso = { marco: marco, salida: salida, boton: boton };
    document.body.appendChild(marco);
  }

  var consolas = document.querySelectorAll(".consola[data-codigo]");
  Array.prototype.forEach.call(consolas, function (consola) {
    var barra = consola.querySelector(".consola__barra");
    if (!barra) { return; }
    var boton = crearBoton("▶ Ejecutar", "boton-cod--ejecutar");
    var fig = bloquesDe(consola)[0];
    var rotulo = fig && fig.querySelector(".codigo__archivo");
    var archivo = rotulo ? rotulo.textContent.trim() : "el ejemplo";
    boton.setAttribute("aria-label", "Ejecutar " + archivo + " y ver la salida");
    boton.addEventListener("click", function () { ejecutar(consola, boton); });
    barra.appendChild(boton);
  });
})();
