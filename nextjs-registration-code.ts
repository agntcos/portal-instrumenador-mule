/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * PORTAL DO INSTRUMENTADOR — 13-STEP REGISTRATION FLOW
 * Stack: Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui + Supabase
 * ═══════════════════════════════════════════════════════════════════════════════
 */

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: types/index.ts
// ═══════════════════════════════════════════════════════════════════════════════

export interface Category {
  id: number;
  name: string;
  icon: string;
  desc: string;
  subs: string[];
}

export interface RegistrationData {
  phone: string;
  email: string;
  categoryId: number | null;
  subcategoryIds: number[];
  fullName: string;
  cep: string;
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  number: string;
  document: string;
  documentType: 'cpf' | 'cnpj';
  birthDate?: string;
  gender?: string;
  razaoSocial?: string;
  nomeFantasia?: string;
  cnae?: string;
  dataAbertura?: string;
  rgFrontCaptured: boolean;
  rgBackCaptured: boolean;
  verified: boolean;
}

export type StepId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: data/categories.ts
// ═══════════════════════════════════════════════════════════════════════════════

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: 'Cirurgia Geral',
    icon: 'Stethoscope',
    desc: 'Procedimentos abdominais, hernias, apendicectomia e tratamentos do trato gastrointestinal.',
    subs: [
      'Apendicectomia – Remoção do apêndice inflamado, geralmente por videolaparoscopia, em quadro de apendicite aguda.',
      'Colecistectomia – Retirada da vesícula biliar acometida por cálculos ou inflamação crônica.',
      'Hernioplastias (inguinal, umbilical, incisional, epigástrica) – Correção de hérnias da parede abdominal com uso de tela sintética.',
      'Gastrectomia – Ressecção parcial ou total do estômago, indicada para câncer gástrico ou úlceras complicadas.',
      'Colectomia – Ressecção de segmento do cólon, indicada para câncer, diverticulite ou doença inflamatória intestinal.',
      'Laparotomia exploradora – Abertura abdominal para diagnóstico e tratamento de urgência em trauma ou abdome agudo.',
      'Ileostomia e Colostomia – Criação de estoma na parede abdominal para derivação do trânsito intestinal.',
      'Tratamento de abdome agudo – Intervenção cirúrgica de emergência em condições como perfuração, oclusão ou hemorragia intra-abdominal.',
      'Enterectomia – Ressecção de segmento do intestino delgado por necrose, tumor ou obstrução.',
      'Drenagem de abscessos – Drenagem cirúrgica ou percutânea de coleções purulentas intra-abdominais.'
    ]
  },
  {
    id: 2,
    name: 'Ortopedia e Traumatologia',
    icon: 'Bone',
    desc: 'Fraturas, artroplastias, artroscopias e reconstruções do sistema musculoesquelético.',
    subs: [
      'Artroplastia total de joelho – Substituição da articulação do joelho por prótese em casos de artrose avançada.',
      'Artroplastia total de quadril – Substituição da articulação coxofemoral por prótese para tratamento de artrose ou fratura.',
      'Artroscopia de joelho – Procedimento minimamente invasivo para diagnóstico e tratamento de lesões intra-articulares.',
      'Artroscopia de ombro – Tratamento artroscópico de lesões do manguito rotador, luxações e instabilidades.',
      'Fixação de fraturas com placas e parafusos – Osteossíntese com material metálico para estabilização de fraturas.',
      'Fixador externo – Dispositivo externo para estabilização de fraturas complexas ou expostas.',
      'Osteossíntese de fêmur – Fixação cirúrgica de fratura do fêmur com hastes intramedulares ou placas.',
      'Osteossíntese de rádio – Fixação de fratura do osso rádio com placas e parafusos.',
      'Osteossíntese de tíbia – Estabilização cirúrgica de fratura da tíbia com haste ou placa.',
      'Principais procedimentos – Conjunto de cirurgias ortopédicas mais realizadas em centros de referência.',
      'Reconstrução do Ligamento Cruzado Anterior (LCA) – Reconstrução artroscópica do LCA com enxerto para restaurar estabilidade do joelho.'
    ]
  },
  {
    id: 3,
    name: 'Ginecologia',
    icon: 'Venus',
    desc: 'Cirurgias do sistema reprodutor feminino: histerectomia, miomectomia, endometriose.',
    subs: [
      'Cirurgia para endometriose – Ressecção de focos de endometriose por videolaparoscopia para alívio de dor e preservação da fertilidade.',
      'Colpoperineoplastia – Reconstrução da parede vaginal e do períneo em casos de relaxamento ou prolapso.',
      'Curetagem uterina – Raspagem do endométrio para diagnóstico ou tratamento de sangramentos e retenção de restos ovulares.',
      'Histerectomia – Remoção cirúrgica do útero por miomas, câncer, sangramento anormal ou endometriose grave.',
      'Histeroscopia cirúrgica – Procedimento endoscópico intrauterino para ressecção de pólipos, miomas submucosos e septos.',
      'Laqueadura tubária – Esterilização cirúrgica feminina por ligadura ou secção das trompas de Falópio.',
      'Miomectomia – Remoção de miomas uterinos preservando o útero para manutenção da fertilidade.',
      'Ooforectomia – Remoção de um ou ambos os ovários por cistos, tumores ou prevenção oncológica.',
      'Principais procedimentos – Cirurgias ginecológicas mais frequentes em centros especializados.',
      'Salpingectomia – Remoção de trompa de Falópio por gravidez ectópica, hidrossalpinge ou prevenção oncológica.',
      'Videolaparoscopia ginecológica – Técnica minimamente invasiva para diagnóstico e tratamento de patologias pélvicas.'
    ]
  },
  {
    id: 4,
    name: 'Obstetrícia',
    icon: 'Baby',
    desc: 'Partos, cesarianas, cerclagem e cirurgias relacionadas à gestação.',
    subs: [
      'Cerclagem cervical – Suturas no colo uterino para prevenir parto prematuro em casos de insuficiência istmocervical.',
      'Cesariana – Parto cirúrgico por incisão abdominal e uterina quando o parto vaginal apresenta riscos.',
      'Curetagem pós-aborto – Remoção de restos ovulares após aborto espontâneo ou incompleto.',
      'Histerectomia obstétrica – Remoção do útero em emergências obstétricas como ruptura uterina ou hemorragia incontrolável.',
      'Laqueadura durante cesariana – Esterilização cirúrgica realizada no momento da cesariana, a pedido da paciente.',
      'Parto operatório – Uso de forceps ou vácuo extrator para auxiliar o parto vaginal em indicações específicas.',
      'Principais procedimentos – Procedimentos obstétricos mais realizados em maternidades de referência.',
      'Revisão uterina – Curetagem manual do útero pós-parto para remover restos placentários e prevenir hemorragia.',
      'Tratamento cirúrgico de gravidez ectópica – Intervenção para remover gestação implantada fora do útero, geralmente na trompa.'
    ]
  },
  {
    id: 5,
    name: 'Urologia',
    icon: 'User',
    desc: 'Cirurgias do trato urinário e sistema reprodutor masculino: próstata, rins e bexiga.',
    subs: [
      'Principais procedimentos – Cirurgias urológicas mais frequentes em centros de referência.',
      'RTU de próstata (Ressecção Transuretral) – Remoção de tecido prostático por via endoscópica para tratamento de hiperplasia prostática benigna.',
      'Prostatectomia radical – Remoção total da próstata em casos de câncer localizado.',
      'Nefrectomia – Remoção total ou parcial do rim por tumor, traumatismo ou doença grave.',
      'Litotripsia ureteroscópica – Fragmentação de cálculos ureterais por laser ou ultrassom via endoscopia.',
      'Nefrolitotomia percutânea – Remoção de cálculos renais grandes por acesso direto através da pele.',
      'Vasectomia – Esterilização masculina por secção ou bloqueio dos ductos deferentes.',
      'Orquiectomia – Remoção de um ou ambos os testículos por câncer ou condições hormonais.',
      'Implante de prótese peniana – Implante de dispositivo para tratamento de disfunção erétil refratária.',
      'Cistoscopia cirúrgica – Procedimento endoscópico da bexiga para diagnóstico e tratamento de tumores ou estenoses.',
      'Ureterolitotomia – Abertura cirúrgica do ureter para remoção de cálculos de grande dimensão.'
    ]
  },
  {
    id: 6,
    name: 'Neurocirurgia',
    icon: 'Brain',
    desc: 'Cirurgias do sistema nervoso: craniotomias, coluna, aneurismas e tumores cerebrais.',
    subs: [
      'Principais procedimentos – Cirurgias neurológicas mais realizadas em centros especializados.',
      'Craniotomia para tumor cerebral – Abertura do crânio para ressecção de tumores intracranianos benignos ou malignos.',
      'Craniotomia por traumatismo – Intervenção cirúrgica para evacuação de hematomas em trauma craniano.',
      'Drenagem de hematoma intracraniano – Remoção cirúrgica de acúmulo de sangue dentro do crânio que comprime o cérebro.',
      'Derivação ventrículo-peritoneal (DVP) – Implante de shunt para drenagem de líquido cefalorraquidiano em hidrocefalia.',
      'Microdiscectomia lombar – Remoção microcirúrgica de hérnia de disco que comprime raízes nervosas na região lombar.',
      'Artrodese da coluna – Fusão de vértebras para tratamento de instabilidade, deformidades ou dor crônica.',
      'Laminectomia – Remoção da lâmina vertebral para descompressão do canal medular.',
      'Rizotomia – Interrupção de raízes nervosas para tratamento de dor crônica intratável.',
      'Cirurgia para aneurisma cerebral – Clippagem ou embolização de aneurismas intracranianos para prevenir ruptura.',
      'Estimulação cerebral profunda – Implante de eletrodos para tratamento de Parkinson, tremor essencial e distúrbios do movimento.'
    ]
  },
  {
    id: 7,
    name: 'Cirurgia Plástica',
    icon: 'Paintbrush',
    desc: 'Procedimentos estéticos e reparadores: lipoaspiração, rinoplastia, reconstruções.',
    subs: [
      'Principais procedimentos Estéticos:',
      'Mamoplastia de aumento – Implante de prótese de silicone para aumento do volume mamário.',
      'Mamoplastia redutora – Redução do volume das mamas com reposicionamento do complexo aréolo-papilar.',
      'Mastopexia – Elevação das mamas caídas sem alteração significativa de volume.',
      'Abdominoplastia – Remoção do excesso de pele e gordura abdominal com reforço da musculatura.',
      'Lipoaspiração – Remoção de gordura localizada por cânulas de aspiração para contorno corporal.',
      'Lipoescultura – Transferência de gordura aspirada para áreas com déficit de volume (glúteos, face, mamas).',
      'Rinoplastia – Modelagem cirúrgica do nariz para fins estéticos ou funcionais.',
      'Blefaroplastia – Correção do excesso de pele e bolsas de gordura nas pálpebras superiores e/ou inferiores.',
      'Otoplastia – Correção de orelhas proeminentes (orelhas de abano).',
      'Ritidoplastia (lifting facial) – Rejuvenescimento facial com remoção de excesso de pele e reposicionamento de tecidos.',
      'Principais procedimentos Reparadores:',
      'Reconstrução mamária – Reconstrução da mama após mastectomia por câncer.',
      'Enxertos de pele – Transplante de pele para cobrir feridas, queimaduras ou defeitos cirúrgicos.',
      'Retalhos cutâneos – Transferência de tecido com vascularização preservada para reconstrução de defeitos complexos.',
      'Correção de queimaduras – Tratamento cirúrgico de sequelas de queimaduras incluindo contracturas e cicatrizes hipertróficas.',
      'Reconstruções pós-trauma – Cirurgias reconstrutivas após acidentes ou traumatismos que causaram perda de tecidos.'
    ]
  },
  {
    id: 8,
    name: 'Cirurgia Cardiovascular',
    icon: 'Heart',
    desc: 'Cirurgias do coração e grandes vasos: ponte de safena, troca valvar, marcapasso.',
    subs: [
      'Cirurgia para cardiopatias congênitas – Correção de defeitos cardíacos presentes desde o nascimento.',
      'Correção de aneurisma de aorta – Substituição de segmento dilatado da aorta por enxerto sintético.',
      'Embolectomia arterial – Remoção de êmbolos que obstruem artérias periféricas ou viscerais.',
      'Endarterectomia carotídea – Remoção de placas de ateroma da artéria carótida para prevenir AVC.',
      'Endoprótese de aorta – Implante de stent-graft para tratamento de aneurisma de aorta por via endovascular.',
      'Implante de CDI – Implante de cardioversor-desfibrilador para prevenção de morte súbita.',
      'Implante de marcapasso – Implante de dispositivo eletrônico para controle de arritmias cardíacas.',
      'Pericardiectomia – Remoção parcial ou total do pericárdio em casos de pericardite constritiva.',
      'Principais procedimentos:',
      'Revascularização do miocárdio (Ponte de Safena) – Cirurgia de bypass coronariano para restaurar fluxo sanguíneo ao coração.',
      'Troca valvar – Substituição de válvula cardíaca doente por prótese mecânica ou biológica.'
    ]
  },
  {
    id: 9,
    name: 'Cirurgia Vascular',
    icon: 'Activity',
    desc: 'Cirurgias dos vasos sanguíneos: varizes, fístulas, angioplastias e amputações.',
    subs: [
      'Amputações – Remoção de membro ou segmento por isquemia grave, infecção ou necrose irreversível.',
      'Angioplastia periférica – Dilatação de artérias obstruídas por balão e/ou stent para restaurar fluxo sanguíneo.',
      'Correção de aneurismas periféricos – Reparo cirúrgico de dilatações anormais em artérias periféricas.',
      'Embolectomia – Remoção cirúrgica de êmbolos que obstruem artérias ou veias.',
      'Endarterectomia – Remoção de placas ateroscleróticas do interior de artérias.',
      'Fístula arteriovenosa para hemodiálise – Criação de conexão entre artéria e veia para acesso vascular em pacientes dialíticos.',
      'Principais procedimentos:',
      'Safenectomia – Remoção da veia safena varicosa por técnica de stripping ou flebectomia.',
      'Trombectomia – Remoção cirúrgica de trombos de veias ou artérias.',
      'Varizes por laser – Tratamento endovenoso de varizes com energia laser para termocoagulação.',
      'Varizes por radiofrequência – Ablação de veias varicosas por cateter de radiofrequência minimamente invasivo.'
    ]
  },
  {
    id: 10,
    name: 'Otorrinolaringologia (ORL)',
    icon: 'Ear',
    desc: 'Cirurgias de ouvido, nariz e garganta: septoplastia, amigdalectomia, implante coclear.',
    subs: [
      'Adenoidectomia – Remoção das adenoides (carne esponjosa) para tratamento de obstrução nasal e infecções recorrentes.',
      'Amigdalectomia – Remoção cirúrgica das amígdalas em casos de amigdalite de repetição ou hipertrofia.',
      'Implante coclear – Implante de dispositivo eletrônico para restauração da audição em perda auditiva severa.',
      'Laringoscopia cirúrgica – Procedimento endoscópico da laringe para ressecção de tumores ou tratamento de lesões.',
      'Mastoidectomia – Remoção de tecido infectado da mastoide em casos de otite média crônica ou colesteatoma.',
      'Principais procedimentos:',
      'Septoplastia – Correção do desvio de septo nasal para melhorar a respiração.',
      'Sinusectomia endoscópica – Cirurgia endoscópica dos seios da face para tratamento de sinusite crônica.',
      'Timpanoplastia – Reconstrução do tímpano perfurado para restauração da audição.',
      'Traqueostomia – Criação de abertura na traqueia para passagem de ar em casos de obstrução das vias aéreas.',
      'Turbinectomia – Redução ou remoção dos cornetos nasais para melhora da respiração.'
    ]
  },
  {
    id: 11,
    name: 'Cirurgia Torácica',
    icon: 'Wind',
    desc: 'Cirurgias do tórax: pulmão, pleura e mediastino.',
    subs: [
      'Lobectomia pulmonar – Remoção de um lobo pulmonar por tumor, infecção grave ou malformação.',
      'Pleurodese – Procedimento para aderir as pleuras e prevenir pneumotórax recorrente ou derrame pleural.',
      'Pneumonectomia – Remoção total do pulmão por tumor extenso ou destruição pulmonar irreversível.',
      'Toracotomia – Abertura cirúrgica do tórax para acesso a órgãos intratorácicos.',
      'Videotoracoscopia (VATS) – Técnica minimamente invasiva para biópsias, simpatectomia e ressecções pulmonares.'
    ]
  },
  {
    id: 12,
    name: 'Cirurgia Pediátrica',
    icon: 'Baby',
    desc: 'Cirurgias em crianças: hérnias, criptorquidia, piloromiotomia.',
    subs: [
      'Apendicectomia pediátrica – Remoção do apêndice em crianças com apendicite aguda.',
      'Criptorquidia – Correção cirúrgica de testículo não descendido (undescended testis) para preservar fertilidade.',
      'Hérnia inguinal – Correção de hérnia na região inguinal, frequente em recém-nascidos e crianças pequenas.',
      'Hipospádia – Correção da posição anormal da uretra no pênis por cirurgia plástica urológica.',
      'Piloromiotomia – Incisão do músculo piloro para tratamento de estenose hipertrófica do piloro em lactentes.'
    ]
  },
  {
    id: 13,
    name: 'Cirurgia Bucomaxilofacial',
    icon: 'Smile',
    desc: 'Cirurgias da face, boca e maxilares: ortognática, fraturas e implantes.',
    subs: [
      'Cirurgia ortognática – Correção das posições dos ossos da face (maxila e mandíbula) para melhorar função e estética facial.',
      'Extração de terceiros molares inclusos – Remoção cirúrgica dos dentes do siso que não nasceram corretamente.',
      'Fraturas de mandíbula – Redução e fixação cirúrgica de fraturas da mandíbula com placas e parafusos.',
      'Fraturas de zigoma – Tratamento cirúrgico de fraturas do osso zigomático (maçã do rosto).',
      'Implantes zigomáticos – Implantação de próteses anchorage no zigoma para reabilitação protética em maxilas atrofiadas.',
      'Osteotomias – Cortes ósseos planejados para reposicionamento de segmentos da face.'
    ]
  },
  {
    id: 14,
    name: 'Oftalmologia',
    icon: 'Eye',
    desc: 'Cirurgias dos olhos: catarata, refrativa, transplante de córnea.',
    subs: [
      'Cirurgia refrativa – Correção de miopia, hipermetropia e astigmatismo com laser (LASIK/PRK).',
      'Facoemulsificação (catarata) – Remoção do cristalino opaco por ultrassom e implante de lente intraocular.',
      'Pterígio – Remoção de membrana fibrovascular que avança sobre a córnea, com enxerto conjuntival.',
      'Trabeculectomia – Cirurgia para glaucoma que cria nova via de drenagem do humor aquoso.',
      'Transplante de córnea – Substituição da córnea doente por tecido doador para restaurar transparência.',
      'Vitrectomia – Remoção do humor vítreo para tratamento de descolamento de retina, hemorragias ou membranas epirretinianas.'
    ]
  },
  {
    id: 15,
    name: 'Cirurgia Oncológica',
    icon: 'Ribbon',
    desc: 'Cirurgias para tratamento do câncer: mastectomia, gastrectomia, hepatectomia.',
    subs: [
      'Colectomia oncológica – Ressecção de segmento do cólon com margens amplas e linfadenectomia para tratamento de câncer colorretal.',
      'Esofagectomia – Remoção de parte ou totalidade do esôfago por câncer esofágico.',
      'Gastrectomia oncológica – Ressecção parcial ou total do estômago para tratamento de câncer gástrico com margens de segurança.',
      'Hepatectomia – Ressecção de segmento ou lobo hepático por tumor primário ou metastático.',
      'Mastectomia – Remoção total da mama para tratamento ou prevenção do câncer de mama.',
      'Pancreatectomia – Ressecção parcial do pâncreas por tumor, incluindo a duodenopancreatectomia (Whipple).',
      'Tireoidectomia oncológica – Remoção total ou parcial da tireoide por câncer tireoidiano.'
    ]
  },
  {
    id: 16,
    name: 'Cirurgia Bariátrica',
    icon: 'Scale',
    desc: 'Cirurgias para obesidade mórbida: sleeve, bypass gástrico, revisão.',
    subs: [
      'Bypass gástrico (Y de Roux) – Criação de pequeno reservatório gástrico com derivação do intestino para redução de absorção.',
      'Conversão de técnica – Mudança de procedimento bariátrico anterior para outro por insuficiência de perda de peso ou complicações.',
      'Correção de hérnias pós-bariátricas – Tratamento cirúrgico de hérnias internas ou da parede abdominal após bariátrica.',
      'Gastroplastia videolaparoscópica – Redução do volume gástrico por técnica minimamente invasiva com grampos.',
      'Revisão bariátrica – Reintervenção cirúrgica por reganho de peso, complicações ou falha do procedimento primário.',
      'Sleeve gástrico – Remoção de aproximadamente 80% do estômago, reduzindo volume e produção de grelina (hormônio da fome).'
    ]
  },
  {
    id: 17,
    name: 'Cirurgia da Cabeça e Pescoço',
    icon: 'UserCheck',
    desc: 'Cirurgias de tireoide, laringe, parótida e esvaziamento cervical.',
    subs: [
      'Biópsias cervicais – Coleta de tecido para análise histopatológica em linfonodos ou massas do pescoço.',
      'Esvaziamento cervical – Remoção de linfonodos do pescoço em casos de metástase de câncer de cabeça e pescoço.',
      'Glossectomia – Ressecção parcial ou total da língua por tumor ou lesão grave.',
      'Laringectomia – Remoção total ou parcial da laringe por câncer laríngeo avançado.',
      'Paratireoidectomia – Remoção de glândulas paratireoides hiperfuncionantes (adenomas).',
      'Parotidectomia – Remoção parcial ou total da glândula parótida por tumor benigno ou maligno.',
      'Ressecção de tumores cervicais – Cirurgia para remoção de neoplasias da região cervical.',
      'Tireoidectomia parcial – Remoção de um lobo da tireoide por nódulo suspeito ou adenoma.',
      'Tireoidectomia total – Remoção completa da glândula tireoide por câncer, bócio multinodular ou doença de Graves.',
      'Traqueostomia – Abertura cirúrgica da traqueia para manutenção de via aérea em obstruções ou necessidade de ventilação prolongada.'
    ]
  },
  {
    id: 18,
    name: 'Cirurgia da Mão',
    icon: 'Hand',
    desc: 'Cirurgias da mão, punho, pé e tornozelo: túnel do carpo, fraturas, reconstruções.',
    subs: [
      'Artrodese – Fusão de articulação para eliminação de dor por artrose ou instabilidade.',
      'Artrodese do tornozelo – Fusão da articulação do tornozelo para tratamento de artrose grave ou sequelas de trauma.',
      'Correção de dedos em garra – Reconstrução tendínea para correção de deformidade em garra dos dedos.',
      'Dedo em gatilho – Liberação da polia tendínea para tratamento de dedo em gatilho (trigger finger).',
      'Dupuytren – Fasciectomia para correção de contratura palmar por doença de Dupuytren.',
      'Fascite plantar – Liberação cirúrgica ou percutânea da fáscia plantar para tratamento de fascite crônica.',
      'Fraturas do calcâneo – Redução e fixação cirúrgica de fratura do osso do calcanhar.',
      'Fraturas maleolares – Fixação cirúrgica de fraturas dos maléolos (tornozelo) com placas e parafusos.',
      'Hallux valgus (joanete) – Correção cirúrgica do desvio do hálux com osteotomia e realinhamento tendíneo.',
      'Osteossíntese da mão – Fixação de fraturas dos ossos da mão com microplacas, parafusos ou fios de Kirschner.',
      'Osteotomias – Cortes ósseos para correção de deformidades na mão, punho, pé ou tornozelo.',
      'Reconstrução ligamentar – Reparo de ligamentos rompidos na mão ou punho para restaurar estabilidade.',
      'Reconstrução tendínea – Reparo ou enxerto de tendões seccionados na mão para restaurar função.',
      'Reimplante de dedos – Microcirurgia para reimplante de dedos ou membros amputados.',
      'Síndrome do túnel do carpo – Liberação cirúrgica do nervo mediano comprimido no punho.',
      'Tenorrafias – Sutura de tendões flexores ou extensores seccionados na mão e dedos.',
      'Transferências tendíneas – Redirecionamento de tendões para restaurar função perdida por lesão nervosa ou tendínea.'
    ]
  },
  {
    id: 19,
    name: 'Cirurgia da Coluna',
    icon: 'Columns',
    desc: 'Cirurgias da coluna vertebral: artrodese, discectomia, correção de escoliose.',
    subs: [
      'Artrodese cervical – Fusão de vértebras cervicais para tratamento de instabilidade, hérnia de disco ou deformidade.',
      'Artrodese lombar – Fusão de vértebras lombares para tratamento de degeneração discal, espondilolistese ou dor crônica.',
      'Cifoplastia – Inflação de balão dentro de vértebra colapsada seguida de injeção de cimento para restaurar altura vertebral.',
      'Correção de deformidades – Cirurgia para correção de cifose, escoliose grave ou desalinhamento da coluna.',
      'Escoliose – Correção cirúrgica da curvatura lateral anormal da coluna com instrumentação e fusão.',
      'Fixação pedicular – Implante de parafusos pediculares para estabilização vertebral durante cirurgias de coluna.',
      'Laminectomia – Remoção da lâmina vertebral para descompressão do canal medular ou raízes nervosas.',
      'Microdiscectomia – Remoção microcirúrgica de hérnia de disco que comprime raiz nervosa, com abordagem minimamente invasiva.',
      'Vertebroplastia – Injeção de cimento ósseo em vértebra fraturada por osteoporose para alívio da dor e estabilização.'
    ]
  },
  {
    id: 20,
    name: 'Cirurgia Robótica',
    icon: 'Bot',
    desc: 'Procedimentos cirúrgicos assistidos por robô da Vinci e plataformas similares.',
    subs: [
      'Bariátrica – Cirurgia bariátrica assistida por robô com maior precisão e ergonomia.',
      'Cabeça e Pescoço – Dissecções e ressecções robóticas na região cervical com acesso minimamente invasivo.',
      'Cirurgia Geral – Procedimentos gerais como colecistectomia e hernioplastias com assistência robótica.',
      'Colectomia robótica – Ressecção de segmento do cólon com plataforma robótica para maior precisão.',
      'Colorretal – Cirurgias do reto e cólon assistidas por robô com preservação nervosa.',
      'Gastrectomia robótica – Ressecção parcial ou total do estômago com plataforma robótica para oncologia.',
      'Ginecologia – Histerectomia e miomectomia robóticas com recuperação mais rápida.',
      'Hernioplastias robóticas – Correção de hérnias complexas com assistência robótica para melhor visualização.',
      'Histerectomia robótica – Remoção do útero por plataforma robótica com menor sangramento e dor pós-operatória.',
      'Nefrectomia robótica – Remoção do rim ou parte dele com robô para oncologia ou doenças benignas.',
      'Prostatectomia robótica – Remoção da próstata por câncer com plataforma robótica (padrão-ouro atual).',
      'Torácica – Lobectomias e procedimentos torácicos com assistência robótica.',
      'Urologia – Procedimentos urológicos complexos assistidos por robô com reconstruções precisas.'
    ]
  }
];

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: lib/supabase.ts
// ═══════════════════════════════════════════════════════════════════════════════

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: lib/utils.ts
// ═══════════════════════════════════════════════════════════════════════════════

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

