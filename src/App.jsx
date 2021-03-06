import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Films from './pages/Films';
import People from './pages/People';
import Navbar from './components/Navbar';
import FilmDetails from './pages/FilmDetails';
import PeopleDetails from './pages/PeopleDetails';
import Locations from './pages/Locations';
import LocationDetails from './pages/LocationDetails';


const App = () => {
    return(
        <div>
        
            <BrowserRouter>
            <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/films" element={<Films />} />
                    <Route path="/people" element={<People />} />
                    <Route path="/films/:id" element={<FilmDetails />} />
                    <Route path="/people/:id" element={<PeopleDetails />} />
                    <Route path="/locations" element={<Locations />} />
                    <Route path="/locations/:id" element={<LocationDetails />} />
                    <Route path="*" element={<h1>Error: 404 Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;