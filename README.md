# 🎮 Pokédex React + Vite

Pokédex interativa desenvolvida com **React + Vite** para a Atividade 03 da disciplina de Desenvolvimento e Integração de Aplicações Web.

A aplicação exibe os 151 Pokémon do arquivo `pokedex-data.json`, permite pesquisar por nome ou ID, filtrar por tipo, ver os detalhes e atributos de cada Pokémon e consultar os treinadores com seus respectivos Pokémon.

## ✨ Funcionalidades

- 🐾 **Listagem** de todos os Pokémon do arquivo de dados, em cards com ID, nome, tipos e os seis atributos (HP, Ataque, Defesa, Ataque Especial, Defesa Especial e Velocidade).
- 🔎 **Pesquisa** por nome (ex.: `Bulba`) ou por ID (ex.: `25` ou `#025`), atualizando a lista enquanto o usuário digita.
- 🧬 **Filtro por tipo** com botões gerados a partir dos tipos presentes no `pokedex-data.json`, cada um com a cor do tipo.
- 📄 **Detalhes do Pokémon** em um modal com imagem, tipos e barras de progresso para cada atributo, além do total. Fecha no botão ✕, clicando fora ou com a tecla `Esc`.
- 🧑‍🚀 **Treinadores**: aba com cada treinador, sua quantidade de insígnias e os Pokémon relacionados. Clicar em um Pokémon do treinador abre os detalhes dele.
- ⚠️ **Nenhum resultado**: mensagem própria quando a pesquisa/filtro não encontra Pokémon, com botão para limpar os filtros.
- 🌙 **Dark mode**: botão no cabeçalho alterna entre tema claro e escuro. A escolha fica salva no navegador e, no primeiro acesso, segue a preferência do sistema.
- 📱 **Responsividade avançada** com layouts específicos:
  - **Desktop** (acima de 1024px): grade com várias colunas de Pokémon e 3 colunas de treinadores;
  - **Tablet** (601px a 1024px): 3 colunas de Pokémon e 2 de treinadores;
  - **Smartphone** (até 600px): 2 colunas de Pokémon, treinadores em coluna única, abas ocupando a largura toda e detalhes abrindo como painel inferior.

## 📦 Instalação

Pré-requisito: [Node.js](https://nodejs.org/) 20.19+ (ou 22.12+).

```bash
npm install
```

## ▶️ Execução

```bash
npm run dev
```

Depois, abra no navegador o endereço mostrado no terminal, por padrão:

```
http://localhost:5173
```

Outros scripts:

```bash
npm run build     # gera a versão de produção em dist/
npm run preview   # serve a versão de produção localmente
```

## 📁 Dados

Os dados da aplicação estão em [`src/data/pokedex-data.json`](src/data/pokedex-data.json), o arquivo fornecido na atividade. Ele contém:

- `types`: tipos de Pokémon;
- `pokemon`: os Pokémon com `id`, `name`, `stats` e `types`;
- `trainers`: os treinadores com `name`, `badges` e `pokemonIds` (relação com os Pokémon).

O JSON é importado diretamente no `App.jsx`, sem banco de dados.

## 🖼️ Imagens (fonte externa)

As imagens dos Pokémon são as artes oficiais do repositório público de sprites da **PokéAPI**:

```
https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/{id}.png
```

A URL é montada a partir do ID do Pokémon que vem do `pokedex-data.json`. Se a imagem não carregar (por exemplo, sem internet), é exibida uma Pokébola no lugar e a aplicação continua funcionando normalmente com os dados locais.

## 🧩 Organização do projeto

```text
pokedex-react/
├── public/
│   └── favicon.svg              # Pokébola (favicon e imagem reserva)
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Cabeçalho, navegação Pokédex/Treinadores e botão de tema
│   │   ├── SearchBar.jsx        # Campo de pesquisa por nome ou ID
│   │   ├── TypeFilter.jsx       # Botões de filtro por tipo
│   │   ├── PokemonList.jsx      # Grade de cards e estado "nenhum encontrado"
│   │   ├── PokemonCard.jsx      # Card de um Pokémon
│   │   ├── PokemonDetails.jsx   # Modal de detalhes
│   │   ├── StatBar.jsx          # Barra de progresso de um atributo
│   │   ├── TypeBadge.jsx        # Etiqueta colorida de tipo
│   │   ├── PokemonImage.jsx     # Imagem do Pokémon com fallback
│   │   ├── TrainerList.jsx      # Lista de treinadores
│   │   └── TrainerCard.jsx      # Card de um treinador e seus Pokémon
│   ├── css/                     # Estilos de cada componente e do App
│   ├── data/
│   │   └── pokedex-data.json    # Dados fornecidos na atividade
│   ├── hooks/
│   │   └── useTheme.js          # Hook do tema claro/escuro
│   ├── utils/
│   │   └── pokemon.js           # Cores dos tipos, lista de atributos e helpers
│   ├── App.jsx                  # Estados (aba, pesquisa, tipo, Pokémon selecionado) e filtragem
│   ├── main.jsx                 # Ponto de entrada do React
│   └── index.css                # Estilos globais e variáveis de tema
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ⚛️ Conceitos de React utilizados

- **Componentes funcionais** e **props** para passar dados e callbacks entre os componentes.
- **`useState`** para a aba ativa, o texto da pesquisa, o tipo selecionado e o Pokémon aberto no modal.
- **`useMemo`** para o estado derivado da lista filtrada e dos tipos disponíveis.
- **`useEffect`** no modal de detalhes para fechar com `Esc` e travar a rolagem da página, e no tema para aplicá-lo e salvá-lo.
- **Hook customizado** `useTheme` para o dark mode.
- **Renderização de listas** com `map()` (cards, filtros, atributos, treinadores).
- **Eventos** de `onChange` (pesquisa) e `onClick` (filtros, cards, abas, modal).

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [PokéAPI sprites](https://github.com/PokeAPI/sprites) (imagens)
