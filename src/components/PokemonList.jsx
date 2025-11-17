import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchPokemonList, fetchPokemonByName } from "../api/pokeapi.js";
import SearchBar from "./SearchBar.jsx";
import PokemonCard from "./PokemonCard.jsx";

export default function PokemonList() {
  const [list, setList] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState(null);
  const [searchError, setSearchError] = useState(null);

  useEffect(() => {
    loadMore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function loadMore() {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPokemonList(50, offset);
      setList(prev => [...prev, ...data.results]);
      setOffset(o => o + 50);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleSearchChange(value) {
    setSearch(value);
    setSearchError(null);
    setSearchResult(null);
    if (!value) return; // cleared
    try {
      const data = await fetchPokemonByName(value.toLowerCase());
      setSearchResult(data);
    } catch (e) {
      setSearchError("No Pokémon found");
    }
  }

  return (
    <div className="pokemon-list-page">
      <h1 className="page-title">Explore Pokémon</h1>
      <p className="intro">Search your favourite friend or scroll to discover more!</p>
      <SearchBar value={search} onChange={handleSearchChange} placeholder="Type a name e.g. pikachu" />
      {search && (
        <div className="search-section">
          {searchResult && (
            <div className="search-result-wrapper">
              <PokemonCard
                name={searchResult.name}
                sprite={searchResult.sprites.other?.['official-artwork']?.front_default || searchResult.sprites.front_default}
                types={searchResult.types.map(t => t.type.name)}
                link={`/pokemon/${searchResult.name}`}
              />
            </div>
          )}
          {searchError && <div className="error-msg">{searchError}</div>}
        </div>
      )}
      {!search && (
        <div className="grid">
          {list.map(p => (
            <PokemonListItem key={p.name} name={p.name} url={p.url} />
          ))}
        </div>
      )}
      {!search && (
        <div className="load-more">
          <button disabled={loading} onClick={loadMore} className="load-btn">
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
      {error && <div className="error-msg">{error}</div>}
    </div>
  );
}

function PokemonListItem({ name }) {
  return (
    <Link to={`/pokemon/${name}`} className="list-card" aria-label={`View details for ${name}`}>
      <div className="list-card-inner">
        <span className="poke-name">{name}</span>
      </div>
    </Link>
  );
}