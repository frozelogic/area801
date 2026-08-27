const moedas = [
  { categoria: "Moeda", nome: "Nome", limite: "Limite", trocavel: "Trocável", obtencao: "Obtenção" },
  {
    moeda: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/800.webp" },
    nome: "Moeda de Queijo",
    limite: "1.500",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    obtencao: "Completando missões diárias, eventos e comprando na Village"
  },
  {
    moeda: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/801.webp" },
    nome: "Moeda de Morango",
    limite: "1.500",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    obtencao: "Completando eventos"
  },
  {
    moeda: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2253.webp" },
    nome: "Moeda de Shaman",
    limite: "200",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    obtencao: "Salvando ratos como Shaman"
  },
  {
    moeda: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2620.webp" },
    nome: "Moeda de Shaman Sem Habilidades",
    limite: "200",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    obtencao: "Salvando ratos como Shaman no modo Sem Habilidades"
  },
  {
    moeda: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2254.webp" },
    nome: "Moeda de Racing",
    limite: "200",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    obtencao: "Completando mapas na Racing"
  },
  {
    moeda: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2257.webp" },
    nome: "Ticket Dourado",
    limite: "500",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    obtencao: "Completando missões diárias e eventos"
  },
  {
    moeda: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" },
    nome: "Moeda de Survivor",
    limite: "200",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    obtencao: "Matando ratos no Survivor como Shaman"
  },
  {
    moeda: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2261.webp" },
    nome: "Moeda de Bootcamp",
    limite: "200",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    obtencao: "Completando mapas no Bootcamp"
  },
  {
    moeda: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2343.webp" },
    nome: "Fragmento de Morango",
    limite: "200",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    obtencao: "Removido, porém era necessário assistir anúncios"
  },
  {
    moeda: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2497.webp" },
    nome: "Concha",
    limite: "500",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    obtencao: "Completando missões diárias e eventos"
  },
  {
    moeda: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2504.webp" },
    nome: "Moeda de Defilante",
    limite: "200",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    obtencao: "Completando mapas na Defilante"
  },
  {
    moeda: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2505.webp" },
    nome: "Moeda de Shaman com Estrela",
    limite: "200",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    obtencao: "NPC Oracle na Village"
  },
  {
    moeda: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2621.webp" },
    nome: "Moeda de Shaman Sem Habilidades com Estrela",
    limite: "200",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    obtencao: "NPC Oracle na Village"
  },
  {
    moeda: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2506.webp" },
    nome: "Moeda de Racing com Estrela",
    limite: "200",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    obtencao: "NPC Buffy na Village"
  },
  {
    moeda: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2507.webp" },
    nome: "Moeda de Survivor com Estrela",
    limite: "200",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    obtencao: "NPC Von Drekkemaus na Village"
  },
  {
    moeda: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2508.webp" },
    nome: "Moeda de Bootcamp com Estrela",
    limite: "200",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    obtencao: "NPC Cassidy na Village"
  },
  {
    moeda: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2509.webp" },
    nome: "Moeda de Defilante com Estrela",
    limite: "200",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    obtencao: "NPC Delphilante na Village"
  }
];

const baus = [
  { categoria: "Baú", nome: "Nome", limite: "Limite", trocavel: "Trocável", recompensas: "Recompensas" },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp" },
    nome: "Baú Global",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#global" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp" },
    nome: "Baú de Natal",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#natal" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2475.webp" },
    nome: "Baú do Abraço",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#abraço" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2476.webp" },
    nome: "Baú do Dinossauro",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#dino" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2477.webp" },
    nome: "Baú do Dragão",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#dragao" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2478.webp" },
    nome: "Baú de Carnaval",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#carnaval" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2479.webp" },
    nome: "Baú de Chuva",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#chuva" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2480.webp" },
    nome: "Baú do Armagedom",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#armagedom" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2481.webp" },
    nome: "Baú de Restaurante",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#cozinha" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp" },
    nome: "Baú de Pescaria",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp" },
    nome: "Baú de Volta às Aulas",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#escola" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp" },
    nome: "Baú de Halloween",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2485.webp" },
    nome: "Baú de São Patrício",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#patricio" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2486.webp" },
    nome: "Baú do Mago",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#magia" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp" },
    nome: "Baú de Páscoa",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2488.webp" },
    nome: "Baú de Jardinagem",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#jardinagem" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2489.webp" },
    nome: "Baú de Epifania",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#epifania" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2490.webp" },
    nome: "Baú Astrológico",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#astrologico" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp" },
    nome: "Baú dos Namorados",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2492.webp" },
    nome: "Baú da Marmota",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#marmota" }
  },
  {
    bau: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2493.webp" },
    nome: "Baú do Piloto",
    limite: "5",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    recompensas: { tipo: "link", texto: "Clique aqui", url: "https://www.area801.com/p/baus-do-transformice.html#piloto" }
  }
];

