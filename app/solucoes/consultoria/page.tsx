import {pageMetadata} from '@/lib/metadata';
import type {Metadata} from 'next';
import ServiceDetail from '@/components/ServiceDetail';
export const metadata:Metadata=pageMetadata("Consultoria pré e pós-obra","Consultoria da For Infra para avaliar documentos, condições existentes e ocorrências relacionadas às fundações. Conheça o escopo e converse sobre sua obra.","/solucoes/consultoria/");
export default function Page(){return <ServiceDetail service="consultoria"/>}
