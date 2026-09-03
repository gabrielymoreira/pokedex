# Pokédex 

Uma Pokédex interativa e dinâmica desenvolvida com HTML, CSS e JavaScript puro. Este projeto consome a [PokéAPI](https://pokeapi.co/) para listar os Pokémon e exibir suas principais informações em uma interface visualmente agradável.

## Funcionalidades

- **Listagem Completa**: Carrega e exibe até 1025 Pokémon diferentes, iterando sobre a API para buscar cada um.
- **Cores Dinâmicas**: O fundo de cada card de Pokémon adapta-se automaticamente à sua tipagem principal (ex: cards laranjas para tipo Fogo, azuis para tipo Água, verdes para Planta).
- **Animações Interativas**: Efeitos de *hover* (transições suaves) nos cards, aumentando sutilmente a imagem e os textos para melhor feedback visual, além de inverter as cores das tags de tipo.
- **Layout Responsivo**: Utiliza CSS Flexbox para alinhar e distribuir os cards de forma fluida por toda a tela.

## Tecnologias Utilizadas

- **HTML5**: Estruturação do documento e container principal.
- **CSS3**: Estilização customizada (incluindo fonte 'Century Gothic'), layout em Flexbox, sombras (`box-shadow`), e transições de escala e cor.
- **JavaScript (ES6+)**: Consumo da API REST via `fetch` com sintaxe moderna (`async/await`) e manipulação direta do DOM (`document.createElement`) para construir os cards dinamicamente.
- **[PokéAPI](https://pokeapi.co/)**: API pública utilizada para fornecer as sprites, nomes, IDs e tipagens dos Pokémon.

## Estrutura do Projeto

- `index.html`: Arquivo principal da aplicação, contendo a estrutura base e a importação dos scripts e estilos.
- `pokemon.css`: Folha de estilos, definindo o background global, o grid flexível dos cards e os efeitos de hover.
- `pokemon.js`: Lógica principal da aplicação. Responsável pelo loop de requisições à API e pela lógica condicional das cores baseadas na tipagem.

## Acesse o projeto: 
[Clique aqui para visualizar](https://gabrielymoreira.github.io/pokedex/)
