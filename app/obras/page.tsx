import {pageMetadata} from '@/lib/metadata';
import {institutionalImages} from '@/lib/editorial-images';
import type {Metadata} from 'next';
import Applications from '@/components/Applications';
import {CTA} from '@/components/Shell';
import {InstitutionalHero,EditorialPhoto} from '@/components/Institutional';
export const metadata:Metadata=pageMetadata("Obras e aplicações","Aplicações da engenharia de fundações em empreendimentos residenciais, comerciais e industriais.","/obras/");
export default function Works(){return <main tabIndex={-1} id="conteudo" className="institutional-page"><InstitutionalHero title={'Cada obra,\num novo contexto.'} text="Da edificação residencial ao canteiro industrial, o ponto de partida é conhecer o terreno e compreender as exigências do empreendimento." href="#aplicacoes" label="Explorar aplicações"/><EditorialPhoto {...institutionalImages.works}/><section id="aplicacoes" className="institutional-applications"><div className="institutional-section-title"><h2>Engenharia para<br/>diferentes desafios.</h2><p>Conheça contextos de aplicação dos nossos serviços. As imagens são conceituais e os cenários abaixo não representam obras entregues pela For Infra.</p></div><Applications/></section><section className="institutional-split portfolio-status"><h2>As referências certas<br/>para sua obra.</h2><div><p className="institutional-lead">O portfólio de obras documentadas está em organização.</p><p>Converse com a equipe sobre o tipo de empreendimento, o serviço necessário e as referências disponíveis para sua demanda.</p></div></section><CTA/></main>}
