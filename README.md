## PokéPlayground (React + Vite)

Child‑friendly Pokémon explorer built with React + Vite using the public [PokeAPI](https://pokeapi.co/). Browse a growing list of Pokémon, search by name, and open a colorful detail page with stats, types and abilities.

### Wymagania
- Node.js (>= 18)
- npm

### Instalacja

```bash
npm install
```

### Tryb deweloperski

```bash
npm run dev
```
Domyślnie aplikacja będzie dostępna pod adresem (Vite poda dokładny port): `http://localhost:5173`.

### Budowanie produkcyjne

```bash
npm run build
```
Wynik pojawi się w katalogu `dist/`.

### Podgląd buildu

```bash
npm run preview
```

### Struktura
```
index.html
src/
	App.jsx
	main.jsx
	styles.css
public/ (opcjonalne zasoby statyczne)
vite.config.js
```

### Funkcje
- Lista Pokémon (strona główna) z przyciskiem "Load More".
- Wyszukiwanie po nazwie (pikachu, charizard, itp.).
- Strona szczegółów z obrazkiem, typami, statystykami i zdolnościami.
- Proste cachowanie zapytań w pamięci.
- Kolorowy, przyjazny dla dzieci interfejs.

### Dalsze kroki / Pomysły
- Dodaj paginację lub infinite scroll zamiast przycisku.
- Dodaj filtrowanie po typach.
- Zaimplementuj testy (Jest + React Testing Library).
- Dodaj ESLint / Prettier.
- Dodaj deployment do GitHub Pages lub Netlify.
- Zapisywanie ulubionych Pokémonów w localStorage.

### API Zastosowanie
- Lista: `GET https://pokeapi.co/api/v2/pokemon?limit=50&offset=0`
- Detale: `GET https://pokeapi.co/api/v2/pokemon/{name}` np. `/pokemon/pikachu`

### Skrypty
- `npm run dev` – tryb deweloperski.
- `npm run build` – produkcyjny build do `dist/`.
- `npm run preview` – lokalny serwer podglądu buildu.

---
Utworzono automatycznie przez GitHub Copilot (GPT-5).
