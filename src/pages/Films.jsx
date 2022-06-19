import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Films = () => {

    const [films, setFilms] = useState([]);

useEffect(() => {
    (async () => {
        const response = await fetch('https://ghibliapi.herokuapp.com/films');
        const allFilms = await response.json();
        setFilms(allFilms)
        console.log(allFilms);
    })();
}, []);

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6 text">
                    <h1  className="text-center">Films</h1>
                    <span className={'d-flex justify-content-center'}>
                    <Link to='/' style={{padding: '3px'}} className='btn btn-primary'>
                    Return Home
                    </Link>
                    </span>
                </div>
            </section>
            <div>
              {films.map(film => (
                        <div key ={`film-card-${film.id}`}>
                            <div style={{width: "1300px"}} className="card shadow my-2">
                                <div className='card-body'>
                                    <h1 className='card-title'>{film.title}</h1>
                                    <h6 className='card-first-title text-muted'>Original Title: {film.original_title_romanised}</h6>
                                    <p className='card-desc'>{film.description}</p>
                                    <Link to={`/films/${film.id}`} className="btn btn-outline-primary">
                                        Full Details
                                    </Link>
                                    {/* <img className='banner' src={film.movie_banner} alt= 'Movie Banner'></img> */}
                                </div>
                            </div>
                        </div>
                            

                    ))}
            </div>
            {/* <div style={{width: '120px'}} className="justify-content-center"></div> */}
        </main>
    );
};

export default Films;