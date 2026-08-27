const comandosGratis = [
  { categoria: "Comando", funcao: "Função" },
  {
    comando: "/atelier801",
    funcao: "Comando em homenagem ao aniversário da Atelier 801. Ao digitar o comando você ganha um bolo na cabeça do seu rato"
  },
  {
    comando: "/facebook",
    funcao: "Abre, no seu navegador, a página do Transformice no Facebook. Você ganha 20 queijos ao usar o comando pela primeira vez"
  },
  {
    comando: "/anvilgod73",
    funcao: "Comando em homenagem ao aniversário de 10 anos da Atelier 801. Para ganhar a medalha especial de 10 anos, basta equipar o bigode na sessão 'Boca', ir a uma Village e digitar esse comando em cima do sofá onde se encontra Elise e Papaille"
  }
];

const comandosInteracao = [
  { categoria: "Comando", funcao: "Função", exemplo: "Exemplo" },
  {
    comando: "/f",
    funcao: "Faz o seu rato balançar a bandeira de um país",
    exemplo: "/f br"
  },
  {
    comando: "/t",
    funcao: "Manda uma mensagem para o chat da tribo",
    exemplo: "/t Oi, seus lindos!"
  },
  {
    comando: "/t*, /tc ou /mt",
    funcao: "Abre o chat da tribo em uma aba exclusiva",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/c ou /w",
    funcao: "Envia um cochicho para o jogador selecionado",
    exemplo: "/c Fulano olá, tudo bem?"
  },
  {
    comando: "/c* ou /w*",
    funcao: "Envia um cochicho para o jogador selecionado em uma aba exclusiva",
    exemplo: "/c* Fulano olá, tudo bem?"
  },
  {
    comando: "/silence",
    funcao: "Desativa o seu cochicho para os outros, exceto amigos. Pode específicar um motivo caso desejado",
    exemplo: "/silence Não posso responder"
  },
  {
    comando: "/silence*",
    funcao: "Desativa o seu cochicho para os outros, incluindo amigos. Pode específicar um motivo caso desejado",
    exemplo: "/silence* Não posso responder"
  },
  {
    comando: "/chat",
    funcao: "Cria um chat privado. Todos que digitarem o comando com o mesmo nome de chat vão participar dele",
    exemplo: "/chat Area801"
  },
  {
    comando: "/quem, /who, /qui ou /quien",
    funcao: "Exibe a lista de jogadores que estão no chat privado",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/amigo, /friend, /ami, /freund ou /vriend",
    funcao: "Adiciona o jogador selecionado na sua lista de amigos",
    exemplo: "/amigo Fulano"
  },
  {
    comando: "/ignore, /ignorieren ou /negeer",
    funcao: "Impede que o jogador selecionado mande mensagens para você",
    exemplo: "/ignore Fulano"
  },
  {
    comando: "/trade ou /echange",
    funcao: "Começa uma troca com o jogador selecionado. Você precisa estar na mesma sala que a pessoa",
    exemplo: "/trade Fulano"
  },
  {
    comando: "/ban",
    funcao: "Faz um voto de banimento para o jogador selecionado. Ele é banido por uma hora da sala conforme a quantidade de ratos",
    exemplo: "/ban Fulano"
  },
  {
    comando: "/report",
    funcao: "Abre o painel de denúncias contra o jogador selecionado",
    exemplo: "/report Fulano"
  },
  {
    comando: "/avatar",
    funcao: "Escolhe um avatar para o seu perfil do Transformice. A imagem deve ter menos de 512KB",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/perfil, /profile, /profiel ou /profil",
    funcao: "Exibe o perfil do jogador selecionado, mesmo se ele não estiver jogando",
    exemplo: "/perfil Fulano"
  },
  {
    comando: "/calendar",
    funcao: "Abre o seu calendário de eventos diretamente pelo chat. Caso usado com o nome de outro jogador, irá abrir o calendário dele",
    exemplo: "/calendar Fulano"
  },
  {
    comando: "/titulo, /title, /titel ou /titre",
    funcao: "Mostra todos os seus títulos desbloqueados. Usar o comando juntamente de um número da lista faz com que você troque o seu título para o selecionado",
    exemplo: "/title 32"
  },
  {
    comando: "/watch",
    funcao: "Destaca o jogador selecionado no mapa. Digite o comando sozinho para reverter as configurações",
    exemplo: "/watch Fulano"
  },
  {
    comando: "/mort",
    funcao: "Mata o seu rato instantaneamente. Algumas salas exigem que você espere até poder usar esse comando",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/mod",
    funcao: "Mostra todos os moderadores online no momento, separados por comunidade",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/mapcrew",
    funcao: "Mostra todos os mapcrewers online no momento, separados por comunidade",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  }
];

