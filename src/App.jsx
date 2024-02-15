import { useState, useEffect } from 'react';
import './App.css';
import Banner from './components/Banner';
import ErrorBoundary from './components/ErrorBoundary';
import Card from './components/Card';
import HelpPortal from './components/HelpPortal';
import pokeball from './assets/pokeball.svg';

export default function App() {
  const [pokemon, setPokemon] = useState([]);
  const [ballIsThrown, setBallIsThrown] = useState(false);
  const randomPokemon = Math.floor(Math.random() * pokemon.length);

  useEffect(() => {
    const getPokemon = async () => {
      const fetchData = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=20');
      const json = await fetchData.json();
      const response = json.results;
      const array = await Promise.all(
        response.map(async (_x) => {
          const a = await fetch(_x.url);
          return a.json();
        })
      );
      setPokemon(array);
    }
    try {
      getPokemon();
    } catch (error) {
      console.error;
    }
  }, []);

  if (!pokemon.length) {
    return (
      <div  className="min-vh-100 tc pa4">
        <Banner />
        <h1 className="f2">Loading</h1>
      </div>
    );
  } else if (pokemon.length && !ballIsThrown) {
    return (
      <>
        <HelpPortal />
        <div className="min-vh-100 tc pa4">
          <Banner />
          <div className="nt6-l nt5-ns nt4 w-34-l w-50-ns w-75 center">
            <input type="image" onClick={ () => { setBallIsThrown(true); } }
                   src={pokeball} className="logo mb0" alt="spinning pokeball" />
          </div>
        </div>
      </>
    );
  } else if (pokemon.length && ballIsThrown) {
    return (
      <>
        <button className="pa2 f6 grow no-underline br-pill ba bw1 ph3 pv2 mb2 dib"
                onClick={ () => { setBallIsThrown(false); } }>Reset</button>
        <div className="min-vh-100 tc pa4">
          <Banner />
          <ErrorBoundary fallback={<h2>Oooops. That is not good.</h2>}>
            <div className="nt6-l nt5-ns nt4">
              <Card pokemon={ pokemon[randomPokemon] } />
            </div>
          </ErrorBoundary>
        </div>
      </>
    );
  }
}
