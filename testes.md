# Testes: procedimentos, resultados e pendências

Revisão de **03/11/2026** (versão final desta entrega). Ambiente: Chromium (Playwright) servido por servidor HTTP local, sem acesso ao validador online do W3C. Capturas em `docs/evidencias/` foram **regeneradas nesta data**; resultados brutos em `evidencias/resultado-testes-navegador.json`.

**Legenda:** ✅ executado e passou · ⚠️ executado com ressalva · ⏳ pendente (não executado)

## 1. Resultados desta revisão

| # | Teste | Status | Resultado |
|---|---|---|---|
| 1 | Estrutura das 10 páginas (script Python): `doctype`, `lang="pt-BR"`, `charset`, `viewport`, `title` único, `meta description`, 1 `h1`, sem saltos de título, `header/nav/main/footer`, IDs únicos, `alt`, `label` de cada campo, `title` de iframe | ✅ | 0 problemas |
| 2 | Links internos, âncoras, `src`, `href`, `poster` locais | ✅ | 0 arquivos ausentes; nomes em minúsculas |
| 3 | Console e HTTP, 10 páginas × 320/375/768/1024/1440 px | ✅ | 0 erros de console; 0 respostas 4xx/5xx |
| 4 | Rolagem horizontal, mesmas 50 combinações | ✅ | 0 px de estouro |
| 5 | Imagens carregam | ✅ | Todas carregam (as da galeria e de projetos são `loading="lazy"` e foram conferidas com carregamento forçado: 0 quebradas de 9 e de 6) |
| 6 | Vídeo (`midia.html`) | ⚠️ | `controls`, `poster`, sem `autoplay`; carregou o MP4 (64,7 s) e o tempo avançou ao reproduzir. **Sem `<track>`**: não há legenda correspondente. Teste só em Chromium |
| 7 | Áudio (`midia.html`) | ✅ | `<audio controls>` independente, MP3 de 64,7 s, tempo avançou ao reproduzir, sem `autoplay` |
| 8 | Iframe | ⚠️ | `title` descritivo presente. **Carregamento do mapa não testado** (internet bloqueada no ambiente) |
| 9 | Formulário | ✅ | `tel`: aceita (11) 91234-5678, 11 3456-7890 e 11912345678; rejeita `abc`, `123` e `(11) 1234-56`. `number` 0 a 999: rejeita -1 e 1000. `date`: mínimo = hoje, data passada rejeitada. E-mail inválido e envio vazio bloqueados. Com tudo válido aparece a confirmação e **nenhuma requisição é enviada** |
| 10 | Teclado: `Tab` abre o link de salto; `Enter` leva a `main#conteudo` | ✅ | Em `index.html` |
| 11 | Menu móvel (375 px): abre e `Esc` fecha | ✅ | `aria-expanded` acompanha |
| 12 | Barra de acessibilidade (`js/acessibilidade.js`): A−/A+ de 12,8 a 32 px com limites desativados; tamanho persiste entre páginas; sem rolagem horizontal a 200% em 375 px nas 10 páginas; operável por teclado (2º `Tab` e `Enter`) | ✅ | Leitura testada com **síntese de voz simulada** (71 trechos lidos em ordem em `sobre.html`; parar cancela). **Voz real em português não foi ouvida** | 
| 13 | Capturas de tela (celular 375, desktop 1440, tablet 1024 da mídia, formulário, menu) | ✅ | 25 imagens regeneradas em 03/11/2026 |

## 2. Pendências reais (não executadas)

0. **Leitura em voz alta**: testar com voz real em Chrome, Edge, Firefox, Safari e celular; a qualidade e a existência de voz em português dependem do sistema.

1. **W3C Markup Validator** nas 10 páginas. O validador local (Nu Html Checker) **não pôde ser instalado** nesta revisão (npm e GitHub bloqueados no ambiente) e a página online não foi acessada. Os resultados de 15/10/2026 (0 erros, motor Nu 26.10.12) estão em `evidencias/versao-anterior/` e **não valem para a versão final**, pois `midia`, `contato`, `sobre`, `orcamento_hospedagem` e `acessibilidade` mudaram. Rode e salve capturas como `evidencias/w3c-html-<pagina>.png`.
2. **W3C CSS Validator (Jigsaw)** em `css/base.css`. O CSS não foi alterado, mas o Jigsaw nunca foi executado. Risco conhecido: `:user-invalid`, `text-wrap: balance` e `aspect-ratio` podem gerar avisos (melhorias progressivas, removíveis).
3. **Axe-core e contraste**: medidos em 15/10/2026 (`acessibilidade.md`, `evidencias/contrastes-medidos.md`) e **não repetidos**. As alterações usam as classes e cores já existentes.
4. **Legendas (CC) do vídeo**: faltam. Para criar, a equipe deve fornecer o texto exato da narração (roteiro do ElevenLabs); depois gerar o `.vtt` e acrescentar `<track kind="captions" srclang="pt-BR" label="Português" src="assets/media/….vtt" default>` dentro do `<video>`.
5. **Transcrição literal do áudio**: idem, depende do roteiro. Hoje a página oferece o texto dos slides.
6. **Mapa** com internet; **MP4/WebM** em Chrome, Edge, Firefox e Safari; **leitor de tela**, zoom de 200% e **dispositivos reais**.
7. **Links externos** (notícias, preços, relatórios de sustentabilidade): não reabertos nesta revisão, só lidos os de sustentabilidade em 03/11/2026.
8. **Publicação no Railway** e abertura do `.zip` extraído.

## 3. Como validar manualmente no W3C

**HTML:** <https://validator.w3.org/#validate_by_upload>, enviar cada página; esperado "No errors or warnings to show".
**CSS:** <https://jigsaw.w3.org/css-validator/#validate_by_upload>, enviar `css/base.css`, perfil CSS nível 3 + SVG; registrar o resultado real aqui.

## 4. Como reproduzir

Servidor local (`python -m http.server 8000` na pasta do projeto) e, no navegador: F12 em modo dispositivo (320 a 1440 px, sem rolagem lateral); `Tab` desde o topo; formulário com campos vazios e inválidos; botões de play do vídeo e do áudio.
