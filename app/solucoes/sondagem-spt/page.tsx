import type {Metadata} from 'next';
import ServiceDetail from '@/components/ServiceDetail';
export const metadata:Metadata={title:'Sondagem SPT',description:'Investigação do solo com sondagem SPT para subsidiar o projeto de fundações. Conheça as etapas e solicite uma proposta à For Infra Engenharia.'};
export default function Page(){return <ServiceDetail service="sondagem"/>}
