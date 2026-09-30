# Publicação e compartilhamento — 30/09/2026

Site publicado em https://thalesmsousa10.github.io/for-infra-engenharia/. O deploy validado corresponde ao commit `de3292b`.

## Modelo preservado fora do site

A antiga página `/obras/modelo/` foi movida integralmente para `modelos/obra/ModeloDeCaso.tsx`. O arquivo, seu componente e as imagens permanecem no repositório para uso futuro. A rota não integra o build de produção. Obras e aplicações permanece publicada.

## Desempenho no endereço público

Lighthouse 13.5.0, simulação móvel padrão, uma amostra antes e uma depois para cada página, na mesma configuração e máquina. Nenhum outro teste de navegador executado simultaneamente. Estas medições de laboratório não representam a média dos visitantes nem comprovam a causa de toda variação de rede.

| Métrica | Home: antes → depois | Contato: antes → depois |
|---|---|---|
| Desempenho | 96 → 98 | 100 → 100 |
| Acessibilidade automática | 100 → 100 | 100 → 100 |
| Boas práticas | 100 → 100 | 100 → 100 |
| Primeiro conteúdo visível (FCP) | 1,4 s → 1,1 s | 0,8 s → 0,8 s |
| Maior elemento visível (LCP) | 2,3 s → 2,5 s | 0,8 s → 1,8 s |
| Bloqueio total (TBT) | 0 ms → 0 ms | 0 ms → 0 ms |
| Deslocamento de layout (CLS) | 0,086 → 0 | 0 → 0 |
| Transferência observada | 398 KiB → 400 KiB | 92 KiB → 140 KiB |

A medição inicial identificou a troca das fontes como causa do deslocamento do texto da abertura. As mesmas famílias, pesos e subconjuntos foram preservados; suas declarações passaram para o HTML e os dois subconjuntos principais receberam preload. A confirmação não registrou deslocamento de layout. Não houve redução geral de bytes, e o LCP não melhorou nesta comparação; contato permaneceu com nota 100 apesar das diferenças de transferência e carregamento. Não atribuímos todas essas variações ao código com apenas uma amostra.

O cache é gerenciado pelo GitHub Pages. A auditoria ainda aponta oportunidades no cache, CSS e JavaScript transferidos; não justificam uma reformulação do visual aprovado nesta entrega. SEO segue limitado pelo `noindex` mantido deliberadamente até a decisão sobre indexação e domínio próprio. Canonical agora aponta para o endereço publicado de cada página.

Os resumos completos estão em `review/lancamento/antes-lighthouse-movel.json` e `review/lancamento/depois-lighthouse-movel.json`.

## Apresentação ao compartilhar

- Arte 1200 × 630 em `public/assets/for-infra-compartilhamento-v1.png`, com identidade aprovada e fotografia conceitual da home.
- Fonte da arte em `docs/assets/compartilhamento.html`.
- Dez páginas comerciais com Open Graph e Twitter Cards: título, descrição e URL próprios; imagem de marca compartilhada.
- Metadados entregues no HTML estático, disponíveis sem JavaScript.
- Nenhuma mensagem foi enviada a contatos. A apresentação final e o tempo de atualização das prévias dependem do serviço de compartilhamento e do cache dele.

Referência de implementação: [metadados do Next.js](https://nextjs.org/docs/app/api-reference/functions/generate-metadata).

## Confirmação da entrega

Build e TypeScript aprovados nas configurações local e GitHub Pages. Dez páginas comerciais verificadas em desktop (1440 px) e celular (375 px), primeiro na exportação local e depois no endereço público: imagens e fontes carregadas, sem transbordamento horizontal ou erros JavaScript. Navegação por links, seletores da home, filtro de aplicações e pré-seleção de Estacas Strauss no formulário conferidos.

Canonical, Open Graph e Twitter Cards conferidos em cada página. A arte respondeu HTTP 200 com tipo `image/png`; `/obras/modelo/` respondeu HTTP 404 no site público. Evidência resumida em `review/lancamento/verificacao-publica.json`. O deploy do GitHub Actions concluiu com sucesso.
