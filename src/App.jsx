import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Card from './components/Card';
import './styles/App.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character')
      .then((response) => setCharacters(response.data.results.slice(0, 6)))
      .catch((error) => console.error('Error al obtener la API:', error));
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="main">
        <h2>Personajes</h2>
        <div className="grid">
          {characters.length > 0 ? (
            characters.map((character) => (
              <Card
                key={character.id}
                title={character.name}
                content={`Estado: ${character.status}`}
                image={character.image}
              />
            ))
          ) : (
            <p>Cargando personajes...</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;