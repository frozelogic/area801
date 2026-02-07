const cells = document.querySelectorAll("tr td");
const widths = ["10%", "10%", "32%", "16%", "16%", "16%"];

cells.forEach((cell, index) => {
  cell.style.width = widths[index];
});

const itens = [
  { id: "global", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp", texto: "Baú Global" },
  { id: "astrologico", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2490.webp", texto: "Astrológico" },
  { id: "epifania", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2489.webp", texto: "Epifania" },
  { id: "piloto", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2493.webp", texto: "Piloto" },
  { id: "abraço", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2475.webp", texto: "Abraço" },
  { id: "marmota", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2492.webp", texto: "Marmota" },
  { id: "dragao", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2477.webp", texto: "Dragão" },
  { id: "namorados", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", texto: "Namorados" },
  { id: "carnaval", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2478.webp", texto: "Carnaval" },
  { id: "chuva", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2479.webp", texto: "Chuva" },
  { id: "armagedom", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2480.webp", texto: "Armagedom" },
  { id: "patricio", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2485.webp", texto: "São Patrício" },
  { id: "cozinha", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2481.webp", texto: "Restaurante" },
  { id: "pascoa", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", texto: "Páscoa" },
  { id: "dino", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2476.webp", texto: "Dinossauro" },
  { id: "pesca", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", texto: "Pescaria" },
  { id: "jardinagem", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2488.webp", texto: "Jardinagem" },
  { id: "escola", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", texto: "Volta às Aulas" },
  { id: "magia", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2486.webp", texto: "Mago" },
  { id: "halloween", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", texto: "Halloween" },
  { id: "natal", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", texto: "Natal" },
  { id: "normal", texto: "Sem Evento" },
];

itens.forEach((item) => {
  const td = document.getElementById(item.id);
  if (td) {
    if (item.imgSrc) {
      td.innerHTML = `<img src="${item.imgSrc}">${item.texto}`;
    } else {
      td.textContent = item.texto;
    }
  }
});

const npcs = [
  { id: "npc-global", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Indiana.webp", width: "55", texto: "Indiana Mouse" },
  { id: "npc-astrologico", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Ophelia.webp", width: "95", texto: "Ophelia" },
  { id: "npc-epifania", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Fromagnus.webp", width: "55", texto: "Fromagnus" },
  { id: "npc-piloto", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Bertrand.webp", width: "60", texto: "Bertrand" },
  { id: "npc-abraço", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Arabella.webp", width: "55", texto: "Arabella" },
  { id: "npc-marmota", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Charlotte.webp", width: "95", texto: "Charlotte" },
  { id: "npc-dragao", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Liu.webp", width: "60", texto: "Liu" },
  { id: "npc-namorados", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Fleur.webp", width: "55", texto: "Fleur" },
  { id: "npc-carnaval", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Rianna.webp", width: "70", texto: "Rianna" },
  { id: "npc-chuva", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Belle.webp", width: "65", texto: "Belle" },
  { id: "npc-armagedom", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Mirolle.webp", width: "60", texto: "Mirolle Gooda" },
  { id: "npc-patricio", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Cassidy.webp", width: "55", texto: "Cassidy" },
  { id: "npc-cozinha", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Moris.webp", width: "65", texto: "Moris" },
  { id: "npc-pascoa", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Fluffy.webp", width: "55", texto: "Fluffy" },
  { id: "npc-dino", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Uga.webp", width: "75", texto: "Uga Buga" },
  { id: "npc-pesca", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Cancoillotte.webp", width: "75", texto: "Cancoillotte" },
  { id: "npc-jardinagem", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Moumouna.webp", width: "60", texto: "Moumouna" },
  { id: "npc-escola", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Prof.webp", width: "60", texto: "Prof" },
  { id: "npc-magia", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Cesar.webp", width: "75", texto: "Cesar" },
  { id: "npc-halloween", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Drekkemaus.webp", width: "55", texto: "Von Drekkemaus" },
  { id: "npc-natal", imgSrc: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/npcs/Jingle.webp", width: "60", texto: "Jingle" },
  { id: "npc-normal", texto: "Baú Global" },
];

npcs.forEach((npc) => {
  const td = document.getElementById(npc.id);
  if (td) {
    if (npc.imgSrc) {
      td.innerHTML = `<img width="${npc.width}" src="${npc.imgSrc}">${npc.texto}`;
    } else {
      td.textContent = npc.texto;
    }
  }
});

const medalhasPorBau = {
  global: ["Todos disponíveis abaixo."],
  astrologico: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/69.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/522.webp"],
  epifania: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/71.webp"],
  piloto: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/73.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/386.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/534.webp"],
  abraço: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/129.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/272.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/510.webp"],
  marmota: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/130.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/457.webp"],
  dragao: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/131.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/404.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/495.webp"],
  namorados: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/132.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/182.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/230.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/261.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/303.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/345.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/406.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/449.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/539.webp"],
  carnaval: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/0.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/1.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/133.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/454.webp"],
  chuva: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/134.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/310.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/471.webp"],
  armagedom: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/139.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/181.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/198.webp"],
  patricio: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/142.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/202.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/264.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/356.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/498.webp"],
  cozinha: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/144.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/464.webp"],
  pascoa: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/6.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/7.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/46.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/47.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/267.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/357.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/410.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/502.webp"],
  dino: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/364.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/366.webp"],
  pesca: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/16.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/17.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/18.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/50.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/51.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/158.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/184.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/209.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/276.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/324.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/423.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/515.webp"],
  jardinagem: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/161.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/163.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/240.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/317.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/373.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/374.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/418.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/468.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/469.webp"],
  escola: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/57.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/58.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/59.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/169.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/281.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/432.webp"],
  magia: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/188.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/477.webp"],
  halloween: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/28.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/29.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/30.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/64.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/65.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/170.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/190.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/218.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/219.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/221.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/249.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/290.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/334.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/390.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/391.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/435.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/438.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/482.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/526.webp"],
  natal: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/33.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/34.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/35.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/174.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/193.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/225.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/255.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/257.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/297.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/338.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/341.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/397.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/398.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/399.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/442.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/487.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/488.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/532.webp"],
  normal: ["https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/293.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/370.webp", "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/medalhas/509.webp"]
};

function carregarMedalhas(idCelula, medalhas) {
  const celula = document.getElementById(idCelula);
  if (!celula) return;

  medalhas.forEach((item) => {
    if (typeof item === "string" && !item.startsWith("http") && !item.startsWith("/")) {
      celula.textContent = item;
    } else if (item.startsWith("http") || item.startsWith("/")) {
      const img = document.createElement("img");
      img.src = item;
      celula.appendChild(img);
    }
  });
}

Object.keys(medalhasPorBau).forEach((bau) => {
  const idCelula = `medalhas-${bau}`;
  carregarMedalhas(idCelula, medalhasPorBau[bau]);
});

const esferasPorBau = {
  global: ["Todos disponíveis abaixo."],
  astrologico: [{ width: "84", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/38.webp" }, { width: "81", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/87.webp" }],
  epifania: [{ width: "63", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/5.webp" }, { width: "73", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/39.webp" }],
  piloto: [{ width: "58", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/6.webp" }],
  abraço: [{ width: "62", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/7.webp" }, { width: "58", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/85.webp" }],
  marmota: [{ width: "61", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/8.webp" }],
  dragao: [{ width: "70", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/9.webp" }, { width: "94", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/57.webp" }, { width: "69", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/80.webp" }],
  namorados: [{ width: "67", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/10.webp" }, { width: "64", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/34.webp" }, { width: "86", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/40.webp" }, { width: "68", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/46.webp" }, { width: "76", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/72.webp" }, { width: "79", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/91.webp" }],
  carnaval: [{ width: "68", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/11.webp" }, { width: "66", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/64.webp" }, { width: "65", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/89.webp" }],
  chuva: [{ width: "67", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/12.webp" }, { width: "66", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/51.webp" }, { width: "63", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/73.webp" }, { width: "76", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/76.webp" }],
  armagedom: [{ width: "71", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/13.webp" }, { width: "69", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/33.webp" }],
  patricio: [{ width: "68", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/14.webp" }, { width: "80", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/41.webp" }, { width: "71", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/58.webp" }, { width: "61", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/81.webp" }],
  cozinha: [{ width: "65", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/15.webp" }, { width: "69", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/74.webp" }, { width: "78", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/82.webp" }],
  pascoa: [{ width: "89", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/42.webp" }, { width: "82", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/59.webp" }, { width: "66", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/66.webp" }, { width: "55", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/83.webp" }],
  dino: [{ width: "65", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/20.webp" }],
  pesca: [{ width: "64", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/24.webp" }, { width: "86", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/25.webp" }, { width: "68", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/29.webp" }, { width: "80", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/47.webp" }, { width: "76", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/53.webp" }, { width: "75", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/62.webp" }, { width: "65", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/68.webp" }, { width: "67", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/86.webp" }],
  jardinagem: [{ width: "71", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/26.webp" }, { width: "72", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/52.webp" }, { width: "73", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/61.webp" }, { width: "65", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/67.webp" }, { width: "58", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/75.webp" }],
  escola: [{ width: "71", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/27.webp" }, { width: "61", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/69.webp" }],
  magia: [{ width: "72", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/30.webp" }, { width: "75", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/77.webp" }],
  halloween: [{ width: "77", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/28.webp" }, { width: "74", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/31.webp" }, { width: "92", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/35.webp" }, { width: "90", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/36.webp" }, { width: "69", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/43.webp" }, { width: "96", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/49.webp" }, { width: "65", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/54.webp" }, { width: "61", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/63.webp" }, { width: "61", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/70.webp" }, { width: "72", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/78.webp" }, { width: "68", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/88.webp" }],
  natal: [{ width: "60", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/1.webp" }, { width: "55", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/2.webp" }, { width: "53", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/3.webp" }, { width: "60", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/4.webp" }, { width: "76", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/32.webp" }, { width: "89", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/37.webp" }, { width: "68", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/44.webp" }, { width: "82", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/45.webp" }, { width: "67", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/50.webp" }, { width: "60", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/55.webp" }, { width: "70", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/56.webp" }, { width: "62", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/65.webp" }, { width: "62", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/71.webp" }, { width: "64", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/79.webp" }, { width: "78", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/esferas/90.webp" }],
  normal: ["Não há."],
};

function carregarEsferas(idCelula, esferas) {
  const celula = document.getElementById(idCelula);
  if (typeof esferas[0] === "string") {
    celula.textContent = esferas[0];
  } else {
    esferas.forEach((esfera) => {
      const img = document.createElement("img");
      img.width = esfera.width;
      img.src = esfera.src;
      celula.appendChild(img);
    });
  }
}

Object.keys(esferasPorBau).forEach((bau) => {
  const idCelula = `esferas-${bau}`;
  carregarEsferas(idCelula, esferasPorBau[bau]);
});

const itensPorBau = {
  global: ["Todos disponíveis abaixo."],
  astrologico: [{ width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/11092025.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20017.webp" }],
  epifania: ["Não há."],
  piloto: ["Não há."],
  abraço: [{ width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/29052020.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/05062025.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20015.webp" }],
  marmota: [{ width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/18042024.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20007.webp" }],
  dragao: [{ width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/13022025.webp" }],
  namorados: [{ width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/11022021.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/08022024.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/05022026.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20006.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20020.webp" }],
  carnaval: [{ width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/11112022.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/14032024.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/07112025.webp" }],
  chuva: [{ width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/16052024.webp" }],
  armagedom: [{ width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/21062024.webp" }],
  patricio: [{ width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/13032020.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/17032022.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/06032025.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20012.webp" }],
  cozinha: ["Não há."],
  pascoa: [{ width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/09042020.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/10042025.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20013.webp" }],
  dino: ["Não há."],
  pesca: [{ width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/09072020.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/23072021.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/29062023.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/04072025.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20002.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20016.webp" }],
  jardinagem: [{ width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/21062019.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/27052021.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/14072022.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/18052023.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/04072024.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20001.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20008.webp" }],
  escola: [{ width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/10092020.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/28092023.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20003.webp" }],
  magia: [{ width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/19092024.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20009.webp" }],
  halloween: [{ width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/17102019.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/22102020.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/21102021.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/13102022.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/20102023.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/24102024.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/16102025.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20004.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20010.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20018.webp" }, { width: "70", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/banner/16102025.webp" }],
  natal: [{ width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/13122019.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/17122020.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/17122021.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/161220221.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/161220222.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/14122023.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/12122024.webp" }, { width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/04122025.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/206.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/301.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/305.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/306.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20005.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20011.webp" }, { src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/emojis/20019.webp" }],
  normal: [{ width: "35", src: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/loja/25052025.webp" }],
};

function carregarItens(idCelula, itens) {
  const celula = document.getElementById(idCelula);
  if (typeof itens[0] === "string") {
    celula.textContent = itens[0];
  } else {
    itens.forEach((item) => {
      const img = document.createElement("img");
      if (item.width) img.width = item.width;
      img.src = item.src;
      celula.appendChild(img);
    });
  }
}

Object.keys(itensPorBau).forEach((bau) => {
  const idCelula = `itens-${bau}`;
  carregarItens(idCelula, itensPorBau[bau]);
});

const titulosPorBau = {
  global: ["Todos disponíveis abaixo."],
  astrologico: ["«Queijólogo» | «Queijóloga» (377)", "«Queijonauta» (607)"],
  epifania: ["«Bolo de Reis» (378)", "«Frangipane» (416)"],
  piloto: ["«Piloto» | «Pilota» (379)", "«Infinito» (548)", "«Up» (549)", "«Mãos frias» (611)"],
  abraço: ["«Abraços Grátis» (380)"],
  marmota: ["«Marmota» (381)", "«Dorminhoco» | «Dorminhoca» (433)", "«Espanta Soneca» (570)"],
  dragao: ["«Flor de Lótus» (382)", "«Rato Inspetor» | «Rata Inspetora» (383)", "«Dragãozinho» | «Dragãozinha» (417)", "«Sagui» (418)", "«Feliz Ano Novo!» (557)"],
  namorados: ["«Rato Sedutor» | «Rata Sedutora» (210)", "«Tentador» | «Tentadora» (211)", "«Latin Lover» (212)", "«Omelettovore» (249)", "«Meu Docinho» (250)", "«Noivo» | «Noiva» (251)", "«Aqueijonado» | «Aqueijonada» (294)", "«Recém-Casado» | «Recém-Casada» (313)", "«Maçã do Amor» (314)", "«Coração Partido» (315)", "«Lua de Mel» (316)", "«Admirador Secreto» | «Admiradora Secreta» (384)", "«Cupido» (432)", "«Coração de Brioche» (494)", "«Arrasa Corações» (536)", "«Quer Ser Meussarela?» (537)", "«Divorciado» | «Divorciada» (558)"],
  carnaval: ["«Churros» (318)", "«Folião» | «Foliã» (319)", "«Arlequim» | «Arlequina» (385)", "«Ratobeleza» | «Ratabeleza» (493)", "«Dó-Ré-Mi» (553)", "«Confete» (569)"],
  chuva: ["«Sardinha» (297)", "«Sapinho» | «Sapinha» (386)", "«Gotinha» (495)", "«Sombra» (571)"],
  armagedom: ["«Magiqueijo» (336)", "«Defensor» | «Defensora» (387)", "«Guardião» | «Guardiã» (573)"],
  patricio: ["«Generoso» | «Generosa» (243)", "«Barmouse» (388)", "«Rato Celta» | «Rata Celta» (435)", "«Leprechaun» (436)", "«Bardo» (483)"],
  cozinha: ["«Confeiteiro do Rei» | «Confeiteira do Rei» (357)", "«Ratatouille» (389)", "«Massa de Crépe» (419)", "«Feijoada» (438)", "«Amante de Pizza» (461)", "«Mestre-Cuca» (572)", "«Empreguete» (602)"],
  pascoa: ["«Chocovore» (254)", "«Chocoelho» | «Chocoelha» (255)", "«Galo» | «Galinha» (295)", "«Cocoricó» (320)", "«Cacau» (321)", "«Caçador de Ovos» | «Caçadora de Ovos» (322)", "«Nervosinho» | «Nervosinha» (355)", "«Duque Caramelo» | «Duquesa Caramelo» (356)", "«Cara de Bolacha» (358)", "«Rei Doce» | «Rainha Doce» (359)", "«Sininho» (393)", "«Rato Sagaz» | «Rata Sagaz» (420)", "«Amante de Artefatos» (421)", "«Rato Moai» | «Rata Moai» (437)", "«Viajante» (539)"],
  dino: ["«Rato Pré-Histórico» | «Rata Pré-Histórica» (394)", "«Tyrannosouris» (395)", "«Rato das Cavernas» | «Rata das Cavernas» (439)", "«Ratossauro» (540)", "«Vulcânico» | «Vulcânica» (541)"],
  pesca: ["«Tonnerre de Brest» (253)", "«Explorador» | «Exploradora» (296)", "«Pescador» | «Pescadora» (298)", "«Adorador» | «Adoradora» (299)", "«Mas Que Peixes» (335)", "«Yeeehaaaaa!» (337)", "«Melhor Treinador» | «Melhor Treinadora» (338)", "«Todos a Bordo!» (339)", "«herp derp» (340)", "«Capitão Nemouse» | «Capitã Nemouse» (341)", "«Indiana Rato» | «Indiana Rata» (342)", "«Dora, a Aventureira» (361)", "«Rato Arqueólogo» | «Rata Arqueóloga» (362)", "«Allan Quaterrato» (363)", "«Bucaneiro» | «Bucaneira» (403)", "«Sushizinho» | «Sushizinha» (404)", "«Estrela-do-Mar» (405)", "«Capitão Coco» | «Capitã Coco» (422)", "«Perdoado» | «Perdoada» (460)", "«Netuno» (484)", "«Mermouse» (506)", "«Almirante» (507)", "«Tritão» | «Sereia» (547)", "«Foi Pescar» (560)", "«Capitão gancho» (561)", "«Capitão Sardinha» | «Capitã Sardinha» (604)", "«Cavalheiro do Lago» | «Dama do Lago» (605)"],
  jardinagem: ["«Fazendeiro» | «Fazendeira» (406)", "«Maratonista» (407)", "«Jardineiro» | «Jardineira» (481)", "«Botânico» | «Botânica» (505)", "«Girassol» (545)", "«Vinicultor» | «Vinicultora» (546)", "«Bumblebrie» (559)", "«Margarida» (574)", "«Bolinho de Legumes» (575)"],
  escola: ["«Rato Infantil» | «Rata Infantil» (323)", "«Estudante Modelo» (360)", "«Baderneiro» | «Baderneira» (366)", "«Primeiro da Classe» | «Primeira da Classe» (367)", "«Rato de Biblioteca» | «Rata de Biblioteca» (368)", "«Acadêmico» | «Acadêmica» (369)", "«Ratinho Determinado» | «Ratinha Determinada» (396)", "«Calouro» | «Caloura» (410)", "«Brincalhão» | «Brincalhona» (411)", "«Autodidata» (485)", "«Procrastinador» | «Procrastinadora» (486)", "«Honrado» | «Honrada» (487)", "«Roedor Inteligente» (562)", "«Guerreiro da Caneta Azul» (563)", "«Rei dos Rabiscos» | «Rainha dos Rabiscos» (564)"],
  magia: ["«Supervisor» | «Supervisora» (424)", "«Bruxo» | «Bruxa» (425)", "«Lenhador» | «Lenhadora» (376)", "«Carpinteiro» | «Carpinteira» (596)", "«Alquimista» (597)"],
  halloween: ["«Vampiro» | «Vampira» (287)", "«Frankenmaus» (300)", "«Bombom *-*» (301)", "«Suco de Abóbora» (302)", "«Doce ou Travessura» (303)", "«Poltergeist» (304)", "«Von Drekkemaus» (307)", "«Gasparzinho» (343)", "«Torta de Abóbora» (344)", "«Caça-Fantasmas» (345)", "«Zumbi» (346)", "«Caça-Vampiros» (347)", "«Assustador» | «Assustadora» (348)", "«Devoradoces» (349)", "«Voldemouse» (371)", "«Scooby-Doo» (372)", "«O Amaldiçoado» | «A Amaldiçoada» (373)", "«Lobisrato» | «Lobisrata» (412)", "«Pac-Mouse» (413)", "«Ratinho Viajante» | «Ratinha Viajante» (414)", "«Castanha» (426)", "«Transformista» (427)", "«Enfeitiçado» | «Enfeitiçada» (428)", "«Cipher» (462)", "«Minhoca» (488)", "«Jack-o'-lantern» (489)", "«Lembre de Mim» (508)", "«Nosferatu» (509)", "«Esqueleto» (510)", "«Squeak!» (550)", "«Alma Perdida» (551)", "«Scream Cheese» (552)", "«Mumisterioso» (565)", "«Cringe» (598)", "«Abominação» (599)", "«Boohoo» (608)", "«Noivo Fantasma» | «Noiva Fantasma» (609)"],
  natal: ["«Floquinho de Neve» (127)", "«Espírito Natalino» (128)", "«Duende» (129)", "«Papai Noel» | «Mamãe Noel» (130)", "«Cookies» (240)", "«Bolo de Natal» (241)", "«Barba Branca» (242)", "«Nevado» | «Nevada» (244)", "«Nevasca» (245)", "«Bola de Neve» (288)", "«Estou com Frio» (289)", "«Castanha Grelhada» (290)", "«Meia de Lã» (291)", "«Souris Sapin» (292)", "«Comedor de Cookies» | «Comedora de Cookies» (293)", "«Pirulito de Bengala» (308)", "«Pisca Pisca» (309)", "«Papaille Noel» (310)", "«Elfo» | «Elfette» (311)", "«Anjo de Neve» (312)", "«Glacial» (350)", "«Pão de Mel» (351)", "«Rato Polar» | «Rata Polar» (352)", "«Grande Ceia» (353)", "«Salvador do Natal» | «Salvadora do Natal» (354)", "«Tartiflette» (375)", "«Raclette» (415)", "«Frozen» (429)", "«Cubo de Gelo» (430)", "«Trabalhador Glacial» | «Trabalhadora Glacial» (431)", "«Snowboarder» (479)", "«Reninha» (480)", "«Luz de Velas» (482)", "«Castanha Caramelizada» (491)", "«Azevinho» (492)", "«Feliz Natal» (531)", "«Snowdrop» (532)", "«Iglu» (533)", "«Aurora Boreal» (554)", "«Ratinho de Neve» | «Ratinha de Neve» (555)", "«Chocolate Quente» (556)", "«Estrela d'Alva» (566)", "«Pinball Natalino» (600)", "«Rato do Ártico» | «Rata do Ártico» (601)", "«Estalactite» (610)"],
  normal: ["«Patriota» (364)", "«Sans-culotte» (365)", "«Namastê» (370)", "«Rato Arenoso» | «Rata Arenosa» (408)", "«Tutankhamouse» (409)", "«Rato Turing» | «Rata Turing» (423)", "«Pierogi» (478)", "«Perdido no Tempo» | «Perdida no Tempo» (490)", "«Mosquerato» | «Mosquerata» (542)", "«Ferreiro» | «Ferreira» (543)", "«Clarividente» (544)", "«Bzzzzzz» (567)", "«Hmm...» (568)", "«Celestial» (603)", "«Explorador Galáctico» | «Exploradora Galáctica» (606)"],
};

function carregarTitulos(idCelula, titulos) {
  const celula = document.getElementById(idCelula);
  titulos.forEach((titulo) => {
    const div = document.createElement("div");
    div.textContent = titulo;
    celula.appendChild(div);
  });
}

carregarTitulos("titulos-global", titulosPorBau.global);
carregarTitulos("titulos-astrologico", titulosPorBau.astrologico);
carregarTitulos("titulos-epifania", titulosPorBau.epifania);
carregarTitulos("titulos-piloto", titulosPorBau.piloto);
carregarTitulos("titulos-abraço", titulosPorBau.abraço);
carregarTitulos("titulos-marmota", titulosPorBau.marmota);
carregarTitulos("titulos-dragao", titulosPorBau.dragao);
carregarTitulos("titulos-namorados", titulosPorBau.namorados);
carregarTitulos("titulos-carnaval", titulosPorBau.carnaval);
carregarTitulos("titulos-chuva", titulosPorBau.chuva);
carregarTitulos("titulos-armagedom", titulosPorBau.armagedom);
carregarTitulos("titulos-patricio", titulosPorBau.patricio);
carregarTitulos("titulos-cozinha", titulosPorBau.cozinha);
carregarTitulos("titulos-pascoa", titulosPorBau.pascoa);
carregarTitulos("titulos-dino", titulosPorBau.dino);
carregarTitulos("titulos-pesca", titulosPorBau.pesca);
carregarTitulos("titulos-jardinagem", titulosPorBau.jardinagem);
carregarTitulos("titulos-escola", titulosPorBau.escola);
carregarTitulos("titulos-magia", titulosPorBau.magia);
carregarTitulos("titulos-halloween", titulosPorBau.halloween);
carregarTitulos("titulos-natal", titulosPorBau.natal);
carregarTitulos("titulos-normal", titulosPorBau.normal);
