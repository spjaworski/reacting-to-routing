import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <h1  className="text-center">Home Page</h1>
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
                    <p className='text-center'>Studio Ghibli</p>
                </div>
            </section>
        </main>
    );
};

export default Home;