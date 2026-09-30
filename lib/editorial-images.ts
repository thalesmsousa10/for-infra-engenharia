export type EditorialImage={src:string;alt:string;position:string};
const image=(name:string,alt:string,position='center'):EditorialImage=>({src:`/assets/editorial/${name}.webp`,alt,position});

export const institutionalImages={
 aboutOpening:image('sobre-trajetoria','Imagem conceitual de levantamento geotécnico em terreno com camadas de solo expostas'),
 aboutField:image('sobre-campo','Imagem conceitual de profissional conferindo a locação de fundações em campo'),
 solutions:image('solucoes-integradas','Imagem conceitual de desenhos de fundações, amostras de solo e instrumentos de engenharia'),
 works:image('obras-contextos','Imagem conceitual de vista aérea de um canteiro com bases de fundações em diferentes etapas')
};

export const applicationImages:Record<string,EditorialImage>={
 Residencial:image('aplicacao-residencial','Imagem conceitual de fundações de uma edificação residencial em lote urbano'),
 Comercial:image('aplicacao-comercial','Imagem conceitual de canteiro comercial entre edificações existentes'),
 Industrial:image('aplicacao-industrial','Imagem conceitual de bases de concreto e estrutura metálica de um galpão industrial')
};

export const serviceImages={
 consultoria:{cover:image('consultoria-vistoria','Imagem conceitual de vistoria técnica de uma estrutura de concreto existente'),prepare:image('consultoria-documentos','Imagem conceitual de avaliação de desenhos, relatórios e registros de engenharia')},
 projetos:{cover:image('projetos-fundacoes','Imagem conceitual de elaboração de um desenho executivo de fundações'),prepare:image('projetos-compatibilizacao','Imagem conceitual de compatibilização de informações de projeto entre profissionais')},
 sondagem:{cover:image('sondagem-spt','Imagem conceitual de equipamento de sondagem a percussão SPT em um terreno'),prepare:image('sondagem-amostras','Imagem conceitual de amostras de solo e amostrador bipartido organizados para registro')},
 escavadas:{cover:image('estacas-escavadas','Imagem conceitual de perfuratriz rotativa com trado para execução de estacas escavadas'),prepare:image('escavadas-armadura','Imagem conceitual de armação cilíndrica de aço preparada em canteiro')},
 strauss:{cover:image('estacas-strauss','Imagem conceitual de equipamento de estacas Strauss com tripé, guincho e tubos de revestimento'),prepare:image('strauss-acessos','Imagem conceitual de conferência do acesso a um canteiro urbano estreito')}
};

export const exampleCaseImages=[
 {...image('modelo-terreno','Imagem conceitual de terreno com eixos de locação para demonstrar o contexto de um caso'),caption:'Imagem conceitual — substituir por registro autorizado da obra.'},
 {...image('modelo-registros','Imagem conceitual de documentação técnica em campo para demonstrar a galeria'),caption:'Imagem conceitual — não representa um caso entregue.'}
];