const arremessaveis = [
  { categoria: "Objeto", nome: "Nome", limite: "Limite", colidivel: "Colidível", efeito: "Efeito", aparencia: "Aparência" },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/1.webp" },
    nome: "Baiacu",
    limite: "80",
    colidivel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Lança um baiacu",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/arremessaveis/Baiacu.webp", width: 50 }
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/6.webp" },
    nome: "Bola de Neve",
    limite: "80",
    colidivel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Lança uma bola de neve que empurra a pessoa atingida",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/arremessaveis/Neve.webp", width: 45 }
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/11.webp" },
    nome: "Lápide",
    limite: "80",
    colidivel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Invoca uma lápide que mata você no processo. Ela desaparece depois de 10 segundos, e só pode ser jogada quando alguém entrar na toca",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/arremessaveis/Lapide.webp", width: 50 }
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2250.webp" },
    nome: "Orbe de Energia",
    limite: "80",
    colidivel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Lança uma orbe de energia",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/arremessaveis/Energia.webp", width: 65 }
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2578.webp" },
    nome: "Trampolim",
    limite: "10",
    colidivel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Invoca um trampolim que possui as mesmas propriedades do item de Shaman em questão",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/arremessaveis/Trampolim.webp", width: 75 }
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2579.webp" },
    nome: "Caixa Grande Invisível",
    limite: "10",
    colidivel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    efeito: "Invoca uma caixa grande invisível que possui as mesmas propriedades do item de Shaman em questão",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/arremessaveis/Caixa.webp", width: 50 }
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/5.webp" },
    nome: "Bola",
    limite: "80",
    colidivel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Lança uma bola que possui as mesmas propriedades do item de Shaman em questão",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/arremessaveis/Bola.webp", width: 50 }
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/8.webp" },
    nome: "Abóbora",
    limite: "80",
    colidivel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Lança uma abóbora que remete ao Jack-o'-lantern",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/arremessaveis/Abobora.webp", width: 50 }
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/20.webp" },
    nome: "Galinha",
    limite: "80",
    colidivel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Lança uma galinha assustada",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/arremessaveis/Galinha.webp", width: 75 }
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/25.webp" },
    nome: "Avião de Papel",
    limite: "80",
    colidivel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    efeito: "Lança um avião de papel que faz um círculo até chegar na posição de quem arremessou",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/arremessaveis/Aviao.webp", width: 50 }
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/26.webp" },
    nome: "Bola de Papel",
    limite: "80",
    colidivel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Lança uma bola de papel amassada",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/arremessaveis/Papel.webp", width: 50 }
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/24.webp" },
    nome: "Peixe",
    limite: "80",
    colidivel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    efeito: "Invoca um peixe que morre depois de alguns segundos",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/arremessaveis/Peixe.webp", width: 85 }
  }
];

const fogosArtificio = [
  { categoria: "Fogos", nome: "Nome", limite: "Limite", trocavel: "Trocável", efeito: "Efeito" },
  {
    fogos: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2.webp" },
    nome: "Fogos de Artifício Azuis",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Solta fogos de artifício azuis sobre a sua cabeça em formato circular"
  },
  {
    fogos: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/3.webp" },
    nome: "Fogos de Artifício Rosa",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Solta fogos de artifício rosa sobre a sua cabeça em formato de coração"
  },
  {
    fogos: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/16.webp" },
    nome: "Fogos de Artifício Floco de Neve",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Solta fogos de artifício branco sobre a sua cabeça em formato de floco de neve"
  },
  {
    fogos: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/23.webp" },
    nome: "Fogos de Artifício Amarelos",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Solta fogos de artifício amarelos sobre a sua cabeça em formato circular"
  },
  {
    fogos: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/0.webp" },
    nome: "Fogos de Artifício Amarelos (Iniciantes)",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    efeito: "Solta fogos de artifício amarelos sobre a sua cabeça em formato circular. A diferença é que esse consumível é oferecido para jogadores novos, além de não ser negociável"
  }
];

