/*
  ReTech — formulário de contato (DEMONSTRAÇÃO ACADÊMICA).
  A validação é feita pelo próprio navegador (HTML5). Quando todos os campos são
  válidos, esta rotina apenas exibe uma mensagem na tela. NENHUM dado é enviado
  para servidor algum, pois o projeto não possui backend.
*/
(function () {
  "use strict";

  var formulario = document.getElementById("form-contato");
  var resultado = document.getElementById("resultado-formulario");
  if (!formulario || !resultado) { return; }

  // A data de preferência não pode ser anterior a hoje (data local do navegador).
  var data = document.getElementById("data-contato");
  if (data) {
    var hoje = new Date();
    var mes = String(hoje.getMonth() + 1).padStart(2, "0");
    var dia = String(hoje.getDate()).padStart(2, "0");
    data.min = hoje.getFullYear() + "-" + mes + "-" + dia;
  }

  formulario.addEventListener("submit", function (evento) {
    // Este evento só ocorre quando a validação nativa passou.
    evento.preventDefault();
    resultado.className = "form-status form-status--ok";
    resultado.textContent =
      "Validação concluída: todos os campos estão corretos. " +
      "Esta é uma demonstração acadêmica, então nenhuma mensagem foi enviada e nenhum dado foi guardado.";
    resultado.focus();
  });

  formulario.addEventListener("reset", function () {
    resultado.className = "form-status";
    resultado.textContent = "";
  });
})();
