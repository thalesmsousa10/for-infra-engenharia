import type {Metadata} from 'next';

export const siteUrl=(process.env.NEXT_PUBLIC_SITE_URL || 'https://thalesmsousa10.github.io/for-infra-engenharia').replace(/\/$/,'');
export const sharingImage={url:`${siteUrl}/assets/for-infra-compartilhamento-v1.png`,width:1200,height:630,alt:'For Infra Engenharia. Solidez desde a base. Investigação do solo, projetos e execução.'};

export function pageMetadata(title:string,description:string,path:string):Metadata{
 const url=`${siteUrl}/${path.replace(/^\//,'')}`;
 const sharingTitle=title.startsWith('For Infra Engenharia')?title:`${title} | For Infra Engenharia`;
 return {title,description,alternates:{canonical:url},openGraph:{type:'website',locale:'pt_BR',siteName:'For Infra Engenharia',title:sharingTitle,description,url,images:[sharingImage]},twitter:{card:'summary_large_image',title:sharingTitle,description,images:[sharingImage.url]}};
}