const wallpapers = [
  { categoria: "Banner", nome: "Nome", limite: "Limite", trocavel: "Trocável", efeito: "Efeito" },
  {
    banner: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2616.webp" },
    nome: "Banner da Elisah",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: { tipo: "texto-links", texto: "Abre a página do Transformice no seu navegador com a imagem do Banner do Armagedom 2024. Escolha entre ", link1: { texto: "PNG", url: "https://www.transformice.com/images/wallpaper/elisah.png" }, link2: { texto: "JPG", url: "https://www.transformice.com/images/wallpaper/elisah.jpg" } }
  },
  {
    banner: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2619.webp" },
    nome: "Banner de Jardinagem",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: { tipo: "texto-links", texto: "Abre a página do Transformice no seu navegador com a imagem do Banner de Jardinagem 2024. Escolha entre ", link1: { texto: "PNG", url: "https://www.transformice.com/images/wallpaper/potager.png" }, link2: { texto: "JPG", url: "https://www.transformice.com/images/wallpaper/potager.jpg" } }
  },
  {
    banner: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2623.webp" },
    nome: "Banner do Mago",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: { tipo: "texto-links", texto: "Abre a página do Transformice no seu navegador com a imagem do Banner do Mago 2024. Escolha entre ", link1: { texto: "PNG", url: "https://www.transformice.com/images/wallpaper/ecole.png" }, link2: { texto: "JPG", url: "https://www.transformice.com/images/wallpaper/ecole.jpg" } }
  },
  {
    banner: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2582.webp" },
    nome: "Banner de Pescaria",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: { tipo: "texto-links", texto: "Abre a página do Transformice no seu navegador com a imagem do Banner de Pescaria 2023. Escolha entre ", link1: { texto: "PNG", url: "https://www.transformice.com/images/wallpaper/fishing.png" }, link2: { texto: "JPG", url: "https://www.transformice.com/images/wallpaper/fishing.jpg" } }
  }
];

const pinceis = [
  { categoria: "Pincel", nome: "Nome", limite: "Limite", trocavel: "Trocável", efeito: "Efeito" },
  {
    pincel: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2252.webp" },
    nome: "Pincel Verde",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: { tipo: "cor", texto: "Transforma o ponteiro do seu mouse em um pincel da cor ", cor: "#56C93E", codigo: "#56C93E" }
  },
  {
    pincel: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2256.webp" },
    nome: "Pincel Vermelho",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: { tipo: "cor", texto: "Transforma o ponteiro do seu mouse em um pincel da cor ", cor: "#C93E4A", codigo: "#C93E4A" }
  },
  {
    pincel: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2349.webp" },
    nome: "Pincel Azul",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: { tipo: "cor", texto: "Transforma o ponteiro do seu mouse em um pincel da cor ", cor: "#52BBFB", codigo: "#52BBFB" }
  },
  {
    pincel: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2379.webp" },
    nome: "Pincel Laranja",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: { tipo: "cor", texto: "Transforma o ponteiro do seu mouse em um pincel da cor ", cor: "#FF8400", codigo: "#FF8400" }
  },
  {
    pincel: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2513.webp" },
    nome: "Pincel Roxo",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: { tipo: "cor", texto: "Transforma o ponteiro do seu mouse em um pincel da cor ", cor: "#AD42E3", codigo: "#AD42E3" }
  },
  {
    pincel: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2514.webp" },
    nome: "Pincel Amarelo",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: { tipo: "cor", texto: "Transforma o ponteiro do seu mouse em um pincel da cor ", cor: "#F2C82E", codigo: "#F2C82E" }
  },
  {
    pincel: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2634.webp" },
    nome: "Pincel Branco",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: { tipo: "cor", texto: "Transforma o ponteiro do seu mouse em um pincel da cor ", cor: "#FFFFFF", codigo: "#FFFFFF" }
  },
  {
    pincel: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2635.webp" },
    nome: "Pincel Preto",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: { tipo: "cor", texto: "Transforma o ponteiro do seu mouse em um pincel da cor ", cor: "#000000", codigo: "#000000" }
  },
  {
    pincel: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2637.webp" },
    nome: "Pincel Rosa",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: { tipo: "cor", texto: "Transforma o ponteiro do seu mouse em um pincel da cor ", cor: "#FE50BC", codigo: "#FE50BC" }
  }
];

