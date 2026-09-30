import {pageMetadata} from '@/lib/metadata';
import type {Metadata} from 'next';
import ServiceDetail from '@/components/ServiceDetail';
export const metadata:Metadata=pageMetadata("Estacas Strauss","Execução de estacas Strauss com avaliação do subsolo, do projeto e das condições do canteiro. Conheça o serviço e converse com a For Infra Engenharia.","/solucoes/estacas-strauss/");
export default function Page(){return <ServiceDetail service="strauss"/>}
