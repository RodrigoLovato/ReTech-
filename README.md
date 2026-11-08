# ReTech — Logística reversa de lixo eletrônico

Projeto acadêmico da equipe **EcoTech** para a disciplina de **Front-End** (Superior de Informática, UNICID), orientado pelo **Prof. Paulo Fratta**. Escopo datado de 22/09/2026.

O ReTech é um **site educativo** que explica os impactos do descarte incorreto de lixo eletrônico e apresenta caminhos de reutilização, reciclagem e destinação adequada. **Não é uma organização constituída**: é um trabalho de faculdade. As ações descritas em `projetos.html` como "Proposta ReTech" são ideias educativas e **não foram executadas**.

## Equipe e divisão (conforme o escopo)

| Integrante | RGM | Responsabilidade |
|---|---|---|
| Pedro Henrique de Oliveira Medeiros | 47656247 | `index.html`, `sobre.html`, CSS base |
| Davi Cabral Paixão | 47752980 | `index.html`, `sobre.html`, CSS base |
| Lucas dos Santos Vicente Braga | 47901624 | `projetos.html`, `impacto.html`, `galeria.html` |
| Laura Moreti | 47746301 | `acessibilidade.html`, `midia.html`, `noticias.html` |
| Pietro Tavares | 47658649 | `acessibilidade.html`, `midia.html`, `noticias.html` |
| Rodrigo Seriaco Lovato | 48117722 | `contato.html`, `orcamento_hospedagem.html`, `/docs` |

Revisão final, testes, acessibilidade e validação são responsabilidade de toda a equipe.

## Tecnologias

- **HTML5** semântico e **CSS3** (variáveis, Flexbox, Grid, media queries), em uma única folha de estilos compartilhada.
- **JavaScript puro** apenas em dois pontos pequenos: abrir/fechar o menu em telas estreitas (`js/menu.js`) e mostrar a confirmação de validação do formulário (`js/contato.js`). O site continua navegável com JavaScript desligado.
- Nenhum framework (sem React, Next.js, Bootstrap ou Tailwind) e nenhuma dependência externa de código ou fonte. A fonte é `Roboto`, com alternativas `Segoe UI`, `Arial` e `Helvetica` (não é carregada da internet).
- Ilustrações em **SVG** criadas para o projeto; vídeo, áudio e pôster locais em `assets/media/`.

## Estrutura de arquivos

```text
ReTech/
├── index.html                  Página inicial
├── sobre.html                  Sobre o projeto
├── projetos.html               Projetos (propostas ReTech x iniciativas de terceiros)
├── impacto.html                Impacto ambiental e social (dados, tabelas, fontes)
├── acessibilidade.html         Acessibilidade
├── galeria.html                Galeria de imagens (legenda, alt e fonte)
├── midia.html                  Vídeo, áudio (MP3) e iframe (mapa)
├── noticias.html               Notícias com links para as publicações originais
├── contato.html                Contato e formulário (demonstração)
├── orcamento_hospedagem.html   Comparação de 3 hospedagens e 3 domínios
├── css/base.css                Folha de estilos compartilhada
├── js/menu.js                  Menu responsivo (melhoria progressiva)
├── js/contato.js               Confirmação da validação do formulário
├── js/acessibilidade.js        Barra A−/A+/Ler página
├── assets/
│   ├── img/                    Logotipo e ilustrações SVG
│   └── media/                  Vídeo narrado (MP4 e WebM), pôster, áudio MP3 e arquivos da versão anterior do vídeo
└── docs/
    ├── README.md               Este arquivo
    ├── escopo.md               Escopo do projeto conforme implementado
    ├── diario_de_bordo.md      Registro da evolução (a equipe completa)
    ├── fontes.md               Fontes de dados, notícias, imagens e mídia
    ├── testes.md               Testes realizados, resultados e pendências
    ├── acessibilidade.md       Recursos de acessibilidade e contrastes medidos
    ├── hospedagem.md           Critérios e referências da comparação de hospedagem
    └── evidencias/             Capturas de tela reais dos testes
```