const sprays = [
  { categoria: "Spray", nome: "Nome", limite: "Limite", trocavel: "Trocável", efeito: "Efeito", aparencia: "Aparência" },
  {
    spray: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/4.webp" },
    nome: "Spray de Queijo",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Você realiza uma pichação de queijo",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/tags/Queijo.webp", width: 50 }
  },
  {
    spray: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/tags/Tag_Abobora.webp" },
    nome: "Spray de Abóbora",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Você realiza uma pichação de abóbora",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/tags/Abobora.webp", width: 50 }
  },
  {
    spray: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/tags/Tag_Presente.webp" },
    nome: "Spray de Presente",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Você realiza uma pichação de presente",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/tags/Presente.webp", width: 50 }
  },
  {
    spray: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/tags/Tag_Ovo.webp" },
    nome: "Spray de Ovo",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Você realiza uma pichação de ovo",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/tags/Ovo.webp", width: 50 }
  },
  {
    spray: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/tags/Tag_Aulas.webp" },
    nome: "Spray de Rato",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Você realiza uma pichação de rato",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/tags/Aulas.webp", width: 50 }
  },
  {
    spray: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/tags/Tag_Morcego.webp" },
    nome: "Spray de Morcego",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Você realiza uma pichação de morcego",
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/tags/Morcego.webp", width: 50 }
  }
];

const selfie = [
  { categoria: "Objeto", nome: "Nome", limite: "Limite", trocavel: "Trocável", efeito: "Efeito" },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/21.webp" },
    nome: "Selfie",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Permite que você tire uma foto do seu rato, sozinho ou com outros jogadores, para capturar momentos especiais durante a partida. É possível salvar a fotografia no seu computador"
  }
];

const cartas = [
  { categoria: "Carta", nome: "Nome", limite: "Limite", trocavel: "Trocável", aparencia: "Aparência" },
  {
    carta: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/29.webp" },
    nome: "Carta de Halloween",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/cartas/Halloween.webp", width: 75 }
  },
  {
    carta: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/30.webp" },
    nome: "Carta de Natal",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/cartas/Natal.webp", width: 75 }
  },
  {
    carta: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2241.webp" },
    nome: "Carta dos Namorados",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/cartas/Namorados.webp", width: 75 }
  },
  {
    carta: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2330.webp" },
    nome: "Carta de Jardinagem",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/cartas/Jardinagem.webp", width: 75 }
  },
  {
    carta: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2351.webp" },
    nome: "Carta de São Patrício",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/cartas/Patricio.webp", width: 75 }
  },
  {
    carta: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2522.webp" },
    nome: "Carta da Folha",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/cartas/Folha.webp", width: 75 }
  },
  {
    carta: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2576.webp" },
    nome: "Carta da Estufa",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/cartas/Estufa.webp", width: 75 }
  },
  {
    carta: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2581.webp" },
    nome: "Carta da Praia",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/cartas/Praia.webp", width: 75 }
  },
  {
    carta: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2585.webp" },
    nome: "Cartão-postal da Elisah",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/cartas/Elisah.webp", width: 75 }
  },
  {
    carta: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2591.webp" },
    nome: "Carta de Halloween",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/cartas/Halloween2.webp", width: 75 }
  },
  {
    carta: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2609.webp" },
    nome: "Carta das Nuvens",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/cartas/Nuvem.webp", width: 75 }
  },
  {
    carta: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2612.webp" },
    nome: "Carta Japonesa",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/cartas/Japonesa.webp", width: 75 }
  }
];

