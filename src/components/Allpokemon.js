import react from 'react';
import {useState, useEffect} from 'react';
import {getPokemons} from '../services/pokemon';

import PokemonCard from '../components1/PokemonCard';


const Allpokemon = () => {
    const [pokemons, setPokemons] = useState([]);
    console.log(pokemons);

 useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data);
    });
  }, []);

  return (
    <div>
      <div>
        {Object.entries(pokemons)[3] &&
          Object.entries(pokemons)[3][1].map((pokemon, index) => {
            return <PokemonCard key={index} {...pokemon} id={index + 1}  />;
          })}
      </div>
    </div>
  );
};

export default Allpokemon;