# Auditoria da For Infra Engenharia

29/09/2026. Auditoria da exportação de produção, avaliada em um servidor estático local. Identidade visual, tipografia, fotografias conceituais e posicionamento aprovados foram preservados.

## Resultado

O site tem as páginas comerciais previstas e um fluxo de orçamento funcional. A auditoria encontrou problemas concretos de acessibilidade, carregamento e ampliação de texto, corrigidos nesta entrega. A próxima etapa é preparar o lançamento; não falta uma nova página comercial essencial ao escopo aprovado.

Páginas verificadas: início, Sobre, Obras e aplicações, Soluções, Contato, Consultoria, Projetos de fundações, Sondagem SPT, Estacas escavadas e Estacas Strauss. O modelo de caso `/obras/modelo/` foi verificado como demonstração, sem alegações de obra executada.

## Correções realizadas

| Prioridade | Problema encontrado | Correção e evidência |
|---|---|---|
| P1 | Formulário apresentava um resumo de erros, sem identificar os campos inválidos e sem direcionar o foco | Mensagem junto a cada campo, `aria-invalid`, associação da descrição e foco no primeiro erro. Conferidos erros das três etapas, correção, revisão e retorno sem perda de dados |
| P1 | Contraste insuficiente em 11 textos de início/Sobre e no botão do WhatsApp durante interação | Cores de apoio mais legíveis e texto escuro no preenchimento laranja do hover. Varredura final sem violações automáticas nos estados avaliados |
| P1 | Textos duplicados causavam transbordamento; abertura móvel dependia de posições fixas | Quebra de títulos, largura mínima dos grids, ações flexíveis e abertura móvel em fluxo. Dez páginas comerciais sem rolagem horizontal em 375 px com texto a 200% |
| P2 | Link “Pular para o conteúdo” não transferia o foco ao conteúdo principal | `main` recebe foco programático. Teste por Tab e Enter aprovado |
| P2 | Ordem do submenu de Soluções afastava seus links do botão que o abre | Submenu inserido na ordem natural do teclado. Tab acessa suas opções; Escape fecha e devolve foco. Menu móvel adapta altura e rolagem |
| P2 | Áreas de toque de 40/41 px | Menu, seletores da abertura e perguntas frequentes ampliados para pelo menos 44 px de altura |
| P2 | Nome acessível do logo omitia “Engenharia” | Nome acessível deriva do texto visível completo; o título do link identifica a página inicial |
| P2 | Fontes dependiam de CSS externo com bloqueio de renderização | Mesmas famílias e pesos servidos localmente, com preload dos subconjuntos principais, `font-display: swap` e licenças incluídas |
| P2 | Fotografias grandes e três imagens de abertura carregadas antes da seleção | Compressão WebP, mantendo resolução; imagens alternativas da abertura entram ao selecionar. GSAP/ScrollTrigger carregam somente quando a animação de desktop é pertinente |
| P2 | Navegação móvel e formulário dependiam integralmente de JavaScript | Navegação alternativa e acesso direto ao WhatsApp quando JavaScript está desativado |
| P2 | Página de erro padrão não tinha destino do skip link nem continuidade visual | Página 404 com identidade da For Infra, links para início, soluções e contato |
| P2 | Auditoria npm apontava alertas transitivos no PostCSS | Override para PostCSS 8.5.28, mantendo Next.js 15.5.26. Compilação aprovada e `npm audit --omit=dev` sem alertas conhecidos na consulta final |

P1 indica impacto direto na conclusão de uma tarefa ou no acesso ao conteúdo; P2 indica melhoria relevante de uso ou manutenção. Estas prioridades não significam exploração confirmada de falhas de segurança.

Os três originais publicados passaram de 550,0 KiB para 301,5 KiB no total, redução de aproximadamente 45,2%. Versões de 640 e 960 px permitem entregar arquivos menores nas imagens internas em telas pequenas. A compressão não transforma as imagens em registros reais de obras.

