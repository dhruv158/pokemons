import React from 'react';

const PokemonCard = (props) => {
  console.log(props.id);
  return (
    <div>
      <h3>{props.name}</h3>
<img src={`https://pokeres.bastionbot.org/images/pokemon/${props.id}.jpg`}/>
    </div>
  );
};

export default PokemonCard;