const comandosSalas = [
  { categoria: "Comando", funcao: "Função", exemplo: "Exemplo" },
  {
    comando: "/sala, /room, /kamer, /salon ou /zimmer",
    funcao: "Faz com que você entre na sala selecionada, caso não houver senha",
    exemplo: "/sala 42"
  },
  {
    comando: "/pw",
    funcao: "Protege a sala com uma senha. É necessário que a sala tenha o seu nome para ganhar efeito. Digite o comando sozinho para reverter as configurações",
    exemplo: "/pw Joaomanoel Minhasalavanilla"
  },
  {
    comando: "/mulodrome",
    funcao: "Abre a janela de criação de campeonatos, onde você e mais nove jogadores podem disputar em duas equipes",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/vanilla",
    funcao: "Faz com que você entre em uma Vanilla aleatória. Caso selecionado, você vai para uma Vanilla específica",
    exemplo: "/vanilla3"
  },
  {
    comando: "/survivor",
    funcao: "Faz com que você entre em um Survivor aleatório. Caso selecionado, você vai para um Survivor específico",
    exemplo: "/survivor2"
  },
  {
    comando: "/racing",
    funcao: "Faz com que você entre em uma Racing aleatória. Caso selecionado, você vai para uma Racing específica",
    exemplo: "/racing7"
  },
  {
    comando: "/bootcamp",
    funcao: "Faz com que você entre em um Bootcamp aleatório. Caso selecionado, você vai para um Bootcamp específica",
    exemplo: "/bootcamp4"
  },
  {
    comando: "/defilante",
    funcao: "Faz com que você entre em uma Defilante aleatória. Caso selecionado, você vai para uma Defilante específica",
    exemplo: "/defilante1"
  },
  {
    comando: "/editor ou /editeur",
    funcao: "Faz com que você entre no editor de mapas",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/totem",
    funcao: "Faz com que você entre no editor de totens. É necessário desbloquear o modo difícil para acessar (1000 ratos salvos)",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/tutorial",
    funcao: "Faz com que você entre no tutorial inicial",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  }
];

const comandosTribo = [
  { categoria: "Comando", funcao: "Função", exemplo: "Exemplo" },
  {
    comando: "/inv",
    funcao: "Convida o jogador selecionado para o cafofo da sua tribo",
    exemplo: "/inv Fulano"
  },
  {
    comando: "/invkick",
    funcao: "Expulsa o jogador selecionado do cafofo da sua tribo",
    exemplo: "/invkick Fulano"
  },
  {
    comando: "/np",
    funcao: "Muda o mapa atual para outro selecionado. Digite o comando sozinho para retornar ao mapa padrão do cafofo",
    exemplo: "/np 42"
  },
  {
    comando: "/npp",
    funcao: "Muda o mapa atual para outro selecionado assim que a rodada terminar",
    exemplo: "/npp 42"
  },
  {
    comando: "/ch",
    funcao: "Define quem será o próximo Shaman da rodada",
    exemplo: "/ch Fulano"
  },
  {
    comando: "/sy",
    funcao: "Define quem será o sincronizador da sala. Digite o comando sozinho para reverter as configurações",
    exemplo: "/sy Fulano"
  },
  {
    comando: "/sy?",
    funcao: "Mostra quem é o sincronizador da sala atualmente",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/module",
    funcao: "Inicia um minigame selecionado no cafofo. Digite o comando seguido de 'stop' para encerrar o módulo",
    exemplo: "/module #fight"
  },
  {
    comando: "/lua",
    funcao: "Abre uma janela para a inserção de scripts Lua no cafofo",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/music ou /musique",
    funcao: "Toca uma música escolhida no cafofo (MP3 válido). Quando o mapa tinha o item de tela, era possível exibir um vídeo no YouTube",
    exemplo: "/musique http://link.com/algo.mp3"
  },
  {
    comando: "/neige",
    funcao: "Faz com que o cafofo da sua tribo neve por um minuto. Digite o comando novamente para acabar com a nevasca",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  }
];

const comandosStrm = [
  { categoria: "Comando", funcao: "Função", exemplo: "Exemplo" },
  {
    comando: "/np",
    funcao: "Muda o mapa atual para outro selecionado. Digite o comando sozinho para rodar o próximo mapa",
    exemplo: "/np @555"
  },
  {
    comando: "/npp",
    funcao: "Muda o mapa atual para outro selecionado assim que a rodada terminar",
    exemplo: "/npp @555"
  },
  {
    comando: "/ch",
    funcao: "Faz o jogador selecionado ser o Shaman da próxima partida",
    exemplo: "/ch Fulano"
  },
  {
    comando: "/ban",
    funcao: "Remove o jogador selecionado da sala automaticamente",
    exemplo: "/ban Fulano"
  }
];

