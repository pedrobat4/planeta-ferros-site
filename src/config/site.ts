// src/config/site.ts
// ÚNICO arquivo que você edita para customizar o site.
// Escolha modo "landing" (serviços) ou "catalogo" (produtos).

export type Modo = "landing" | "catalogo";

export type Servico = { titulo: string; descricao: string; icone: string; imagem?: string };
export type Produto = { nome: string; descricao: string; imagem: string; preco?: string; categoria?: string };
export type Depoimento = { nome: string; cargo?: string; texto: string; foto?: string };
export type Diferencial = { titulo: string; descricao: string; icone: string };
export type Stat = { valor: string; label: string };
export type FotoGaleria = { src: string; alt: string; legenda?: string };
export type PassoProcesso = { titulo: string; descricao: string; icone: string };
export type Pergunta = { pergunta: string; resposta: string };
export type Area = { nome: string; descricao?: string };

export const site = {
  modo: "landing" as Modo,
  empresa: {
    nome: "Planeta Ferros",
    slogan: "Material Metálico para a Construção Civil",
    descricao: "Distribuidor de telhas galvalume, perfis, metalon e chapas de aço em Luzimangues, TO. Atendemos construtoras, serralheiros e calheiros desde 2018.",
    logo: "/images/logo.png",
  },
  contato: {
    telefone: "(63) 99253-1326",
    whatsapp: "5563992531326",
    email: "planetadosferros@uol.com.br",
    endereco: "Av. 15 - Luzimangues, Porto Nacional - TO",
    horario: "Seg a Sex: 7h30 às 17h30",
    mapaEmbed: "",
  },
  social: {
    instagram: "https://www.instagram.com/planetaferros.luzimangues",
    facebook: "",
    youtube: "",
  },
  hero: {
    titulo: "Material Metálico com Qualidade e Entrega Rápida",
    subtitulo: "Telhas galvalume, perfis, metalon e chapas de aço para sua obra. Atendemos construtoras, serralheiros e calheiros em Luzimangues e região.",
    ctaTexto: "Pedir Orçamento",
    imagemBg: "/images/hero.jpg",
    badges: ["Desde 2018", "Entrega em Palmas e região", "Orçamento grátis"],
  },
  stats: [
    { valor: "6+", label: "Anos de experiência" },
    { valor: "4", label: "Cidades atendidas" },
    { valor: "5+", label: "Linhas de produtos" },
    { valor: "100%", label: "Foco na construção civil" },
  ] as Stat[],
  servicos: [
    {
      titulo: "Telhas Galvalume",
      descricao: "Telhas de alta resistência para coberturas industriais, comerciais e residenciais. Durabilidade superior ao aço galvanizado comum.",
      icone: "Home",
    },
    {
      titulo: "Perfis e Metalon",
      descricao: "Perfis estruturais, cantoneiras, metalon quadrado e retangular para estruturas metálicas de todo tipo de obra.",
      icone: "Ruler",
    },
    {
      titulo: "Chapas de Aço",
      descricao: "Chapas lisas e xadrez para revestimento, pisos, equipamentos e estruturas. Disponíveis em diversas espessuras.",
      icone: "Package",
    },
    {
      titulo: "Vergalhões e Zinco",
      descricao: "Vergalhões CA-50 e CA-60 para armação de concreto, além de chapas e bobinas de zinco para canalhas e calhas.",
      icone: "HardHat",
    },
  ] as Servico[],
  produtos: [] as Produto[],
  processo: [
    { titulo: "Entre em contato", descricao: "Fale com nossa equipe pelo WhatsApp com as medidas e quantidade necessária.", icone: "MessageCircle" },
    { titulo: "Receba o orçamento", descricao: "Enviamos o orçamento detalhado rapidamente, com prazo e condições de pagamento.", icone: "Send" },
    { titulo: "Confirme o pedido", descricao: "Aprovado o orçamento, confirmamos o pedido e agendamos a entrega ou retirada.", icone: "CheckCircle" },
    { titulo: "Entrega garantida", descricao: "Material entregue no prazo em Luzimangues, Palmas, Paraíso e Porto Nacional.", icone: "Truck" },
  ] as PassoProcesso[],
  sobre: {
    titulo: "Quem Somos",
    texto: "A Planeta Ferros foi fundada em 2018 no Distrito de Luzimangues, Tocantins, com o objetivo de suprir a demanda por material metálico de qualidade na região. Trabalhamos com telhas galvalume, vergalhões, perfis, metalon e chapas de aço — tudo que sua obra precisa em um só lugar. Atendemos construtoras, serralheiros, calheiros e clientes finais com preços competitivos e agilidade na entrega.",
    imagem: "/images/sobre.jpg",
    diferenciais: [
      { titulo: "Preço Competitivo", descricao: "Compra direta de fábrica para garantir o melhor custo-benefício.", icone: "BadgeCheck" },
      { titulo: "Entrega Rápida", descricao: "Atendemos Palmas, Paraíso, Porto Nacional e toda a região.", icone: "Truck" },
      { titulo: "Experiência no Setor", descricao: "Mais de 6 anos fornecendo material metálico para a construção civil.", icone: "Award" },
    ] as Diferencial[],
  },
  galeria: [
    { src: "/images/fachada.jpg", alt: "Fachada Planeta Ferros em Luzimangues" },
    { src: "/images/sobre.jpg", alt: "Equipe e estrutura da Planeta Ferros" },
  ] as FotoGaleria[],
  depoimentos: [] as Depoimento[],
  areas: [
    { nome: "Luzimangues", descricao: "Sede e entrega imediata" },
    { nome: "Porto Nacional", descricao: "Atendimento e entrega" },
    { nome: "Palmas", descricao: "Entrega programada" },
    { nome: "Paraíso do Tocantins", descricao: "Entrega programada" },
  ] as Area[],
  faq: [
    { pergunta: "Vocês entregam fora de Luzimangues?", resposta: "Sim! Entregamos em Palmas, Paraíso do Tocantins e Porto Nacional. Entre em contato para verificar prazo e frete para seu endereço." },
    { pergunta: "Como solicitar um orçamento?", resposta: "É simples: fale com a gente pelo WhatsApp informando o produto, as medidas e a quantidade. Respondemos rapidamente." },
    { pergunta: "Vocês trabalham com venda para pessoa física?", resposta: "Sim, atendemos tanto pessoa física quanto jurídica — construtoras, serralheiros, calheiros e clientes finais." },
    { pergunta: "Qual o prazo de entrega?", resposta: "O prazo varia conforme o produto e a cidade. Em Luzimangues geralmente é no mesmo dia ou no seguinte. Para outras cidades, confirmamos no orçamento." },
  ] as Pergunta[],
  cta_final: {
    titulo: "Pronto para agilizar sua obra?",
    texto: "Fale com nossa equipe agora, tire dúvidas e receba seu orçamento sem compromisso.",
    botao: "Pedir Orçamento no WhatsApp",
  },
  seo: {
    title: "Planeta Ferros | Telhas, Perfis e Chapas de Aço em Luzimangues TO",
    description: "Distribuidora de material metálico em Luzimangues - TO. Telhas galvalume, metalon, perfis e chapas de aço para construtoras, serralheiros e calheiros.",
    keywords: "telha galvalume, metalon, perfil metálico, chapa de aço, vergalhão, serralheiro, luzimangues, palmas, tocantins",
  },
};

export type Site = typeof site;