A atualização do PostCSS foi orientada pelo registro npm e pelo [aviso de segurança publicado no GitHub](https://github.com/advisories/GHSA-fxqj-rqcc-2cmp). O projeto usa CSS próprio e exportação estática; o alerta dizia respeito à ferramenta de processamento, não comprova comprometimento do site.

## Verificações

- Compilação de produção, TypeScript e exportação estática aprovados.
- 11 rotas em 1440, 768, 375 e 320 px: 44 verificações, HTTP 200, um H1, descrição presente, sem imagens quebradas, transbordamento horizontal ou erros JavaScript.
- Axe-core em dez páginas comerciais, desktop e celular: 20 varreduras, sem violações nos critérios automatizados WCAG A/AA avaliados. A confirmação de imagens responsivas e 404 incluiu dez verificações adicionais e o teste experimental de nome acessível do logo.
- Seis estados adicionais sem violações automáticas: menus aberto desktop/celular, etapas 1/2 com erros e revisão com/sem ciência sobre os dados.
- Validação, mensagens associadas, foco e preservação dos dados ao voltar conferidos.
- Pré-seleção dos cinco serviços por URL, filtros de aplicações e seletor das três imagens funcionando.
- URL de WhatsApp conferida para `5537999376345`, com acentos e caracteres especiais preservados. Nenhuma mensagem enviada.
- Conteúdo continua disponível com movimento reduzido. Bibliotecas de animação não carregam nessa preferência.
- Navegação móvel alternativa e link direto ao WhatsApp disponíveis sem JavaScript.
- Textos duplicados nas dez páginas comerciais em 375 px: sem rolagem horizontal.
- Exportação: nenhum link interno ou âncora com destino ausente. Nenhuma menção pública à marca anterior ou a rebranding.
- Capturas desktop e celular inspecionadas: continuidade do visual aprovado, recortes fotográficos, formulário e menu.

Estes resultados não constituem certificação WCAG, teste em todos os aparelhos ou validação com usuários de tecnologias assistivas. A ampliação foi uma simulação de texto a 200%, complementando as larguras de viewport verificadas.

## Desempenho medido no celular

Lighthouse 13.5.0, exportação de produção, simulação móvel padrão. Uma amostra inicial e uma amostra final na mesma configuração; não é uma média de visitantes reais.

| Métrica | Início antes → depois | Contato antes → depois |
|---|---:|---:|
| Nota de desempenho | 64 → 79 | 76 → 84 |
| Nota de acessibilidade | 96 → 100 | 100 → 100 |
| Boas práticas | 100 → 100 | 100 → 100 |
| SEO | 63 → 63 | 60 → 60 |
| Primeiro conteúdo visível (FCP) | 4.5 s → 1.2 s | 3.1 s → 1.2 s |
| Maior elemento visível (LCP) | 7.9 s → 5.6 s | 5.0 s → 4.5 s |
| Bloqueio da interface (TBT) | 0 ms → 10 ms | 0 ms → 0 ms |
| Deslocamento de layout (CLS) | 0.013 → 0 | 0 → 0 |
| Transferência total observada | 1,301 KiB → 818 KiB | 601 KiB → 611 KiB |

A home reduziu a transferência observada em aproximadamente 37%. O contato ficou ligeiramente maior em bytes, apesar de abrir mais rápido, porque o carregamento passou a incluir fontes locais/preload e o formulário ganhou tratamento de erros. O ganho de tempo não deve ser confundido com redução de peso em todas as páginas.

O LCP simulado permanece em 5,6 s na home e 4,5 s no contato. Há espaço real para melhorar a entrega: configurar compressão/cache na hospedagem e reavaliar o CSS/JavaScript transferido. O teste local usa um servidor simples, sem essas otimizações. A nota de acessibilidade 100 cobre verificações automáticas, não certificação completa.

As notas SEO permanecem 63/60 porque a prévia bloqueia deliberadamente a indexação. Títulos, descrições, H1 e navegação foram conferidos; indexação, canonical e sitemap devem ser preparados para o domínio definitivo.

## Avaliação editorial e técnica

**Integridade da implementação: aprovada para a prévia.** O sistema visual mantém petróleo/laranja, tipografia expressiva, fotografia conceitual identificada e navegação entre investigação, projeto e execução. Não há claims comerciais fabricados nem controles sem destino no percurso testado. A preparação de publicação continua separada do acabamento local.

| Dimensão | Nota / 4 | Evidência ou limitação |
|---|---:|---|
| Acessibilidade | 3 | Varreduras e teclado aprovados; falta validação com leitores de tela e usuários reais |
| Desempenho | 2 | Carregamento inicial melhor; LCP móvel e entrega pela hospedagem ainda exigem atenção |
| Responsividade | 4 | Quatro larguras e ampliação de texto nas dez páginas comerciais aprovadas |
| Consistência visual | 3 | Identidade aprovada preservada; CSS contém regras herdadas e pode ser simplificado em manutenção |
| Integridade da implementação | 3 | Build, rotas, formulários, estados e dependências conferidos; configuração pública ainda pendente |
| **Total** | **15 / 20** | **Bom, com prioridade para desempenho e lançamento** |

Esta é uma avaliação qualitativa de auditoria, distinta das notas automáticas do Lighthouse e de uma certificação. Foram agrupados 12 problemas corrigidos: 3 P1 e 9 P2. Não foi encontrado um bloqueio P0 no percurso comercial avaliado.

Os avisos do detector Impeccable sobre Instrument Sans, bordas de estilos antigos e pequenas transições foram examinados contra o visual aprovado. Não justificaram trocar tipografia ou identidade. A repetição de overrides em `app/globals.css` permanece como dívida de manutenção; consolidá-los exige preservar a ordem de aplicação e os resultados visuais.

Arquivos principais das correções: `components/QuoteForm.tsx`, `components/Shell.tsx`, `components/EditorialHome.tsx`, `components/Institutional.tsx`, `components/ServiceDetail.tsx`, `lib/images.ts`, `app/globals.css`, `app/layout.tsx`, `app/not-found.tsx` e `package.json`.

## Conversão e conteúdo

As páginas explicam cada serviço e conduzem à conversa sobre a obra. O formulário preserva o caminho serviço → dados da obra → revisão → WhatsApp, com transparência sobre o envio manual. Não apresenta preço automático nem promete resultados sem avaliação técnica.

A autoridade da marca permanece baseada na experiência da equipe, conhecimento de campo, engenharia integrada e proximidade familiar. Não foram inventados ano de fundação, quantidade de obras, credenciais ou depoimentos. Fotos conceituais continuam identificadas; a página de aplicações não se apresenta como portfólio de casos reais.

Sem dados de tráfego, esta auditoria avalia o funcionamento do caminho comercial, não demonstra aumento de conversão ou vendas. Medir contatos originados pelo site e testar ajustes de copy será possível após o lançamento.

## Preparação de lançamento

1. Confirmar domínio e hospedagem. Substituir `metadataBase` provisório e configurar metadados de compartilhamento/canonical para o endereço final.
2. Habilitar indexação somente na versão pública aprovada e acrescentar sitemap/robots para as rotas comerciais. A prévia permanece deliberadamente `noindex`.
3. Remover `/obras/modelo/` da exportação pública ou substituir por um caso real aprovado. `noindex` não torna essa demonstração privada.
4. Configurar HTTPS, compressão Brotli/gzip, cache de arquivos estáticos e resposta 404 na hospedagem. O servidor local de teste não fornece essas condições de produção.
5. Conferir no domínio final a navegação móvel, os dados de contato, a abertura do WhatsApp e os textos técnicos dos serviços antes de divulgar.

Logo definitivo, retratos, história adicional da esposa e fotos/casos próprios podem ser incorporados quando disponíveis. Não impedem o acabamento atual. Notícias/blog ou novas páginas não são necessárias para concluir este escopo.

## Evidências

Este repositório inclui capturas selecionadas e resumos das medições iniciais/finais do Lighthouse em `docs/review/`. A verificação completa também abrangeu axe-core, navegação, formulário, links e dependências. O desempenho foi medido pelo Lighthouse em simulação móvel, com a mesma configuração inicial/final e sem outras verificações de navegador simultâneas.

Os resultados de laboratório dependem da máquina, do servidor e da rede simulada. Não equivalem a métricas de visitantes reais; cache, compressão e latência deverão ser reavaliados na hospedagem definitiva.