const comandosFuncorp = [
  { categoria: "Comando", funcao: "Função", exemplo: "Exemplo" },
  {
    comando: "/funcorp",
    funcao: "Ativa e desativa o modo FunCorp da sala",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/funcorp help",
    funcao: "Mostra todos os comandos disponíveis no modo FunCorp",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/changesize",
    funcao: "Muda o tamanho dos jogadores (De 0.1 até 5). Digite o comando seguido de 'off' para reverter as configurações",
    exemplo: "/changesize * 5"
  },
  {
    comando: "/colormouse",
    funcao: "Muda a cor dos ratos dos jogadores. Digite o comando seguido de 'off' para reverter as configurações",
    exemplo: "/colormouse * #FFFFFF"
  },
  {
    comando: "/colornick",
    funcao: "Muda a cor dos nomes dos jogadores. Digite o comando seguido de 'off' para reverter as configurações",
    exemplo: "/colornick * #000000"
  },
  {
    comando: "/linkmice",
    funcao: "Conecta os jogadores uns aos outros como alma gêmea. Digite o comando seguido de 'off' para reverter as configurações",
    exemplo: "/linkmice Joaomanoel Rodybrazil"
  },
  {
    comando: "/meep",
    funcao: "Concede a habilidade de Meep para os jogadores. Digite o comando seguido de 'off' para reverter as configurações",
    exemplo: "/meep *"
  },
  {
    comando: "/transformation",
    funcao: "Concede a habilidade de transformação para os jogadores. Digite o comando seguido de 'off' para reverter as configurações",
    exemplo: "/transformation *"
  }
];

const comandosConfiguracoes = [
  { categoria: "Comando", funcao: "Função", exemplo: "Exemplo" },
  {
    comando: "/ips",
    funcao: "Mostra a taxa de frames por segundo e os dados em MB/s baixados no canto superior esquerdo da tela",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/cips",
    funcao: "Mostra um gráfico com a taxa de frames por segundo. O gráfico pode ser arrastado para qualquer lugar da tela",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/resettotem",
    funcao: "Reseta o totem atual. É necessário estar no editor de totens para funcionar",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/sauvertotem",
    funcao: "Salva o totem atual. É necessário estar no editor de totens para funcionar",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/bg",
    funcao: "Conserta o bug do quadrado preto que afeta alguns processadores AMD",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/cafe ou /cafee",
    funcao: "Invoca vários ícones do Café na tela, que só podem ser removidos relogando ou clicando neles. Clicar neles traz uma pequena chance de mais 5 ícones surgirem, dificultando ainda mais a remoção. Comando usado para trollar jogadores",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/cl",
    funcao: "Abre o Hall do Queijo",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/clavier",
    funcao: "Alterna entre o teclado inglês e francês",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/clear",
    funcao: "Apaga todo o conteúdo do chat, exceto abas",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/code",
    funcao: "Abre uma janela para a inserção de códigos promocionais oferecidos pelos administradores",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/codecadeau",
    funcao: "Resgata um código de uso único para recompensas",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/debug",
    funcao: "Mostra todos os elementos do mapa atual, como um 'Raio-X'. Útil para criadores de mapas no editor",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/dressing",
    funcao: "Abre uma janela para vestuário, no qual você pode montar visuais com itens que você não tem atualmente. Além disso, é possível salvar a sua criação no formato PNG",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/erreur_image",
    funcao: "Mostra erros de carregamento de imagens",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/é",
    funcao: "Comando desconhecido de desenvolvedor que mostra uma mensagem no chat",
    exemplo: "/é _I, /é Fx ou /é x_proxySteam"
  },
  {
    comando: "/font",
    funcao: "Altera o tipo de fonte no chat do jogo",
    exemplo: "/font Arial"
  },
  {
    comando: "/fontsize",
    funcao: "Altera o tamanho da fonte no chat do jogo",
    exemplo: "/fontsize 12"
  },
  {
    comando: "/fullscreen",
    funcao: "Ativa e desativa o modo tela cheia",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/info",
    funcao: "Exibe informações sobre o mapa atual ou mapa selecionado, caso houver o código",
    exemplo: "/info @555"
  },
  {
    comando: "/infoshop",
    funcao: "Mostra a categoria e o ID dos itens da loja no canto superior esquerdo",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/langue",
    funcao: "Muda o idioma do seu jogo para o país selecionado",
    exemplo: "/langue en"
  },
  {
    comando: "/lsmap",
    funcao: "Abre uma lista com todos os seus mapas criados",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/luahelp",
    funcao: "Mostra a árvore Lua, com a documentação de funções e eventos",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/menu",
    funcao: "Abre o menu para a seleção de salas",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/module",
    funcao: "Exibe uma lista de minigames com a quantidade de jogadores",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/music ou /musique",
    funcao: "Ativa e desativa a reprodução de músicas de outros jogadores no jogo",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/musique_jeu",
    funcao: "Ativa e desativa as músicas do jogo",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/nosouris",
    funcao: "Remove as dicas de jogo no início da sua conta. Também funciona com contas de convidado",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/nue",
    funcao: "Desativa a exibição dos acessórios utilizados pelos outros ratos",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/ping",
    funcao: "Mostra o tempo de resposta entre o seu computador e o servidor do jogo",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/salonauto",
    funcao: "Manda você para a sala selecionada, seguida de números aleatórios",
    exemplo: "/salonauto oi"
  },
  {
    comando: "/shooting",
    funcao: "Ativa e desativa os balões de fala dos ratos",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/time ou /temps",
    funcao: "Mostra o seu tempo de jogo em dias, horas, minutos e segundos",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/version",
    funcao: "Exibe as novidades da versão atual em inglês",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/x_aj",
    funcao: "Abre uma janela com outros jogos da empresa",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/x_eneko",
    funcao: "Faz com que você entre na sua sala de treinamento",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/x_imj",
    funcao: "Abre o menu antigo de modos de jogo",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/x_inv",
    funcao: "Abre o seu inventário",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  },
  {
    comando: "/^^",
    funcao: "Exibe as informações do seu cliente e sistema utilizado para rodar o jogo",
    exemplo: { tipo: "imagem", conteudo: "https://cdn.jsdelivr.net/gh/frozelogic/area801@main/assets/outros/Cross.webp" }
  }
];

