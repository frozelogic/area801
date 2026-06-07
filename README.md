# Assets e Recursos para o Área 801

Repositório centralizado para armazenamento de assets, CSS e JavaScript destinados ao uso no blog do Área 801 e outros projetos.

## Estrutura do Repositório

### Assets (Imagens WEBP)
Todas as imagens estão otimizadas no formato WEBP para melhor performance, servidas via CDN jsDelivr.

| Pasta | Conteúdo | Nomenclatura |
|-------|----------|-------------|
| **arremessaveis** | Consumíveis jogáveis | `[nome fixo].webp` |
| **banner** | Barras de progresso do perfil | `[id].webp` |
| **bouboum** | Imagens da página referente | `[nome fixo].webp` |
| **cartas** | Bilhetes utilizados para mensagens | `[nome do evento].webp` |
| **emojis** | Emojis utilizados dentro do jogo | `[id].webp` |
| **esferas** | Esferas do Transformice | `[id].webp` (exceto Esferas de Iniciantes) |
| **flash** | Banners da Flash Squad | `[data].webp` |
| **gamasutra** | Imagens da Gamasutra | `[nome fixo].webp` |
| **inventario** | Itens do inventário | `[id].webp` |
| **loja** | Itens de eventos da loja | `[data].webp` |
| **mapas** | Mapas de eventos | `[nome do mapa/evento].webp` |
| **medalhas** | Medalhas do jogo | `[id].webp` |
| **modos** | Modos de jogo padrão | `[nome do modo].webp` |
| **modules** | Imagens de modos e módulos | `[nome do modo/module].webp` |
| **npcs** | NPCs no Transformice | `[nome do npc].webp` |
| **outros** | Imagens sem nenhuma categoria | `[nome fixo].webp` |
| **pets** | Imagens de pets do jogador | `[nome do pet].webp` |
| **sobre** | Imagens da postagem "Sobre" | `[nome fixo].webp` |
| **social** | Widget de redes sociais | `[rede social].webp` |
| **standalones** | Imagens da página referente | `[nome fixo].webp` |
| **tags** | Imagens das pichações | `[nome fixo].webp` |
| **titulos** | Texto com todos os títulos | - |

### Script
Códigos JavaScript organizados por categoria de uso.

| Pasta | Tipo | Descrição |
|-------|------|-----------|
| **custom** | Atualizável | Scripts que recebem atualizações periódicas |
| `baus.js` | - | Funcionalidades específicas para baús |
| **vendor** | Estável | Scripts únicos que cumprem seu objetivo |
| `contato.js` | - | Sistema de contato para a página referente |
| `enigma.js` | - | Sistema para a solução do enigma do Ano Novo Chinês |
| `resumo.js` | - | Funcionalidades sobre os eventos na página de resumos |
| `search.js` | - | Sistema de busca e filtragem do evento Maravilhas |
| `tribewar.js` | - | Sistema de placar para o minigame Tribewar |

### Styles
Folhas de estilo CSS para diferentes páginas e funcionalidades.

| Arquivo | Destino |
|---------|---------|
| `baus.css` | Estilos para baús |
| `blog.css` | Estilos não utilizados do blog |
| `contato.css` | Estilos para a página de contato |
| `deadmaze.css` | Estilos para a dressroom do Dead Maze |
| `enigma.css` | Estilos para a página do Ano Novo Chinês |
| `iframe.css` | Estilos para iframes específicos |
| `jogar.css` | Estilos para páginas com "Jogar" |
| `main.css` | Estilos principais |
| `resumo.css` | Estilos para a página de resumos |
| `standalones.css` | Estilos para a página de standalones |
| `tribewar.css` | Estilos para a página de ranking Tribewar |
| `wonderland.css` | Estilos para o evento Maravilhas |

## Como Usar

### Para Assets (Imagens)
```html
<img src="https://cdn.jsdelivr.net/gh/frozelogic/area801/assets/inventario/123.webp" />
```

### Para CSS
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/frozelogic/area801@main/styles/main.css" />
```

### Para JavaScript
```html
<script src="https://cdn.jsdelivr.net/gh/frozelogic/area801@main/script/vendor/search.js"></script>
```

## Otimizações

• **Formato WEBP:** Todas as imagens convertidas para melhor compressão.\
• **CDN jsDelivr:** Entrega rápida através de rede global de conteúdo.\
• **Estrutura organizada:** Facilita manutenção e localização de arquivos.\
• **Categorização clara:** Separação lógica entre assets, scripts e styles.

## Notas de Manutenção

• Novos estilos CSS são criados apenas quando necessário.\
• Scripts na pasta `vendor` raramente precisam de atualizações.\
• Assets são adicionados conforme necessidade de novos conteúdos.\
• Sempre testar em ambiente de desenvolvimento antes de aplicar em produção.

**Criado por frozelogic**