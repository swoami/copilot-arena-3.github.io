import React from "react";
import { Link } from "react-router-dom";

export default function PokemonCard({ name, sprite, types, link = `/pokemon/${name}`, big = false }) {
  const content = (
    <div className={`pokemon-card ${big ? 'big' : ''}`}> 
      {sprite && <img src={sprite} alt={name + ' official artwork'} loading="lazy" className="poke-img" />}
      <h3 className="poke-title capitalized">{name}</h3>
      <div className="types">
        {types.map(t => (
          <span key={t} className={`type-pill type-${t}`}>{t}</span>
        ))}
      </div>
    </div>
  );
  if (!link) return content;
  return <Link to={link} className="card-link" aria-label={`Open details for ${name}`}>{content}</Link>;
}