const esferasIniciante = [
  { categoria: "Nº", esfera: "Esfera", arvore: "Árvore de Habilidades", lancamento: "Lançamento" },
  {
    id: "0",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/0.webp", width: 67 },
    arvore: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    lancamento: "28 de junho de 2013"
  },
  {
    id: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/Espiritual.webp", width: 66 },
    arvore: { tipo: "texto", conteudo: "Guia Espiritual" },
    lancamento: "28 de junho de 2013"
  },
  {
    id: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/Vento.webp", width: 70 },
    arvore: { tipo: "texto", conteudo: "Mestre do Vento" },
    lancamento: "28 de junho de 2013"
  },
  {
    id: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/Mecanico.webp", width: 70 },
    arvore: { tipo: "texto", conteudo: "Mecânico" },
    lancamento: "28 de junho de 2013"
  },
  {
    id: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/Selvagem.webp", width: 80 },
    arvore: { tipo: "texto", conteudo: "Selvagem" },
    lancamento: "21 de fevereiro de 2015"
  },
  {
    id: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/Fisico.webp", width: 85 },
    arvore: { tipo: "texto", conteudo: "Físico" },
    lancamento: "21 de fevereiro de 2015"
  }
];

const esferasVillage = [
  { categoria: "Nº", esfera: "Esfera", preco: "Preço", npc: "NPC", evento: "Evento", lancamento: "Lançamento" },
  {
    id: "16",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/16.webp", width: 77 },
    preco: { tipo: "moeda", quantidade: 150, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2253.webp" },
    npc: "Oracle",
    evento: { tipo: "link", texto: "Shaman", url: "https://www.area801.com/2016/03/novidade-moedas-de-pena.html" },
    lancamento: "24 de março de 2016"
  },
  {
    id: "17",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/17.webp", width: 81 },
    preco: { tipo: "moeda", quantidade: 150, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2254.webp" },
    npc: "Buffy",
    evento: { tipo: "link", texto: "Racing", url: "https://www.area801.com/2016/04/transformice-evento-racing.html" },
    lancamento: "1 de abril de 2016"
  },
  {
    id: "18",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/18.webp", width: 90 },
    preco: { tipo: "texto", conteudo: "Não aplicável" },
    npc: "Não aplicável",
    evento: { tipo: "texto", conteudo: "Não aplicável" },
    lancamento: "Não lançada"
  },
  {
    id: "19",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/19.webp", width: 86 },
    preco: { tipo: "texto", conteudo: "Não aplicável" },
    npc: "Não aplicável",
    evento: { tipo: "texto", conteudo: "Não aplicável" },
    lancamento: "Não lançada"
  },
  {
    id: "21",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/21.webp", width: 98 },
    preco: { tipo: "moeda", quantidade: 150, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2253.webp" },
    npc: "Oracle",
    evento: { tipo: "link", texto: "6º Aniversário", url: "https://www.area801.com/2016/04/transformice-aniversario-de-6-anos.html" },
    lancamento: "29 de abril de 2016"
  },
  {
    id: "22",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/22.webp", width: 97 },
    preco: { tipo: "moeda", quantidade: 150, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" },
    npc: "Von Drekkemaus",
    evento: { tipo: "link", texto: "Ninja", url: "https://www.area801.com/2016/05/transformice-evento-ninja-e-moedas-novas.html" },
    lancamento: "13 de maio de 2016"
  },
  {
    id: "23",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/23.webp", width: 70 },
    preco: { tipo: "moeda", quantidade: 150, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2261.webp" },
    npc: "Cassidy",
    evento: { tipo: "link", texto: "Ninja", url: "https://www.area801.com/2016/05/transformice-evento-ninja-e-moedas-novas.html" },
    lancamento: "13 de maio de 2016"
  },
  {
    id: "24",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/24.webp", width: 82 },
    preco: { tipo: "moeda", quantidade: 150, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2253.webp" },
    npc: "Oracle",
    evento: { tipo: "link", texto: "Pirata", url: "https://www.area801.com/2016/05/transformice-evento-pirata-2016.html" },
    lancamento: "27 de maio de 2016"
  },
  {
    id: "28",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/28.webp", width: 99 },
    preco: { tipo: "moeda", quantidade: 150, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2253.webp" },
    npc: "Oracle",
    evento: { tipo: "link", texto: "Halloween", url: "https://www.area801.com/2016/10/transformice-evento-de-halloween-2016_14.html" },
    lancamento: "14 de outubro de 2016"
  },
  {
    id: "48",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/48.webp", width: 105 },
    preco: { tipo: "moeda", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2504.webp" },
    npc: "Delphilante",
    evento: { tipo: "link", texto: "Introdução ao NPC Delphilante", url: "#" },
    lancamento: "22 de outubro de 2020"
  },
  {
    id: "60",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/60.webp", width: 124 },
    preco: { tipo: "moeda", quantidade: 10, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2505.webp" },
    npc: "Oracle",
    evento: { tipo: "link", texto: "12º Aniversário", url: "#" },
    lancamento: "28 de abril de 2022"
  }
];

const esferasEventos = [
  { categoria: "Nº", esfera: "Esfera", evento: "Evento", bau: "Baú", lancamento: "Lançamento" },
  {
    id: "1",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/1.webp", width: 76 },
    evento: "Natal",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" },
    lancamento: "4 de dezembro de 2015"
  },
  {
    id: "2",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/2.webp", width: 70 },
    evento: "Natal",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" },
    lancamento: "4 de dezembro de 2015"
  },
  {
    id: "3",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/3.webp", width: 67 },
    evento: "Natal",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" },
    lancamento: "4 de dezembro de 2015"
  },
  {
    id: "4",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/4.webp", width: 77 },
    evento: "Astrológico",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" },
    lancamento: "1 de janeiro de 2016"
  },
  {
    id: "5",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/5.webp", width: 80 },
    evento: "Epifania",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2489.webp", url: "https://www.area801.com/p/baus-do-transformice.html#epifania" },
    lancamento: "8 de janeiro de 2016"
  },
  {
    id: "6",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/6.webp", width: 73 },
    evento: "Balão de Ar Quente",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2493.webp", url: "https://www.area801.com/p/baus-do-transformice.html#piloto" },
    lancamento: "15 de janeiro de 2016"
  },
  {
    id: "7",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/7.webp", width: 80 },
    evento: "Abraço",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2475.webp", url: "https://www.area801.com/p/baus-do-transformice.html#abra%C3%A7o" },
    lancamento: "22 de janeiro de 2016"
  },
  {
    id: "8",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/8.webp", width: 78 },
    evento: "Marmota",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2492.webp", url: "https://www.area801.com/p/baus-do-transformice.html#marmota" },
    lancamento: "29 de janeiro de 2016"
  },
  {
    id: "9",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/9.webp", width: 91 },
    evento: "Dragão",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2477.webp", url: "https://www.area801.com/p/baus-do-transformice.html#dragao" },
    lancamento: "5 de fevereiro de 2016"
  },
  {
    id: "10",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/10.webp", width: 86 },
    evento: "Dia dos Namorados",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" },
    lancamento: "12 de fevereiro de 2016"
  },
  {
    id: "11",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/11.webp", width: 87 },
    evento: "Carnaval",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2478.webp", url: "https://www.area801.com/p/baus-do-transformice.html#carnaval" },
    lancamento: "19 de fevereiro de 2016"
  },
  {
    id: "12",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/12.webp", width: 86 },
    evento: "Chuva",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2479.webp", url: "https://www.area801.com/p/baus-do-transformice.html#chuva" },
    lancamento: "26 de fevereiro de 2016"
  },
  {
    id: "13",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/13.webp", width: 91 },
    evento: "Armagedom",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2480.webp", url: "https://www.area801.com/p/baus-do-transformice.html#armagedom" },
    lancamento: "4 de março de 2016"
  },
  {
    id: "14",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/14.webp", width: 87 },
    evento: "Dia de São Patrício",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2485.webp", url: "https://www.area801.com/p/baus-do-transformice.html#patricio" },
    lancamento: "11 de março de 2016"
  },
  {
    id: "15",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/15.webp", width: 83 },
    evento: "Restaurante",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2481.webp", url: "https://www.area801.com/p/baus-do-transformice.html#cozinha" },
    lancamento: "18 de março de 2016"
  },
  {
    id: "20",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/20.webp", width: 83 },
    evento: "Dinossauro",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2476.webp", url: "https://www.area801.com/p/baus-do-transformice.html#dino" },
    lancamento: "15 de abril de 2016"
  },
  {
    id: "25",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/25.webp", width: 111 },
    evento: "Pescaria",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" },
    lancamento: "10 de junho de 2016"
  },
  {
    id: "26",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/26.webp", width: 91 },
    evento: "Jardinagem",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2488.webp", url: "https://www.area801.com/p/baus-do-transformice.html#jardinagem" },
    lancamento: "1 de julho de 2016"
  },
  {
    id: "27",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/27.webp", width: 91 },
    evento: "Volta às Aulas",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", url: "https://www.area801.com/p/baus-do-transformice.html#escola" },
    lancamento: "2 de setembro de 2016"
  },
  {
    id: "29",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/29.webp", width: 87 },
    evento: "Pescaria",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" },
    lancamento: "2 de junho de 2017"
  },
  {
    id: "30",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/30.webp", width: 93 },
    evento: "Mago",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2486.webp", url: "https://www.area801.com/p/baus-do-transformice.html#magia" },
    lancamento: "28 de julho de 2017"
  },
  {
    id: "31",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/31.webp", width: 95 },
    evento: "Halloween",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" },
    lancamento: "29 de setembro de 2017"
  },
  {
    id: "32",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/32.webp", width: 97 },
    evento: "Natal",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" },
    lancamento: "1 de dezembro de 2017"
  },
  {
    id: "33",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/33.webp", width: 88 },
    evento: "Armagedom",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2480.webp", url: "https://www.area801.com/p/baus-do-transformice.html#armagedom" },
    lancamento: "16 de fevereiro de 2018"
  },
  {
    id: "34",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/34.webp", width: 82 },
    evento: "Dia dos Namorados",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" },
    lancamento: "16 de fevereiro de 2018"
  },
  {
    id: "35",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/35.webp", width: 119 },
    evento: "Halloween",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" },
    lancamento: "4 de outubro de 2018"
  },
  {
    id: "36",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/36.webp", width: 117 },
    evento: "Dia dos Mortos",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" },
    lancamento: "2 de novembro de 2018"
  },
  {
    id: "37",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/37.webp", width: 116 },
    evento: "Natal",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" },
    lancamento: "13 de dezembro de 2018"
  },
  {
    id: "38",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/38.webp", width: 108 },
    evento: "Astrológico",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2490.webp", url: "https://www.area801.com/p/baus-do-transformice.html#astrologico" },
    lancamento: "3 de janeiro de 2019"
  },
  {
    id: "39",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/39.webp", width: 94 },
    evento: "Epifania",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2489.webp", url: "https://www.area801.com/p/baus-do-transformice.html#epifania" },
    lancamento: "17 de janeiro de 2019"
  },
  {
    id: "40",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/40.webp", width: 111 },
    evento: "Dia dos Namorados",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" },
    lancamento: "14 de fevereiro de 2019"
  },
  {
    id: "41",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/41.webp", width: 104 },
    evento: "Dia de São Patrício",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2485.webp", url: "https://www.area801.com/p/baus-do-transformice.html#patricio" },
    lancamento: "14 de março de 2019"
  },
  {
    id: "42",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/42.webp", width: 115 },
    evento: "Páscoa",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" },
    lancamento: "11 de abril de 2019"
  },
  {
    id: "43",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/43.webp", width: 88 },
    evento: "Halloween",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" },
    lancamento: "17 de outubro de 2019"
  },
  {
    id: "44",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/44.webp", width: 87 },
    evento: "Natal",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" },
    lancamento: "13 de dezembro de 2019"
  },
  {
    id: "45",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/45.webp", width: 106 },
    evento: "Chaostmas",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" },
    lancamento: "26 de dezembro de 2019"
  },
  {
    id: "46",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/46.webp", width: 87 },
    evento: "Dia dos Namorados",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" },
    lancamento: "13 de fevereiro de 2020"
  },
  {
    id: "47",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/47.webp", width: 103 },
    evento: "Pescaria",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" },
    lancamento: "9 de julho de 2020"
  },
  {
    id: "49",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/49.webp", width: 124 },
    evento: "Halloween",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" },
    lancamento: "22 de outubro de 2020"
  },
  {
    id: "50",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/50.webp", width: 87 },
    evento: "Natal",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" },
    lancamento: "17 de dezembro de 2020",
  },
  {
    id: "51",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/51.webp", width: 85 },
    evento: "Chuva",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2479.webp", url: "https://www.area801.com/p/baus-do-transformice.html#chuva" },
    lancamento: "25 de março de 2021",
  },
  {
    id: "52",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/52.webp", width: 93 },
    evento: "Estufa da Fleur",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2488.webp", url: "https://www.area801.com/p/baus-do-transformice.html#jardinagem" },
    lancamento: "27 de maio de 2021",
  },
  {
    id: "53",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/53.webp", width: 99 },
    evento: "Pescaria",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" },
    lancamento: "23 de julho de 2021",
  },
  {
    id: "54",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/54.webp", width: 84 },
    evento: "Halloween",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" },
    lancamento: "21 de outubro de 2021",
  },
  {
    id: "55",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/55.webp", width: 77 },
    evento: "Chaminé de Natal",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" },
    lancamento: "9 de dezembro de 2021",
  },
  {
    id: "56",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/56.webp", width: 90 },
    evento: "Natal",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" },
    lancamento: "17 de dezembro de 2021",
  },
  {
    id: "57",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/57.webp", width: 122 },
    evento: "Ano Novo Chinês",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2477.webp", url: "https://www.area801.com/p/baus-do-transformice.html#dragao" },
    lancamento: "13 de janeiro de 2022",
  },
  {
    id: "58",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/58.webp", width: 91 },
    evento: "Dia de São Patrício",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2485.webp", url: "https://www.area801.com/p/baus-do-transformice.html#patricio" },
    lancamento: "17 de março de 2022",
  },
  {
    id: "59",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/59.webp", width: 107 },
    evento: "Arquipélago Caveira do Coelho",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" },
    lancamento: "24 de março de 2022",
  },
  {
    id: "61",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/61.webp", width: 94 },
    evento: "Jardinagem",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2488.webp", url: "https://www.area801.com/p/baus-do-transformice.html#jardinagem" },
    lancamento: "14 de julho de 2022",
  },
  {
    id: "62",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/62.webp", width: 97 },
    evento: "Debaixo do Mar",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" },
    lancamento: "5 de agosto de 2022",
  },
  {
    id: "63",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/63.webp", width: 78 },
    evento: "Halloween",
    bau: {tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" },
    lancamento: "13 de outubro de 2022",
  },
  {
    id: "64",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/64.webp", width: 84 },
    evento: "A Orquestra",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2478.webp", url: "https://www.area801.com/p/baus-do-transformice.html#carnaval" },
    lancamento: "11 de novembro de 2022",
  },
  {
    id: "65",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/65.webp", width: 79 },
    evento: "Natal",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" },
    lancamento: "16 de dezembro de 2022",
  },
  {
    id: "66",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/66.webp", width: 84 },
    evento: "Arquipélago Cauda do Coelho",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" },
    lancamento: "16 de março de 2023",
  },
  {
    id: "67",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/67.webp", width: 83 },
    evento: "Estufa da Fleur",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2488.webp", url: "https://www.area801.com/p/baus-do-transformice.html#jardinagem" },
    lancamento: "18 de maio de 2023",
  },
  {
    id: "68",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/68.webp", width: 83 },
    evento: "Pescaria",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" },
    lancamento: "29 de junho de 2023",
  },
  {
    id: "69",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/69.webp", width: 79 },
    evento: "Volta às Aulas",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", url: "https://www.area801.com/p/baus-do-transformice.html#escola" },
    lancamento: "14 de setembro de 2023",
  },
  {
    id: "70",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/70.webp", width: 78 },
    evento: "Halloween",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" },
    lancamento: "20 de outubro de 2023",
  },
  {
    id: "71",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/71.webp", width: 80 },
    evento: "Natal",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" },
    lancamento: "14 de dezembro de 2023",
  },
  {
    id: "72",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/72.webp", width: 97 },
    evento: "Dia dos Namorados",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" },
    lancamento: "8 de fevereiro de 2024",
  },
  {
    id: "73",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/73.webp", width: 81 },
    evento: "Ninja",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2479.webp", url: "https://www.area801.com/p/baus-do-transformice.html#chuva" },
    lancamento: "16 de maio de 2024",
  },
  {
    id: "74",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/74.webp", width: 89 },
    evento: "Restaurante",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2481.webp", url: "https://www.area801.com/p/baus-do-transformice.html#cozinha" },
    lancamento: "6 de junho de 2024",
  },
  {
    id: "75",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/75.webp", width: 73 },
    evento: "Jardinagem",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2488.webp", url: "https://www.area801.com/p/baus-do-transformice.html#jardinagem" },
    lancamento: "4 de julho de 2024",
  },
  {
    id: "76",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/76.webp", width: 98 },
    evento: "Bzzz",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2479.webp", url: "https://www.area801.com/p/baus-do-transformice.html#chuva" },
    lancamento: "1 de agosto de 2024",
  },
  {
    id: "77",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/77.webp", width: 96 },
    evento: "Mago",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2486.webp", url: "https://www.area801.com/p/baus-do-transformice.html#magia" },
    lancamento: "19 de setembro de 2024",
  },
  {
    id: "78",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/78.webp", width: 92 },
    evento: "Halloween",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" },
    lancamento: "24 de outubro de 2024",
  },
  {
    id: "79",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/79.webp", width: 81 },
    evento: "Natal",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" },
    lancamento: "12 de dezembro de 2024",
  },
  {
    id: "80",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/80.webp", width: 88 },
    evento: "Dragão",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2477.webp", url: "https://www.area801.com/p/baus-do-transformice.html#dragao" },
    lancamento: "13 de fevereiro de 2025",
  },
  {
    id: "81",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/81.webp", width: 79 },
    evento: "Dia de São Patrício",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2485.webp", url: "https://www.area801.com/p/baus-do-transformice.html#patricio" },
    lancamento: "6 de março de 2025",
  },
  {
    id: "82",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/82.webp", width: 100 },
    evento: "Transformaid",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2481.webp", url: "https://www.area801.com/p/baus-do-transformice.html#cozinha" },
    lancamento: "1 de abril de 2025",
  },
  {
    id: "83",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/83.webp", width: 71 },
    evento: "Páscoa",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" },
    lancamento: "10 de abril de 2025",
  },
  {
    id: "84",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/84.webp", width: 77 },
    evento: "15º Aniversário",
    bau: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" },
    lancamento: "1 de maio de 2025",
  },
  {
    id: "85",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/85.webp", width: 74 },
    evento: "Abraço",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2475.webp", url: "https://www.area801.com/p/baus-do-transformice.html#abra%C3%A7o" },
    lancamento: "5 de junho de 2025",
  },
  {
    id: "86",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/86.webp", width: 87 },
    evento: "Pescaria",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" },
    lancamento: "4 de julho de 2025",
  },
  {
    id: "87",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/87.webp", width: 109 },
    evento: "Astrológico",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2490.webp", url: "https://www.area801.com/p/baus-do-transformice.html#astrologico" },
    lancamento: "11 de setembro de 2025",
  },
  {
    id: "88",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/88.webp", width: 90 },
    evento: "Halloween",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" },
    lancamento: "16 de outubro de 2025",
  },
  {
    id: "89",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/89.webp", width: 91 },
    evento: "Carnaval",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2478.webp", url: "https://www.area801.com/p/baus-do-transformice.html#carnaval" },
    lancamento: "7 de novembro de 2025",
  },
  {
    id: "90",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/90.webp", width: 100 },
    evento: "Natal",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" },
    lancamento: "4 de dezembro de 2025",
  },
  {
    id: "91",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/91.webp", width: 104 },
    evento: "Dia dos Namorados",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" },
    lancamento: "5 de fevereiro de 2026",
  },
  {
    id: "92",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/92.webp", width: 86 },
    evento: "Chuva",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2479.webp", url: "https://www.area801.com/p/baus-do-transformice.html#chuva" },
    lancamento: "12 de março de 2026",
  },
  {
    id: "93",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/93.webp", width: 68 },
    evento: "Páscoa",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" },
    lancamento: "2 de abril de 2026",
  },
  {
    id: "94",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/94.webp", width: 75 },
    evento: "Dinossauro",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2476.webp", url: "https://www.area801.com/p/baus-do-transformice.html#dino" },
    lancamento: "7 de maio de 2026",
  },
  {
    id: "95",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/95.webp", width: 103 },
    evento: "Mago",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2486.webp", url: "https://www.area801.com/p/baus-do-transformice.html#magia" },
    lancamento: "4 de junho de 2026",
  },
  {
    id: "96",
    esfera: { imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/96.webp", width: 98 },
    evento: "Pescaria",
    bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" },
    lancamento: "2 de julho de 2026",
  },
];

function criarTabelaEsferas(secaoId, dados, tipo = "normal") {
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

        if (typeof valor === "object" && valor !== null && valor.tipo === "moeda") {
          const span = document.createElement("span");
          span.className = "click";

          const spanCount = document.createElement("span");
          spanCount.className = "count";

          const strong = document.createElement("strong");
          strong.textContent = valor.quantidade;
          spanCount.appendChild(strong);

          const img = document.createElement("img");
          img.src = valor.imagem;

          span.appendChild(spanCount);
          span.appendChild(img);
          td.appendChild(span);
        }
        else if (typeof valor === "object" && valor !== null && valor.tipo === "link") {
          const a = document.createElement("a");
          a.href = valor.url;
          a.target = "_blank";
          if (valor.imagem) {
            const img = document.createElement("img");
            img.src = valor.imagem;
            a.appendChild(img);
          } else {
            a.textContent = valor.texto;
          }
          td.appendChild(a);
        }
        else if (typeof valor === "object" && valor !== null && valor.tipo === "texto") {
          td.textContent = valor.conteudo;
        }
        else if (typeof valor === "object" && valor !== null && valor.tipo === "imagem") {
          const img = document.createElement("img");
          img.src = valor.conteudo;
          td.appendChild(img);
        }
        else if (typeof valor === "object" && valor !== null && valor.imagem) {
          const img = document.createElement("img");
          img.src = valor.imagem;
          if (valor.width) img.width = valor.width;
          td.appendChild(img);
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

criarTabelaEsferas("iniciante", esferasIniciante, "one");
criarTabelaEsferas("village", esferasVillage, "two");
criarTabelaEsferas("eventos", esferasEventos, "three");
