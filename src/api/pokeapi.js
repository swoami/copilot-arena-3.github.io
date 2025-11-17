const API_BASE = 'https://pokeapi.co/api/v2/pokemon';

// Simple in-memory caches
const listCache = new Map(); // key: `${limit}:${offset}` -> data
const detailCache = new Map(); // key: name -> data

export async function fetchPokemonList(limit = 50, offset = 0) {
  const key = `${limit}:${offset}`;
  if (listCache.has(key)) return listCache.get(key);
  const res = await fetch(`${API_BASE}?limit=${limit}&offset=${offset}`);
  if (!res.ok) throw new Error('Failed to load Pokémon list');
  const data = await res.json();
  listCache.set(key, data);
  return data;
}

export async function fetchPokemonByName(name) {
  const key = name.toLowerCase();
  if (detailCache.has(key)) return detailCache.get(key);
  const res = await fetch(`${API_BASE}/${key}`);
  if (!res.ok) throw new Error('Pokémon not found');
  const data = await res.json();
  detailCache.set(key, data);
  return data;
}
