import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPokemonByName } from "../api/pokeapi.js";
import PokemonCard from "./PokemonCard.jsx";

export default function PokemonDetail() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let active = true;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchPokemonByName(name);
        if (active) setPokemon(data);
      } catch (e) {
        if (active) setError(e.message);
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => { active = false; };
  }, [name]);

  if (loading) return <div className="loader">Loading {name}...</div>;
  if (error) return <div className="error-msg">{error}</div>;
  if (!pokemon) return null;

  const sprite = pokemon.sprites.other?.['official-artwork']?.front_default || pokemon.sprites.front_default;
  const types = pokemon.types.map(t => t.type.name);
  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← Back to list</Link>
      <h1 className="page-title capitalized">{pokemon.name}</h1>
      <div className="detail-layout">
        <PokemonCard name={pokemon.name} sprite={sprite} types={types} big link={null} />
        <section className="stats-section">
          <h2>Stats</h2>
          <ul className="stats-list">
            {pokemon.stats.map(s => (
              <li key={s.stat.name} className="stat-item">
                <span className="stat-name">{s.stat.name}</span>
                <div className="stat-bar-wrapper">
                  <div className="stat-bar" style={{ width: Math.min(100, s.base_stat) + '%' }}></div>
                </div>
                <span className="stat-value">{s.base_stat}</span>
              </li>
            ))}
          </ul>
          <h2>Abilities</h2>
          <ul className="abilities-list">
            {pokemon.abilities.map(a => (
              <li key={a.ability.name}>{a.ability.name}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}