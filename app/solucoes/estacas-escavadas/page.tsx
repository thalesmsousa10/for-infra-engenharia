import type {Metadata} from 'next';
import ServiceDetail from '@/components/ServiceDetail';
export const metadata:Metadata={title:'Estacas escavadas',description:'Execução de estacas escavadas com planejamento de mobilização, atenção ao projeto e registros de campo. Converse com a For Infra sobre sua obra.'};
export default function Page(){return <ServiceDetail service="escavadas"/>}
