export const whatsapp = '5537999376345';
export const directContact = `https://wa.me/${whatsapp}?text=${encodeURIComponent('Olá, equipe For Infra! Gostaria de conversar sobre uma obra.')}`;
export const services = [
 {id:'sondagem-spt',number:'01',title:'Sondagem SPT',verb:'Investigar',category:'CONHECER O SOLO',intro:'Antes de projetar, entender o que sustenta.',description:'Investigação geotécnica para conhecer as camadas do terreno e reunir as informações que orientam o projeto de fundações.',items:['Caracterização das camadas do subsolo','Registro dos índices de resistência à penetração','Informações sobre o nível d’água observado','Relatório de sondagem para subsidiar o projeto'],stage:'Na fase de planejamento, antes do dimensionamento das fundações.'},
 {id:'projetos',number:'02',title:'Projetos de fundações',verb:'Dimensionar',category:'TRANSFORMAR DADOS EM PROJETO',intro:'A base certa para as exigências da sua obra.',description:'Dimensionamento que considera a investigação do solo, as cargas da estrutura e as condições de execução do canteiro.',items:['Análise das informações geotécnicas e estruturais','Definição da alternativa de fundação','Memorial de cálculo e detalhamento executivo','Compatibilização com as demais disciplinas'],stage:'Com os dados de sondagem e as informações da estrutura disponíveis.'},
 {id:'estacas-escavadas',number:'03',title:'Estacas escavadas',verb:'Executar',category:'LEVAR O PROJETO AO CAMPO',intro:'Planejamento e execução, na mesma direção.',description:'Execução de estacas escavadas conforme o projeto, com atenção aos acessos, à mobilização e às características de cada terreno.',items:['Planejamento da mobilização e dos acessos','Execução conforme as especificações do projeto','Registro das profundidades e da concretagem','Acompanhamento das condições encontradas em campo'],stage:'Após definição do projeto e avaliação da viabilidade executiva.'},
 {id:'estacas-strauss',number:'04',title:'Estacas Strauss',verb:'Executar',category:'ATENÇÃO ÀS CONDIÇÕES DO CANTEIRO',intro:'Cada terreno pede uma decisão técnica.',description:'Execução de estacas Strauss com avaliação das condições do subsolo, das cargas e das interferências do entorno. A indicação depende da análise técnica da obra.',items:['Avaliação da adequação do método ao terreno','Planejamento para as condições de acesso','Execução e controle conforme o projeto','Registro das condições e etapas executivas'],stage:'Quando a análise de projeto confirmar a adequação do método à obra.'},
 {id:'consultoria',number:'05',title:'Consultoria pré e pós-obra',verb:'Acompanhar',category:'APOIAR CADA DECISÃO',intro:'Clareza técnica antes, durante e depois.',description:'Apoio de engenharia para avaliar condições existentes, esclarecer dúvidas e orientar decisões relacionadas às fundações e ao comportamento da obra.',items:['Avaliação de documentos e condições existentes','Vistorias e registros técnicos conforme o escopo','Acompanhamento e análise de ocorrências','Pareceres e recomendações de engenharia'],stage:'No planejamento ou diante de uma necessidade técnica durante e após a obra.'}
];
export const applications = [
 {type:'Residencial',title:'Edificações residenciais',description:'Integração entre sondagem, projeto e execução para casas, condomínios e edifícios.',focus:'Cargas da estrutura, acessos ao terreno e interferências com a vizinhança.'},
 {type:'Industrial',title:'Galpões e estruturas industriais',description:'Planejamento de fundações compatível com a estrutura, as condições do solo e a sequência da obra.',focus:'Compatibilização de projetos, logística de equipamentos e programação de campo.'},
 {type:'Comercial',title:'Obras comerciais e urbanas',description:'Engenharia para canteiros com restrições de espaço e interfaces com construções existentes.',focus:'Condições de execução, avaliação do entorno e definição do escopo técnico.'}
];

// Route each service to its dedicated page when available.
export function serviceHref(id:string){
 if(id==='estacas-strauss')return '/solucoes/estacas-strauss/';
 if(id==='estacas-escavadas')return '/solucoes/estacas-escavadas/';
 if(id==='sondagem-spt')return '/solucoes/sondagem-spt/';
 if(id==='consultoria')return '/solucoes/consultoria/';
 if(id==='projetos')return '/solucoes/projetos-de-fundacoes/';
 return `/solucoes/#${id}`;
}
