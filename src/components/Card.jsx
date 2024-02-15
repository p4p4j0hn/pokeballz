import './Card.css';

export default function Card({ pokemon }) {
  return(
    <div className='tc dib br3 pa3 ma2 bw2'>
      <img className='cardImage'
           alt={`${pokemon.name}, a pokemon`}
           src={pokemon.sprites.other.dream_world.front_default} />
      <div>
        <h2 className='name'>{pokemon.name}</h2>
      </div>
    </div>
  );
}
