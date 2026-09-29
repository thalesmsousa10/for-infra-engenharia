import type {Metadata} from 'next';
import ServiceDetail from '@/components/ServiceDetail';
export const metadata:Metadata={title:'Projetos de fundações',description:'Dimensionamento e detalhamento de fundações com atenção ao solo, às cargas e às condições do canteiro. Conheça o trabalho da For Infra e solicite uma proposta.'};
export default function Page(){return <ServiceDetail service="projetos"/>}
