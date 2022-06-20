import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import Films from './Films';

const LocationsDetails = () => {

    const { id } = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://ghibliapi.herokuapp.com/locations/${id}`);
            const details = await response.json();
            setDetails(details)
            console.log(details);
        })();
    }, [id]);

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">

                <span className='d-flex justify-content-center mt-5 mb-5'>
                    <Link to='/Locations' className='btn btn-primary'>
                    Go Back
                    </Link>
                    </span>

                    <h1  className="text-center mb-5">{details.name}</h1>
                    
                   {/* <span className='d-flex justify-content-center'>
                   <Link to='../Films' style={{padding: '3px', marginLeft: '.5rem'}} className='btn btn-primary'>Back</Link>
                    <Link to='/' style={{padding: '3px', marginLeft: '.5rem'}} className='btn btn-primary'>
                    Return Home
                    </Link>
                   </span> */}
                   
                        <div>
                        
                            <div className="card shadow my-2">
                                <div className='card-body'>
                                    
                            
                                <h1 className='card-climate'>Climate: {details.climate}</h1>
                               
                                  
                                <h1 className='card-terrain'>Terrain: {details.terrain}</h1>

                                <h1 className='card-url'>Appears in: {details.url}</h1>

                                <h1 className='card-id'>id: {details.id}</h1>
                              
                                                            
                                 </div>
                                    
                                </div>

                            </div>
                        </div>
                            

                    
                  
            
            </section>
        </main>
    );
};

export default LocationsDetails;

// style={{width: "1300px"}}