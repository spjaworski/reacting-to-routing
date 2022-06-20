import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const Locations = () => {

    const [locations, setLocations] = useState([]);

useEffect(() => {
    (async () => {
        const response = await fetch('https://ghibliapi.herokuapp.com/locations');
        const allLocations = await response.json();
        setLocations(allLocations)
        console.log(allLocations);
    })();
}, []);

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6 text">
                    <h1  className="text-center" >Locations</h1>
                    
                </div>
            </section>
           <span className='d-flex justify-content-center'>
            <div>
              {locations.map(location => (
                        <div key ={`location-card-${location.id}`}>
                            <div className="card shadow my-2">
                                <div className='card-body'>
                                    <h1 className='card-name text-center'>{location.name}</h1>
                                    {/* <p className='card-climate text-muted'>{location.climate}</p>
                                    <p className='card-terrain'>{location.terrain}</p> */}
                                    <span className={'d-flex justify-content-center'}>
                                    <Link to={`/Locations/${location.id}`} className="btn btn-outline-primary">
                                        Full Details
                                    </Link>
                                    </span>
                                    {/* <img className='banner' src={film.movie_banner} alt= 'Movie Banner'></img> */}
                                </div>
                            </div>
                        </div>
                            

                    ))}
            </div>
            </span>
            {/* <div style={{width: '120px'}} className="justify-content-center"></div> */}
        </main>
    );
};

export default Locations;