import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import Films from './Films';

const FilmDetails = () => {

    const { id } = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://ghibliapi.herokuapp.com/films/${id}`);
            const details = await response.json();
            setDetails(details)
            console.log(details);
        })();
    }, [id]);

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <h1  className="text-center">{details.title}</h1>
                    <span className='d-flex justify-content-center mt-5 mb-5'>
                    <Link to='/Films' className='btn btn-primary'>
                    Go Back
                    </Link>
                    </span>
                   {/* <span className='d-flex justify-content-center'>
                   <Link to='../Films' style={{padding: '3px', marginLeft: '.5rem'}} className='btn btn-primary'>Back</Link>
                    <Link to='/' style={{padding: '3px', marginLeft: '.5rem'}} className='btn btn-primary'>
                    Return Home
                    </Link>
                   </span> */}
                   
                        <div>
                        
                            <div className="card shadow my-2" style={{width: '700px'}} >
                                <div className='card-body'>
                                    
                            
                                 
                                    <h1 className='card-first-title'>Original title: {details.original_title}</h1>
                               
                                  
                                    <h1 className='card-first-title-roman'>Original title romanised: {details.original_title_romanised}</h1>
                              
                                
                                                           
                                    <h1 className='card-description'>Description: {details.description}</h1>
                               
                               
                                    <h1 className='card-director'>Directed by: {details.director}</h1>
                             
                              
                                    <h1 className='card-producer'>Produced by: {details.producer}</h1>
                               
                                    <h1 className='card-release-date'>Year of release: {details.release_date}</h1>
                             
                                    <h1 className='card-time'>Running time: {details.running_time} minutes</h1>
                              
                                    <h1 className='card-rt'>Rotten Tomatoes score: {details.rt_score}</h1>

                                    <h1 className='card-id'>id: {details.id}</h1>
                                
                                 </div>
                                    
                                </div>

                                <div className='card-body'>   
                                    <h1 className='card-image'><img className={'d-flex justify-content-center'} src={details.image} alt= 'Movie Image'></img></h1>
                                </div>
                                
                            </div>
                        </div>
                            

                    
                  
            
            </section>
        </main>
    );
};

export default FilmDetails;

// style={{width: "1300px"}}