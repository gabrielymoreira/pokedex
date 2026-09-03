const container = document.querySelector('.pokemon');

const numeroPokemons = 1025;
const fetchPokemon = async(i) =>{
    for(let i=1; i<=numeroPokemons; i++){
        await getPokemon(i);
    }
};
      
const getPokemon = async(id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const resposta = await fetch(url);

    const informacoes = await resposta.json();
    criarCard(informacoes);
};

const criarCard = (pokemon) =>{
   const card = document.createElement('section');
   card.classList.add("card");

   const nome = document.createElement('h2');
   nome.textContent = pokemon.name;

   const num = document.createElement('h3');
   num.textContent = `#${pokemon.id}`;

    const imagem = document.createElement("img");
    imagem.src = pokemon.sprites.front_default;
    
    card.appendChild(num);
    card.appendChild(nome);

    if(pokemon.types[0].type.name == "poison"){
        card.style.backgroundColor =  "#8e51f0"
    }
    else if(pokemon.types[0].type.name == "bug"){
        card.style.backgroundColor =  "#99C232";
    }
    else if(pokemon.types[0].type.name == "dragon"){
        card.style.backgroundColor =  "#037CBE";
    }
    else if(pokemon.types[0].type.name == "electric"){
        card.style.backgroundColor =  "#F4D95A";
    }
    else if(pokemon.types[0].type.name == "fighting"){
        card.style.backgroundColor =  "#D5445A";
    }
    else if(pokemon.types[0].type.name == "fire"){
        card.style.backgroundColor =  "#FFA949";
    }
    else if(pokemon.types[0].type.name == "flying"){
        card.style.backgroundColor =  "#9EB6E5";
    }
    else if(pokemon.types[0].type.name == "grass"){
        card.style.backgroundColor =  "#58BD54";
    }
    else if(pokemon.types[0].type.name == "ground"){
        card.style.backgroundColor =  "#E17E50";
    }
    else if(pokemon.types[0].type.name == "ice"){
        card.style.backgroundColor =  "#77CDC2";
    }
    else if(pokemon.types[0].type.name == "psychic"){
        card.style.backgroundColor =  "#F78084";
    }
    else if(pokemon.types[0].type.name == "rock"){
        card.style.backgroundColor =  "#C9C28B";
    }
    else if(pokemon.types[0].type.name == "steel"){
        card.style.backgroundColor =  "#57959E";
    }
    else if(pokemon.types[0].type.name == "dark"){
        card.style.backgroundColor =  "#666C7C";
    }
    else if(pokemon.types[0].type.name == "water"){
        card.style.backgroundColor =  "#5292DA";
    }
    else if(pokemon.types[0].type.name == "normal"){
        card.style.backgroundColor =  "#A4A59E";
    }
    else if(pokemon.types[0].type.name == "fairy"){
        card.style.backgroundColor =  "#ECA4E8";
    }
    else if(pokemon.types[0].type.name == "ghost"){
        card.style.backgroundColor =  "#232377";
    };

    const tipagemAPI = pokemon.types;
    tipagemAPI.forEach(tipoRes => {
        const tipagem = document.createElement("h5");
        tipagem.classList.add("tipagempokemon");
        tipagem.textContent = tipoRes.type.name;
        
        card.appendChild(tipagem);
        
    });
   

    card.appendChild(imagem);
    container.appendChild(card);
};

fetchPokemon();