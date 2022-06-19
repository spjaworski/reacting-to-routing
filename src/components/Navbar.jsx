import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return(
        <div>
            {/* <Link to="/">Go Home</Link>
            <Link to="/pages/Films">View Films</Link> */}
          
                <span className='d-flex justify-content-center mt-5 mb-5'>

                    <NavLink to='/' style={{padding: '3px', marginLeft: '.5rem'}} className='btn btn-primary'>
                    Go Home
                    </NavLink>
                    <NavLink to='/Films' style={{padding: '3px', marginLeft: '.5rem'}} className='btn btn-primary'>
                    View Films
                    </NavLink>
                    <NavLink to='/People' style={{padding: '3px', marginLeft: '.5rem'}} className='btn btn-primary'>
                    View People
                    </NavLink>

                </span>

        </div>
        );
}

export default NavBar;