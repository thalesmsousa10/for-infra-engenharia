import {pageMetadata} from '@/lib/metadata';
import type {Metadata} from 'next';
import ServiceDetail from '@/components/ServiceDetail';
export const metadata:Metadata=pageMetadata("Projetos de fundações","Dimensionamento e detalhamento de fundações com atenção ao solo, às cargas e às condições do canteiro. Conheça o trabalho da For Infra e solicite uma proposta.","/solucoes/projetos-de-fundacoes/");
export default function Page(){return <ServiceDetail service="projetos"/>}
