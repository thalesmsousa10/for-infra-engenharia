// Arquivos de public/ precisam do mesmo prefixo das rotas em hospedagens por subdiretório.
export function assetUrl(path:string){return `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;}