const atalhosTeclado = [
  { categoria: "Atalho", funcao: "Função" },
  {
    atalho: "E ou C",
    funcao: "Faz o seu rato jogar confetes ou abrir a lista de emojis. É possível alterar a ordem dos atalhos através das opções"
  },
  {
    atalho: "R",
    funcao: "Prepara o chat para responder o último cochicho"
  },
  {
    atalho: "T",
    funcao: "Prepara o chat para responder a tribo"
  },
  {
    atalho: "Y",
    funcao: "Prepara o chat para responder a sala"
  },
  {
    atalho: "Esc",
    funcao: "Prepara o chat para responder a sala"
  },
  {
    atalho: "I",
    funcao: "Abre o seu inventário"
  },
  {
    atalho: "Ctrl + F",
    funcao: "Ativa e desativa o modo tela cheia"
  },
  {
    atalho: "Shift + Enter",
    funcao: "Expande o tamanho do chat para ver mais mensagens"
  },
  {
    atalho: "Tab",
    funcao: "Visualiza uma aba com mensagens não lidas. Caso não houver, vai para o chat principal"
  },
  {
    atalho: "0,1,2,3,4,5,6,7,8,9",
    funcao: "Exibe os emojis padrão do jogo acima do seu rato"
  },
  {
    atalho: "Shift + Clique Esquerdo",
    funcao: "Na janela de troca, permite selecionar 10 consumíveis de uma vez"
  }
];

const atalhosShaman = [
  { categoria: "Atalho", funcao: "Função" },
  {
    atalho: "Z e X ou Shift e Ctrl",
    funcao: "Gira o objeto selecionado para ser invocado"
  },
  {
    atalho: "F",
    funcao: "Abre o menu de avisos do Shaman"
  },
  {
    atalho: "1,2,3,4,5,6,7,8,9",
    funcao: "Seleciona um item do Shaman de acordo com a ordem em que são exibidos no menu de itens"
  },
  {
    atalho: "C, V, B, N ou J",
    funcao: "Seleciona um tipo de prego para o item a ser invocado. C = amarelo | V = azul ou verde | B = vermelho | N = motor em sentido horário | J = motor em sentido anti-horário"
  },
  {
    atalho: "Shift + 1, 2, 3, 4, 5, 6, 7, 8, 9",
    funcao: "Exibe os emojis padrão do jogo acima do seu rato enquanto você é Shaman"
  }
];

