import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const People = () => {

    const [people, setPeople] = useState([]);

useEffect(() => {
    (async () => {
        const response = await fetch('https://ghibliapi.herokuapp.com/people');
        const allPeople = await response.json();
        setPeople(allPeople)
        console.log(allPeople);
    })();
}, []);

    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6 text">
                    <h1  className="text-center">Films</h1>
                    <span className={'d-flex justify-content-center'}>
                    {/* <Link to='/' style={{padding: '3px'}} className='btn btn-primary'>
                    Return Home
                    </Link> */}
                    </span>
                </div>
            </section>
            <div>
              {people.map(person => (
                        <div key ={`person-card-${person.id}`}>
                            <div style={{width: "1300px"}} className="card shadow my-2">
                                <div className='card-body'>
                                    <h1 className='card-name'>Name: {person.name} </h1>
                                    <h1 className='card-age'>Age: {person.age} </h1>
                                    <Link to={`/people/${person.id}`} className="btn btn-outline-primary">
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

export default People;








// import { Link } from 'react-router-dom';

// const People = () => {
//     return (
//         <main className="container">
//             <section className="row justify-content-center">
//                 <div className="col-md-6">
//                     <h1  className="text-center">People Page</h1>
//                     {/* <Link to='/' style={{padding: '3px'}} className='btn btn-primary'>
//                     Return Home
//                     </Link> */}
//                 </div>
//             </section>
//         </main>
//     );
// };

// export default People;