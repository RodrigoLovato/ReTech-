# Escopo do projeto ReTech (conforme implementado)

Este documento descreve o que **está implementado** no site. O documento original "ESCOPO DO PROJETO", datado de 22/09/2026, é da disciplina e não foi alterado; confira-o em caso de dúvida.

## 1. Identificação

| Item | Informação |
|---|---|
| Projeto | ReTech: logística reversa de lixo eletrônico |
| Equipe | EcoTech |
| Disciplina / curso | Front-End, Superior de Informática, UNICID |
| Professor | Prof. Paulo Fratta |
| Integrantes | Pedro Henrique de Oliveira Medeiros (47656247), Davi Cabral Paixão (47752980), Lucas dos Santos Vicente Braga (47901624), Laura Moreti (47746301), Pietro Tavares (47658649), Rodrigo Seriaco Lovato (48117722) |

## 2. Contexto e justificativa

Equipamentos eletrônicos fora de uso costumam ser guardados ou descartados no lixo comum. A Lei nº 12.305/2010 e o Decreto nº 10.240/2020 preveem logística reversa e responsabilidade compartilhada para eletroeletrônicos. O Global E-waste Monitor 2024 registra, para o Brasil, 2.443 mil t geradas em 2022 e coleta formal de cerca de 3% (fontes em `fontes.md`). O site explica esse caminho de forma educativa. O ReTech **não é organização constituída**, não tem parcerias nem opera coleta.

## 3. Objetivos

**Geral:** analisar a importância da logística reversa de lixo eletrônico, destacando processos, benefícios ambientais e sociais e a contribuição para a sustentabilidade, a reciclagem e a destinação adequada.

**Específicos:** 10 páginas HTML interligadas; conteúdo educativo; formulário com validação HTML5; recursos de acessibilidade; validação com o W3C Validator.

## 4. Público-alvo

População em geral, com foco em estudantes, consumidores de eletrônicos, empresas, comerciantes, instituições de ensino e órgãos públicos.

## 5. Escopo funcional

- Barra de acessibilidade em todas as páginas: diminuir/aumentar texto e ler a página em voz alta.
- 10 páginas com menu único, link "Pular para o conteúdo" e menu responsivo.
- Início, Sobre (história, missão, visão, valores, objetivos, equipe), Projetos (propostas ReTech identificadas como não executadas e iniciativas de terceiros com fonte), Impacto (dados e tabelas com fonte), Acessibilidade, Galeria (imagem, `alt`, legenda e fonte), Notícias (com fonte e link original).
- Mídia: **vídeo**, **áudio** (player MP3 independente) e **iframe** (mapa OpenStreetMap).
- Contato: formulário de **demonstração** com validação HTML5 (`text`, `email`, `tel` com `pattern`, `date`, `number`, `select`, `textarea`, `checkbox`). Nada é enviado.
- Orçamento: 3 hospedagens, 3 domínios e comparação de sustentabilidade dos provedores de hospedagem.

## 6. Escopo não funcional

Responsividade (320 a 1440 px), acessibilidade (WCAG como referência, sem declarar conformidade), SEO básico (`title`, `meta description`, `lang="pt-BR"`), HTML/CSS validados, caminhos relativos, sem frameworks, sem backend, banco de dados ou login.

## 7. Mapa do site

`index` · `sobre` · `projetos` · `impacto` · `acessibilidade` · `galeria` · `midia` · `noticias` · `contato` · `orcamento_hospedagem` (todas interligadas pelo menu).

## 8. Conteúdo e identidade visual

Nome ReTech, logotipo em SVG, verde (`#2E7D32`) como cor principal, complementos em âmbar e azul, fonte Roboto com alternativas do sistema, ilustrações SVG originais.

## 9. Tecnologias

HTML5, CSS3 (`css/base.css`), JavaScript puro (`js/menu.js`, `js/contato.js`). Edição no Visual Studio Code; organização no GitHub; publicação prevista no Railway.

## 10. Cronograma e divisão de tarefas

Divisão por arquivos conforme `README.md`. **Datas de entrega de cada etapa: a equipe deve preencher** (não constam nos arquivos). Marcos comprováveis: escopo em 22/09/2026; pesquisa de fontes e preços em 14 e 15/10/2026; revisão técnica em 03/11/2026 (`diario_de_bordo.md`).

## 11. Riscos e restrições

- Preços e notícias mudam; valores com data de consulta.
- Mapa exige internet.
- Vídeo sem legendas (CC) até a equipe fornecer o roteiro da narração.
- Validação online do W3C e testes em dispositivos reais pendentes (`testes.md`).
- Sem backend: o formulário não envia dados.

## 12. Critérios de aceitação

10 páginas interligadas; menu funcional; sobre com história, missão, visão e valores; projetos e impacto com fontes e tabelas; galeria com legenda e fonte; mídia com vídeo, áudio e iframe; notícias com fonte; formulário com validação HTML5; 3 hospedagens e 3 domínios com sustentabilidade; responsivo e acessível; HTML/CSS validados; `/docs` atualizada. O estado de cada item está em `testes.md`.
