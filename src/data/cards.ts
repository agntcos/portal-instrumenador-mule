export interface RatingCard {
  name: string;
  initials: string;
  service: string;
  comment: string;
  stars: number;
}

export const INST_CARDS: RatingCard[] = [
  {
    name: 'Ricardo Almeida',
    initials: 'RA',
    service: 'Instrumentação em cirurgia ortopédica',
    comment: 'Profissional exemplar. Pontual, técnico e com excelente relacionamento com a equipe cirúrgica.',
    stars: 5
  },
  {
    name: 'Fernanda Lima',
    initials: 'FL',
    service: 'Instrumentação em neurocirurgia',
    comment: 'Atuação impecável em cirurgias complexas. Recomendo fortemente para centros de alta demanda.',
    stars: 5
  },
  {
    name: 'Carlos Souza',
    initials: 'CS',
    service: 'Instrumentação em cirurgia cardíaca',
    comment: 'Dominador das técnicas mais avançadas. Foi fundamental para o sucesso dos nossos procedimentos.',
    stars: 4
  },
  {
    name: 'Juliana Costa',
    initials: 'JC',
    service: 'Instrumentação em videolaparoscopia',
    comment: 'Rápida adaptação a novos equipamentos e excelente trabalho em equipe. Profissional de confiança.',
    stars: 5
  },
  {
    name: 'André Martins',
    initials: 'AM',
    service: 'Instrumentação em ortopedia e traumatologia',
    comment: 'Sempre disponível e com domínio técnico impressionante. Nosso hospital depende dele para plantões críticos.',
    stars: 4
  },
  {
    name: 'Patrícia Rocha',
    initials: 'PR',
    service: 'Instrumentação em cirurgia vascular',
    comment: 'Competência técnica aliada a uma postura profissional admirável. Nota 10 em todos os aspectos.',
    stars: 5
  }
];

export const EMP_CARDS: RatingCard[] = [
  {
    name: 'Smith & Nephew',
    initials: 'S&N',
    service: 'Contratação de plantão para cirurgia ortopédica',
    comment: 'Empresa organizada, com processos claros e pagamento sempre em dia. Ambiente respeitoso.',
    stars: 5
  },
  {
    name: 'Arthrex',
    initials: 'AR',
    service: 'Suporte instrumental para artroscopia',
    comment: 'Materiais de primeira qualidade e equipe de suporte excepcional. Parceria que funciona.',
    stars: 5
  },
  {
    name: 'Zimmer Biomet',
    initials: 'ZB',
    service: 'Instrumentação em artroplastia',
    comment: 'Empresa séria, com excelente comunicação e respeito ao profissional instrumentador.',
    stars: 4
  },
  {
    name: 'Medtronic',
    initials: 'MT',
    service: 'Cirurgias de alta complexidade',
    comment: 'Processos bem definidos e oportunidades constantes. Recomendo para quem busca estabilidade.',
    stars: 5
  },
  {
    name: 'Stryker',
    initials: 'ST',
    service: 'Instrumentação em cirurgia minimamente invasiva',
    comment: 'Equipamentos modernos e equipe que valoriza o instrumentador. Uma das melhores para se trabalhar.',
    stars: 4
  }
];
