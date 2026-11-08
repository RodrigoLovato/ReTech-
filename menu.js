/*
  ReTech — menu responsivo (melhoria progressiva).
  Sem JavaScript o menu continua visível e funcional, apenas em várias linhas.
*/
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var botao = document.getElementById("menu-toggle");
  var lista = document.getElementById("menu-lista");
  if (!botao || !lista) { return; }

  function definir(aberto) {
    lista.classList.toggle("is-open", aberto);
    botao.setAttribute("aria-expanded", aberto ? "true" : "false");
    botao.textContent = aberto ? "Fechar menu" : "Menu";
  }

  botao.addEventListener("click", function () {
    definir(botao.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape" && botao.getAttribute("aria-expanded") === "true") {
      definir(false);
      botao.focus();
    }
  });
})();
