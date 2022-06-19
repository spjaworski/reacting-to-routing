import { Link } from 'react-router-dom';

const Species = () => {
    return (
        <main className="container">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <h1  className="text-center">Species Page</h1>
                    <Link to='/' style={{padding: '3px'}} className='btn btn-primary'>
                    Return Home
                    </Link>
                </div>
            </section>
        </main>
    );
};

export default Species;