const titulosQueijos = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo" },
  { id: "0", titulo: "Ratinho | Ratinha", objetivo: "Título inicial" },
  { id: "5", titulo: "Rato Ambicioso | Rata Ambiciosa", objetivo: "Colete 5 queijos" },
  { id: "6", titulo: "Olha! Queijo!", objetivo: "Colete 20 queijos" },
  { id: "7", titulo: "Obaaaaa Queijo ^^", objetivo: "Colete 100 queijos" },
  { id: "8", titulo: "Queeeeeijo *-*", objetivo: "Colete 200 queijos" },
  { id: "35", titulo: "Rato Militante | Rata Militante", objetivo: "Colete 300 queijos" },
  { id: "36", titulo: "Rato Sindicalista | Rata Sindicalista", objetivo: "Colete 400 queijos" },
  { id: "37", titulo: "Rato em Greve | Rata em Greve", objetivo: "Colete 500 queijos" },
  { id: "26", titulo: "Rato Guloso | Rata Gulosa", objetivo: "Colete 600 queijos" },
  { id: "27", titulo: "Apanhador de Queijos | Apanhadora de Queijos", objetivo: "Colete 700 queijos" },
  { id: "28", titulo: "Rato Fofinho | Rata Fofinha", objetivo: "Colete 800 queijos" },
  { id: "29", titulo: "Sr. Barriga | Srª. Barriga", objetivo: "Colete 900 queijos" },
  { id: "30", titulo: "Gorducho | Gorducha", objetivo: "Colete 1.000 queijos" },
  { id: "31", titulo: "Rato Peludinho | Rata Peludinha", objetivo: "Colete 1.100 queijos" },
  { id: "32", titulo: "Rato Obeso | Rata Obesa", objetivo: "Colete 1.200 queijos" },
  { id: "33", titulo: "Fofão | Fofona", objetivo: "Colete 1.300 queijos" },
  { id: "34", titulo: "O Sedentário | A Sedentária", objetivo: "Colete 1.400 queijos" },
  { id: "38", titulo: "O Recruta do Queijo | A Recruta do Queijo", objetivo: "Colete 1.500 queijos" },
  { id: "39", titulo: "O Adepto em Queijo | A Adepta em Queijo", objetivo: "Colete 1.600 queijos" },
  { id: "40", titulo: "O Guardião do Queijo | A Guardiã do Queijo", objetivo: "Colete 1.700 queijos" },
  { id: "41", titulo: "Mestre do Queijo | Mestra do Queijo", objetivo: "Colete 1.800 queijos" },
  { id: "72", titulo: "Rato Sherlock | Rata Sherlock", objetivo: "Colete 2.000 queijos" },
  { id: "73", titulo: "Cavaleiro do Queijo | Cavaleira do Queijo", objetivo: "Colete 2.300 queijos" },
  { id: "74", titulo: "Cultivador de Queijo | Cultivadora de Queijo", objetivo: "Colete 2.700 queijos" },
  { id: "75", titulo: "Seboso | Sebosa", objetivo: "Colete 3.200 queijos" },
  { id: "76", titulo: "Rato Robusto | Rata Robusta", objetivo: "Colete 3.800 queijos" },
  { id: "77", titulo: "Amante de Queijo", objetivo: "Colete 4.600 queijos" },
  { id: "78", titulo: "Camembert", objetivo: "Colete 6.000 queijos" },
  { id: "79", titulo: "Pont-L'Évêque", objetivo: "Colete 7.000 queijos" },
  { id: "80", titulo: "Pega-Queijo", objetivo: "Colete 8.000 queijos" },
  { id: "81", titulo: "É de Mais de 9000", objetivo: "Colete 9.001 queijos" },
  { id: "82", titulo: "Colecionador | Colecionadora", objetivo: "Colete 10.000 queijos" },
  { id: "83", titulo: "Cheeseleader", objetivo: "Colete 14.000 queijos" },
  { id: "84", titulo: "Ladrão de Queijos | Ladra de Queijos", objetivo: "Colete 18.000 queijos" },
  { id: "85", titulo: "Criador do Queijo | Criadora do Queijo", objetivo: "Colete 22.000 queijos" },
  { id: "86", titulo: "Pizza de Queijo", objetivo: "Colete 26.000 queijos" },
  { id: "87", titulo: "Ministro do Queijo | Ministra do Queijo", objetivo: "Colete 30.000 queijos" },
  { id: "88", titulo: "Rato Prodígio | Rata Prodígia", objetivo: "Colete 34.000 queijos" },
  { id: "89", titulo: "Príncipe do Transformice | Princesa do Transformice", objetivo: "Colete 38.000 queijos" },
  { id: "90", titulo: "Queijólatra", objetivo: "Colete 42.000 queijos" },
  { id: "91", titulo: "Escolhido do Queijo | Escolhida do Queijo", objetivo: "Colete 46.000 queijos" },
  { id: "92", titulo: "Rato Marujo | Rata Maruja", objetivo: "Colete 50.000 queijos" },
  { id: "234", titulo: "Om Nom Nom", objetivo: "Colete 55.000 queijos" },
  { id: "235", titulo: "*-*", objetivo: "Colete 60.000 queijos" },
  { id: "236", titulo: "Viciado em Queijo | Viciada em Queijo", objetivo: "Colete 65.000 queijos" },
  { id: "237", titulo: "Cheesus", objetivo: "Colete 70.000 queijos" },
  { id: "238", titulo: "Rei do Queijo | Rainha do Queijo", objetivo: "Colete 75.000 queijos" },
  { id: "93", titulo: "MEU QUEIJO!", objetivo: "Colete 80.000 queijos" },
];

const titulosFirsts = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo" },
  { id: "9", titulo: "Rato Veloz | Rata Veloz", objetivo: "Colete 1 queijo em primeiro" },
  { id: "10", titulo: "Ligeirinho | Ligeirinha", objetivo: "Colete 10 queijos em primeiro" },
  { id: "11", titulo: "Rato Pirata | Rata Pirata", objetivo: "Colete 100 queijos em primeiro" },
  { id: "12", titulo: "Rato Ninja | Rata Ninja", objetivo: "Colete 200 queijos em primeiro" },
  { id: "42", titulo: "Rato Fanfarrão | Rata Fanfarrona", objetivo: "Colete 300 queijos em primeiro" },
  { id: "43", titulo: "Saqueador | Saqueadora", objetivo: "Colete 400 queijos em primeiro" },
  { id: "44", titulo: "Perseguidor | Perseguidora", objetivo: "Colete 500 queijos em primeiro" },
  { id: "45", titulo: "Rato Fútil | Rata Fútil", objetivo: "Colete 600 queijos em primeiro" },
  { id: "46", titulo: "O Silencioso | A Silenciosa", objetivo: "Colete 700 queijos em primeiro" },
  { id: "47", titulo: "Rato Falcão | Rata Falcão", objetivo: "Colete 800 queijos em primeiro" },
  { id: "48", titulo: "Rato Cobra | Rata Cobra", objetivo: "Colete 900 queijos em primeiro" },
  { id: "49", titulo: "Rato-Aranha | Rata-Aranha", objetivo: "Colete 1.000 queijos em primeiro" },
  { id: "50", titulo: "O Mito | A Mito", objetivo: "Colete 1.100 queijos em primeiro" },
  { id: "51", titulo: "Rato Atlético | Rata Atlética", objetivo: "Colete 1.200 queijos em primeiro" },
  { id: "52", titulo: "Rato Apressado | Rata Apressada", objetivo: "Colete 1.400 queijos em primeiro" },
  { id: "53", titulo: "O Míssil | A Míssil", objetivo: "Colete 1.600 queijos em primeiro" },
  { id: "54", titulo: "Sonic, O Rato | Sonic, A Rata", objetivo: "Colete 1.800 queijos em primeiro" },
  { id: "55", titulo: "Só Net", objetivo: "Colete 2.000 queijos em primeiro" },
  { id: "56", titulo: "Kamikaze", objetivo: "Colete 2.200 queijos em primeiro" },
  { id: "57", titulo: "Rato Guerreiro | Rata Guerreira", objetivo: "Colete 2.400 queijos em primeiro" },
  { id: "58", titulo: "Mach 1", objetivo: "Colete 2.600 queijos em primeiro" },
  { id: "59", titulo: "Caçador | Caçadora", objetivo: "Colete 2.800 queijos em primeiro" },
  { id: "60", titulo: "Primeiro! | Primeira!", objetivo: "Colete 3.000 queijos em primeiro" },
  { id: "61", titulo: "Sniper", objetivo: "Colete 3.200 queijos em primeiro" },
  { id: "62", titulo: "Flash", objetivo: "Colete 3.400 queijos em primeiro" },
  { id: "63", titulo: "Super-Rato | Super-Rata", objetivo: "Colete 3.600 queijos em primeiro" },
  { id: "64", titulo: "Velocidade da Luz", objetivo: "Colete 3.800 queijos em primeiro" },
  { id: "65", titulo: "Viajante do Tempo", objetivo: "Colete 4.000 queijos em primeiro" },
  { id: "66", titulo: "Ventania", objetivo: "Colete 4.500 queijos em primeiro" },
  { id: "67", titulo: "E=MouseC²", objetivo: "Colete 5.000 queijos em primeiro" },
  { id: "68", titulo: "Pulador", objetivo: "Colete 5.500 queijos em primeiro" },
  { id: "69", titulo: "O Intocável | A Intocável", objetivo: "Colete 6.000 queijos em primeiro" },
  { id: "231", titulo: "Dinamite", objetivo: "Colete 7.000 queijos em primeiro" },
  { id: "232", titulo: "Velocidade Máxima", objetivo: "Colete 8.000 queijos em primeiro" },
  { id: "233", titulo: "Tornado", objetivo: "Colete 9.000 queijos em primeiro" },
  { id: "70", titulo: "Wall-Jumper", objetivo: "Colete 10.000 queijos em primeiro" },
  { id: "224", titulo: "Corredor | Corredora", objetivo: "Colete 12.000 queijos em primeiro" },
  { id: "225", titulo: "Batmouse", objetivo: "Colete 14.000 queijos em primeiro" },
  { id: "226", titulo: "Invisível", objetivo: "Colete 16.000 queijos em primeiro" },
  { id: "227", titulo: "Imparável", objetivo: "Colete 18.000 queijos em primeiro" },
  { id: "202", titulo: "O Mestre do Vento | A Mestra do Vento", objetivo: "Colete 20.000 queijos em primeiro" },
  { id: "228", titulo: "¡Ándale! ¡Ándale!", objetivo: "Colete 25.000 queijos em primeiro" },
  { id: "229", titulo: "Torpedo", objetivo: "Colete 30.000 queijos em primeiro" },
  { id: "230", titulo: "Speedy Gorgonzola", objetivo: "Colete 35.000 queijos em primeiro" },
  { id: "71", titulo: "RELÂMPAGO", objetivo: "Colete 40.000 queijos em primeiro" },
];

