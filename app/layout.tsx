import type {Metadata} from 'next';
import {Header,Footer,Reveals} from '@/components/Shell';
import './globals.css';
export const metadata:Metadata={metadataBase:new URL('https://for-infra-engenharia.yummy-song-3822.chatgpt.site'),title:{default:'For Infra Engenharia | A força de toda estrutura começa na base.',template:'%s | For Infra Engenharia'},description:'Sondagem SPT, projetos de fundações, estacas escavadas, estacas Strauss e consultoria pré e pós-obra. Converse com a For Infra sobre seu projeto.',robots:{index:false,follow:false},icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><head><link rel="preload" href="/fonts/cormorant-garamond-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/><link rel="preload" href="/fonts/instrument-sans-latin.woff2" as="font" type="font/woff2" crossOrigin="anonymous"/></head><body><Header/>{children}<Footer/><Reveals/></body></html>}