## Como abrir o site

**Opção 1 (mais simples):** dê dois cliques em `index.html`. Todo o site funciona assim, com uma ressalva: o **mapa** da página de mídia precisa de internet.

**Opção 2 (recomendada para testar tudo):** abra um terminal na pasta `ReTech` e rode um servidor local.

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000/index.html`. Também funciona a extensão *Live Server* do Visual Studio Code.

## Como testar cada funcionalidade

| O que testar | Como |
|---|---|
| Menu e navegação | Em qualquer página, clique nos 10 links do menu. O link da página atual fica destacado (`aria-current="page"`). |
| Menu no celular | Reduza a janela abaixo de 1024 px (ou use o modo dispositivo do navegador). Aparece o botão **Menu**; `Esc` fecha. |
| Barra de acessibilidade | Canto inferior da tela, em todas as páginas: **A−** e **A+** mudam o tamanho do texto; **Ler página** lê o conteúdo principal em voz alta (clique de novo para parar). |
| Link "Pular para o conteúdo" | Em qualquer página, aperte `Tab` uma vez e depois `Enter`. O foco vai para o conteúdo principal. |
| Teclado e foco | Navegue só com `Tab`, `Shift+Tab` e `Enter`. Cada item focado mostra um contorno visível. |
| Formulário | Em `contato.html`, clique em **Enviar** com campos vazios (mensagens nativas do navegador), digite um e-mail inválido e depois preencha corretamente. Aparece a confirmação **de validação**. **Nada é enviado**: não há servidor. |
| Vídeo e áudio | Em `midia.html`, use os controles de cada player. Nada toca sozinho. O vídeo ainda não tem legendas (CC); o texto dos slides está na página. |
| Mapa (iframe) | Em `midia.html`. Exige internet; use o link "Abrir o mapa em tela cheia" se não carregar. |
| Tabelas em tela estreita | Em `impacto.html` e `orcamento_hospedagem.html`, com largura de 320 px a tabela rola na horizontal dentro da própria caixa, sem rolar a página inteira. |
| Validação W3C | Veja `docs/testes.md`. |

## Limitações conhecidas

- O formulário de contato é uma **demonstração**: valida os campos e informa o resultado na tela, mas não envia nem guarda nada.
- Não há e-mail, telefone ou endereço público do projeto, e por isso nenhum é exibido.
- Preços de hospedagem e domínio mudam com frequência; os valores foram lidos nos sites oficiais em 14 e 15/10/2026 (detalhes em `hospedagem.md`).
- As imagens são ilustrações originais em SVG, e não fotografias. A escolha evita problemas de licença; veja `fontes.md`.
- Dados externos têm ano de referência e link em cada página. Números divulgados por empresas são informados por elas mesmas e não foram auditados pela equipe.
- A validação, os testes e as pendências estão em `testes.md`.

## Publicação (GitHub e Railway)

O site é 100% estático: `index.html` fica na raiz, todos os caminhos são relativos e os nomes de arquivo são minúsculos, sem dependência de caminhos do computador. Basta enviar a pasta ao repositório do GitHub e publicar no Railway apontando para esse repositório. Não há banco de dados, login nem backend. A publicação em si **não foi executada nem testada nesta revisão** (veja `testes.md`).

## Como compactar e entregar

1. Confirme que `docs/evidencias/` contém as capturas de tela e que `docs/testes.md` está atualizado com as pendências que você resolver.
2. Feche o editor e o servidor local. Não inclua pastas de ferramentas (`node_modules`, `.git`, arquivos temporários).
3. Clique com o botão direito na pasta **ReTech** e escolha *Enviar para > Pasta compactada* (Windows) ou *Compactar* (macOS). Em terminal: `zip -r ReTech.zip ReTech`.
4. Abra o `.zip` gerado, extraia em outra pasta e teste `index.html` uma última vez para garantir que os caminhos relativos continuam funcionando.
5. Envie o arquivo `ReTech.zip` pelo canal indicado pelo professor, com o nome da equipe e os RGMs dos integrantes.
