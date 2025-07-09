export const MOCK_CONTAS = [
  {
    id: 1,
    plataforma: 'psn',
    preco: 110,
    jogos: ['FIFA', 'GTA', 'COD'],
    titulo: 'Conta PSN Premium',
    descricao: 'Conta original, com jogos FIFA, GTA e COD. Pronta para uso.',
    img: 'assets/conta-psn.jpg'
  },
  {
    id: 2,
    plataforma: 'steam',
    preco: 239,
    jogos: ['Elden Ring', 'Cyberpunk 2077', 'CS:GO'],
    titulo: 'Conta Steam 25 Jogos',
    descricao: 'Mais de 25 jogos AAA. Ótima reputação.',
    img: 'assets/conta-steam.jpg'
  },
  {
    id: 3,
    plataforma: 'xbox',
    preco: 155,
    jogos: ['Forza', 'Halo', 'Minecraft'],
    titulo: 'Conta Xbox Ultimate',
    descricao: 'Com Forza, Halo e Minecraft. 1 ano Gold incluso.',
    img: 'assets/conta-xbox.jpg'
  },
  {
    id: 4,
    plataforma: 'psn',
    preco: 70,
    jogos: ['Spider-Man', 'God of War'],
    titulo: 'PSN Jogos Exclusivos',
    descricao: 'Jogos exclusivos da PlayStation. Entrega rápida.',
    img: 'assets/conta-psn2.jpg'
  }
];

export const MOCK_GIFTCARDS = [
  {
    id: 1,
    plataforma: 'xbox',
    valor: 100,
    titulo: 'Gift Card Xbox R$100',
    descricao: 'Receba seu código na hora por e-mail.',
    preco: 95,
    img: 'assets/giftcard-xbox.jpeg'
  },
  {
    id: 2,
    plataforma: 'psn',
    valor: 50,
    titulo: 'Gift Card PSN R$50',
    descricao: 'Ideal para renovar sua Plus.',
    preco: 49,
    img: 'assets/giftcard-psn.webp'
  },
  {
    id: 3,
    plataforma: 'steam',
    valor: 60,
    titulo: 'Gift Card Steam R$60',
    descricao: 'Desbloqueie jogos e DLCs no Steam.',
    preco: 59,
    img: 'assets/giftcard-steam.webp'
  },
  {
    id: 4,
    plataforma: 'googleplay',
    valor: 30,
    titulo: 'Gift Card Google Play R$30',
    descricao: 'Use em apps, jogos e filmes no Android.',
    preco: 28,
    img: 'assets/giftcard-googleplay.png'
  }
];
// caso for adicionar mais produtos, seguir o padrão dos mocks acima
const MOCK_JOGOS = [
    {
        id: 1,
        plataforma: 'psn',
        preco: 119,
        nome: 'FIFA 24',
        descricao: 'Jogo original, ativação digital para PSN.',
        img: 'assets/jogos/fifa24.jpg'
    },
    {
        id: 2,
        plataforma: 'steam',
        preco: 179,
        nome: 'Elden Ring',
        descricao: 'Key Steam global.',
        img: 'assets/jogos/eldenring.jpg'
    },
    {
        id: 3,
        plataforma: 'xbox',
        preco: 99,
        nome: 'Minecraft',
        descricao: 'Ativação via Xbox Live.',
        img: 'assets/jogos/minecraft.jpg'
    },
    {
        id: 4,
        plataforma: 'pc',
        preco: 39,
        nome: 'Among Us',
        descricao: 'Key para PC. Envio imediato.',
        img: 'assets/jogos/amongus.jpg'
    }
];