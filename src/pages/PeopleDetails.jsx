import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


const PeopleDetails = () => {

    const { id } = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://ghibliapi.herokuapp.com/people/${id}`);
            const details = await response.json();
            setDetails(details)
            console.log(details);
        })();
    }, [id]);

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <h1  className="text-center">{details.name}</h1>
                   {/* <span className='d-flex justify-content-center'>
                   <Link to='../Films' style={{padding: '3px', marginLeft: '.5rem'}} className='btn btn-primary'>Back</Link>
                    <Link to='/' style={{padding: '3px', marginLeft: '.5rem'}} className='btn btn-primary'>
                    Return Home
                    </Link>
                   </span> */}
                   
                        <div>
                        
                            <div className="card shadow my-2">
                                <div className='card-body'>
                                    <h1 className='card-id'>id: {details.id}</h1>
                            
                                 
                                    <h1 className='card-age'>Age: {details.age}</h1>
                               
                                  
                                    <h1 className='card-gender'>Gender: {details.gender} </h1>

                                    <h1 className='card-eye'>Eye Color: {details.eye_color} </h1>

                                    <h1 className='card-hair'>Hair Color: {details.hair_color} </h1>
                              
                                
                                 </div>
                                    
                                </div>
                            </div>
                        </div>
                            

                    
                  
            
            </section>
        </main>
    );
};

export default PeopleDetails;




// import { Link } from 'react-router-dom';

// const PeopleDetails = () => {
//     return (
//         <main className="container">
//             <section className="row justify-content-center">
//                 <div className="col-md-6">
//                     <h1  className="text-center">People Details Page</h1>
//                     <Link to='/' style={{padding: '3px'}} className='btn btn-primary'>
//                     Return Home
//                     </Link>
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default PeopleDetails;