const visuais = [
  { categoria: "Pelo", nome: "Nome", limite: "Limite", trocavel: "Trocável", aparencia: "Aparência" },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/9.webp" },
    nome: "Esqueleto",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_10.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/19.webp" },
    nome: "Caixa de Leite",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_42.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2584.webp" },
    nome: "Origami",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_284.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2588.webp" },
    nome: "Vriska Serket",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_288.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2589.webp" },
    nome: "Preminger",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_287.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2607.webp" },
    nome: "Mewing",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_306.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2647.webp" },
    nome: "Caça-Fantasmas",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_363.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2648.webp" },
    nome: "Palhaço",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_364.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2652.webp" },
    nome: "Fantasia de Gato",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_375.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2656.webp" },
    nome: "Yoshi",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_387.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/13.webp" },
    nome: "Árvore de Natal",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_35.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/18.webp" },
    nome: "Coelhinho da Páscoa",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_16.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/22.webp" },
    nome: "Indiana Mouse",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_45.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/27.webp" },
    nome: "Abóbora",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_51.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2258.webp" },
    nome: "Dinossauro",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_66.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2308.webp" },
    nome: "Margarida",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_75.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2502.webp" },
    nome: "Gato de Botas",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_168.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2512.webp" },
    nome: "Elfo",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_174.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2523.webp" },
    nome: "Jardineiro",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_194.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2524.webp" },
    nome: "Jardineira",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_195.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2531.webp" },
    nome: "Sereia",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_202.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2533.webp" },
    nome: "Fantasma",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_211.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2540.webp" },
    nome: "Cupido",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_224.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2542.webp" },
    nome: "Leprechaun",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_230.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2543.webp" },
    nome: "Sansão",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_231.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2544.webp" },
    nome: "Coelho Branco",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_232.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2550.webp" },
    nome: "Cavaleiro",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_242.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2557.webp" },
    nome: "Ursinho de Pelúcia Natalino",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_257.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2573.webp" },
    nome: "Truffle",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_263.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2603.webp" },
    nome: "Spheal Natalino",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_294.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2614.webp" },
    nome: "Baguete",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_313.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2626.webp" },
    nome: "Espírito",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_327.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2630.webp" },
    nome: "Dragão",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_337.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2632.webp" },
    nome: "Balão Vermelho",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_345.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2640.webp" },
    nome: "Bucaneiro",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_353.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2641.webp" },
    nome: "Marinheiro",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_354.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2654.webp" },
    nome: "Fantasia de Pintinho",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_382.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/12.webp" },
    nome: "Vampiro",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_33.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/17.webp" },
    nome: "Pinguim",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_37.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2503.webp" },
    nome: "Minish",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_169.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2536.webp" },
    nome: "Mamãe Noel",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_218.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2537.webp" },
    nome: "Papai Noel",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_219.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2538.webp" },
    nome: "Boneco de Neve",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_220.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/407.webp" },
    nome: "Gato Preto e Branco",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_7.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2251.webp" },
    nome: "Elisah",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_61.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2439.webp" },
    nome: "Rena",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_118.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2515.webp" },
    nome: "Noiva",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_181.webp", width: 60 }
  },
  {
    pelo: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2516.webp" },
    nome: "Noivo",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/cores-pelos@main/pelos/Pelo_182.webp", width: 60 }
  }
];

