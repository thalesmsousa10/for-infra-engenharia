# For Infra Engenharia

Site institucional da For Infra Engenharia, preparado para revisão de desenvolvimento e design. Desenvolvido com Next.js 15, React 19 e TypeScript, com exportação estática.

## Rodar o projeto

Requisitos: Node.js 22 e npm.

```sh
npm ci
npm run dev
```

Abra http://127.0.0.1:3000/. Se essa porta já estiver ocupada, use:

```sh
npm exec next dev -- --hostname 127.0.0.1 --port 3001
```

## Conferir a versão de produção

```sh
npm run build
```

O build valida TypeScript e gera o site em `out/`. Para conferir essa exportação, com Python 3 instalado:

```sh
python3 -m http.server 3001 --bind 127.0.0.1 --directory out
```

Abra http://127.0.0.1:3001/. O projeto exportado não usa `next start`. A hospedagem definitiva precisa servir diretórios com `index.html` e configurar sua página 404.

## Páginas

| Página | Rota |
|---|---|
| Início | `/` |
| A For Infra | `/sobre/` |
| Obras e aplicações | `/obras/` |
| Soluções | `/solucoes/` |
| Contato | `/contato/` |
| Consultoria | `/solucoes/consultoria/` |
| Projetos de fundações | `/solucoes/projetos-de-fundacoes/` |
| Sondagem SPT | `/solucoes/sondagem-spt/` |
| Estacas escavadas | `/solucoes/estacas-escavadas/` |
| Estacas Strauss | `/solucoes/estacas-strauss/` |

`/obras/modelo/` é uma demonstração de estrutura de caso, sem obra real cadastrada. Deve ser removida ou substituída antes do lançamento.

## Para quem vai revisar

Confira o [guia de revisão](docs/REVISAO.md) e a [auditoria técnica](docs/AUDITORIA.md). Sugestões podem ser registradas nas Issues do repositório, preferencialmente com página, largura da tela, captura e proposta de ajuste.

![Abertura do site em desktop](docs/review/inicio-desktop.png)

| Início no celular | Página Sobre |
|---|---|
| ![Início móvel](docs/review/inicio-mobile.png) | ![Página Sobre](docs/review/sobre-desktop.png) |

## Organização

- `app/`: páginas, layout, metadados e CSS compartilhado.
- `components/`: cabeçalho, rodapé, apresentação editorial, serviços e formulário.
- `lib/content.ts`: serviços, aplicações e WhatsApp comercial.
- `lib/service-pages.ts`: conteúdo das cinco páginas de serviços.
- `lib/images.ts`: variantes responsivas do acervo.
- `public/`: imagens, fontes locais e bibliotecas de animação.

O estilo aprovado combina petróleo e laranja com Cormorant Garamond e Instrument Sans. GSAP/ScrollTrigger são locais e o movimento respeita `prefers-reduced-motion`. As fotografias são conceituais, geradas por IA, e não representam obras ou integrantes reais da empresa. As fontes incluem suas licenças em `public/fonts/`.

## Formulário e lançamento

O formulário valida os dados, apresenta uma revisão e prepara uma mensagem para o WhatsApp comercial. O visitante conclui o envio no WhatsApp. Não há backend de contatos, envio automático, armazenamento de leads nem geração automática de orçamento.

A versão está em revisão: `noindex` permanece ativo e `metadataBase` usa endereço provisório. Domínio, indexação, metadados de compartilhamento, compressão e cache devem ser configurados antes do lançamento. O repositório não publica automaticamente um site.

Este repositório está preparado para avaliação e não inclui uma licença de código aberto. Dependências e fontes mantêm suas próprias licenças.
