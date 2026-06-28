export interface CarouselSlide {
  bg: string;
  tagline: string;
  desc: string;
}

export interface CarouselConfig {
  duration: number;
  slides: CarouselSlide[];
}

export const CAROUSELS: Record<string, CarouselConfig> = {
  home: {
    duration: 10000,
    slides: [
      {
        bg: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=1920&q=80',
        tagline: 'Conectando profissionais e empresas cirúrgicas',
        desc: 'A plataforma que une instrumentadores qualificados às melhores empresas de OPME do Brasil, com agilidade e segurança.'
      },
      {
        bg: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1920&q=80',
        tagline: 'Instrumentadores em centro cirúrgico',
        desc: 'Profissionais altamente capacitados prontos para atuar em todos os tipos de procedimentos cirúrgicos.'
      },
      {
        bg: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920&q=80',
        tagline: 'Cursos e Mentorias de excelência',
        desc: 'Forme-se com as melhores instituições e acelere sua carreira na instrumentação cirúrgica.'
      }
    ]
  },
  inst: {
    duration: 10000,
    slides: [
      {
        bg: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1920&q=80',
        tagline: 'Fechando negócios no centro cirúrgico',
        desc: 'Case: Carlos, instrumentador ortopédico, foi contratado por um hospital de referência em São Paulo após 48h no portal.'
      },
      {
        bg: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1920&q=80',
        tagline: 'Atuação de excelência',
        desc: 'Case: Marina atende mais de 30 cirurgias por mês através de conexões feitas exclusivamente pelo portal.'
      },
      {
        bg: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=1920&q=80',
        tagline: 'Recebendo propostas em minutos',
        desc: 'Case: João recebeu 5 propostas de diferentes hospitais na primeira semana após completar seu perfil na plataforma.'
      }
    ]
  },
  emp: {
    duration: 10000,
    slides: [
      {
        bg: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1920&q=80',
        tagline: 'Smith & Nephew no Portal',
        desc: 'Case: A Smith & Nephew preencheu 40 vagas de instrumentação em 3 meses, reduzindo custos operacionais em 25%.'
      },
      {
        bg: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1920&q=80',
        tagline: 'Arthrex escala a operação',
        desc: 'Case: A Arthrex encontrou profissionais especializados para cobrir demandas de alta complexidade em todo o estado de SP.'
      },
      {
        bg: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?w=1920&q=80',
        tagline: 'Medtronic e Stryker confiam',
        desc: 'Case: Medtronic e Stryker utilizam o portal como canal oficial de recrutamento de instrumentadores em todo o Brasil.'
      }
    ]
  },
  cur: {
    duration: 5000,
    slides: [
      {
        bg: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80',
        tagline: 'Faculdade BP — Referência em instrumentação',
        desc: 'Case: Turmas inteiras da Faculdade BP são absorvidas pelo mercado antes da formatura através do portal.'
      },
      {
        bg: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1920&q=80',
        tagline: 'CBIC — Formação de alto nível',
        desc: 'Case: Alunos da CBIC conseguem o primeiro emprego em até 2 semanas após a certificação via conexões do portal.'
      },
      {
        bg: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80',
        tagline: 'SENAC — Prontos para o mercado',
        desc: 'Case: O SENAC utiliza o portal como ponte entre alunos formados e hospitais parceiros para estágios e contratações.'
      },
      {
        bg: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1920&q=80',
        tagline: 'São Camilo & Centro Paula Souza',
        desc: 'Case: Parceria entre o portal e centros de formação resulta em 98% de empregabilidade para instrumentadores qualificados.'
      }
    ]
  }
};
