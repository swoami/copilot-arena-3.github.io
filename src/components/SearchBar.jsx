import React from "react";

export default function SearchBar({ value, onChange, placeholder }) {
  return (
    <div className="search-bar">
      <input
        className="search-input"
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e.target.value)}
        aria-label="Search Pokémon by name"
      />
      {value && (
        <button className="clear-btn" onClick={() => onChange("")} aria-label="Clear search">✕</button>
      )}
    </div>
  );
}