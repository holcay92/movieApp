import {useState, useEffect} from 'react';
import MovieCard from './MovieCard';

import './App.css';
import SearchIcon from './search.svg';

const API_URL = 'http://www.omdbapi.com?apikey=2d451bba';

/*const movie ={
    "Title": "Superman, Spiderman or Batman",
    "Year": "2011",
    "imdbID": "tt2084949",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
}*/
const App =() => {

    const [movies, setMovies] = useState([]);
    const[searchTerm, setSearchTerm] = useState('');

    const searchMovies =  async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Superman');
    }, []);

    return(
        <div className='app'>
            <h1>MovieLand</h1>  
            <div className='search'>
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) =>setSearchTerm(e.target.value)}
                />
                 <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
//if else structure. if length is bigger than zero it iterates every movie.                
                movies?.length > 0 
                ?
                (
                    <div className='container'>
                        {movies.map((movie) => (
                        <MovieCard movie={movie}/>
                        ))}
                    </div>
                ) :
                (
                    <div className='empty'>
                        <h2>No Movies Found</h2>
                    </div>
                )
            }
            
            
        </div>
    );
}
export default App;