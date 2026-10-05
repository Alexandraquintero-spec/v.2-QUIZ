import React, { useState } from 'react';

// Definimos los tipos de datos para la película
interface Movie {
  title: string;
  director: string;
  year: number | '';
  genre: string;
}

const MovieForm: React.FC = () => {
  // Estado para almacenar los datos del formulario
  const [movie, setMovie] = useState<Movie>({
    title: '',
    director: '',
    year: '',
    genre: ''
  });

  // Manejador para los cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMovie(prevState => ({
      ...prevState,
      [name]: name === 'year' ? Number(value) : value
    }));
  };

  // Manejador para enviar el formulario
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Película registrada:', movie);
    alert(`¡La película "${movie.title}" se agregó con éxito! Revisa la consola.`);
    
    // Limpiar el formulario después de enviar
    setMovie({ title: '', director: '', year: '', genre: '' });
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#2d2d2d', color: 'white' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Agregar Película</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={movie.title}
            onChange={handleChange}
            required
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #555' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="director">Director:</label>
          <input
            type="text"
            id="director"
            name="director"
            value={movie.director}
            onChange={handleChange}
            required
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #555' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="year">Año de lanzamiento:</label>
          <input
            type="number"
            id="year"
            name="year"
            value={movie.year}
            onChange={handleChange}
            min="1888"
            max={new Date().getFullYear()}
            required
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #555' }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <label htmlFor="genre">Género:</label>
          <select
            id="genre"
            name="genre"
            value={movie.genre}
            onChange={handleChange}
            required
            style={{ padding: '8px', borderRadius: '4px', border: '1px solid #555' }}
          >
            <option value="">Selecciona un género...</option>
            <option value="Acción">Acción</option>
            <option value="Ciencia Ficción">Ciencia Ficción</option>
            <option value="Comedia">Comedia</option>
            <option value="Drama">Drama</option>
            <option value="Terror">Terror</option>
          </select>
        </div>

        <button 
          type="submit" 
          style={{ 
            padding: '10px', 
            marginTop: '10px', 
            backgroundColor: '#0e639c', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Guardar Película
        </button>
      </form>
    </div>
  );
};

export default MovieForm;