const titulosSaves = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo" },
  { id: "1", titulo: "Aprendiz de Shaman", objetivo: "Salve 10 ratos" },
  { id: "2", titulo: "Shaman Graduado | Shaman Graduada", objetivo: "Salve 100 ratos" },
  { id: "3", titulo: "Shaman", objetivo: "Salve 1.000 ratos" },
  { id: "4", titulo: "Mestre Shaman | Mestra Shaman", objetivo: "Salve 2.000 ratos" },
  { id: "13", titulo: "Shaman Inspirado | Shaman Inspirada", objetivo: "Salve 3.000 ratos" },
  { id: "14", titulo: "Shaman Campeão | Shaman Campeã", objetivo: "Salve 4.000 ratos" },
  { id: "15", titulo: "Shaman Glorioso | Shaman Gloriosa", objetivo: "Salve 5.000 ratos" },
  { id: "16", titulo: "Duque Shaman | Duquesa Shaman", objetivo: "Salve 6.000 ratos" },
  { id: "17", titulo: "Príncipe Shaman | Princesa Shaman", objetivo: "Salve 7.000 ratos" },
  { id: "18", titulo: "Imperador Shaman | Imperatriz Shaman", objetivo: "Salve 8.000 ratos" },
  { id: "19", titulo: "Shaman Lendário | Shaman Lendária", objetivo: "Salve 9.000 ratos" },
  { id: "20", titulo: "Shaman Imortal", objetivo: "Salve 10.000 ratos" },
  { id: "21", titulo: "O Shaman Escolhido | A Shaman Escolhida", objetivo: "Salve 11.000 ratos" },
  { id: "22", titulo: "Shaman Sagrado | Shaman Sagrada", objetivo: "Salve 12.000 ratos" },
  { id: "23", titulo: "Shaman Oráculo", objetivo: "Salve 13.000 ratos" },
  { id: "24", titulo: "Shaman Profeta", objetivo: "Salve 14.000 ratos" },
  { id: "25", titulo: "Shaman Supremo | Shaman Suprema", objetivo: "Salve 15.000 ratos" },
  { id: "94", titulo: "Shaman Ancião | Shaman Anciã", objetivo: "Salve 16.000 ratos" },
  { id: "95", titulo: "Shaman Destemido | Shaman Destemida", objetivo: "Salve 18.000 ratos" },
  { id: "96", titulo: "Shaman Divino | Shaman Divina", objetivo: "Salve 20.000 ratos" },
  { id: "97", titulo: "Shaman Arquiteto | Shaman Arquiteta", objetivo: "Salve 22.000 ratos" },
  { id: "98", titulo: "Monsieur | Mademoiselle", objetivo: "Salve 24.000 ratos" },
  { id: "99", titulo: "Monsieur Shaman | Madame Shaman", objetivo: "Salve 26.000 ratos" },
  { id: "100", titulo: "Amado | Amada", objetivo: "Salve 28.000 ratos" },
  { id: "101", titulo: "Mago | Maga", objetivo: "Salve 30.000 ratos" },
  { id: "102", titulo: "Herói dos Ratos | Heroína dos Ratos", objetivo: "Salve 35.000 ratos" },
  { id: "103", titulo: "Shaman Anjo", objetivo: "Salve 40.000 ratos" },
  { id: "104", titulo: "O Criador | A Criadora", objetivo: "Salve 45.000 ratos" },
  { id: "105", titulo: "Shaman Absoluto | Shaman Absoluta", objetivo: "Salve 50.000 ratos" },
  { id: "106", titulo: "Shaman Milagroso | Shaman Milagrosa", objetivo: "Salve 55.000 ratos" },
  { id: "107", titulo: "Libertador | Libertadora", objetivo: "Salve 60.000 ratos" },
  { id: "108", titulo: "Shaman Troll", objetivo: "Salve 65.000 ratos" },
  { id: "109", titulo: "Shaman Fantasma", objetivo: "Salve 70.000 ratos" },
  { id: "110", titulo: "Espírito", objetivo: "Salve 75.000 ratos" },
  { id: "111", titulo: "Shaman Semideus | Shaman Semideusa", objetivo: "Salve 80.000 ratos" },
  { id: "112", titulo: "Última Esperança", objetivo: "Salve 85.000 ratos" },
  { id: "113", titulo: "Redentor | Redentora", objetivo: "Salve 90.000 ratos" },
  { id: "200", titulo: "Deus Shaman | Deusa Shaman", objetivo: "Salve 100.000 ratos" },
  { id: "114", titulo: "Alfa & Ômega", objetivo: "Salve 140.000 ratos" },
];

const titulosSavesDificil = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo" },
  { id: "213", titulo: "Decorador | Decoradora", objetivo: "Salve 500 ratos no modo difícil" },
  { id: "214", titulo: "Construtor | Construtora", objetivo: "Salve 2.000 ratos no modo difícil" },
  { id: "215", titulo: "Fabricante", objetivo: "Salve 4.000 ratos no modo difícil" },
  { id: "216", titulo: "Técnico | Técnica", objetivo: "Salve 7.000 ratos no modo difícil" },
  { id: "217", titulo: "Mecânico | Mecânica", objetivo: "Salve 10.000 ratos no modo difícil" },
  { id: "218", titulo: "Especialista", objetivo: "Salve 14.000 ratos no modo difícil" },
  { id: "219", titulo: "Inventor | Inventora", objetivo: "Salve 18.000 ratos no modo difícil" },
  { id: "220", titulo: "Engenheiro | Engenheira", objetivo: "Salve 22.000 ratos no modo difícil" },
  { id: "221", titulo: "Rato Inventor | Rata Inventora", objetivo: "Salve 26.000 ratos no modo difícil" },
  { id: "222", titulo: "Rato Engenhoso | Rata Engenhosa", objetivo: "Salve 30.000 ratos no modo difícil" },
  { id: "223", titulo: "Virtuoso | Virtuosa", objetivo: "Salve 34.000 ratos no modo difícil" },
];

const titulosSavesDivino = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo" },
  { id: "324", titulo: "Inteligente", objetivo: "Salve 500 ratos no modo divino" },
  { id: "325", titulo: "Cientista", objetivo: "Salve 1.000 ratos no modo divino" },
  { id: "326", titulo: "Amigo dos Ratos | Amiga dos Ratos", objetivo: "Salve 2.000 ratos no modo divino" },
  { id: "327", titulo: "Professor | Professora", objetivo: "Salve 4.000 ratos no modo divino" },
  { id: "328", titulo: "Designer", objetivo: "Salve 7.000 ratos no modo divino" },
  { id: "329", titulo: "Misterioso | Misteriosa", objetivo: "Salve 10.000 ratos no modo divino" },
  { id: "330", titulo: "Shamito | Shamita", objetivo: "Salve 15.000 ratos no modo divino" },
  { id: "331", titulo: "Detector de Queijos | Detectora de Queijos", objetivo: "Salve 20.000 ratos no modo divino" },
  { id: "332", titulo: "O Cérebro | A Cérebro", objetivo: "Salve 25.000 ratos no modo divino" },
  { id: "333", titulo: "Majestoso | Majestosa", objetivo: "Salve 30.000 ratos no modo divino" },
  { id: "334", titulo: "Divindade", objetivo: "Salve 40.000 ratos no modo divino" },
];

const titulosSavesSemHabilidades = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo" },
  { id: "594", titulo: "Habilifóbico | Habilifóbica", objetivo: "Salve 500 ratos sem habilidades" },
  { id: "538", titulo: "Rato Artesão | Rata Artesã", objetivo: "Salve 2.000 ratos sem habilidades" },
  { id: "593", titulo: "De Zero a Cem", objetivo: "Salve 10.000 ratos sem habilidades" },
  { id: "592", titulo: "Mestre em Nada", objetivo: "Salve 20.000 ratos sem habilidades" },
  { id: "591", titulo: "Perdi Minhas Habilidades", objetivo: "Salve 40.000 ratos sem habilidades" },
  { id: "590", titulo: "360°", objetivo: "Salve 80.000 ratos sem habilidades" },
];

