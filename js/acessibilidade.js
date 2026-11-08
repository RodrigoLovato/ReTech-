/*
  ReTech — barra de acessibilidade (melhoria progressiva).
  - A− / A+ : diminui e aumenta o tamanho do texto (80% a 200%), lembrado entre páginas.
  - Ler página : lê em voz alta o conteúdo principal com a síntese de voz do navegador
    (Web Speech API, voz em português quando disponível). Nada é enviado a servidores do projeto.
  Sem JavaScript a barra não aparece e o site continua funcionando normalmente.
*/
(function () {
  "use strict";

  var MIN = 80, MAX = 200, PASSO = 10, CHAVE = "retech-tamanho-texto";
  var raiz = document.documentElement;
  var tamanho = 100;

  function guardar(valor) { try { localStorage.setItem(CHAVE, String(valor)); } catch (e) { /* sem armazenamento */ } }
  function lembrar() {
    try {
      var v = parseInt(localStorage.getItem(CHAVE), 10);
      if (v >= MIN && v <= MAX) { return v; }
    } catch (e) { /* sem armazenamento */ }
    return 100;
  }

  var barra = document.createElement("div");
  barra.className = "a11y-bar";
  barra.setAttribute("role", "group");
  barra.setAttribute("aria-label", "Ferramentas de acessibilidade");
  barra.innerHTML =
    '<button type="button" class="a11y-btn" data-acao="menos" aria-label="Diminuir tamanho do texto"><span aria-hidden="true">A−</span></button>' +
    '<button type="button" class="a11y-btn" data-acao="mais" aria-label="Aumentar tamanho do texto"><span aria-hidden="true">A+</span></button>' +
    '<button type="button" class="a11y-btn a11y-btn--ler" data-acao="ler" aria-pressed="false"><span aria-hidden="true">🔊</span> <span class="a11y-ler-rotulo">Ler página</span></button>' +
    '<span class="sr-only" role="status" aria-live="polite" id="a11y-status"></span>';

  var corpo = document.body;
  var salto = corpo.querySelector(".skip-link");
  if (salto && salto.nextSibling) { corpo.insertBefore(barra, salto.nextSibling); } else { corpo.insertBefore(barra, corpo.firstChild); }

  corpo.classList.add("has-a11y-bar");
  var status = barra.querySelector("#a11y-status");
  var btnMenos = barra.querySelector('[data-acao="menos"]');
  var btnMais = barra.querySelector('[data-acao="mais"]');
  var btnLer = barra.querySelector('[data-acao="ler"]');
  var rotuloLer = barra.querySelector(".a11y-ler-rotulo");

  function aplicar(novo, avisar) {
    tamanho = Math.max(MIN, Math.min(MAX, novo));
    raiz.style.fontSize = tamanho + "%";
    btnMenos.disabled = tamanho <= MIN;
    btnMais.disabled = tamanho >= MAX;
    guardar(tamanho);
    if (avisar) { status.textContent = "Tamanho do texto: " + tamanho + "%."; }
  }
  aplicar(lembrar(), false);

  /* ---------- leitura em voz alta ---------- */
  var sintese = window.speechSynthesis;
  var suportado = !!(sintese && window.SpeechSynthesisUtterance);
  var lendo = false;
  var fila = [];
  var indice = 0;

  function definirLendo(valor) {
    lendo = valor;
    btnLer.setAttribute("aria-pressed", valor ? "true" : "false");
    rotuloLer.textContent = valor ? "Parar leitura" : "Ler página";
  }

  function coletarTextos() {
    var principal = document.getElementById("conteudo") || document.body;
    var seletor = "h1,h2,h3,h4,p,li,caption,th,td,summary,figcaption,dt,dd";
    var itens = principal.querySelectorAll(seletor);
    var textos = [];
    Array.prototype.forEach.call(itens, function (el) {
      if (el.querySelector(seletor)) { return; }              // lê só o item mais interno
      if (el.closest("[aria-hidden='true']")) { return; }
      if (!el.getClientRects().length) { return; }            // oculto (ex.: <details> fechado)
      var t = (el.innerText || "").replace(/\s+/g, " ").trim();
      if (!t) { return; }
      // divide trechos longos em frases, pois alguns navegadores interrompem falas muito longas
      var partes = t.length > 220 ? t.match(/[^.!?;:]+[.!?;:]*\s*/g) || [t] : [t];
      partes.forEach(function (p) { p = p.trim(); if (p) { textos.push(p); } });
    });
    return textos;
  }

  function escolherVoz() {
    var vozes = sintese.getVoices() || [];
    var i;
    for (i = 0; i < vozes.length; i++) { if (/^pt[-_]BR$/i.test(vozes[i].lang)) { return vozes[i]; } }
    for (i = 0; i < vozes.length; i++) { if (/^pt/i.test(vozes[i].lang)) { return vozes[i]; } }
    return null;
  }

  function pararLeitura(avisar) {
    fila = [];
    sintese.cancel();
    definirLendo(false);
    if (avisar) { status.textContent = "Leitura interrompida."; }
  }

  function falarProximo() {
    if (!lendo) { return; }
    if (indice >= fila.length) {
      definirLendo(false);
      status.textContent = "Leitura concluída.";
      return;
    }
    var fala = new SpeechSynthesisUtterance(fila[indice]);
    fala.lang = "pt-BR";
    var voz = escolherVoz();
    if (voz) { fala.voice = voz; }
    fala.onend = function () { indice += 1; falarProximo(); };
    fala.onerror = function (e) {
      if (e && (e.error === "canceled" || e.error === "interrupted")) { return; }
      definirLendo(false);
      status.textContent = "Não foi possível ler o texto neste navegador.";
    };
    sintese.speak(fala);
  }

  function iniciarLeitura() {
    fila = coletarTextos();
    if (!fila.length) { status.textContent = "Não há texto para ler nesta página."; return; }
    indice = 0;
    sintese.cancel();
    definirLendo(true);
    status.textContent = "Iniciando a leitura da página.";
    falarProximo();
  }

  if (!suportado) {
    btnLer.disabled = true;
    btnLer.title = "Seu navegador não oferece leitura em voz alta.";
    rotuloLer.textContent = "Leitura indisponível";
  } else {
    if (sintese.getVoices) { sintese.getVoices(); }           // aquece a lista de vozes
    window.addEventListener("pagehide", function () { sintese.cancel(); });
  }

  barra.addEventListener("click", function (evento) {
    var alvo = evento.target.closest("button[data-acao]");
    if (!alvo || alvo.disabled) { return; }
    var acao = alvo.getAttribute("data-acao");
    if (acao === "menos") { aplicar(tamanho - PASSO, true); }
    else if (acao === "mais") { aplicar(tamanho + PASSO, true); }
    else if (acao === "ler") { if (lendo) { pararLeitura(true); } else { iniciarLeitura(); } }
  });
})();
