import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import PokemonList from "./components/PokemonList.jsx";
import PokemonDetail from "./components/PokemonDetail.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <Link to="/" className="logo">
          <span role="img" aria-label="Pokeball" className="logo-ball">🔴</span> PokéPlayground
        </Link>
        <nav className="main-nav">
          <Link to="/" className="nav-link">Home</Link>
        </nav>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<PokemonList />}></Route>
          <Route path="/pokemon/:name" element={<PokemonDetail />}></Route>
        </Routes>
      </main>
      <footer className="app-footer">Data from <a href="https://pokeapi.co/" target="_blank" rel="noreferrer">PokeAPI</a></footer>
    </div>
  );
}