const titulosSavesSemHabilidadesDificil = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo" },
  { id: "588", titulo: "Shaman Raiz", objetivo: "Salve 1.000 ratos sem habilidades no modo difícil" },
  { id: "587", titulo: "Sem Medinho", objetivo: "Salve 3.000 ratos sem habilidades no modo difícil" },
  { id: "586", titulo: "Mamão com Açúcar", objetivo: "Salve 5.000 ratos sem habilidades no modo difícil" },
  { id: "585", titulo: "Nem Conta Comigo", objetivo: "Salve 10.000 ratos sem habilidades no modo difícil" },
  { id: "584", titulo: "Desastre Ambulante", objetivo: "Salve 20.000 ratos sem habilidades no modo difícil" },
];

const titulosSavesSemHabilidadesDivino = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo" },
  { id: "582", titulo: "24h on", objetivo: "Salve 1.000 ratos sem habilidades no modo divino" },
  { id: "581", titulo: "Olha Mãe, Sem Habilidades!", objetivo: "Salve 3.000 ratos sem habilidades no modo divino" },
  { id: "580", titulo: "Confie em Mim", objetivo: "Salve 5.000 ratos sem habilidades no modo divino" },
  { id: "579", titulo: "O G.O.A.T.", objetivo: "Salve 10.000 ratos sem habilidades no modo divino" },
  { id: "576", titulo: "Skill Issue", objetivo: "Salve 20.000 ratos sem habilidades no modo divino" },
];

const titulosBootcamps = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo", "1★": "1 ★", "2★": "2 ★", "3★": "3 ★", "4★": "4 ★", "5★": "5 ★", "6★": "6 ★", "7★": "7 ★", "8★": "8 ★" },
  { id: "256", titulo: "Recruta", objetivo: "Complete 1 bootcamp", "1★": "1001", "2★": "2001", "3★": "3001", "4★": "4001", "5★": "5001", "6★": "6001", "7★": "7001", "8★": "8001" },
  { id: "257", titulo: "Principiante", objetivo: "Complete 3 bootcamps", "1★": "1003", "2★": "2003", "3★": "3003", "4★": "4003", "5★": "5003", "6★": "6003", "7★": "7003", "8★": "8003" },
  { id: "258", titulo: "Soldado | Soldada", objetivo: "Complete 5 bootcamps", "1★": "1005", "2★": "2005", "3★": "3005", "4★": "4005", "5★": "5005", "6★": "6005", "7★": "7005", "8★": "8005" },
  { id: "259", titulo: "Rato Habilidoso | Rata Habilidosa", objetivo: "Complete 7 bootcamps", "1★": "1007", "2★": "2007", "3★": "3007", "4★": "4007", "5★": "5007", "6★": "6007", "7★": "7007", "8★": "8007" },
  { id: "260", titulo: "Artista Solitário | Artista Solitária", objetivo: "Complete 10 bootcamps", "1★": "1010", "2★": "2010", "3★": "3010", "4★": "4010", "5★": "5010", "6★": "6010", "7★": "7010", "8★": "8010" },
  { id: "261", titulo: "Cabo", objetivo: "Complete 15 bootcamps", "1★": "1015", "2★": "2015", "3★": "3015", "4★": "4015", "5★": "5015", "6★": "6015", "7★": "7015", "8★": "8015" },
  { id: "262", titulo: "Rato Preciso | Rata Precisa", objetivo: "Complete 20 bootcamps", "1★": "1020", "2★": "2020", "3★": "3020", "4★": "4020", "5★": "5020", "6★": "6020", "7★": "7020", "8★": "8020" },
  { id: "263", titulo: "Bootcamper", objetivo: "Complete 25 bootcamps", "1★": "1025", "2★": "2025", "3★": "3025", "4★": "4025", "5★": "5025", "6★": "6025", "7★": "7025", "8★": "8025" },
  { id: "264", titulo: "Sargento | Sargenta", objetivo: "Complete 30 bootcamps", "1★": "1030", "2★": "2030", "3★": "3030", "4★": "4030", "5★": "5030", "6★": "6030", "7★": "7030", "8★": "8030" },
  { id: "265", titulo: "Quinador | Quinadora", objetivo: "Complete 40 bootcamps", "1★": "1040", "2★": "2040", "3★": "3040", "4★": "4040", "5★": "5040", "6★": "6040", "7★": "7040", "8★": "8040" },
  { id: "266", titulo: "Rato Qualificado | Rata Qualificada", objetivo: "Complete 50 bootcamps", "1★": "1050", "2★": "2050", "3★": "3050", "4★": "4050", "5★": "5050", "6★": "6050", "7★": "7050", "8★": "8050" },
  { id: "267", titulo: "Tenente", objetivo: "Complete 60 bootcamps", "1★": "1060", "2★": "2060", "3★": "3060", "4★": "4060", "5★": "5060", "6★": "6060", "7★": "7060", "8★": "8060" },
  { id: "268", titulo: "Longjumper", objetivo: "Complete 70 bootcamps", "1★": "1070", "2★": "2070", "3★": "3070", "4★": "4070", "5★": "5070", "6★": "6070", "7★": "7070", "8★": "8070" },
  { id: "269", titulo: "Inacredirrato | Inacredirrata", objetivo: "Complete 80 bootcamps", "1★": "1080", "2★": "2080", "3★": "3080", "4★": "4080", "5★": "5080", "6★": "6080", "7★": "7080", "8★": "8080" },
  { id: "270", titulo: "Viciado em Bootcamp | Viciada em Bootcamp", objetivo: "Complete 90 bootcamps", "1★": "1090", "2★": "2090", "3★": "3090", "4★": "4090", "5★": "5090", "6★": "6090", "7★": "7090", "8★": "8090" },
  { id: "271", titulo: "Capitão | Capitã", objetivo: "Complete 100 bootcamps", "1★": "1100", "2★": "2100", "3★": "3100", "4★": "4100", "5★": "5100", "6★": "6100", "7★": "7100", "8★": "8100" },
  { id: "272", titulo: "Rato Perito | Rata Perita", objetivo: "Complete 120 bootcamps", "1★": "1120", "2★": "2120", "3★": "3120", "4★": "4120", "5★": "5120", "6★": "6120", "7★": "7120", "8★": "8120" },
  { id: "273", titulo: "Maníaco | Maníaca", objetivo: "Complete 140 bootcamps", "1★": "1140", "2★": "2140", "3★": "3140", "4★": "4140", "5★": "5140", "6★": "6140", "7★": "7140", "8★": "8140" },
  { id: "274", titulo: "Major", objetivo: "Complete 160 bootcamps", "1★": "1160", "2★": "2160", "3★": "3160", "4★": "4160", "5★": "5160", "6★": "6160", "7★": "7160", "8★": "8160" },
  { id: "275", titulo: "Artista do Queijo", objetivo: "Complete 180 bootcamps", "1★": "1180", "2★": "2180", "3★": "3180", "4★": "4180", "5★": "5180", "6★": "6180", "7★": "7180", "8★": "8180" },
  { id: "276", titulo: "Acrobata", objetivo: "Complete 200 bootcamps", "1★": "1200", "2★": "2200", "3★": "3200", "4★": "4200", "5★": "5200", "6★": "6200", "7★": "7200", "8★": "8200" },
  { id: "277", titulo: "Coronel", objetivo: "Complete 250 bootcamps", "1★": "1250", "2★": "2250", "3★": "3250", "4★": "4250", "5★": "5250", "6★": "6250", "7★": "7250", "8★": "8250" },
  { id: "278", titulo: "Burlador | Burladora", objetivo: "Complete 300 bootcamps", "1★": "1300", "2★": "2300", "3★": "3300", "4★": "4300", "5★": "5300", "6★": "6300", "7★": "7300", "8★": "8300" },
  { id: "279", titulo: "Tarzan", objetivo: "Complete 350 bootcamps", "1★": "1350", "2★": "2350", "3★": "3350", "4★": "4350", "5★": "5350", "6★": "6350", "7★": "7350", "8★": "8350" },
  { id: "280", titulo: "General", objetivo: "Complete 400 bootcamps", "1★": "1400", "2★": "2400", "3★": "3400", "4★": "4400", "5★": "5400", "6★": "6400", "7★": "7400", "8★": "8400" },
  { id: "281", titulo: "Lenda Viva", objetivo: "Complete 500 bootcamps", "1★": "1500", "2★": "2500", "3★": "3500", "4★": "4500", "5★": "5500", "6★": "6500", "7★": "7500", "8★": "8500" },
  { id: "282", titulo: "Rato Dublê | Rata Dublê", objetivo: "Complete 600 bootcamps", "1★": "1600", "2★": "2600", "3★": "3600", "4★": "4600", "5★": "5600", "6★": "6600", "7★": "7600", "8★": "8600" },
  { id: "283", titulo: "Pro", objetivo: "Complete 700 bootcamps", "1★": "1700", "2★": "2700", "3★": "3700", "4★": "4700", "5★": "5700", "6★": "6700", "7★": "7700", "8★": "8700" },
  { id: "284", titulo: "Chuck Souris", objetivo: "Complete 800 bootcamps", "1★": "1800", "2★": "2800", "3★": "3800", "4★": "4800", "5★": "5800", "6★": "6800", "7★": "7800", "8★": "8800" },
  { id: "285", titulo: "Rei do Bootcamp | Rainha do Bootcamp", objetivo: "Complete 900 bootcamps", "1★": "1900", "2★": "2900", "3★": "3900", "4★": "4900", "5★": "5900", "6★": "6900", "7★": "7900", "8★": "8900" },
  { id: "286", titulo: "Mestre da Gravidade | Mestra da Gravidade", objetivo: "Complete 1.000 bootcamps", "1★": "2000", "2★": "3000", "3★": "4000", "4★": "5000", "5★": "6000", "6★": "7000", "7★": "8000", "8★": "9000" },
];

