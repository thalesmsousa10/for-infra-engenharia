import {fontFaces} from '@/lib/fonts';
import {pageMetadata,siteUrl} from '@/lib/metadata';
import {assetUrl} from '@/lib/paths';
import type {Metadata} from 'next';
import {Header,Footer,Reveals} from '@/components/Shell';
import './globals.css';
export const metadata:Metadata={...pageMetadata('For Infra Engenharia | Solidez desde a base.','Sondagem SPT, projetos de fundações, estacas escavadas, estacas Strauss e consultoria pré e pós-obra. Converse com a For Infra sobre seu projeto.','/'),metadataBase:new URL(siteUrl),title:{default:'For Infra Engenharia | A força de toda estrutura começa na base.',template:'%s | For Infra Engenharia'},robots:{index:false,follow:false},icons:{icon:assetUrl('/favicon.svg')}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><head><link rel="preload" href={assetUrl('/fonts/cormorant-garamond-latin.woff2')} as="font" type="font/woff2" crossOrigin="anonymous"/><link rel="preload" href={assetUrl('/fonts/instrument-sans-latin.woff2')} as="font" type="font/woff2" crossOrigin="anonymous"/><style id="for-infra-fonts">{fontFaces}</style></head><body><Header/>{children}<Footer/><Reveals/></body></html>}
