# Acessibilidade: recursos implementados e testes realizados

O ReTech **não declara conformidade completa** com WCAG, eMAG ou qualquer outro padrão. Aplica boas práticas dessas referências e registra aqui o que foi realmente testado e o que continua pendente. Veja também `acessibilidade.html` (página pública) e `testes.md`.

## Recursos implementados

| Recurso | Onde | Como |
|---|---|---|
| Idioma da página | todas | `<html lang="pt-BR">` |
| Estrutura semântica | todas | `header`, `nav`, `main`, `footer`, um único `h1`, subtítulos em ordem, listas e tabelas reais |
| Link "Pular para o conteúdo" | todas | primeiro item focável; fica visível ao receber foco e leva a `<main id="conteudo">` |
| Menu | todas | mesmo menu com os 10 links; página atual com `aria-current="page"`; no celular, botão com `aria-expanded` e `aria-controls`, fecha com `Esc`. Sem JavaScript o menu continua visível |
| Foco visível | todas | contorno de 3 px com cor adequada ao fundo (azul sobre claro, branco sobre verde, âmbar no rodapé) |
| Teclado | todas | todos os controles alcançáveis por `Tab`; tabelas largas rolam por teclado (`tabindex="0"` na região rolável, com nome acessível) |
| Textos alternativos | `galeria`, `index` | imagens informativas descrevem o conteúdo; imagens decorativas (logotipo ao lado do nome, ilustrações dos cartões de projetos que repetem o texto) usam `alt=""` |
| Barra de acessibilidade | todas | botões **A−**, **A+** (texto de 80% a 200%, lembrado entre páginas via `localStorage`) e **Ler página** (síntese de voz do navegador, em português quando houver voz; botão vira "Parar leitura"). Grupo com `role="group"`, rótulos `aria-label`, `aria-pressed`, avisos em `role="status"`, foco âmbar, alvos de 44 px. Código em `js/acessibilidade.js`. A leitura depende das vozes do sistema; sem suporte, o botão fica desativado e informa |
| Contraste | todas | ver tabela abaixo |
| Tabelas | `impacto`, `orcamento_hospedagem`, `acessibilidade`, `sobre` | `caption`, `th scope="col"` e `th scope="row"` |
| Formulário | `contato` | `label` associado a cada campo, tipos apropriados (`email`, `tel` com `pattern`, `date`, `number` com `min`/`max`, `select`, `textarea`), `title` com exemplo de formato, `required`, `minlength`/`maxlength`, dicas ligadas por `aria-describedby`, mensagens nativas do navegador, área de status com `role="status"`; campo inválido ganha borda vermelha **e** a mensagem nativa (a cor não é o único sinal) |
| Vídeo | `midia` | `controls`, `poster`, MP4 e WebM, sem reprodução automática, `aria-label`, texto dos slides em `details`, link para baixar. **Sem legendas (CC)**: não existe arquivo `.vtt` correspondente ao vídeo narrado (pendência da equipe) |
| Áudio | `midia` | player `<audio controls>` independente (MP3), `preload="metadata"`, sem reprodução automática, `aria-label`, alternativa em texto e link para baixar. A transcrição literal da locução depende do roteiro da equipe |
| iframe | `midia` | atributo `title` descritivo; botões alternativos para abrir o mapa fora da página |
| Movimento reduzido | todas | `prefers-reduced-motion` desliga animações e rolagem suave |
| Modo de alto contraste | todas | regras para `forced-colors` mantêm o destaque da página atual e os botões |
| Texto | todas | corpo de 17 a 17,6 px, `rem`, linhas de largura confortável; o texto reflui em 320 px sem rolagem horizontal |
| Links | todas | textos descritivos ("Ler a publicação original no DPL News"); nenhum `href="#"` |

## Contrastes medidos (WCAG 2.x, fórmula de luminância relativa)

Calculados em 15/10/2026 a partir das cores definidas em `css/base.css`. Meta: **4,5:1** para texto e **3:1** para indicadores de foco e bordas de campos. Texto sobre os degradês dos cabeçalhos foi medido contra as duas extremidades (`#1b5e20` e `#2e7d32`).