const titulosLoja = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo", "1★": "1 ★", "2★": "2 ★", "3★": "3 ★", "4★": "4 ★", "5★": "5 ★", "6★": "6 ★", "7★": "7 ★", "8★": "8 ★" },
  { id: "115", titulo: "Rato Descolado | Rata Descolada", objetivo: "Compre 1 acessório", "1★": "51", "2★": "101", "3★": "151", "4★": "201", "5★": "251", "6★": "301", "7★": "351", "8★": "401" },
  { id: "116", titulo: "Rato Adorável | Rata Adorável", objetivo: "Compre 2 acessórios", "1★": "52", "2★": "102", "3★": "152", "4★": "202", "5★": "252", "6★": "302", "7★": "352", "8★": "402" },
  { id: "117", titulo: "Rato Charmoso | Rata Charmosa", objetivo: "Compre 5 acessórios", "1★": "55", "2★": "105", "3★": "155", "4★": "205", "5★": "255", "6★": "305", "7★": "355", "8★": "405" },
  { id: "118", titulo: "Rato Atraente | Rata Atraente", objetivo: "Compre 10 acessórios", "1★": "60", "2★": "110", "3★": "160", "4★": "210", "5★": "260", "6★": "310", "7★": "360", "8★": "410" },
  { id: "119", titulo: "Rato Fofinho | Rata Fofinha", objetivo: "Compre 15 acessórios", "1★": "65", "2★": "115", "3★": "165", "4★": "215", "5★": "265", "6★": "315", "7★": "365", "8★": "415" },
  { id: "120", titulo: "Rato Galã | Rata Musa", objetivo: "Compre 20 acessórios", "1★": "70", "2★": "120", "3★": "170", "4★": "220", "5★": "270", "6★": "320", "7★": "370", "8★": "420" },
  { id: "121", titulo: "Rato Esnobe | Rata Esnobe", objetivo: "Compre 25 acessórios", "1★": "75", "2★": "125", "3★": "175", "4★": "225", "5★": "275", "6★": "325", "7★": "375", "8★": "425" },
  { id: "122", titulo: "Rato Estiloso | Rata Estilosa", objetivo: "Compre 30 acessórios", "1★": "80", "2★": "130", "3★": "180", "4★": "230", "5★": "280", "6★": "330", "7★": "380", "8★": "430" },
  { id: "123", titulo: "Divo | Diva", objetivo: "Compre 35 acessórios", "1★": "85", "2★": "135", "3★": "185", "4★": "235", "5★": "285", "6★": "335", "7★": "385", "8★": "435" },
  { id: "124", titulo: "Rato Fashion | Rata Fashion", objetivo: "Compre 40 acessórios", "1★": "90", "2★": "140", "3★": "190", "4★": "240", "5★": "290", "6★": "340", "7★": "390", "8★": "440" },
  { id: "125", titulo: "Sexy", objetivo: "Compre 45 acessórios", "1★": "95", "2★": "145", "3★": "195", "4★": "245", "5★": "295", "6★": "345", "7★": "395", "8★": "445" },
  { id: "126", titulo: "Superstar", objetivo: "Compre 50 acessórios", "1★": "100", "2★": "150", "3★": "200", "4★": "250", "5★": "300", "6★": "350", "7★": "400", "8★": "450" },
];

