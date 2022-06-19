import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Films from './pages/Films';
import People from './pages/People';
import Species from './pages/Species';
import FilmDetails from './pages/FilmDetails';
import PeopleDetails from './pages/PeopleDetails';
import SpeciesDetails from './pages/SpeciesDetails';

const App = () => {
    return(
        <div>
        
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/films" element={<Films />} />
                    <Route path="/people" element={<People />} />
                    <Route path="/species" element={<Species />} />
                    <Route path="/films/:id" element={<FilmDetails />} />
                    <Route path="/people/:PeopleDetails" element={<PeopleDetails />} />
                    <Route path="/species/:SpeciesDetails" element={<SpeciesDetails />} />
                    <Route path="*" element={<h1>Error: 404 Not Found</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;