| Combinação | Texto | Fundo | Contraste | Mínimo WCAG AA | Resultado |
|---|---|---|---|---|---|
| Texto principal sobre branco | `#1c2b20` | `#ffffff` | 14.83:1 | 4.5:1 | passa |
| Texto principal sobre verde-bruma (seção alternada) | `#1c2b20` | `#f3f8f3` | 13.80:1 | 4.5:1 | passa |
| Texto principal sobre verde-claro | `#1c2b20` | `#e8f5e9` | 13.19:1 | 4.5:1 | passa |
| Texto suave sobre branco | `#4a5a4e` | `#ffffff` | 7.33:1 | 4.5:1 | passa |
| Texto suave sobre verde-bruma | `#4a5a4e` | `#f3f8f3` | 6.82:1 | 4.5:1 | passa |
| Texto suave sobre verde-claro | `#4a5a4e` | `#e8f5e9` | 6.52:1 | 4.5:1 | passa |
| Título/link verde-escuro sobre branco | `#1b5e20` | `#ffffff` | 7.87:1 | 4.5:1 | passa |
| Link verde-escuro sobre verde-bruma | `#1b5e20` | `#f3f8f3` | 7.32:1 | 4.5:1 | passa |
| Link verde-escuro sobre verde-claro | `#1b5e20` | `#e8f5e9` | 7.00:1 | 4.5:1 | passa |
| Cabeçalho: branco sobre verde principal #2E7D32 | `#ffffff` | `#2e7d32` | 5.13:1 | 4.5:1 | passa |
| Menu ativo: branco sobre verde-escuro | `#ffffff` | `#1b5e20` | 7.87:1 | 4.5:1 | passa |
| Botão: branco sobre verde principal | `#ffffff` | `#2e7d32` | 5.13:1 | 4.5:1 | passa |
| Botão hover: branco sobre verde-escuro | `#ffffff` | `#1b5e20` | 7.87:1 | 4.5:1 | passa |
| Botão claro: verde-escuro sobre branco | `#1b5e20` | `#ffffff` | 7.87:1 | 4.5:1 | passa |
| Hero: branco sobre verde-escuro (início do degradê) | `#ffffff` | `#1b5e20` | 7.87:1 | 4.5:1 | passa |
| Hero: branco sobre verde principal (fim do degradê) | `#ffffff` | `#2e7d32` | 5.13:1 | 4.5:1 | passa |
| Hero/page-hero: #f4faf4 sobre verde principal | `#f4faf4` | `#2e7d32` | 4.84:1 | 4.5:1 | passa |
| Eyebrow no hero: #fff3c4 sobre verde principal | `#fff3c4` | `#2e7d32` | 4.61:1 | 4.5:1 | passa |
| Eyebrow: azul-tec sobre branco | `#0b4f6c` | `#ffffff` | 8.94:1 | 4.5:1 | passa |
| Eyebrow: azul-tec sobre verde-bruma | `#0b4f6c` | `#f3f8f3` | 8.31:1 | 4.5:1 | passa |
| Tag terceiros: azul-tec sobre azul-claro | `#0b4f6c` | `#e3f1f7` | 7.74:1 | 4.5:1 | passa |
| Tag aviso: #5c3f00 sobre âmbar-claro | `#5c3f00` | `#fff6dd` | 8.99:1 | 4.5:1 | passa |
| Aviso: #8a3b00 sobre alerta-fundo (.req) | `#8a3b00` | `#fff1e6` | 7.01:1 | 4.5:1 | passa |
| .req (obrigatório) sobre branco | `#8a3b00` | `#ffffff` | 7.76:1 | 4.5:1 | passa |
| Rodapé: #e4f1e5 sobre #14301a | `#e4f1e5` | `#14301a` | 12.27:1 | 4.5:1 | passa |
| Rodapé links: #cfe9d2 sobre #14301a | `#cfe9d2` | `#14301a` | 11.07:1 | 4.5:1 | passa |
| Skip-link: #1c1c1c sobre âmbar | `#1c1c1c` | `#f9a825` | 8.65:1 | 4.5:1 | passa |
| Foco (componente): azul-tec sobre branco | `#0b4f6c` | `#ffffff` | 8.94:1 | 3.0:1 | passa |
| Foco no cabeçalho: branco sobre verde principal | `#ffffff` | `#2e7d32` | 5.13:1 | 3.0:1 | passa |
| Foco no rodapé: âmbar sobre #14301a | `#f9a825` | `#14301a` | 7.26:1 | 3.0:1 | passa |
| Borda de campo #7d9a80 sobre branco (componente) | `#7d9a80` | `#ffffff` | 3.09:1 | 3.0:1 | passa |
| Cabeçalho de tabela: branco sobre verde | `#ffffff` | `#2e7d32` | 5.13:1 | 4.5:1 | passa |
| Texto sobre linha par da tabela (verde-bruma) | `#1c2b20` | `#f3f8f3` | 13.80:1 | 4.5:1 | passa |
| Cabeçalho de linha: texto sobre verde-claro | `#1c2b20` | `#e8f5e9` | 13.19:1 | 4.5:1 | passa |
| CTA: branco sobre verde principal | `#ffffff` | `#2e7d32` | 5.13:1 | 4.5:1 | passa |
| Erro de campo: texto sobre #fff6f5 | `#1c2b20` | `#fff6f5` | 13.95:1 | 4.5:1 | passa |


Resultado: **todos os 36 pares passam**. O verde principal do escopo (`#2E7D32`) com texto branco tem 5,13:1.

## Testes realizados (15/10/2026)

| Teste | Ferramenta / método | Resultado |
|---|---|---|
| Regras automáticas de acessibilidade (WCAG 2.0, 2.1 e 2.2 níveis A/AA + boas práticas, incluindo contraste de cor) | axe-core (versão do pacote npm instalada em 15/10/2026), executado no Chromium em 10 páginas × 3 larguras (320, 375 e 1440 px) | **0 violações** nas 30 execuções |
| Navegação por teclado | Playwright simulando `Tab`/`Enter`/`Esc` nas 10 páginas | Link de salto aparece em primeiro lugar e leva ao conteúdo; todos os controles recebem foco com contorno visível (exceto os controles internos de vídeo/áudio, desenhados pelo navegador); menu mobile abre com `Enter` e fecha com `Esc` |
| Formulário | Playwright | campos vazios, e-mail inválido, mensagem curta e caixa de ciência são bloqueados pela validação nativa; o foco vai ao primeiro campo inválido |
| Contraste | cálculo manual (tabela acima) | passa |
| Layout em 320 px | Playwright | sem rolagem horizontal da página em nenhuma das 10 páginas (dois problemas foram encontrados e corrigidos; veja `testes.md`) |

## Pendências (não testadas)

- **Leitor de tela** (NVDA, JAWS, VoiceOver ou TalkBack): não foi feito nenhum teste com tecnologia assistiva real. É a principal lacuna e impede qualquer declaração de conformidade.
- Ampliação de texto/zoom a 200% e 400% em navegador real.
- Teste com pessoas usuárias com deficiência.
- Avaliação manual completa dos critérios WCAG que ferramentas automáticas não cobrem (por exemplo, qualidade dos textos alternativos, ordem de leitura, clareza das mensagens).
- Verificação das mensagens de erro do formulário em navegador configurado em português (no teste, o navegador estava em inglês).
