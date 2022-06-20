import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6 mb-5" style={{background: 'lightgrey'}}>
                    <h1  className="text-center">Studio Ghibli</h1>
                    {/* <Link to='/Films' style={{padding: '3px', marginLeft: '.5rem'}} className='btn btn-primary'>
                    Ghibli Films
                    </Link>
                    <Link to='/People' style={{padding: '3px', marginLeft: '.5rem'}} className='btn btn-primary'>
                    People of the Films
                    </Link>
                    <Link to='/Species' style={{padding: '3px', marginLeft: '.5rem'}} className='btn btn-primary'>
                    Species in the Films
                    </Link> */}
                    
                    {/* <span className='d-flex justify-content-center'>

                    <Link to='/' style={{padding: '3px', marginLeft: '.5rem'}} className='btn btn-primary'>
                    Go Home
                    </Link>
                    <Link to='/Films' style={{padding: '3px', marginLeft: '.5rem'}} className='btn btn-primary'>
                    View Films
                    </Link>
                    <Link to='/People' style={{padding: '3px', marginLeft: '.5rem'}} className='btn btn-primary'>
                    View People
                    </Link>
                   
                    </span> */}
                    <p className='text-center'>Home Page</p>
                </div>
                <div>   
                    <h1 className='card-image d-flex justify-content-center'><img  src={'https://upload.wikimedia.org/wikipedia/en/c/ca/Studio_Ghibli_logo.svg'} alt= 'Ghibli Image'></img></h1>
                </div>
                
                     
            </section>
            <p className='d-flex justify-content-center'>Questions, Concerns, Complaints?</p>
            <p className='d-flex justify-content-center'>Please contact: spjaworski@gmail.com</p>
        </main>
    );
};

export default Home;