const titulosVillage = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo", lancamento: "Lançamento" },
  { id: "255", titulo: "Chocoelho | Chocoelha", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 50, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2257.webp" }, lancamento: "Páscoa 2012" },
  { id: "320", titulo: "Cocoricó", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 50, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2257.webp" }, lancamento: "Páscoa 2014" },
  { id: "335", titulo: "Mas Que Peixes", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 50, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2257.webp" }, lancamento: "Pescaria 2014" },
  { id: "341", titulo: "Capitão Nemouse | Capitã Nemouse", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 50, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2257.webp" }, lancamento: "Pescaria 2014" },
  { id: "393", titulo: "Sininho", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 50, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2257.webp" }, lancamento: "Páscoa 2016" },
  { id: "397", titulo: "Rato Velhote | Rata Velhote", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 50, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2257.webp" }, lancamento: "6º Aniversário" },
  { id: "402", titulo: "Souris-kun | Souris-chan", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 50, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2257.webp" }, lancamento: "Ninja 2016" },
  { id: "403", titulo: "Bucaneiro | Bucaneira", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 50, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2257.webp" }, lancamento: "Pirata 2016" },
  { id: "417", titulo: "Dragãozinho | Dragãozinha", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 50, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2257.webp" }, lancamento: "Dragão 2017" },
];

const titulosVillageShaman = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo", lancamento: "Lançamento" },
  { id: "390", titulo: "Heliasta", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 50, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2253.webp" }, lancamento: "12 de março de 2016" },
  { id: "399", titulo: "Filósofo | Filósofa", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 150, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2253.webp" }, lancamento: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" } },
  { id: "391", titulo: "Arconte", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 200, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2253.webp" }, lancamento: "1 de abril de 2016" },
  { id: "595", titulo: "Devagar e Sempre", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2620.webp" }, lancamento: "12 de setembro de 2024" },
  { id: "589", titulo: "Rato de Respeito | Rata de Respeito", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 150, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2620.webp" }, lancamento: "12 de setembro de 2024" },
  { id: "583", titulo: "Instável", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 200, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2620.webp" }, lancamento: "12 de setembro de 2024" },
  { id: "578", titulo: "Não Perturbe", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 75, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2621.webp" }, lancamento: "12 de setembro de 2024" },
  { id: "577", titulo: "Pelo Amor, Não Morre", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 200, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2621.webp" }, lancamento: "12 de setembro de 2024" },
];

const titulosVillageSurvivor = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo", requisito: "Requisito", lancamento: "Lançamento" },
  { id: "401", titulo: "Shinobi | Kunoichi", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" }, requisito: "Não aplicável", lancamento: "13 de maio de 2016" },
  { id: "463", titulo: "YOLO", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" }, requisito: "Sobreviva 1 rodada", lancamento: "25 de outubro de 2018" },
  { id: "464", titulo: "Esquivador | Esquivadora", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" }, requisito: "Sobreviva 75 rodadas", lancamento: "25 de outubro de 2018" },
  { id: "465", titulo: "I Will Survive!", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" }, requisito: "Sobreviva 200 rodadas", lancamento: "25 de outubro de 2018" },
  { id: "466", titulo: "O último Rato | A última Rata", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" }, requisito: "Sobreviva 500 rodadas", lancamento: "25 de outubro de 2018" },
  { id: "467", titulo: "Rato Grylls | Rata Grylls", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" }, requisito: "Sobreviva 1.000 rodadas", lancamento: "25 de outubro de 2018" },
  { id: "468", titulo: "Hoje Não!", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" }, requisito: "Sobreviva 2.000 rodadas", lancamento: "25 de outubro de 2018" },
  { id: "469", titulo: "Sobrevivente", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" }, requisito: "Sobreviva 5.000 rodadas", lancamento: "25 de outubro de 2018" },
  { id: "470", titulo: "Surfista de Canhão", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" }, requisito: "Sobreviva 10.000 rodadas", lancamento: "25 de outubro de 2018" },
  { id: "471", titulo: "Super Meat Mouse", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" }, requisito: "Sobreviva 30.000 rodadas", lancamento: "25 de outubro de 2018" },
  { id: "472", titulo: "O Rato que Sobreviveu | A Rata que Sobreviveu", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" }, requisito: "Sobreviva 50.000 rodadas", lancamento: "25 de outubro de 2018" },
  { id: "473", titulo: "Can't Meep This", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" }, requisito: "Sobreviva 80.000 rodadas", lancamento: "25 de outubro de 2018" },
  { id: "474", titulo: "Rambo, o Rato", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" }, requisito: "Mate 1.000 ratos", lancamento: "25 de outubro de 2018" },
  { id: "475", titulo: "O Impiedoso | A Impiedosa", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" }, requisito: "Mate 10.000 ratos", lancamento: "25 de outubro de 2018" },
  { id: "476", titulo: "Strike!", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" }, requisito: "Mate 50.000 ratos", lancamento: "25 de outubro de 2018" },
  { id: "477", titulo: "Wrecking Ball", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2260.webp" }, requisito: "Mate 100.000 ratos", lancamento: "25 de outubro de 2018" },
];

const titulosVillageRacing = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo", lancamento: "Lançamento" },
  { id: "392", titulo: "Zeptowatt", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 50, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2254.webp" }, lancamento: "1 de abril de 2016" },
  { id: "398", titulo: "Pistão", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 150, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2254.webp" }, lancamento: "13 de maio de 2016" },
  { id: "527", titulo: "Fom Fom!", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 2, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2506.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "524", titulo: "Fórmula 801", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 3, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2506.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "528", titulo: "Bip, Bip!", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 4, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2506.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "525", titulo: "Nitro", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 5, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2506.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "521", titulo: "VRUUM", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 7, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2506.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "530", titulo: "Relâmpago Marquinhos", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 10, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2506.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "523", titulo: "Mouse Goes Brr", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 15, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2506.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "522", titulo: "TEM QUE SER RÁPIDO", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 20, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2506.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "529", titulo: "O Deus da Velocidade | A Deusa da Velocidade", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 25, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2506.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "526", titulo: "300.000 km/s", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 30, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2506.webp" }, lancamento: "18 de novembro de 2021" },
];

const titulosVillageBootcamp = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo", lancamento: "Lançamento" },
  { id: "400", titulo: "Cadete", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 100, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2261.webp" }, lancamento: "13 de maio de 2016" },
];

const titulosVillageDefilante = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo", lancamento: "Lançamento" },
  { id: "511", titulo: "+1", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 2, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2509.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "515", titulo: "Queda Livre", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 3, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2509.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "518", titulo: "Aerodinâmico | Aerodinâmica", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 4, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2509.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "516", titulo: "Temos que Pegar!", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 5, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2509.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "513", titulo: "Bem na Hora", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 7, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2509.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "512", titulo: "Estou Voando!", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 10, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2509.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "514", titulo: "MOEDAS!", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 15, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2509.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "519", titulo: "E Lá Vamos Nós!", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 20, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2509.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "520", titulo: "Super Rato Bros", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 25, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2509.webp" }, lancamento: "18 de novembro de 2021" },
  { id: "517", titulo: "Rei do Defilante | Rainha do Defilante", objetivo: { tipo: "texto-moeda", texto: "Compre por", quantidade: 30, imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2509.webp" }, lancamento: "18 de novembro de 2021" },
];

const titulos2010 = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", evento: "Evento", bau: "Baú" },
  { id: "127", titulo: "Floquinho de Neve", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "128", titulo: "Espírito Natalino", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "129", titulo: "Duende", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "130", titulo: "Papai Noel | Mamãe Noel", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
];

const titulos2011 = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", evento: "Evento", bau: "Baú" },
  { id: "210", titulo: "Rato Sedutor | Rata Sedutora", evento: "Dia dos Namorados", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" } },
  { id: "211", titulo: "Tentador | Tentadora", evento: "Dia dos Namorados", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" } },
  { id: "212", titulo: "Latin Lover", evento: "Dia dos Namorados", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" } },
  { id: "240", titulo: "Cookies", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "241", titulo: "Bolo de Natal", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "242", titulo: "Barba Branca", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "243", titulo: "Generoso | Generosa", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2485.webp", url: "https://www.area801.com/p/baus-do-transformice.html#patricio" } },
  { id: "244", titulo: "Nevado | Nevada", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "245", titulo: "Nevasca", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
];

const titulos2012 = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", evento: "Evento", bau: "Baú" },
  { id: "249", titulo: "Omelettovore", evento: "Dia dos Namorados", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" } },
  { id: "250", titulo: "Meu Docinho", evento: "Dia dos Namorados", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" } },
  { id: "251", titulo: "Noivo | Noiva", evento: "Dia dos Namorados", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" } },
  { id: "253", titulo: "Tonnerre de Brest", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "254", titulo: "Chocovore", evento: "Páscoa", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" } },
  { id: "255", titulo: "Chocoelho | Chocoelha", evento: "Páscoa", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" } },
  { id: "287", titulo: "Vampiro | Vampira", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "288", titulo: "Bola de Neve", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "289", titulo: "Estou com Frio", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "290", titulo: "Castanha Grelhada", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "291", titulo: "Meia de Lã", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "292", titulo: "Souris Sapin", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "293", titulo: "Comedor de Cookies | Comedora de Cookies", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
];

const titulos2013 = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", evento: "Evento", bau: "Baú" },
  { id: "294", titulo: "Aqueijonado | Aqueijonada", evento: "Dia dos Namorados", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" } },
  { id: "295", titulo: "Galo | Galinha", evento: "Páscoa", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" } },
  { id: "296", titulo: "Explorador | Exploradora", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "297", titulo: "Sardinha", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2479.webp", url: "https://www.area801.com/p/baus-do-transformice.html#chuva" } },
  { id: "298", titulo: "Pescador | Pescadora", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "299", titulo: "Adorador | Adoradora", evento: "Enigma de Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "300", titulo: "Frankenmaus", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "301", titulo: "Bombom *-*", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "302", titulo: "Suco de Abóbora", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "303", titulo: "Doce ou Travessura", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "304", titulo: "Poltergeist", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "305", titulo: "Halloween 2012", evento: "Halloween", bau: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" } },
  { id: "306", titulo: "Halloween 2013", evento: "Halloween", bau: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" } },
  { id: "307", titulo: "Von Drekkemaus", evento: "Enigma de Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "308", titulo: "Pirulito de Bengala", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "309", titulo: "Pisca Pisca", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "310", titulo: "Papaille Noel", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "311", titulo: "Elfo | Elfette", evento: "Fábrica de Brinquedos", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "312", titulo: "Anjo de Neve", evento: "Guerra de Bola de Neve", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
];

const titulos2014 = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", evento: "Evento", bau: "Baú" },
  { id: "313", titulo: "Recém-Casado | Recém-Casada", evento: "Dia dos Namorados", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" } },
  { id: "314", titulo: "Maçã do Amor", evento: "Dia dos Namorados", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" } },
  { id: "315", titulo: "Coração Partido", evento: "Dia dos Namorados", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" } },
  { id: "316", titulo: "Lua de Mel", evento: "Dia dos Namorados", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" } },
  { id: "317", titulo: "Carnaval 2014", evento: "Carnaval", bau: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" } },
  { id: "318", titulo: "Churros", evento: "Carnaval", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2478.webp", url: "https://www.area801.com/p/baus-do-transformice.html#carnaval" } },
  { id: "319", titulo: "Folião | Foliã", evento: "Carnaval", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2478.webp", url: "https://www.area801.com/p/baus-do-transformice.html#carnaval" } },
  { id: "320", titulo: "Cocoricó", evento: "Páscoa", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" } },
  { id: "321", titulo: "Cacau", evento: "Páscoa", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" } },
  { id: "322", titulo: "Caçador de Ovos | Caçadora de Ovos", evento: "Páscoa", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" } },
  { id: "323", titulo: "Rato Infantil | Rata Infantil", evento: "Dia das Crianças", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", url: "https://www.area801.com/p/baus-do-transformice.html#escola" } },
  { id: "335", titulo: "Mas Que Peixes", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "336", titulo: "Magiqueijo", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2480.webp", url: "https://www.area801.com/p/baus-do-transformice.html#armagedom" } },
  { id: "337", titulo: "Yeeehaaaaa!", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "338", titulo: "Melhor Treinador | Melhor Treinadora", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "339", titulo: "Todos a Bordo!", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "340", titulo: "herp derp", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "341", titulo: "Capitão Nemouse | Capitã Nemouse", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "342", titulo: "Indiana Rato | Indiana Rata", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "343", titulo: "Gasparzinho", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "344", titulo: "Torta de Abóbora", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "345", titulo: "Caça-Fantasmas", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "346", titulo: "Zumbi", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "347", titulo: "Caça-Vampiros", evento: "Enigma de Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "348", titulo: "Assustador | Assustadora", evento: "Mansão do Ceifador", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "349", titulo: "Devoradoces", evento: "Halloween dos Vampiros", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "350", titulo: "Glacial", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "351", titulo: "Pão de Mel", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "352", titulo: "Rato Polar | Rata Polar", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "353", titulo: "Grande Ceia", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
];

const titulos2015 = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", evento: "Evento", bau: "Baú" },
  { id: "354", titulo: "Salvador do Natal | Salvadora do Natal", evento: "Ruas de Nuremberg", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "355", titulo: "Nervosinho | Nervosinha", evento: "Páscoa", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" } },
  { id: "356", titulo: "Duque Caramelo | Duquesa Caramelo", evento: "Páscoa", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" } },
  { id: "357", titulo: "Confeiteiro do Rei | Confeiteira do Rei", evento: "Páscoa", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2481.webp", url: "https://www.area801.com/p/baus-do-transformice.html#cozinha" } },
  { id: "358", titulo: "Cara de Bolacha", evento: "Páscoa", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" } },
  { id: "359", titulo: "Rei Doce | Rainha Doce", evento: "Páscoa", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" } },
  { id: "360", titulo: "Estudante Modelo", evento: "Dia das Crianças", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", url: "https://www.area801.com/p/baus-do-transformice.html#escola" } },
  { id: "361", titulo: "Dora, a Aventureira", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "362", titulo: "Rato Arqueólogo | Rata Arqueóloga", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "363", titulo: "Allan Quaterrato", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "364", titulo: "Patriota", evento: "Dia da Independência dos Estados Unidos", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp", url: "https://www.area801.com/p/baus-do-transformice.html#global" } },
  { id: "365", titulo: "Sans-culotte", evento: "Dia da Bastilha", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp", url: "https://www.area801.com/p/baus-do-transformice.html#global" } },
  { id: "366", titulo: "Baderneiro | Baderneira", evento: "Volta às Aulas", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", url: "https://www.area801.com/p/baus-do-transformice.html#escola" } },
  { id: "367", titulo: "Primeiro da Classe | Primeira da Classe", evento: "Volta às Aulas", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", url: "https://www.area801.com/p/baus-do-transformice.html#escola" } },
  { id: "368", titulo: "Rato de Biblioteca | Rata de Biblioteca", evento: "Volta às Aulas", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", url: "https://www.area801.com/p/baus-do-transformice.html#escola" } },
  { id: "369", titulo: "Acadêmico | Acadêmica", evento: "Volta às Aulas", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", url: "https://www.area801.com/p/baus-do-transformice.html#escola" } },
  { id: "370", titulo: "Namastê", evento: "Dia da Independência da Índia", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp", url: "https://www.area801.com/p/baus-do-transformice.html#global" } },
  { id: "371", titulo: "Voldemouse", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "372", titulo: "Scooby-Doo", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "373", titulo: "O Amaldiçoado | A Amaldiçoada", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "375", titulo: "Tartiflette", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "376", titulo: "Lenhador | Lenhadora", evento: "Inverno Gelado", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
];

const titulos2016 = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", evento: "Evento", bau: "Baú" },
  { id: "377", titulo: "Queijólogo | Queijóloga", evento: "Astrológico", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2490.webp", url: "https://www.area801.com/p/baus-do-transformice.html#astrologico" } },
  { id: "378", titulo: "Bolo de Reis", evento: "Epifania", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2489.webp", url: "https://www.area801.com/p/baus-do-transformice.html#epifania" } },
  { id: "379", titulo: "Piloto | Pilota", evento: "Balão de Ar Quente", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2493.webp", url: "https://www.area801.com/p/baus-do-transformice.html#piloto" } },
  { id: "380", titulo: "Abraços Grátis", evento: "Abraço", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2475.webp", url: "https://www.area801.com/p/baus-do-transformice.html#abra%C3%A7o" } },
  { id: "381", titulo: "Marmota", evento: "Marmota", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2492.webp", url: "https://www.area801.com/p/baus-do-transformice.html#marmota" } },
  { id: "382", titulo: "Flor de Lótus", evento: "Dragão", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2477.webp", url: "https://www.area801.com/p/baus-do-transformice.html#dragao" } },
  { id: "383", titulo: "Rato Inspetor | Rata Inspetora", evento: "Enigma do Dragão", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2477.webp", url: "https://www.area801.com/p/baus-do-transformice.html#dragao" } },
  { id: "384", titulo: "Admirador Secreto | Admiradora Secreta", evento: "Dia dos Namorados", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" } },
  { id: "385", titulo: "Arlequim | Arlequina", evento: "Carnaval", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2478.webp", url: "https://www.area801.com/p/baus-do-transformice.html#carnaval" } },
  { id: "386", titulo: "Sapinho | Sapinha", evento: "Chuva", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2479.webp", url: "https://www.area801.com/p/baus-do-transformice.html#chuva" } },
  { id: "387", titulo: "Defensor | Defensora", evento: "Armagedom", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2480.webp", url: "https://www.area801.com/p/baus-do-transformice.html#armagedom" } },
  { id: "388", titulo: "Barmouse", evento: "Dia de São Patrício", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2485.webp", url: "https://www.area801.com/p/baus-do-transformice.html#patricio" } },
  { id: "389", titulo: "Ratatouille", evento: "Restaurante", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2481.webp", url: "https://www.area801.com/p/baus-do-transformice.html#cozinha" } },
  { id: "393", titulo: "Sininho", evento: "Páscoa", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" } },
  { id: "394", titulo: "Rato Pré-Histórico | Rata Pré-Histórica", evento: "Dinossauro", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2476.webp", url: "https://www.area801.com/p/baus-do-transformice.html#dino" } },
  { id: "395", titulo: "Tyrannosouris", evento: "Dinossauro", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2476.webp", url: "https://www.area801.com/p/baus-do-transformice.html#dino" } },
  { id: "396", titulo: "Ratinho Determinado | Ratinha Determinada", evento: "Dia das Crianças", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", url: "https://www.area801.com/p/baus-do-transformice.html#escola" } },
  { id: "397", titulo: "Rato Velhote | Rata Velhote", evento: "6º Aniversário", bau: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" } },
  { id: "402", titulo: "Souris-kun | Souris-chan", evento: "Ninja", bau: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" } },
  { id: "403", titulo: "Bucaneiro | Bucaneira", evento: "Pirata", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "404", titulo: "Sushizinho | Sushizinha", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "405", titulo: "Estrela-do-Mar", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "406", titulo: "Fazendeiro | Fazendeira", evento: "Jardinagem", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2488.webp", url: "https://www.area801.com/p/baus-do-transformice.html#jardinagem" } },
  { id: "407", titulo: "Maratonista", evento: "Jardinagem", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2488.webp", url: "https://www.area801.com/p/baus-do-transformice.html#jardinagem" } },
  { id: "408", titulo: "Rato Arenoso | Rata Arenosa", evento: "A Grande Aventura do Deserto", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp", url: "https://www.area801.com/p/baus-do-transformice.html#global" } },
  { id: "409", titulo: "Tutankhamouse", evento: "A Grande Aventura do Deserto", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp", url: "https://www.area801.com/p/baus-do-transformice.html#global" } },
  { id: "410", titulo: "Calouro | Caloura", evento: "Volta às Aulas", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", url: "https://www.area801.com/p/baus-do-transformice.html#escola" } },
  { id: "411", titulo: "Brincalhão | Brincalhona", evento: "Volta às Aulas", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", url: "https://www.area801.com/p/baus-do-transformice.html#escola" } },
  { id: "412", titulo: "Lobisrato | Lobisrata", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "413", titulo: "Pac-Mouse", evento: "Os Caça-Fantasmas", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "414", titulo: "Ratinho Viajante | Ratinha Viajante", evento: "Helloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "415", titulo: "Raclette", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
];

const titulos2017 = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", evento: "Evento", bau: "Baú" },
  { id: "416", titulo: "Frangipane", evento: "Epifania", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2489.webp", url: "https://www.area801.com/p/baus-do-transformice.html#epifania" } },
  { id: "417", titulo: "Dragãozinho | Dragãozinha", evento: "Dragão", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2477.webp", url: "https://www.area801.com/p/baus-do-transformice.html#dragao" } },
  { id: "418", titulo: "Sagui", evento: "Enigma do Dragão", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2477.webp", url: "https://www.area801.com/p/baus-do-transformice.html#dragao" } },
  { id: "419", titulo: "Massa de Crépe", evento: "Festival do Crepe", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2481.webp", url: "https://www.area801.com/p/baus-do-transformice.html#cozinha" } },
  { id: "420", titulo: "Rato Sagaz | Rata Sagaz", evento: "Elisah", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" } },
  { id: "421", titulo: "Amante de Artefatos", evento: "Elisah", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" } },
  { id: "422", titulo: "Capitão Coco | Capitã Coco", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "423", titulo: "Rato Turing | Rata Turing", evento: "O codificador Lua", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp", url: "https://www.area801.com/p/baus-do-transformice.html#global" } },
  { id: "424", titulo: "Supervisor | Supervisora", evento: "Mago", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2486.webp", url: "https://www.area801.com/p/baus-do-transformice.html#magia" } },
  { id: "425", titulo: "Bruxo | Bruxa", evento: "Mago", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2486.webp", url: "https://www.area801.com/p/baus-do-transformice.html#magia" } },
  { id: "426", titulo: "Castanha", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "427", titulo: "Transformista", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "429", titulo: "Frozen", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "430", titulo: "Cubo de Gelo", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
];

const titulos2018 = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", evento: "Evento", bau: "Baú" },
  { id: "431", titulo: "Trabalhador Glacial | Trabalhadora Glacial", evento: "Festival do Inverno", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "432", titulo: "Cupido", evento: "Dia dos Namorados", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" } },
  { id: "433", titulo: "Dorminhoco | Dorminhoca", evento: "Marmota", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2492.webp", url: "https://www.area801.com/p/baus-do-transformice.html#marmota" } },
  { id: "435", titulo: "Rato Celta | Rata Celta", evento: "Dia de São Patrício", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2485.webp", url: "https://www.area801.com/p/baus-do-transformice.html#patricio" } },
  { id: "436", titulo: "Leprechaun", evento: "Dia de São Patrício", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2485.webp", url: "https://www.area801.com/p/baus-do-transformice.html#patricio" } },
  { id: "437", titulo: "Rato Moai | Rata Moai", evento: "Páscoa", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" } },
  { id: "438", titulo: "Feijoada", evento: "Restaurante", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2481.webp", url: "https://www.area801.com/p/baus-do-transformice.html#cozinha" } },
  { id: "439", titulo: "Rato das Cavernas | Rata das Cavernas", evento: "Dinossauro", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2476.webp", url: "https://www.area801.com/p/baus-do-transformice.html#dino" } },
  { id: "460", titulo: "Perdoado | Perdoada", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "461", titulo: "Amante de Pizza", evento: "A Pizzaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2481.webp", url: "https://www.area801.com/p/baus-do-transformice.html#cozinha" } },
  { id: "462", titulo: "Cipher", evento: "O Desconhecido", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "428", titulo: "Enfeitiçado | Enfeitiçada", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "478", titulo: "Pierogi", evento: "Dia da Independência da Polônia", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp", url: "https://www.area801.com/p/baus-do-transformice.html#global" } },
  { id: "479", titulo: "Snowboarder", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "480", titulo: "Reninha", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
];

const titulos2019 = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", evento: "Evento", bau: "Baú" },
  { id: "481", titulo: "Jardineiro | Jardineira", evento: "Jardinagem", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2488.webp", url: "https://www.area801.com/p/baus-do-transformice.html#jardinagem" } },
  { id: "482", titulo: "Luz de Velas", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
];

const titulos2020 = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", evento: "Evento", bau: "Baú" },
  { id: "483", titulo: "Bardo", evento: "Dia de São Patrício", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2485.webp", url: "https://www.area801.com/p/baus-do-transformice.html#patricio" } },
  { id: "484", titulo: "Netuno", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "485", titulo: "Autodidata", evento: "Volta às Aulas", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", url: "https://www.area801.com/p/baus-do-transformice.html#escola" } },
  { id: "486", titulo: "Procrastinador | Procrastinadora", evento: "Volta às Aulas", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", url: "https://www.area801.com/p/baus-do-transformice.html#escola" } },
  { id: "487", titulo: "Honrado | Honrada", evento: "Volta às Aulas", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", url: "https://www.area801.com/p/baus-do-transformice.html#escola" } },
  { id: "488", titulo: "Minhoca", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "489", titulo: "Jack-o'-lantern", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "490", titulo: "Perdido no Tempo | Perdida no Tempo", evento: "Viagem no Tempo", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp", url: "https://www.area801.com/p/baus-do-transformice.html#global" } },
  { id: "491", titulo: "Castanha Caramelizada", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "492", titulo: "Azevinho", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
];

const titulos2021 = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", evento: "Evento", bau: "Baú" },
  { id: "493", titulo: "Ratobeleza | Ratabeleza", evento: "Trio do Carnaval", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2478.webp", url: "https://www.area801.com/p/baus-do-transformice.html#carnaval" } },
  { id: "494", titulo: "Coração de Brioche", evento: "Dia dos Namorados", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" } },
  { id: "495", titulo: "Gotinha", evento: "Chuva", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2479.webp", url: "https://www.area801.com/p/baus-do-transformice.html#chuva" } },
  { id: "505", titulo: "Botânico | Botânica", evento: "Estufa da Fleur", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2488.webp", url: "https://www.area801.com/p/baus-do-transformice.html#jardinagem" } },
  { id: "506", titulo: "Mermouse", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "507", titulo: "Almirante", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "508", titulo: "Lembre de Mim", evento: "Dia dos Mortos", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "509", titulo: "Nosferatu", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "510", titulo: "Esqueleto", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "531", titulo: "Feliz Natal", evento: "Chaminé de Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "532", titulo: "Snowdrop", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "533", titulo: "Iglu", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
];

const titulos2022 = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", evento: "Evento", bau: "Baú" },
  { id: "536", titulo: "Arrasa Corações", evento: "Cupido ou não?", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" } },
  { id: "537", titulo: "Quer Ser Meussarela?", evento: "Cupido ou não?", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" } },
  { id: "539", titulo: "Viajante", evento: "Arquipélago Caveira do Coelho", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2487.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pascoa" } },
  { id: "540", titulo: "Ratossauro", evento: "Dinossauro", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2476.webp", url: "https://www.area801.com/p/baus-do-transformice.html#dino" } },
  { id: "541", titulo: "Vulcânico | Vulcânica", evento: "Dinossauro", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2476.webp", url: "https://www.area801.com/p/baus-do-transformice.html#dino" } },
  { id: "542", titulo: "Mosquerato | Mosquerata", evento: "Missão dos Nobres", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp", url: "https://www.area801.com/p/baus-do-transformice.html#global" } },
  { id: "543", titulo: "Ferreiro | Ferreira", evento: "Missão dos Nobres", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp", url: "https://www.area801.com/p/baus-do-transformice.html#global" } },
  { id: "544", titulo: "Clarividente", evento: "Missão dos Nobres", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp", url: "https://www.area801.com/p/baus-do-transformice.html#global" } },
  { id: "545", titulo: "Girassol", evento: "Jardinagem", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2488.webp", url: "https://www.area801.com/p/baus-do-transformice.html#jardinagem" } },
  { id: "546", titulo: "Vinicultor | Vinicultora", evento: "Jardinagem", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2488.webp", url: "https://www.area801.com/p/baus-do-transformice.html#jardinagem" } },
  { id: "547", titulo: "Tritão | Sereia", evento: "Debaixo do Mar", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "548", titulo: "Infinito", evento: "Salto", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2493.webp", url: "https://www.area801.com/p/baus-do-transformice.html#piloto" } },
  { id: "549", titulo: "Up", evento: "Salto", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2493.webp", url: "https://www.area801.com/p/baus-do-transformice.html#piloto" } },
  { id: "550", titulo: "Squeak!", evento: "Caça aos Pesadelos", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "551", titulo: "Alma Perdida", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "552", titulo: "Scream Cheese", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "553", titulo: "Dó-Ré-Mi", evento: "A Orquestra", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2478.webp", url: "https://www.area801.com/p/baus-do-transformice.html#carnaval" } },
  { id: "554", titulo: "Aurora Boreal", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "555", titulo: "Ratinho de Neve | Ratinha de Neve", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "556", titulo: "Chocolate Quente", evento: "Panda Noel", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
];

const titulos2023 = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", evento: "Evento", bau: "Baú" },
  { id: "557", titulo: "Feliz Ano Novo!", evento: "Ano Novo Chinês", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2477.webp", url: "https://www.area801.com/p/baus-do-transformice.html#dragao" } },
  { id: "558", titulo: "Divorciado | Divorciada", evento: "Dia dos Namorados", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2491.webp", url: "https://www.area801.com/p/baus-do-transformice.html#namorados" } },
  { id: "559", titulo: "Bumblebrie", evento: "Estufa da Fleur", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2488.webp", url: "https://www.area801.com/p/baus-do-transformice.html#jardinagem" } },
  { id: "560", titulo: "Foi Pescar", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "561", titulo: "Capitão gancho", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "562", titulo: "Roedor Inteligente", evento: "Volta às Aulas", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", url: "https://www.area801.com/p/baus-do-transformice.html#escola" } },
  { id: "564", titulo: "Rei dos Rabiscos | Rainha dos Rabiscos", evento: "Volta às Aulas", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", url: "https://www.area801.com/p/baus-do-transformice.html#escola" } },
  { id: "565", titulo: "Mumisterioso", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "566", titulo: "Estrela d'Alva", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
];

const titulos2024 = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", evento: "Evento", bau: "Baú" },
  { id: "569", titulo: "Confete", evento: "Carnaval", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2478.webp", url: "https://www.area801.com/p/baus-do-transformice.html#carnaval" } },
  { id: "570", titulo: "Espanta Soneca", evento: "Marmota", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2492.webp", url: "https://www.area801.com/p/baus-do-transformice.html#marmota" } },
  { id: "571", titulo: "Sombra", evento: "Ninja", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2479.webp", url: "https://www.area801.com/p/baus-do-transformice.html#chuva" } },
  { id: "572", titulo: "Mestre-Cuca", evento: "Restaurante", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2481.webp", url: "https://www.area801.com/p/baus-do-transformice.html#cozinha" } },
  { id: "573", titulo: "Guardião | Guardiã", evento: "Armagedom", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2480.webp", url: "https://www.area801.com/p/baus-do-transformice.html#armagedom" } },
  { id: "574", titulo: "Margarida", evento: "Jardinagem", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2488.webp", url: "https://www.area801.com/p/baus-do-transformice.html#jardinagem" } },
  { id: "575", titulo: "Bolinho de Legumes", evento: "Jardinagem", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2488.webp", url: "https://www.area801.com/p/baus-do-transformice.html#jardinagem" } },
  { id: "596", titulo: "Carpinteiro | Carpinteira", evento: "Mago", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2486.webp", url: "https://www.area801.com/p/baus-do-transformice.html#magia" } },
  { id: "597", titulo: "Alquimista", evento: "Mago", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2486.webp", url: "https://www.area801.com/p/baus-do-transformice.html#magia" } },
  { id: "598", titulo: "Cringe", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "599", titulo: "Abominação", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "600", titulo: "Pinball Natalino", evento: "Chaminé de Pinball", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "601", titulo: "Rato do Ártico | Rata do Ártico", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
];

const titulos2025 = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", evento: "Evento", bau: "Baú" },
  { id: "602", titulo: "Empreguete", evento: "Transformaid", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2481.webp", url: "https://www.area801.com/p/baus-do-transformice.html#cozinha" } },
  { id: "603", titulo: "Celestial", evento: "Viagem para o País das Maravilhas", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp", url: "https://www.area801.com/p/baus-do-transformice.html#global" } },
  { id: "604", titulo: "Capitão Sardinha | Capitã Sardinha", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "605", titulo: "Cavalheiro do Lago | Dama do Lago", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "607", titulo: "Queijonauta", evento: "Astrológico", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2490.webp", url: "https://www.area801.com/p/baus-do-transformice.html#astrologico" } },
  { id: "608", titulo: "Boohoo", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "609", titulo: "Noivo Fantasma | Noiva Fantasma", evento: "Halloween", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2484.webp", url: "https://www.area801.com/p/baus-do-transformice.html#halloween" } },
  { id: "610", titulo: "Estalactite", evento: "Natal", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2474.webp", url: "https://www.area801.com/p/baus-do-transformice.html#natal" } },
  { id: "611", titulo: "Mãos frias", evento: "Balão Natalino", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2493.webp", url: "https://www.area801.com/p/baus-do-transformice.html#piloto" } },
];

const titulos2026 = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", evento: "Evento", bau: "Baú" },
  { id: "612", titulo: "Geomancer", evento: "Mago", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2486.webp", url: "https://www.area801.com/p/baus-do-transformice.html#magia" } },
  { id: "613", titulo: "Em Construção", evento: "Mago", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2486.webp", url: "https://www.area801.com/p/baus-do-transformice.html#magia" } },
  { id: "614", titulo: "Corsário", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
  { id: "615", titulo: "Aquamundongo", evento: "Pescaria", bau: { tipo: "link", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2482.webp", url: "https://www.area801.com/p/baus-do-transformice.html#pesca" } },
];

const titulosParkour = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo" },
  { id: "496", titulo: "Leitão | Leitoa", objetivo: "Complete 6.000 mapas" },
  { id: "497", titulo: "Checkpoint!", objetivo: "Colete 3.000 checkpoints" },
  { id: "498", titulo: "Press M", objetivo: "Complete 1.500 mapas" },
];

const titulosUnotfm = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo" },
  { id: "499", titulo: "Jogo Sujo", objetivo: "Desbloqueie todas as regras da casa" },
  { id: "500", titulo: "Rei dos Tronos | Rainha dos Tronos", objetivo: "Desbloqueie 120 cadeiras" },
  { id: "501", titulo: "UNO!", objetivo: "Ganhe 3.000 vezes" },
];

const titulosDeathmatch = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo" },
  { id: "502", titulo: "Camper", objetivo: "Sobreviva 1.500 vezes" },
  { id: "503", titulo: "Headshot", objetivo: "Ganhe 1.000 vezes" },
  { id: "504", titulo: "Deathmatch", objetivo: "Tenha mais de 180 horas em salas oficiais de #deathmatch" },
];

const titulosMycity = [
  { categoria: "Nº", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo" },
  { id: "535", titulo: "Magnata", objetivo: "Gaste mais de 5.000.000 de moedas" },
];

const titulosConcursos = [
  { categoria: "Nº", ano: "Ano", titulo: "Título (Masculino | Feminino)", objetivo: "Objetivo" },
  { id: "246", ano: "2011", titulo: "Dauphin | Dauphine", objetivo: { tipo: "texto-link", texto: "Participe do concurso de cosplay de 2011 ou ", link: { texto: "2015", url: "https://www.area801.com/2015/09/resultados-do-concurso-de-cosplay-2015.html" } } },
  { id: "247", ano: "2011", titulo: "Foxy", objetivo: { tipo: "texto-link", texto: "Fique no top 5 no concurso de cosplay de 2011 ou ", link: { texto: "2015", url: "https://www.area801.com/2015/09/resultados-do-concurso-de-cosplay-2015.html" } } },
  { id: "248", ano: "2011", titulo: "Mister Transformice | Miss Transformice", objetivo: { tipo: "texto-link", texto: "Fique em 1º lugar no concurso de cosplay de 2011 ou ", link: { texto: "2015", url: "https://www.area801.com/2015/09/resultados-do-concurso-de-cosplay-2015.html" } } },
  { id: "374", ano: "2015", titulo: "Milky Mouse", objetivo: { tipo: "texto-link", texto: "Participe do concurso de cosplay de ", link: { texto: "2015", url: "https://www.area801.com/2015/09/resultados-do-concurso-de-cosplay-2015.html" }, texto2: " com uma fantasia de caixa de leite" } },
  { id: "567", ano: "2023", titulo: "Bzzzzzz", objetivo: { tipo: "texto-imagem", texto: "Participe do concurso de criação de mapas Vanilla de 2023 ou abra ", bold: "Baús Globais ", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp", url: "https://www.area801.com/p/baus-do-transformice.html#global" } },
  { id: "568", ano: "2024", titulo: "Hmm...", objetivo: { tipo: "texto-imagem", texto: "Participe do concurso de criação de itens Shaman de 2024 ou abra ", bold: "Baús Globais ", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp", url: "https://www.area801.com/p/baus-do-transformice.html#global" } },
  { id: "606", ano: "2025", titulo: "Explorador Galáctico | Exploradora Galáctica", objetivo: { tipo: "texto-imagem", texto: "Participe do concurso de criação de mapas Vanilla de 2025 ou abra ", bold: "Baús Globais ", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp", url: "https://www.area801.com/p/baus-do-transformice.html#global" } },
];

const titulosOutros = [
  { categoria: "Nº", titulo: "Título", objetivo: "Objetivo" },
  { id: "252", titulo: "Souris Lilloise", objetivo: "Ter comparecido no encontro da Atelier 801 em 2012" },
  { id: "563", titulo: "Guerreiro da Caneta Azul", objetivo: { tipo: "texto-imagem", texto: "Abra ", bold: "Baús de Volta às Aulas ", imagem: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2483.webp", url: "https://www.area801.com/p/baus-do-transformice.html#escola", texto2: " ou ", bold2: "Baús Globais ", imagem2: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/inventario/2473.webp", url2: "https://www.area801.com/p/baus-do-transformice.html#global" } },
];

const titulosAdministradores = [
  { categoria: "Nº", titulo: "Título", administrador: "Administrador" },
  { id: "440", titulo: "Fromadmin", administrador: "Melibellule#0095" },
  { id: "442", titulo: "Sourigami", administrador: "Sydoline#0095" },
  { id: "444", titulo: "La Belette", administrador: "Tigrounette#0001" },
  { id: "445", titulo: "El Pinolero", administrador: "Kura#0095" },
  { id: "446", titulo: "Dehset Admin", administrador: "Vanlu#0095" },
  { id: "447", titulo: "Kikoo Admin", administrador: "Tigrounette#0001" },
  { id: "448", titulo: "Queijadinha", administrador: "Galaktine#0095" },
  { id: "449", titulo: "La Goulue", administrador: "Maharadjah#0095" },
  { id: "450", titulo: "Souris Électrique", administrador: "Pikashu#0095" },
  { id: "451", titulo: "Gold Saint", administrador: "Yoshiki#0095" },
  { id: "452", titulo: "Le Bourrin", administrador: "Molgy#0095" },
  { id: "453", titulo: "Crazy Cat Lady", administrador: "Zou#0095" },
  { id: "454", titulo: "Fit Mouse", administrador: "Streaxx#0095" },
  { id: "534", titulo: "Typo Queen", administrador: "Matza#0001" },
];

function criarTabelaTitulos(secaoId, dados, tipo = "normal") {
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
        td.innerHTML = item[col];
        tr.appendChild(td);
      });
    } else {
      Object.keys(item).forEach((chave) => {
        const td = document.createElement("td");
        const valor = item[chave];

        if (typeof valor === "object" && valor !== null && valor.tipo === "texto-moeda") {
          const texto = document.createTextNode(valor.texto + " ");
          td.appendChild(texto);

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
        else if (typeof valor === "object" && valor !== null && valor.tipo === "imagem") {
          const img = document.createElement("img");
          img.src = valor.conteudo;
          td.appendChild(img);
        }
        else if (typeof valor === "object" && valor !== null && valor.tipo === "texto-link") {
          const texto = document.createTextNode(valor.texto);
          td.appendChild(texto);
          
          const a = document.createElement("a");
          a.href = valor.link.url;
          a.target = "_blank";
          a.textContent = valor.link.texto;
          td.appendChild(a);
          
          if (valor.texto2) {
            const texto2 = document.createTextNode(valor.texto2);
            td.appendChild(texto2);
          }
        }
        else if (typeof valor === "object" && valor !== null && valor.tipo === "texto-imagem") {
          const texto = document.createTextNode(valor.texto);
          td.appendChild(texto);
          
          if (valor.bold) {
            const strong = document.createElement("strong");
            strong.textContent = valor.bold;
            td.appendChild(strong);
          }
          
          if (valor.imagem && valor.url) {
            const a = document.createElement("a");
            a.href = valor.url;
            a.target = "_blank";
            const img = document.createElement("img");
            img.src = valor.imagem;
            a.appendChild(img);
            td.appendChild(a);
          }
          
          if (valor.texto2) {
            const texto2 = document.createTextNode(valor.texto2);
            td.appendChild(texto2);
            
            if (valor.bold2) {
              const strong2 = document.createElement("strong");
              strong2.textContent = valor.bold2;
              td.appendChild(strong2);
            }
            
            if (valor.imagem2 && valor.url2) {
              const a2 = document.createElement("a");
              a2.href = valor.url2;
              a2.target = "_blank";
              const img2 = document.createElement("img");
              img2.src = valor.imagem2;
              a2.appendChild(img2);
              td.appendChild(a2);
            }
          }
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

criarTabelaTitulos("queijos", titulosQueijos, "default");
criarTabelaTitulos("firsts", titulosFirsts, "default");
criarTabelaTitulos("saves", titulosSaves, "default");
criarTabelaTitulos("saves-dificil", titulosSavesDificil, "default");
criarTabelaTitulos("saves-divino", titulosSavesDivino, "default");
criarTabelaTitulos("habilidades", titulosSavesSemHabilidades, "default");
criarTabelaTitulos("habilidades-dificil", titulosSavesSemHabilidadesDificil, "default");
criarTabelaTitulos("habilidades-divino", titulosSavesSemHabilidadesDivino, "default");
criarTabelaTitulos("bootcamps", titulosBootcamps, "star");
criarTabelaTitulos("loja", titulosLoja, "star");
criarTabelaTitulos("village", titulosVillage, "event");
criarTabelaTitulos("shaman", titulosVillageShaman, "event");
criarTabelaTitulos("survivor", titulosVillageSurvivor, "survivor");
criarTabelaTitulos("racing", titulosVillageRacing, "event");
criarTabelaTitulos("bootcamp", titulosVillageBootcamp, "event");
criarTabelaTitulos("defilante", titulosVillageDefilante, "event");
criarTabelaTitulos("2010", titulos2010, "event");
criarTabelaTitulos("2011", titulos2011, "event");
criarTabelaTitulos("2012", titulos2012, "event");
criarTabelaTitulos("2013", titulos2013, "event");
criarTabelaTitulos("2014", titulos2014, "event");
criarTabelaTitulos("2015", titulos2015, "event");
criarTabelaTitulos("2016", titulos2016, "event");
criarTabelaTitulos("2017", titulos2017, "event");
criarTabelaTitulos("2018", titulos2018, "event");
criarTabelaTitulos("2019", titulos2019, "event");
criarTabelaTitulos("2020", titulos2020, "event");
criarTabelaTitulos("2021", titulos2021, "event");
criarTabelaTitulos("2022", titulos2022, "event");
criarTabelaTitulos("2023", titulos2023, "event");
criarTabelaTitulos("2024", titulos2024, "event");
criarTabelaTitulos("2025", titulos2025, "event");
criarTabelaTitulos("2026", titulos2026, "event");
criarTabelaTitulos("parkour", titulosParkour, "default");
criarTabelaTitulos("unotfm", titulosUnotfm, "default");
criarTabelaTitulos("deathmatch", titulosDeathmatch, "default");
criarTabelaTitulos("mycity", titulosMycity, "default");
criarTabelaTitulos("concursos", titulosConcursos, "contest");
criarTabelaTitulos("outros", titulosOutros, "default");
criarTabelaTitulos("administradores", titulosAdministradores, "default");
