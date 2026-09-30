const editorialPhotos=new Set(['/assets/canteiro.webp','/assets/solo.webp','/assets/projeto.webp']);
// Apenas o acervo com variantes geradas participa do srcSet.
export function photoSources(src:string){
 if(!editorialPhotos.has(src)&&!/^\/assets\/editorial\/[a-z0-9-]+\.webp$/.test(src))return undefined;
 const base=src.slice(0,-5);
 return `${base}-640.webp 640w, ${base}-960.webp 960w, ${src} 1536w`;
}
