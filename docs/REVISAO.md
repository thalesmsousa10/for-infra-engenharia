# Guia de revisão

Objetivo: colher opiniões de desenvolvimento e design sobre a versão atual do site institucional da For Infra, preservando a identidade aprovada e propondo melhorias concretas.

## Design e experiência

- Avaliar hierarquia, tipografia, ritmo de leitura, cores, recortes e continuidade entre início e páginas internas.
- Conferir celular e desktop, especialmente abertura, menu, páginas de serviços e formulário.
- Observar se cada serviço é compreensível e se o próximo passo para conversar sobre uma obra está claro.
- As imagens são conceituais. Logo definitivo, fotos próprias e casos documentados serão incorporados quando disponíveis.

## Desenvolvimento

- Rodar `npm ci` e `npm run build` para reproduzir a exportação.
- Examinar acessibilidade por teclado, mensagens de erro, foco, menus e movimento reduzido.
- Avaliar a organização dos componentes e o CSS, que contém regras herdadas de etapas anteriores.
- Conferir desempenho na versão exportada. O servidor Python local não simula a compressão/cache da hospedagem definitiva.
- Examinar pré-seleção dos cinco serviços e preservação de dados ao voltar no formulário. Basta conferir a URL gerada; não é necessário enviar uma mensagem.

## Como registrar feedback

Abra uma Issue com:

1. Página e trecho afetado.
2. Dispositivo/largura e passos para reproduzir, quando aplicável.
3. Captura ou exemplo concreto.
4. Impacto observado e sugestão.

Distinguir falha de funcionamento, problema de acessibilidade, melhoria visual e preferência pessoal ajuda a priorizar os ajustes.

## Resultado da última auditoria

11 páginas em quatro larguras, fluxo de orçamento e estados de menu/formulário foram verificados. As varreduras automáticas avaliadas não encontraram violações após as correções. Isso não equivale a certificação de acessibilidade ou teste em todos os aparelhos.

No Lighthouse móvel local, desempenho: início 64 → 79; contato 76 → 84. Acessibilidade automatizada: 100 nas duas páginas medidas. O LCP ainda pede atenção, sobretudo na entrega pela hospedagem. Os resumos das medições estão em `review/` e os detalhes em [AUDITORIA.md](AUDITORIA.md).