export function formatCEP(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

export function formatCPF(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  return digits
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

export function formatCNPJ(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 14);
  return digits
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2');
}

export function isCPF(doc: string): boolean {
  return doc.replace(/\D/g, '').length <= 11;
}

export function isCNPJ(doc: string): boolean {
  return doc.replace(/\D/g, '').length > 11;
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: hooks/useRegistration.ts
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { create } from 'zustand';
import { type RegistrationData, type StepId } from '@/types';

interface RegistrationStore {
  currentStep: StepId;
  data: RegistrationData;
  setStep: (step: StepId) => void;
  updateData: (data: Partial<RegistrationData>) => void;
  reset: () => void;
}

const initialData: RegistrationData = {
  phone: '',
  email: '',
  categoryId: null,
  subcategoryIds: [],
  fullName: '',
  cep: '',
  street: '',
  neighborhood: '',
  city: '',
  state: '',
  number: '',
  document: '',
  documentType: 'cpf',
  rgFrontCaptured: false,
  rgBackCaptured: false,
  verified: false,
};

export const useRegistration = create<RegistrationStore>((set) => ({
  currentStep: 1,
  data: initialData,
  setStep: (step) => set({ currentStep: step }),
  updateData: (newData) => set((state) => ({ data: { ...state.data, ...newData } })),
  reset: () => set({ currentStep: 1, data: initialData }),
}));

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/ui/button.tsx (shadcn/ui)
// ═══════════════════════════════════════════════════════════════════════════════

import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0EA5E9] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#0F766E] text-white hover:bg-[#0D655E]',
        outline: 'border border-[#0F766E] text-[#0F766E] hover:bg-[#0F766E] hover:text-white',
        ghost: 'hover:bg-gray-100',
        link: 'text-[#0EA5E9] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-11 px-6 py-2',
        sm: 'h-9 px-4',
        lg: 'h-12 px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/ui/input.tsx (shadcn/ui)
// ═══════════════════════════════════════════════════════════════════════════════

import * as React from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-11 w-full border border-gray-300 bg-gray-50 px-4 py-2 text-sm placeholder:text-gray-400 focus:border-[#0F766E] focus:outline-none focus:ring-2 focus:ring-[#0F766E]/20 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/registration/ProgressBar.tsx
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { useRegistration } from '@/hooks/useRegistration';

export function ProgressBar() {
  const { currentStep } = useRegistration();
  const progress = ((currentStep - 1) / 12) * 100;

  return (
    <div className="fixed top-16 left-0 right-0 h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-gradient-to-r from-[#0F766E] to-[#0EA5E9] transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/registration/StepWrapper.tsx
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { useRegistration } from '@/hooks/useRegistration';
import { ArrowLeft } from 'lucide-react';

interface StepWrapperProps {
  title: string;
  description?: string;
  children: ReactNode;
  showBack?: boolean;
}

export function StepWrapper({ title, description, children, showBack = true }: StepWrapperProps) {
  const { currentStep, setStep } = useRegistration();

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
      {showBack && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setStep((currentStep - 1) as any)}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar
        </Button>
      )}
      <h1 className="font-display text-2xl font-bold mb-2">{title}</h1>
      {description && <p className="text-gray-600 mb-6">{description}</p>}
      {children}
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/registration/steps/Step1Welcome.tsx
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { Button } from '@/components/ui/button';
import { useRegistration } from '@/hooks/useRegistration';
import { HandSparkles } from 'lucide-react';

export function Step1Welcome() {
  const { setStep } = useRegistration();

  return (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-24 h-24 bg-[#0F766E]/10 mb-6">
        <HandSparkles className="h-12 w-12 text-[#0F766E]" />
      </div>
      <h1 className="font-display text-3xl font-bold mb-4">Cadastre seus serviços</h1>
      <p className="text-gray-600 mb-8 max-w-md mx-auto">
        Receba pedidos de graça, e invista apenas nos que gostar. Conecte-se com as melhores empresas e hospitais do Brasil.
      </p>
      <Button size="lg" onClick={() => setStep(2)} className="min-w-[200px]">
        Vamos começar
      </Button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/registration/steps/Step2Phone.tsx
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StepWrapper } from '../StepWrapper';
import { useRegistration } from '@/hooks/useRegistration';
import { formatPhone } from '@/lib/utils';
import { Phone, HelpCircle } from 'lucide-react';

export function Step2Phone() {
  const { data, updateData, setStep } = useRegistration();
  const [phone, setPhone] = useState(data.phone);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
    updateData({ phone: formatted });
  };

  return (
    <StepWrapper
      title="Qual seu número de celular?"
      description="Seu número é utilizado para entrar no aplicativo, dessa forma você não precisa de senha."
    >
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Celular</label>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-gray-400" />
            <Input
              type="tel"
              placeholder="(11) 90000-0000"
              value={phone}
              onChange={handleChange}
              maxLength={15}
            />
          </div>
          <Button variant="link" className="text-xs mt-2 p-0 h-auto">
            Recuperar Acesso (Clique aqui)
          </Button>
        </div>
        <div className="flex items-center gap-3 pt-4">
          <Button variant="outline" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button size="lg" className="flex-1" onClick={() => setStep(3)} disabled={!phone}>
            Continuar
          </Button>
        </div>
      </div>
    </StepWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/registration/steps/Step3Email.tsx
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StepWrapper } from '../StepWrapper';
import { useRegistration } from '@/hooks/useRegistration';
import { Mail, HelpCircle } from 'lucide-react';

export function Step3Email() {
  const { data, updateData, setStep } = useRegistration();
  const [email, setEmail] = useState(data.email);

  return (
    <StepWrapper
      title="Qual seu melhor e-mail?"
      description="Seu e-mail é importante para termos um canal de comunicação com você, quando necessário."
    >
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">E-mail</label>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-gray-400" />
            <Input
              type="email"
              placeholder="Insira seu e-mail"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                updateData({ email: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="flex items-center gap-3 pt-4">
          <Button variant="outline" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button size="lg" className="flex-1" onClick={() => setStep(4)} disabled={!email}>
            Continuar
          </Button>
        </div>
      </div>
    </StepWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/registration/steps/Step4Category.tsx
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { StepWrapper } from '../StepWrapper';
import { useRegistration } from '@/hooks/useRegistration';
import { CATEGORIES } from '@/data/categories';
import { HelpCircle, Check } from 'lucide-react';
import * as Icons from 'lucide-react';

export function Step4Category() {
  const { data, updateData, setStep } = useRegistration();
  const [selected, setSelected] = useState(data.categoryId);

  const handleSelect = (id: number) => {
    setSelected(id);
    updateData({ categoryId: id, subcategoryIds: [] });
  };

  return (
    <StepWrapper
      title="Escolha a categoria dos serviços que você realiza"
      description="Selecione a especialidade cirúrgica principal do seu perfil profissional."
    >
      <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2">
        {CATEGORIES.map((cat) => {
          const IconComponent = (Icons as any)[cat.icon] || Icons.Stethoscope;
          return (
            <div
              key={cat.id}
              className={`flex items-center gap-4 p-4 border cursor-pointer transition-all hover:border-[#0F766E] hover:shadow-sm ${
                selected === cat.id ? 'border-[#0F766E] bg-[#0F766E]/5' : 'border-gray-200'
              }`}
              onClick={() => handleSelect(cat.id)}
            >
              <div className="w-10 h-10 flex items-center justify-center bg-[#0F766E]/10">
                <IconComponent className="h-5 w-5 text-[#0F766E]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm">{cat.id}. {cat.name}</div>
                <div className="text-xs text-gray-600 line-clamp-2">{cat.desc}</div>
              </div>
              <div className={`w-6 h-6 border-2 flex items-center justify-center transition-all ${
                selected === cat.id ? 'bg-[#0F766E] border-[#0F766E]' : 'border-gray-300'
              }`}>
                {selected === cat.id && <Check className="h-4 w-4 text-white" />}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-3 pt-4">
        <Button variant="outline" size="icon">
          <HelpCircle className="h-5 w-5" />
        </Button>
        <Button size="lg" className="flex-1" onClick={() => setStep(5)} disabled={!selected}>
          Continuar
        </Button>
      </div>
    </StepWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/registration/steps/Step5Subcategory.tsx
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { StepWrapper } from '../StepWrapper';
import { useRegistration } from '@/hooks/useRegistration';
import { CATEGORIES } from '@/data/categories';
import { HelpCircle, Check } from 'lucide-react';

export function Step5Subcategory() {
  const { data, updateData, setStep } = useRegistration();
  const [selectedSubs, setSelectedSubs] = useState<number[]>(data.subcategoryIds);

  const category = CATEGORIES.find((c) => c.id === data.categoryId);

  const toggleSub = (idx: number) => {
    const newSubs = selectedSubs.includes(idx)
      ? selectedSubs.filter((i) => i !== idx)
      : [...selectedSubs, idx];
    setSelectedSubs(newSubs);
    updateData({ subcategoryIds: newSubs });
  };

  if (!category) return null;

  return (
    <StepWrapper
      title={category.name}
      description="Escolha os procedimentos que mais se encaixam com o seu perfil."
    >
      <div className="space-y-2 max-h-[60vh] overflow-y-auto pr-2">
        {category.subs.map((sub, idx) => {
          const [title, desc] = sub.split(' – ');
          return (
            <div
              key={idx}
              className={`flex items-center gap-4 p-4 border cursor-pointer transition-all hover:border-[#0F766E] hover:shadow-sm ${
                selectedSubs.includes(idx) ? 'border-[#0F766E] bg-[#0F766E]/5' : 'border-gray-200'
              }`}
              onClick={() => toggleSub(idx)}
            >
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm">{title}</div>
                {desc && <div className="text-xs text-gray-600 mt-1">{desc}</div>}
              </div>
              <div className={`w-6 h-6 border-2 flex items-center justify-center transition-all ${
                selectedSubs.includes(idx) ? 'bg-[#0F766E] border-[#0F766E]' : 'border-gray-300'
              }`}>
                {selectedSubs.includes(idx) && <Check className="h-4 w-4 text-white" />}
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-3 pt-4">
        <Button variant="outline" size="icon">
          <HelpCircle className="h-5 w-5" />
        </Button>
        <Button size="lg" className="flex-1" onClick={() => setStep(6)}>
          Continuar
        </Button>
      </div>
    </StepWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/registration/steps/Step6Location.tsx
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StepWrapper } from '../StepWrapper';
import { useRegistration } from '@/hooks/useRegistration';
import { formatCEP } from '@/lib/utils';
import { User, Phone, MapPin, Home, HelpCircle, Info } from 'lucide-react';

export function Step6Location() {
  const { data, updateData, setStep } = useRegistration();
  const [cep, setCep] = useState(data.cep);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const digits = cep.replace(/\D/g, '');
    if (digits.length === 8) fetchCEP(digits);
  }, [cep]);

  const fetchCEP = async (cepDigits: string) => {
    setLoading(true);
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cepDigits}/json/`);
      const data = await res.json();
      if (!data.erro) {
        updateData({
          cep: formatCEP(cepDigits),
          street: data.logradouro || '',
          neighborhood: data.bairro || '',
          city: data.localidade || '',
          state: data.uf || '',
        });
      }
    } catch (err) {
      console.error('CEP fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StepWrapper
      title="Informações pessoais"
      description="Preencha o nome e o CEP abaixo para continuar."
    >
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Nome</label>
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-gray-400" />
            <Input
              value={data.fullName}
              onChange={(e) => updateData({ fullName: e.target.value })}
              placeholder="Nome completo"
            />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">Celular</label>
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-gray-400" />
            <Input value={data.phone} disabled className="opacity-70" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium mb-2 flex items-center gap-2">
            CEP
            <Info className="h-4 w-4 text-gray-400 cursor-help" />
            <Button variant="link" className="text-xs ml-auto p-0 h-auto">
              Não lembra seu CEP?
            </Button>
          </label>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-gray-400" />
            <Input
              value={cep}
              onChange={(e) => setCep(formatCEP(e.target.value))}
              placeholder="00000-000"
              maxLength={9}
            />
          </div>
        </div>

        {data.street && (
          <div className="space-y-3 animate-in fade-in slide-in-from-top-2">
            <div>
              <label className="text-sm font-medium mb-2 block">Endereço</label>
              <Input value={data.street} disabled className="opacity-80" />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Bairro</label>
              <Input value={data.neighborhood} disabled className="opacity-80" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="col-span-2">
                <label className="text-sm font-medium mb-2 block">Cidade</label>
                <Input value={data.city} disabled className="opacity-80" />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">UF</label>
                <Input value={data.state} disabled className="opacity-80" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Número</label>
              <div className="flex items-center gap-2">
                <Home className="h-5 w-5 text-gray-400" />
                <Input
                  value={data.number}
                  onChange={(e) => updateData({ number: e.target.value })}
                  placeholder="Nº"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center gap-3 pt-4">
          <Button variant="outline" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button size="lg" className="flex-1" onClick={() => setStep(7)}>
            Continuar
          </Button>
        </div>
      </div>
    </StepWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/registration/steps/Step7Pin.tsx
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRegistration } from '@/hooks/useRegistration';
import { MessageSquare, Backspace, Check } from 'lucide-react';

export function Step7Pin() {
  const { data, setStep } = useRegistration();
  const [pin, setPin] = useState(['', '', '', '']);
  const [activeIdx, setActiveIdx] = useState(0);

  const handleDigit = (digit: string) => {
    if (activeIdx >= 4) return;
    const newPin = [...pin];
    newPin[activeIdx] = digit;
    setPin(newPin);
    setActiveIdx(Math.min(activeIdx + 1, 3));
  };

  const handleBack = () => {
    if (activeIdx === 0 && pin[0] === '') return;
    const newActiveIdx = pin[activeIdx] === '' ? activeIdx - 1 : activeIdx;
    const newPin = [...pin];
    newPin[newActiveIdx] = '';
    setPin(newPin);
    setActiveIdx(newActiveIdx);
  };

  const handleConfirm = () => {
    if (pin.every((d) => d !== '')) {
      // In production, verify PIN with backend
      setStep(8);
    }
  };

  const handleResend = async () => {
    // In production, call Supabase Edge Function to resend SMS
    console.log('Resending PIN to', data.phone);
  };

  return (
    <div className="text-center py-8">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0F766E]/10 mb-6">
        <MessageSquare className="h-8 w-8 text-[#0F766E]" />
      </div>
      <h1 className="font-display text-2xl font-bold mb-2">Para entrar, insira o código de acesso</h1>
      <p className="text-gray-600 mb-6">
        Digite o código PIN que enviamos para o número <strong>{data.phone}</strong>
      </p>

      <div className="flex justify-center gap-3 mb-4">
        {pin.map((digit, idx) => (
          <div
            key={idx}
            className={`w-14 h-16 border-2 flex items-center justify-center text-2xl font-bold font-display transition-all ${
              digit ? 'border-[#0F766E] bg-[#0F766E]/5' : 'border-gray-300'
            } ${idx === activeIdx ? 'border-[#0EA5E9] shadow-[0_0_0_3px_rgba(14,165,233,0.15)]' : ''}`}
          >
            {digit}
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-6 text-sm text-[#0EA5E9] mb-6">
        <button onClick={handleResend} className="hover:underline">
          Alterar telefone
        </button>
        <button onClick={() => setStep(6)} className="hover:underline">
          Voltar
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 max-w-[280px] mx-auto">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <Button
            key={n}
            variant="outline"
            className="h-14 text-lg font-semibold"
            onClick={() => handleDigit(String(n))}
          >
            {n}
          </Button>
        ))}
        <Button variant="outline" className="h-14" onClick={handleBack}>
          <Backspace className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          className="h-14 text-lg font-semibold"
          onClick={() => handleDigit('0')}
        >
          0
        </Button>
        <Button className="h-14 bg-[#0F766E] hover:bg-[#0D655E]" onClick={handleConfirm}>
          <Check className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/registration/steps/Step8Document.tsx
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StepWrapper } from '../StepWrapper';
import { useRegistration } from '@/hooks/useRegistration';
import { formatCPF, formatCNPJ, isCPF, isCNPJ } from '@/lib/utils';
import { User, IdCard, HelpCircle, CheckSquare } from 'lucide-react';

export function Step8Document() {
  const { data, updateData, setStep } = useRegistration();
  const [doc, setDoc] = useState(data.document);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleDocChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = isCPF(value) ? formatCPF(value) : formatCNPJ(value);
    setDoc(formatted);
    updateData({
      document: formatted,
      documentType: isCPF(value) ? 'cpf' : 'cnpj',
    });
  };

  return (
    <StepWrapper
      title="Última etapa!"
      description="Você está a um passo de conquistar mais clientes todos os dias!"
    >
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium mb-2 block">Nome</label>
          <div className="flex items-center gap-2">
            <User className="h-5 w-5 text-gray-400" />
            <Input value={data.fullName} disabled className="opacity-70" />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium mb-2 block">CPF ou CNPJ</label>
          <div className="flex items-center gap-2">
            <IdCard className="h-5 w-5 text-gray-400" />
            <Input
              value={doc}
              onChange={handleDocChange}
              placeholder="Digite seu CPF ou CNPJ"
              maxLength={18}
            />
          </div>
        </div>
        <div className="flex items-start gap-3">
          <button
            onClick={() => setTermsAccepted(!termsAccepted)}
            className={`w-5 h-5 border-2 flex items-center justify-center mt-0.5 transition-all ${
              termsAccepted ? 'bg-[#0F766E] border-[#0F766E]' : 'border-gray-300'
            }`}
          >
            {termsAccepted && <CheckSquare className="h-4 w-4 text-white" />}
          </button>
          <p className="text-sm text-gray-600">
            Ao continuar, você concorda com nossos{' '}
            <a href="#" className="text-[#0EA5E9] underline">
              Termos de Uso
            </a>{' '}
            e{' '}
            <a href="#" className="text-[#0EA5E9] underline">
              Política de Privacidade
            </a>
            , incluindo o uso dos seus dados para melhorar sua experiência na plataforma.
          </p>
        </div>
        <div className="flex items-center gap-3 pt-4">
          <Button variant="outline" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button
            size="lg"
            className="flex-1"
            onClick={() => setStep(9)}
            disabled={!doc || !termsAccepted}
          >
            Continuar
          </Button>
        </div>
      </div>
    </StepWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/registration/steps/Step9Complementary.tsx
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { StepWrapper } from '../StepWrapper';
import { useRegistration } from '@/hooks/useRegistration';
import { isCPF } from '@/lib/utils';
import { Calendar, Building, Store, Code, HelpCircle } from 'lucide-react';

export function Step9Complementary() {
  const { data, updateData, setStep } = useRegistration();
  const [gender, setGender] = useState(data.gender || '');
  const isCPFFlow = isCPF(data.document);

  const genderOptions = ['Masculino', 'Feminino', 'Outro', 'Prefiro não informar'];

  return (
    <StepWrapper
      title={isCPFFlow ? 'Dados complementares' : 'Dados da empresa (MEI)'}
      description={
        isCPFFlow
          ? 'Precisamos de mais algumas informações para completar seu cadastro.'
          : 'Complete as informações do seu CNPJ.'
      }
    >
      <div className="space-y-4">
        {isCPFFlow ? (
          <>
            <div>
              <label className="text-sm font-medium mb-2 block">Data de Nascimento</label>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-400" />
                <Input
                  type="date"
                  value={data.birthDate || ''}
                  onChange={(e) => updateData({ birthDate: e.target.value })}
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Gênero</label>
              <div className="space-y-2">
                {genderOptions.map((option) => (
                  <div
                    key={option}
                    className={`flex items-center gap-4 p-4 border cursor-pointer transition-all hover:border-[#0F766E] ${
                      gender === option ? 'border-[#0F766E] bg-[#0F766E]/5' : 'border-gray-200'
                    }`}
                    onClick={() => {
                      setGender(option);
                      updateData({ gender: option });
                    }}
                  >
                    <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all ${
                      gender === option ? 'border-[#0F766E]' : 'border-gray-300'
                    }`}>
                      {gender === option && <div className="w-3 h-3 bg-[#0F766E] rounded-full" />}
                    </div>
                    <div className="font-medium text-sm">{option}</div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <label className="text-sm font-medium mb-2 block">Razão Social</label>
              <div className="flex items-center gap-2">
                <Building className="h-5 w-5 text-gray-400" />
                <Input
                  value={data.razaoSocial || ''}
                  onChange={(e) => updateData({ razaoSocial: e.target.value })}
                  placeholder="Razão social"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Nome Fantasia</label>
              <div className="flex items-center gap-2">
                <Store className="h-5 w-5 text-gray-400" />
                <Input
                  value={data.nomeFantasia || ''}
                  onChange={(e) => updateData({ nomeFantasia: e.target.value })}
                  placeholder="Nome fantasia"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">CNAE Principal</label>
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-gray-400" />
                <Input
                  value={data.cnae || ''}
                  onChange={(e) => updateData({ cnae: e.target.value })}
                  placeholder="0000-0/00"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Data de Abertura</label>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-gray-400" />
                <Input
                  type="date"
                  value={data.dataAbertura || ''}
                  onChange={(e) => updateData({ dataAbertura: e.target.value })}
                />
              </div>
            </div>
          </>
        )}
        <div className="flex items-center gap-3 pt-4">
          <Button variant="outline" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button size="lg" className="flex-1" onClick={() => setStep(10)}>
            Continuar
          </Button>
        </div>
      </div>
    </StepWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/registration/steps/Step10IdentityIntro.tsx
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { Button } from '@/components/ui/button';
import { StepWrapper } from '../StepWrapper';
import { useRegistration } from '@/hooks/useRegistration';
import { IdCard } from 'lucide-react';

export function Step10IdentityIntro() {
  const { setStep } = useRegistration();

  return (
    <StepWrapper title="" showBack={false}>
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-[#0EA5E9]/10 mb-6">
          <IdCard className="h-10 w-10 text-[#0EA5E9]" />
        </div>
        <h1 className="font-display text-2xl font-bold mb-4">Valide sua identidade</h1>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Esta é uma camada extra de proteção. Validar sua identidade garante mais segurança para você e para os clientes que contratam seus serviços.
        </p>
        <Button size="lg" onClick={() => setStep(11)} className="min-w-[200px]">
          Validar agora
        </Button>
        <div className="mt-4">
          <Button variant="link" onClick={() => setStep(13)}>
            Pular por enquanto
          </Button>
        </div>
      </div>
    </StepWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/registration/steps/Step11DocumentCapture.tsx
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { StepWrapper } from '../StepWrapper';
import { useRegistration } from '@/hooks/useRegistration';
import { Camera, IdCard, HelpCircle, CheckCircle, Circle } from 'lucide-react';

export function Step11DocumentCapture() {
  const { data, updateData, setStep } = useRegistration();
  const [side, setSide] = useState<'front' | 'back'>('front');
  const [captured, setCaptured] = useState({ front: false, back: false });

  const handleCapture = () => {
    setCaptured((prev) => ({ ...prev, [side]: true }));
    updateData({
      rgFrontCaptured: side === 'front' ? true : data.rgFrontCaptured,
      rgBackCaptured: side === 'back' ? true : data.rgBackCaptured,
    });
  };

  const canVerify = captured.front && captured.back;

  return (
    <StepWrapper
      title="Capture seu documento"
      description="Fotografe frente e verso do seu RG em um local bem iluminado."
    >
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2">
          <button
            className={`p-3 text-center text-sm font-semibold border-2 transition-all ${
              side === 'front' ? 'border-[#0F766E] text-[#0F766E] bg-[#0F766E]/5' : 'border-gray-200 text-gray-600'
            }`}
            onClick={() => setSide('front')}
          >
            Frente do RG
          </button>
          <button
            className={`p-3 text-center text-sm font-semibold border-2 transition-all ${
              side === 'back' ? 'border-[#0F766E] text-[#0F766E] bg-[#0F766E]/5' : 'border-gray-200 text-gray-600'
            }`}
            onClick={() => setSide('back')}
          >
            Verso do RG
          </button>
        </div>

        <div className="aspect-video bg-gray-900 border-2 border-dashed border-gray-600 flex flex-col items-center justify-center text-gray-400">
          <IdCard className="h-16 w-16 mb-4 opacity-30" />
          <p className="text-sm">
            Posicione a {side === 'front' ? 'frente' : 'verso'} do RG dentro da área
          </p>
          <Button className="mt-4" onClick={handleCapture}>
            <Camera className="mr-2 h-4 w-4" />
            Capturar
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 border text-center text-xs">
            {captured.front ? (
              <>
                <CheckCircle className="inline h-4 w-4 text-green-500 mr-1" />
                Frente capturada
              </>
            ) : (
              <>
                <Circle className="inline h-4 w-4 text-gray-300 mr-1" />
                Frente pendente
              </>
            )}
          </div>
          <div className="p-3 border text-center text-xs">
            {captured.back ? (
              <>
                <CheckCircle className="inline h-4 w-4 text-green-500 mr-1" />
                Verso capturado
              </>
            ) : (
              <>
                <Circle className="inline h-4 w-4 text-gray-300 mr-1" />
                Verso pendente
              </>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 pt-4">
          <Button variant="outline" size="icon">
            <HelpCircle className="h-5 w-5" />
          </Button>
          <Button size="lg" className="flex-1" onClick={() => setStep(12)} disabled={!canVerify}>
            Verificar documento
          </Button>
        </div>
      </div>
    </StepWrapper>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/registration/steps/Step12VerificationSuccess.tsx
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { Button } from '@/components/ui/button';
import { useRegistration } from '@/hooks/useRegistration';
import { CheckCircle } from 'lucide-react';

export function Step12VerificationSuccess() {
  const { setStep } = useRegistration();

  return (
    <div className="text-center py-12">
      <div className="inline-flex items-center justify-center w-24 h-24 bg-green-50 mb-6 animate-in zoom-in">
        <CheckCircle className="h-14 w-14 text-green-500" />
      </div>
      <h1 className="font-display text-2xl font-bold mb-4">Documento verificado com sucesso!</h1>
      <p className="text-gray-600 mb-8">
        Seus dados foram conferidos e estão corretos. Vamos finalizar seu cadastro.
      </p>
      <Button size="lg" onClick={() => setStep(13)} className="min-w-[200px]">
        Continuar
      </Button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/registration/steps/Step13Celebration.tsx
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/hooks/useRegistration';
import { Loader2 } from 'lucide-react';

export function Step13Celebration() {
  const router = useRouter();
  const { reset } = useRegistration();

  useEffect(() => {
    // Reset registration state
    reset();
    // Redirect to dashboard after delay
    const timer = setTimeout(() => {
      router.push('/dashboard');
    }, 3000);
    return () => clearTimeout(timer);
  }, [router, reset]);

  return (
    <div className="text-center py-12">
      <div className="text-6xl mb-6">🎉</div>
      <h1 className="font-display text-2xl font-bold mb-4">Cadastro concluído!</h1>
      <p className="text-gray-600 mb-8">Sua conta foi criada e verificada. Redirecionando para sua área...</p>
      <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
        <Loader2 className="h-4 w-4 animate-spin" />
        Redirecionando...
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: components/registration/RegistrationFlow.tsx
// ═══════════════════════════════════════════════════════════════════════════════

'use client';

import { useRegistration } from '@/hooks/useRegistration';
import { ProgressBar } from './ProgressBar';
import { Step1Welcome } from './steps/Step1Welcome';
import { Step2Phone } from './steps/Step2Phone';
import { Step3Email } from './steps/Step3Email';
import { Step4Category } from './steps/Step4Category';
import { Step5Subcategory } from './steps/Step5Subcategory';
import { Step6Location } from './steps/Step6Location';
import { Step7Pin } from './steps/Step7Pin';
import { Step8Document } from './steps/Step8Document';
import { Step9Complementary } from './steps/Step9Complementary';
import { Step10IdentityIntro } from './steps/Step10IdentityIntro';
import { Step11DocumentCapture } from './steps/Step11DocumentCapture';
import { Step12VerificationSuccess } from './steps/Step12VerificationSuccess';
import { Step13Celebration } from './steps/Step13Celebration';

export function RegistrationFlow() {
  const { currentStep } = useRegistration();

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <Step1Welcome />;
      case 2: return <Step2Phone />;
      case 3: return <Step3Email />;
      case 4: return <Step4Category />;
      case 5: return <Step5Subcategory />;
      case 6: return <Step6Location />;
      case 7: return <Step7Pin />;
      case 8: return <Step8Document />;
      case 9: return <Step9Complementary />;
      case 10: return <Step10IdentityIntro />;
      case 11: return <Step11DocumentCapture />;
      case 12: return <Step12VerificationSuccess />;
      case 13: return <Step13Celebration />;
      default: return <Step1Welcome />;
    }
  };

  return (
    <>
      <ProgressBar />
      <div className="min-h-screen pt-16 bg-white">
        <div className="max-w-md mx-auto px-6 py-8">
          {renderStep()}
        </div>
      </div>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: app/cadastro/page.tsx
// ═══════════════════════════════════════════════════════════════════════════════

import { RegistrationFlow } from '@/components/registration/RegistrationFlow';

export default function CadastroPage() {
  return <RegistrationFlow />;
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: app/cadastro/layout.tsx
// ═══════════════════════════════════════════════════════════════════════════════

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cadastro — Portal do Instrumentador',
  description: 'Cadastre-se como instrumentador cirúrgico e conecte-se com as melhores oportunidades.',
};

export default function CadastroLayout({ children }: { children: React.ReactNode }) {
  return children;
}

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: app/globals.css (Tailwind CSS v4)
// ═══════════════════════════════════════════════════════════════════════════════

/*
@import "tailwindcss";

@theme {
  --color-primary: #0F766E;
  --color-primary-dark: #0D655E;
  --color-accent: #0EA5E9;
  --color-accent-light: #38BDF8;
  --font-display: "Space Grotesk", sans-serif;
  --font-body: "DM Sans", sans-serif;
}

body {
  font-family: var(--font-body);
}

.font-display {
  font-family: var(--font-display);
}
*/

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: .env.local.example
// ═══════════════════════════════════════════════════════════════════════════════

/*
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
*/

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: supabase/migrations/001_create_registration_tables.sql
// ═══════════════════════════════════════════════════════════════════════════════

/*
-- Create registrations table
CREATE TABLE registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  phone TEXT NOT NULL UNIQUE,
  email TEXT NOT NULL,
  full_name TEXT NOT NULL,
  document TEXT NOT NULL UNIQUE,
  document_type TEXT CHECK (document_type IN ('cpf', 'cnpj')) NOT NULL,
  birth_date DATE,
  gender TEXT,
  razao_social TEXT,
  nome_fantasia TEXT,
  cnae TEXT,
  data_abertura DATE,
  cep TEXT NOT NULL,
  street TEXT NOT NULL,
  neighborhood TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  number TEXT,
  category_id INTEGER,
  subcategory_ids INTEGER[],
  rg_front_url TEXT,
  rg_back_url TEXT,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create PIN verification table
CREATE TABLE pin_verifications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  phone TEXT NOT NULL,
  pin TEXT NOT NULL,
  expires_at TIMESTAMP WITH TIME ZONE NOT NULL,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create document uploads table
CREATE TABLE document_uploads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  registration_id UUID REFERENCES registrations(id) ON DELETE CASCADE,
  side TEXT CHECK (side IN ('front', 'back')) NOT NULL,
  storage_url TEXT NOT NULL,
  verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE pin_verifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE document_uploads ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Users can view own registration" ON registrations
  FOR SELECT USING (auth.uid()::text = id::text);

CREATE POLICY "Users can update own registration" ON registrations
  FOR UPDATE USING (auth.uid()::text = id::text);

-- Storage bucket for documents
INSERT INTO storage.buckets (id, name, public) VALUES ('documents', 'documents', false);

-- Storage policy
CREATE POLICY "Authenticated users can upload documents" ON storage.objects
  FOR INSERT WITH CHECK (auth.role() = 'authenticated' AND bucket_id = 'documents');
*/

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: lib/sms.ts (Edge Function for PIN)
// ═══════════════════════════════════════════════════════════════════════════════

/*
// supabase/functions/send-pin/index.ts
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

serve(async (req) => {
  const { phone } = await req.json();
  const pin = Math.floor(1000 + Math.random() * 9000).toString();

  // Store PIN in database
  await supabase.from("pin_verifications").insert({
    phone,
    pin,
    expires_at: new Date(Date.now() + 10 * 60 * 1000).toISOString(), // 10 minutes
  });

  // Send SMS via provider (Twilio, MessageBird, etc.)
  // await sendSMS(phone, `Seu código de acesso é: ${pin}`);

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
});
*/

// ═══════════════════════════════════════════════════════════════════════════════
// FILE: package.json
// ═══════════════════════════════════════════════════════════════════════════════

/*
{
  "name": "portal-instrumentador",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "@base-ui/react": "^1.0.0",
    "@radix-ui/react-slot": "^1.0.2",
    "@supabase/supabase-js": "^2.39.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.300.0",
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "tailwind-merge": "^2.2.0",
    "zustand": "^4.4.7"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.3.3"
  }
}
*/

export default RegistrationFlow;