const pets = [
  { categoria: "Animal", nome: "Nome", limite: "Limite", trocavel: "Trocável", aparencia: "Aparência" },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/31.webp" },
    nome: "Rena",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Rena.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/34.webp" },
    nome: "Anjo",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Anjo.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2240.webp" },
    nome: "Dragão",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Dragao.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2247.webp" },
    nome: "Sapo",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Sapo.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2262.webp" },
    nome: "Papagaio",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Papagaio.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2332.webp" },
    nome: "Lagarto de Língua Azul",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Lagarto.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2340.webp" },
    nome: "Fantasma",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Fantasma.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2437.webp" },
    nome: "Morcego",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Morcego.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2444.webp" },
    nome: "Cupido",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Cupido.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2520.webp" },
    nome: "Joaninha",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Joaninha.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2532.webp" },
    nome: "Pinhata de Burro",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Pinhata.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2539.webp" },
    nome: "Tigre",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Tigre.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2545.webp" },
    nome: "Pomba Derp",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Pomba.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2548.webp" },
    nome: "Dinossauro",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Dinossauro.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2551.webp" },
    nome: "Abelha",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Abelha.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2553.webp" },
    nome: "Tartaruga-marinha",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Tartaruga.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2554.webp" },
    nome: "Tubarão-baleia",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Tubarao.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2556.webp" },
    nome: "Foca",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Foca.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2575.webp" },
    nome: "Gafanhoto",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Gafanhoto.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2580.webp" },
    nome: "Cavalo-marinho",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Cavalo.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2586.webp" },
    nome: "Coruja",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Coruja.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2590.webp" },
    nome: "Cachorro-esqueleto",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Cachorro.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2602.webp" },
    nome: "Estrela",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Estrela.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2606.webp" },
    nome: "Guaxinim",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Guaxinim.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2618.webp" },
    nome: "Caracol",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Caracol.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2622.webp" },
    nome: "Fada",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Fada.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2625.webp" },
    nome: "Aranha",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Aranha.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2628.webp" },
    nome: "Furão",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Furao.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2633.webp" },
    nome: "Leão de Festa",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Leao.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2638.webp" },
    nome: "Unicórnio de Pelúcia",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Unicornio.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2642.webp" },
    nome: "Peixe",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Peixe.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2643.webp" },
    nome: "Minhoca",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Minhoca.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2650.webp" },
    nome: "Raposa",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Raposa.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2657.webp" },
    nome: "Coelho",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Coelho.webp", width: 35 }
  },
  {
    animal: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2659.webp" },
    nome: "Polvo",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    aparencia: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/pets/Polvo.webp", width: 35 }
  }
];

const outros = [
  { categoria: "Objeto", nome: "Nome", limite: "Limite", trocavel: "Trocável", efeito: "Efeito" },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2498.webp" },
    nome: "Presente",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Recompensa o jogador com 1 a 2 queijos, 1 ticket dourado ou 1 a 6 conchas"
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2378.webp" },
    nome: "Folhas",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Faz com que folhas de outono girem em torno do seu rato"
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/14.webp" },
    nome: "Neve",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Faz com que neve comece a cair em cima do seu rato. Dura entre 8 a 10 segundos"
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/15.webp" },
    nome: "Rato de Neve",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Invoca um rato de neve no lugar que você usou o consumível"
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/32.webp" },
    nome: "Signo do Zodíaco",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Mostra o seu queijo astrológico. Útil quando o Evento Astrológico acontece"
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/35.webp" },
    nome: "Balão de Ar Quente",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Lança um balão de ar quente com uma medalha aleatória do seu perfil"
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2234.webp" },
    nome: "Microfone de Jigglypuff",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Faz com que o seu rato comece a cantar no microfone, colocando todos ao seu redor para dormir"
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2246.webp" },
    nome: "Dança de Carnaval",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Faz com que o seu rato realize uma dança de Samba"
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/10.webp" },
    nome: "Visgo",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Faz com que um visgo apareça na cabeça do seu rato. Os ratos que estiverem próximos do consumível irão mandar um beijo"
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/28.webp" },
    nome: "Fogueira",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Invoca uma fogueira no lugar que você usou o consumível"
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/33.webp" },
    nome: "Língua de Sogra",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Faz com que o seu rato assopre uma língua de sogra"
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2232.webp" },
    nome: "Rastro de Arco-íris",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Faz com que um arco-íris siga o seu rastro por 10 segundos"
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2239.webp" },
    nome: "Contador de Queijos na Loja",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Faz com que um contador mostre a quantidade de queijos que você tem na loja por 3 segundos"
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2255.webp" },
    nome: "Dado",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Faz com que o seu rato segure um dado de 6 lados"
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2259.webp" },
    nome: "Contador de Tempo",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Faz com que um contador mostre a quantidade de dias que a sua conta ficou online no jogo"
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2346.webp" },
    nome: "Pétalas de Rosa",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Faz com que pétalas de rosas e corações sigam o seu rastro por 10 segundos"
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/7.webp" },
    nome: "Biscoito da Sorte",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Não tem utilidade nos momentos atuais, porém no Halloween 2014 era possível usar para ganhar um coração"
  },
  {
    objeto: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2447.webp" },
    nome: "Spray Kickstarter",
    limite: "80",
    trocavel: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Check.webp" },
    efeito: "Você realiza uma pichação do Kickstarter, programa que foi fonte principal de doações para o projeto do Transformice Adventures"
  }
];

