import {pageMetadata} from '@/lib/metadata';
import type {Metadata} from 'next';
import ServiceDetail from '@/components/ServiceDetail';
export const metadata:Metadata=pageMetadata("Sondagem SPT","Investigação do solo com sondagem SPT para subsidiar o projeto de fundações. Conheça as etapas e solicite uma proposta à For Infra Engenharia.","/solucoes/sondagem-spt/");
export default function Page(){return <ServiceDetail service="sondagem"/>}
