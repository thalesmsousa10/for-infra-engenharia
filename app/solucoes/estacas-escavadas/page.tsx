import {pageMetadata} from '@/lib/metadata';
import type {Metadata} from 'next';
import ServiceDetail from '@/components/ServiceDetail';
export const metadata:Metadata=pageMetadata("Estacas escavadas","Execução de estacas escavadas com planejamento de mobilização, atenção ao projeto e registros de campo. Converse com a For Infra sobre sua obra.","/solucoes/estacas-escavadas/");
export default function Page(){return <ServiceDetail service="escavadas"/>}