const comandosAntigos = [
  { categoria: "Comando", funcao: "Função" },
  {
    comando: "/dance ou /danse",
    funcao: "Comando de dança. Foi retirado após os botões de emoções tomarem o lugar"
  },
  {
    comando: "/laugh ou /rire",
    funcao: "Comando de risada. Foi retirado após os botões de emoções tomarem o lugar"
  },
  {
    comando: "/cry ou /pleurer",
    funcao: "Comando de choro. Foi retirado após os botões de emoções tomarem o lugar"
  },
  {
    comando: "/kiss ou /bisou",
    funcao: "Comando de beijo. Foi retirado após os botões de emoções tomarem o lugar"
  },
  {
    comando: "/hynixy",
    funcao: "Comando troll durante o enigma do aniversário de 4 anos do Transformice. Ele levava o jogador para um caminho errado, gerando um número aleatório entre respostas, como 'nop', 'tente novamente' e 'quase'"
  },
  {
    comando: "/pwet",
    funcao: "Fazia de você um convidado enquanto conectado a sua conta durante o Enigma do Aniversário de 4 anos do Transformice"
  },
  {
    comando: "/rt",
    funcao: "Recrutava jogadores para a tribo antes da opção estar presente no perfil"
  },
  {
    comando: "/tk",
    funcao: "Expulsava o jogador selecionado da tribo"
  },
  {
    comando: "/changepass",
    funcao: "Abria a janela de troca de senha"
  },
  {
    comando: "/election",
    funcao: "Abria o sistema de eleições"
  },
  {
    comando: "/filter ou /filtre",
    funcao: "Habilitava e desabilitava o filtro contra palavrões no chat"
  },
  {
    comando: "/find ou /chercher",
    funcao: "Mostrava em que sala um jogador específico estava"
  },
  {
    comando: "/fps60",
    funcao: "Aumentava manualmente o limite de frames por segundo para 60"
  },
  {
    comando: "/fs",
    funcao: "Ativava ou desativava a função de tela cheia"
  },
  {
    comando: "/mjj",
    funcao: "Mandava você para um modo de jogo dependendo do número escrito"
  },
  {
    comando: "/modeexpo",
    funcao: "Retirava a barra lateral na esquerda do standalone antigo"
  },
  {
    comando: "/modemusique",
    funcao: "Mandava você para uma sala de música"
  },
  {
    comando: "/mute",
    funcao: "Ignorava as mensagens de um jogador"
  },
  {
    comando: "/parrain",
    funcao: "Abria a tela de apadrinhamento"
  },
  {
    comando: "/ranking ou /classement",
    funcao: "Abria um ranking do top 10 melhores jogadores em ratos salvos, queijos e firsts coletados"
  },
  {
    comando: "/roomevent",
    funcao: "Mostrava uma mensagem nas salas de streaming, mas não tinha efeito algum"
  },
  {
    comando: "/ruasonid",
    funcao: "Com um código, você conseguia ganhar uma medalha no Enigma do Dinossauro de 2022"
  },
  {
    comando: "/scroll",
    funcao: "Travava a rodinha do mouse e touchpad"
  },
  {
    comando: "/skip",
    funcao: "Votava para que a música atual na sala de músicas fosse pulada"
  },
  {
    comando: "/test-migration",
    funcao: "Abria uma janela que permitia a migração de contas da Kongregate / Armor Games / Facebook / Google Accounts para as contas da Atelier 801"
  },
  {
    comando: "/tribunal",
    funcao: "Abria o tribunal. Nele, você podia votar em possíveis infratores que foram denunciados"
  }
];

function criarTabelaComandos(secaoId, dados, tipo = "normal") {
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

        if (chave === "comando" || chave === "atalho") {
          const code = document.createElement("code");
          code.textContent = valor;
          td.appendChild(code);
        }
        else if (typeof valor === "object" && valor !== null && valor.tipo === "imagem") {
          const img = document.createElement("img");
          img.src = valor.conteudo;
          td.appendChild(img);
        }
        else if (chave === "exemplo" && typeof valor === "string") {
          const code = document.createElement("code");
          code.textContent = valor;
          td.appendChild(code);
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

criarTabelaComandos("gratis", comandosGratis, "default");
criarTabelaComandos("interacao", comandosInteracao, "trio");
criarTabelaComandos("salas", comandosSalas, "trio");
criarTabelaComandos("tribo", comandosTribo, "trio");
criarTabelaComandos("strm", comandosStrm, "trio");
criarTabelaComandos("funcorp", comandosFuncorp, "trio");
criarTabelaComandos("configuracoes", comandosConfiguracoes, "trio");
criarTabelaComandos("atalhos", atalhosTeclado, "default");
criarTabelaComandos("atalhos-shaman", atalhosShaman, "default");
criarTabelaComandos("antigos", comandosAntigos, "default");
