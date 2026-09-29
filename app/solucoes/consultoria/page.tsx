import type {Metadata} from 'next';
import ServiceDetail from '@/components/ServiceDetail';
export const metadata:Metadata={title:'Consultoria pré e pós-obra',description:'Consultoria da For Infra para avaliar documentos, condições existentes e ocorrências relacionadas às fundações. Conheça o escopo e converse sobre sua obra.'};
export default function Page(){return <ServiceDetail service="consultoria"/>}
