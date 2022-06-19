import React, {useState, useEffect } from 'react';

const FilmData = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://ghibliapi.herokuapp.com/films');
            const allFilms = await response.json();
            setFilms(allFilms)
            console.log(allFilms);
        })();
    }, []);
    

    <div>
              {films.map(film => (
                        <div key ={`film-card-${film.id}`}>
                            <div style={{width: "1300px"}} className="card shadow my-2">
                                <div className='card-body'>
                                    <h1 className='card-title'>{film.title}</h1>
                                    <h6 className='card-first-title text-muted'>Original Title: {film.original_title_romanised}</h6>
                                    <p className='card-desc'>{film.description}</p>
                                    <img className='banner' src={film.movie_banner} alt= 'Movie Banner'></img>
                                </div>
                            </div>
                        </div>
                            

                    ))}
            </div>
}

export default FilmData;