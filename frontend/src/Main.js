import { Route, Routes } from 'react-router-dom';


import Home from './pages/home.js';
import About from './pages/about.js';
import Chess from './pages/chess_page.js';
import Space from './pages/space.js';

const Main = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/chess' element={<Chess/>} />
            <Route path='/space' element={<Space/>} />
        </Routes>
    );
}


export default Main;