function criarTabelaConsumiveis(secaoId, dados, tipo = "normal") {
  const secao = document.getElementById(secaoId);
  if (!secao) return;

  const containerExistente = secao.querySelector(".tabela-personalizada");
  if (containerExistente) {
    containerExistente.remove();
  }

  const container = document.createElement("div");
  container.className = `tabela-personalizada tabela-${tipo}`;

  const tabela = document.createElement("table");
  const tbody = document.createElement("tbody");

  dados.forEach((item, index) => {
    const tr = document.createElement("tr");

    if (index === 0) {
      const colunas = Object.keys(item);
      colunas.forEach((col) => {
        const td = document.createElement("td");
        td.textContent = item[col];
        tr.appendChild(td);
      });
    } else {
      Object.keys(item).forEach((chave) => {
        const td = document.createElement("td");
        const valor = item[chave];

        if (typeof valor === "object" && valor !== null && valor.imagem && !valor.tipo) {
          const img = document.createElement("img");
          img.src = valor.imagem;
          if (valor.width) img.width = valor.width;
          td.appendChild(img);
        }
        else if (typeof valor === "object" && valor !== null && valor.tipo === "imagem") {
          const img = document.createElement("img");
          img.src = valor.conteudo;
          td.appendChild(img);
        }
        else if (typeof valor === "object" && valor !== null && valor.tipo === "link") {
          const a = document.createElement("a");
          a.href = valor.url;
          a.target = "_blank";
          a.textContent = valor.texto;
          td.appendChild(a);
        }
        else if (typeof valor === "object" && valor !== null && valor.tipo === "texto-links") {
          const texto = document.createTextNode(valor.texto);
          td.appendChild(texto);
          
          const a1 = document.createElement("a");
          a1.href = valor.link1.url;
          a1.target = "_blank";
          a1.textContent = valor.link1.texto;
          td.appendChild(a1);
          
          const textoOu = document.createTextNode(" ou ");
          td.appendChild(textoOu);
          
          const a2 = document.createElement("a");
          a2.href = valor.link2.url;
          a2.target = "_blank";
          a2.textContent = valor.link2.texto;
          td.appendChild(a2);
        }
        else if (typeof valor === "object" && valor !== null && valor.tipo === "cor") {
          const texto = document.createTextNode(valor.texto);
          td.appendChild(texto);
          
          const font = document.createElement("font");
          font.color = valor.cor;
          const strong = document.createElement("strong");
          strong.textContent = valor.codigo;
          font.appendChild(strong);
          td.appendChild(font);
        }
        else {
          td.textContent = valor;
        }

        tr.appendChild(td);
      });
    }

    tbody.appendChild(tr);
  });

  tabela.appendChild(tbody);
  container.appendChild(tabela);
  secao.appendChild(container);
}

criarTabelaConsumiveis("moedas", moedas, "default");
criarTabelaConsumiveis("baus", baus, "default");
criarTabelaConsumiveis("arremessaveis", arremessaveis, "extra");
criarTabelaConsumiveis("artificio", fogosArtificio, "default");
criarTabelaConsumiveis("wallpapers", wallpapers, "default");
criarTabelaConsumiveis("pinceis", pinceis, "default");
criarTabelaConsumiveis("sprays", sprays, "extra");
criarTabelaConsumiveis("selfie", selfie, "default");
criarTabelaConsumiveis("cartas", cartas, "default");
criarTabelaConsumiveis("visuais", visuais, "default");
criarTabelaConsumiveis("pets", pets, "default");
criarTabelaConsumiveis("outros", outros, "default");
